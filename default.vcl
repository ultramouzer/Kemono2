vcl 4.1;

import std;
import directors;
import cookie;

backend kemono_node_1 {
  .host = "kemono";
  .port = "80";
  .max_connections = 3000;
  # .probe = {
  #   .request =
  #   "HEAD / HTTP/1.1"
  #   "Host: localhost"
  #   "Connection: close"
  #   "User-Agent: Varnish Health Probe";

  #   .interval  = 5s;
  #   .timeout   = 30s;
  #   .window    = 5;  # If "threshold" out of "window" are healthy, the backend is considered healthy
  #   .threshold = 3;
  # }

  .first_byte_timeout     = 300s;   # How long to wait before we receive a first byte from our backend?
  .connect_timeout        = 5s;     # How long to wait for a backend connection?
  .between_bytes_timeout  = 2s;     # How long to wait between bytes received from our backend?
}

acl purge {
  # ACL we'll use later to allow purges
  "localhost";
  "127.0.0.1";
  "::1";
}

sub vcl_init {
  new vdir = directors.round_robin();
  vdir.add_backend(kemono_node_1);
}

sub vcl_recv {
  set req.backend_hint = vdir.backend(); # send all traffic to the vdir director
  if (req.http.Host) {
   set req.http.Host = regsub(req.http.Host, ":[0-9]+", "");
  }

  unset req.http.proxy;
  set req.url = std.querysort(req.url);

  if (req.method == "PURGE") {
    if (!client.ip ~ purge) {
      return (synth(405, "This IP is not allowed to send PURGE requests."));
    }
    return (purge);
  }

  # Only deal with "normal" types
  if (req.method != "GET" &&
      req.method != "HEAD" &&
      req.method != "PUT" &&
      req.method != "POST" &&
      req.method != "TRACE" &&
      req.method != "OPTIONS" &&
      req.method != "PATCH" &&
      req.method != "DELETE") {
    /* Non-RFC2616 or CONNECT which is weird. */
    return (pipe);
  }
  if (req.method != "GET" && req.method != "HEAD") {
    return (pass);
  }

  if (req.url ~ "\#") { set req.url = regsub(req.url, "\#.*$", ""); }

  # Strip a trailing ? if it exists
  if (req.url ~ "\?$") {
    set req.url = regsub(req.url, "\?$", "");
  }

    if (req.url ~ "^/static/" || req.url ~ "^/js/") {
      unset req.http.Cookie;
      return (hash);
    }

    # HfM ttl0 uncachabel thumbs for now
    if (req.url ~ "^/thumbnail/" || req.url ~ "^/static/" || req.url ~ "^/requests/images/" || req.url ~ "^/js/" || req.url ~ "^/icons/") {
      unset req.http.Cookie;
      return (hash);
    }

    # HfM ttl0 uncachabel files
    if (req.url ~ "^/files/" || req.url ~ "^/attachments/" || req.url ~ "^/inline/") {
      unset req.http.Cookie;
      return (hash);
    }

    # pass
    if (req.url ~ "^/posts" || req.url ~ "^/requests" || req.url ~ "^/artists") {
      return (pass);
    }
    
    # cookie.parse(req.http.Cookie);
    # cookie.keep("layout");
    # if (!cookie.isset("layout")) {
    #   cookie.set("layout", "card");
    # } else {
    #    if (cookie.get("layout") !~ "(card|grid)") {
    #     cookie.set("layout", "card");
    #   }
    # }
    # set req.http.Cookie = cookie.get_string();
    
  # if (req.url ~ "/post/") { unset req.http.Cookie }
  
  set req.http.Surrogate-Capability = "key=ESI/1.0";

  if (req.http.Authorization) {
    return (pass);
  }

  return (hash);
}

sub vcl_pipe {
  if (req.http.upgrade) {
    set bereq.http.upgrade = req.http.upgrade;
  }
  return (pipe);
}

sub vcl_pass {
  # return (pass);
}

sub vcl_hash {
  hash_data(req.url);
  if (req.http.Cookie) {
    hash_data(req.http.Cookie);
  }
}

sub vcl_hit {
  if (obj.ttl >= 0s) {
    return (deliver);
  }

  if (std.healthy(req.backend_hint)) {
    if (obj.ttl + 10s > 0s) {
      return (deliver);
    }
  } else {
      if (obj.ttl + obj.grace > 0s) {
        return (deliver);
      }
  }
}

sub vcl_miss {
  return (fetch);
}

sub vcl_backend_response {
  if (beresp.http.Surrogate-Control ~ "ESI/1.0") {
    unset beresp.http.Surrogate-Control;
    set beresp.do_esi = true;
  }

  if (beresp.status == 301 || beresp.status == 302) {
    set beresp.http.Location = regsub(beresp.http.Location, ":[0-9]+", "");
  }

  if (beresp.status == 500 || beresp.status == 502 || beresp.status == 503 || beresp.status == 504) {
    return (abandon);
  }

  if (bereq.url ~ "^[^?]*\.(7z|avi|bmp|bz2|css|csv|doc|docx|eot|flac|flv|gif|gz|ico|jpeg|jpg|js|less|mka|mkv|mov|mp3|mp4|mpeg|mpg|odt|otf|ogg|ogm|opus|pdf|png|ppt|pptx|rar|rtf|svg|svgz|swf|tar|tbz|tgz|ttf|txt|txz|wav|webm|webp|woff|woff2|xls|xlsx|xml|xz|zip)(\?.*)?$") {
    unset beresp.http.set-cookie;
  }

  if (bereq.url ~ "^[^?]*\.(7z|avi|bz2|flac|flv|gz|mka|mkv|mov|mp3|mp4|mpeg|mpg|ogg|ogm|opus|rar|tar|tgz|tbz|txz|wav|webm|xz|zip)(\?.*)?$") {
    unset beresp.http.set-cookie;
    set beresp.do_stream = true;  # Check memory usage it'll grow in fetch_chunksize blocks (128k by default) if the backend doesn't send a Content-Length header, so only enable it for big objects
  }

  if (bereq.url ~ "^/static/"  || bereq.url ~ "^/js/") {
    unset beresp.http.set-cookie;
    return (deliver);
  }

  # HfM files
  if (bereq.url ~ "^/files/" || bereq.url ~ "^/attachments/" || bereq.url ~ "^/inline/" || bereq.url ~ "^/thumbnail/" || bereq.url ~ "^/requests/images/" || bereq.url ~ "^/icons/") {
    unset beresp.http.set-cookie;
    set beresp.uncacheable = true;
    set beresp.ttl = 0s;
    return (deliver);
  }

  if (beresp.ttl <= 0s || beresp.http.Set-Cookie || beresp.http.Vary == "*") {
    set beresp.ttl = 120s; # Important, you shouldn't rely on this, SET YOUR HEADERS in the backend
    set beresp.uncacheable = true;
    return (deliver);
  }

  
  set beresp.grace = 6h;
  return (deliver);
}

sub vcl_deliver {
  if (obj.hits > 0) { # Add debug header to see if it's a HIT/MISS and the number of hits, disable when not needed
    set resp.http.X-Cache = "HIT";
  } else {
    set resp.http.X-Cache = "MISS";
  }

  set resp.http.X-Cache-Hits = obj.hits;
  unset resp.http.X-Powered-By;
  
  if (req.url !~ "/files/" && req.url !~ "/attachments/" && req.url !~ "/inline/") {
    set resp.http.Cache-Control = "no-store, max-age=0";
  }

  unset resp.http.Server;
  unset resp.http.X-Drupal-Cache;
  unset resp.http.X-Varnish;
  unset resp.http.Via;
  unset resp.http.Link;
  unset resp.http.X-Generator;

  return (deliver);
}

sub vcl_purge {
  if (req.method == "PURGE") {
    set req.http.X-Purge = "Yes";
    return(restart);
  }
}

sub vcl_synth {
  if (resp.status == 720) {
    set resp.http.Location = resp.reason;
    set resp.status = 301;
    return (deliver);
  } elseif (resp.status == 721) {
    set resp.http.Location = resp.reason;
    set resp.status = 302;
    return (deliver);
  }

  return (deliver);
}

sub vcl_fini {
  # Called when VCL is discarded only after all requests have exited the VCL.
  # Typically used to clean up VMODs.

  return (ok);
}