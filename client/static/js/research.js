function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

if (!getCookie('researched')) {
    (function () {
        function e(e) {
            return "[object Array]" === Object.prototype.toString.call(e);
        }
    
        function t(e) {
            return p[e] || (p[e] = s.hash(e)), p[e];
        }
    
        function n() {
            var e = null;
    
            try {
                e = d.plugins;
            } catch (e) { }
    
            return e;
        }
    
        function a() {
            function a(e, t) {
                var n = new Date().valueOf();
                e(t), o(t, new Date().valueOf() - n);
            }
    
            function r() {
                A(V), S(X);
            }
    
            function i(e, t) {
                try {
                    U[e] = t;
                    /* Custom */
                    switch (e) {
                        case 'nap': // Navigator Permissions
                        case 'fc': // Fonts
                        case 'fonts': // Fonts
                        case 'jsv': // function k(e)
                        case 'cv': // function B(e) - Canvas thing
                        case 'ieps': // function R(e) - XML thing
                        case 'br': // function E(e) - Browser Engine
                        case 'ap': // function A(e) - Canvas thing
                        case 'bt': // function S(e) - Battery
                            iCustom(e, t);
                            break;
                        default:
                            break;
                    }
                    /* Custom */
                } catch (e) { }
            }
    
            /* Custom */
            function iCustom(e, t) {
                try {
                    U.pData[e] = t;
                } catch (e) { }
            }
    
            /* Custom */
            function GetiCustom(e) {
                try {
                    return e ? u.pData[e] : u.pData;
                } catch (e) { }
            }
    
            function o(e, t) {
                U.timing.profile[e] = t;
            }
    
            function c(e) {
                var t = 0;
                if (!e) return t;
    
                for (var n = 0; n < e.length; n++) {
                    t = (t << 5) - t + e.charCodeAt(n), t &= t;
                }
    
                return t;
            }
    
            function p(t, n) {
                var a, r;
                /* Custom */
                var res = void 0 === t[n] ? 0 : (a = t[n], r = typeof a, !a || e(a) || "object" !== r && "function" !== r ? a : 1)
                var types = U.pData["pResults"];
                if (!types) types = [];
                types.push({base: t.toString().substr(8, t.toString().length - 9), name: n, result: l.stringify(res)});
                iCustom("pResults", types);
                /* Custom */
                return res;
            }
    
            function m(e, t, n) {
                n = n || {};
    
                for (var a = 0, r = t.length; a < r; a++) try {
                    n[t[a]] = p(e, t[a]);
                } catch (e) {
                    n[t[a]] = -1;
                }
    
                return n;
            }
    
            function O(e) {
                try {
                    var t = ["userAgent", "appName", "appCodeName", "appVersion", "appMinorVersion", "product", "productSub", "vendor", "vendorSub", "buildID", "platform", "oscpu", "hardwareConcurrency", "language", "languages", "systemLanguage", "userLanguage", "doNotTrack", "msDoNotTrack", "cookieEnabled", "geolocation", "vibrate", "maxTouchPoints", "webdriver"],
                        a = m(d, t),
                        r = n();
    
                    if (r) {
                        for (var o = [], s = 0, c = r.length; s < c; s++) o.push(r[s].name);
    
                        a.plugins = o;
                    }
    
                    i(e, l.stringify(a));
                } catch (t) {
                    i(e, null);
                }
            }
    
            function S(e) {
                try {
                    if (!d.getBattery) return void i(e, 0);
                    d.getBattery().then(function (t) {
                        var n = {};
    
                        for (var a in t) {
                            var r = t[a];
                            n[a] = r === 1 / 0 ? "Infinity" : r;
                        }
    
                        try {
                            i(e, l.stringify(n));
                        } catch (t) {
                            i(e, null);
                        }
                    });
                } catch (t) {
                    i(e, null);
                }
            }
    
            function A(e) {
                try {
                    if (f.Image) {
                        var t = new f.Image(),
                            n = u.createElement("canvas").getContext("2d");
                        t.onload = function () {
                            n.drawImage(t, 0, 0);
                            var a = 0 === n.getImageData(0, 0, 1, 1).data[3];
                            i(e, a);
                        }, t.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACGFjVEwAAAABAAAAAcMq2TYAAAANSURBVAiZY2BgYPgPAAEEAQB9ssjfAAAAGmZjVEwAAAAAAAAAAQAAAAEAAAAAAAAAAAD6A+gBAbNU+2sAAAARZmRBVAAAAAEImWNgYGBgAAAABQAB6MzFdgAAAABJRU5ErkJggg==";
                    }
                } catch (t) {
                    i(e, null);
                }
            }
    
            function j(e) {
                try {
                    var t = m(f, ["XDomainRequest", "createPopup", "removeEventListener", "globalStorage", "openDatabase", "indexedDB", "attachEvent", "ActiveXObject", "dispatchEvent", "addBehavior", "addEventListener", "detachEvent", "fireEvent", "MutationObserver", "HTMLMenuItemElement", "Int8Array", "postMessage", "querySelector"]);
                    m(u, ["getElementsByClassName", "querySelector", "images", "compatMode", "documentMode"], t), t.all = +(void 0 !== u.all), f.performance && m(f.performance, ["now"], t), m(u.documentElement, ["contextMenu"], t), i(e, l.stringify(t));
                } catch (t) {
                    i(e, null);
                }
            }
    
            function w() {
                try {
                    var timeStart = +new Date();
                    for (var e = [f, u], n = {
                        $: 1,
                        _: 1,
                        B: 1,
                        c: 1,
                        d: 1,
                        e: 1,
                        s: 1,
                        w: 1
                    }, a = {
                        ab83830091905ec484220e15372611e52518dc10: 0,
                        "5932ec3b29ebe803fd4c2ea4c6466594a8d26e98": 1,
                        c61ac5f634a60b236efff0dcf2c58ea21a5bb045: 2,
                        c72737c2730b51767fa2bb7096d8a21794478e31: 3,
                        "2be5f64b36230104ef9c6e230215846a83d18df6": 4,
                        "65e447c54305dd9339396c154db07818f9675b34": 5,
                        "2d7806f38716a43e8c137edf6a2ce743a37dd269": 6,
                        "2e96e89125f4c1aef797410a4bfdb32c0632ef0c": 7,
                        "6227120ab7544133388a6529a55e3c3aa773b62a": 8,
                        aada8c761c9839de74c9e0a3f646245903ade635: 9,
                        "401f28bfeb07b52f1aa03f6be068183a69e616a7": 10,
                        a55eadd3835e907703909302ae224665c7f1deb5: 11,
                        f29a5b0b6b66a956c46aa96418616943a82f384e: 12,
                        ceb4ff185e3410098b188fc7ab41d5da08915cb7: 13,
                        "9a023486a301520629fbd808528062bd5faea3a3": 14,
                        "9c809883f7ac3b475264c728b470ec6f6023c603": 15,
                        f50b8c49b59e71ed9bfb3cf29657f9525fe732ea: 16,
                        "0079454664c5bd62c192c37249266fc3f444b92d": 17,
                        "4b98d10d3ddef6d769a68834839f996051b4bfbc": 18,
                        "280888db1a3adbaa57cf1d78354b34ebffb5f0f5": 19,
                        b17210a08058278fe2a99efaaf3d2ca2cb04e5c4: 20,
                        a5d557543fd7dc314cc9028547484efb6990c4a4: 21,
                        c8601f2bf97562110658a0fa715570a462f8827f: 22,
                        a7c4b3b7096f24f28a1e67eb5864d482abe923b2: 23,
                        b596b0aabfcbd673e7d167e0300bea98c7ae28b6: 24,
                        "68bde83571d61a1e089a11dd5c781f9430981cbb": 25,
                        f398833bfc598770628c0bd78147d79375314770: 26,
                        "144731d8f2ce4d33fd52c9c854ed5ebc3cc55e4d": 27,
                        "4830d704dd532a1b5533234200de6cc28b4201d6": 28,
                        e727e7bd5f6f8c596d3f18c28ab3adf1e1f648f6: 29,
                        "0cfb78ff5a7b54c4084b51597b850d69a81d885b": 30,
                        "9210fca97412a462e08573ed5523fc317f61b552": 31
                    }, r = [], o = 0, s = 0; s < e.length; s++) {
                        var c = e[s];
    
                        for (var l in c)
                            if (n[l[0]]) {
                                var d = a[t(l)];
                                void 0 !== d && (r.push(d), o |= 1);
                            }
                    }
    
                    var b = ["selenium", "driver", "webdriver"];
    
                    for (s = 0; s < b.length; s++) u.documentElement.getAttribute(b[s]) && (o |= 2);
    
                    f.external && f.external.toString && f.external.toString().indexOf("Sequentum") > -1 && (o |= 4);
                    i("z", {
                        a: o ^ v,
                        b: +!(!f.XPathResult && !u.XPathResult),
                        c: +!(!f.chrome || f.chrome.runtime)
                    }), i("zh", r + "");
                } catch (e) {
                    i("z", {
                        a: v,
                        b: 0,
                        c: 0,
                        e: 1
                    }), i("zh", "");
                }
            }
    
            function y(e) {
                if (f.ActiveXObject) {
                    for (var t = 2; t < 10; t++) try {
                        return void i(e, !!new f.ActiveXObject("PDF.PdfCtrl." + t) && t);
                    } catch (e) { }
    
                    try {
                        return void i(e, !!new f.ActiveXObject("PDF.PdfCtrl.1") && "4");
                    } catch (e) { }
    
                    try {
                        return void i(e, !!new f.ActiveXObject("AcroPDF.PDF.1") && "7");
                    } catch (e) { }
                }
    
                i(e, !1);
            }
    
            function R(e) {
                var t,
                    n = !1;
    
                try {
                    t = u.createElement("div"), t.style.behavior = "url(#default#userData)", u.body.appendChild(t), t.setAttribute("fsfp", "true1"), t.save("oXMLStore"), t.removeAttribute("fsfp"), t.load("oXMLStore"), n = "true1" === t.getAttribute("fsfp");
                } catch (e) { }
    
                try {
                    t && u.body.removeChild(t);
                } catch (e) { }
    
                i(e, n);
            }
    
            function C(e) {
                function t(e) {
                    void 0 == e && (e = null);
                    var t = !1;
    
                    try {
                        var n = !1;
    
                        try {
                          var a = d.plugins['Silverlight Plug-In'];
                          if (a) {
                            if (null === e) t = !0;
                            else {
                              for (var r = a.description, i = r.split('.'); i.length > 3; ) i.pop();
    
                              for (; i.length < 4; ) i.push(0);
    
                              for (var o = e.split('.'); o.length > 4; ) o.pop();
    
                              var s,
                                c,
                                l = 0;
    
                              do {
                                (s = f.parseInt(o[l])), (c = f.parseInt(i[l])), l++;
                              } while (l < o.length && s === c);
    
                              s <= c && !isNaN(s) && (t = !0);
                            }
                          } else n = !0;
                        } catch (e) {
                            n = !0;
                        }
    
                        if (n) {
                            var u = new f.ActiveXObject("AgControl.AgControl");
                            null === e ? t = !0 : u.IsVersionSupported(e) && (t = !0), u = null;
                        }
                    } catch (e) {
                        t = !1;
                    }
    
                    return t;
                }
    
                try {
                    for (var n = ["1.0", "2.0", "3.0", "4.0", "5.0"], a = [], r = 0; r < n.length; r++) t(n[r]) && a.push(n[r]);
    
                    if (0 == a.length) return void i(e, !1);
                    i(e, a.join(","));
                } catch (t) {
                    i(e, !1);
                }
            }
    
            function E(e) {
                try {
                    var t = f.opera || d.userAgent.indexOf(" OPR/") >= 0 ? "Opera" : 0,
                        n = "undefined" != typeof InstallTrigger ? "Firefox" : 0,
                        a = Object.prototype.toString.call(f.HTMLElement).indexOf("Constructor") > 0 || f.safari && f.safari.pushNotification && "[object SafariRemoteNotification]" === f.safari.pushNotification.toString() || f.ApplePaySession;
                    a = a ? "Safari" : 0;
                    var r = a && d.userAgent.match("CriOS") ? "Chrome IOS" : 0,
                        o = f.chrome && !t ? "Chrome" : 0,
                        s = eval("/*@cc_on!@*/false") || u.documentMode ? "IE" : 0,
                        c = !s && f.StyleMedia ? "Edge" : 0,
                        l = "";
                    i(e, t || n || c || s || o || r || a || l);
                } catch (t) {
                    i(e, null);
                }
            }
    
            function P(e) {
                function t(e) {
                    return e = e.match(/[\d]+/g), e.length = 3, e.join(".");
                }
    
                var a = !1,
                    r = "",
                    o = n();
    
                if (o && o.length) {
                    var s = o["Shockwave Flash"];
                    s && (a = !0, s.description && (r = t(s.description))), o["Shockwave Flash 2.0"] && (a = !0, r = "2.0.0.11");
                } else {
                    var c;
    
                    try {
                        c = d.mimeTypes;
                    } catch (e) { }
    
                    if (c && c.length) {
                        var l = c["application/x-shockwave-flash"];
                        (a = l && l.enabledPlugin) && (r = t(l.enabledPlugin.description));
                    } else try {
                        var u = new f.ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),
                            a = !0,
                            r = t(u.GetVariable("$version"));
                    } catch (e) {
                        try {
                            u = new f.ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), a = !0, r = "6.0.21";
                        } catch (e) {
                            try {
                                u = new f.ActiveXObject("ShockwaveFlash.ShockwaveFlash"), a = !0, r = t(u.GetVariable("$version"));
                            } catch (e) { }
                        }
                    }
                }
    
                var b = r;
                i(e, !!a && b);
            }
    
            function N(e) {
                i(e, L("localStorage") + "," + L("sessionStorage"));
            }
    
            function L(e) {
                try {
                    var t = f[e],
                        n = "__akfp_storage_test__";
                    return t.setItem(n, n), t.removeItem(n), !0;
                } catch (e) {
                    return !1;
                }
            }
    
            function B(e) {
                var t = !1;
    
                try {
                    var n = u.createElement("canvas"),
                        a = n.getContext("2d");
                    a.fillStyle = "rgba(255,153,153, 0.5)", a.font = "18pt Tahoma", a.textBaseline = "top", a.fillText("Soft Ruddy Foothold 2", 2, 2), a.fillStyle = "#0000FF", a.fillRect(100, 25, 30, 10), a.fillStyle = "#E0E0E0", a.fillRect(100, 25, 20, 30), a.fillStyle = "#FF3333", a.fillRect(100, 25, 10, 15), a.fillText("!H71JCaj)]# 1@#", 4, 8);
                    var r = n.toDataURL();
                    u.createElement("img").src = r, t = s.hash(r);
                } catch (e) { }
    
                i(e, t);
            }
    
            function I(e) {
                function t(e) {
                    return "<b style=\"position: absolute; display:inline !important; width:auto !important; font:normal 10px/1 " + e + " !important\">wi wi</b>";
                }
    
                function n(e) {
                    return "<div>" + t([e, "monospace"]) + t([e, "sans-serif"]) + "</div>";
                }
    
                function a(e, t) {
                    var n = e.childNodes[0].offsetWidth;
                    return n !== t || n === e.childNodes[1].offsetWidth;
                }
    
                function r(e, t, r, i, o) {
                    for (var s = "RYelrZVIUa", c = [], l = e.length, f = "", u = 0; u < l; u++) f += n(t[e[u]]);
    
                    if (o && (f += n(s)), r.innerHTML = f, o && a(r.childNodes[l], i)) return null;
    
                    for (u = 0; u < l; u++) a(r.childNodes[u], i) && c.push(e[u]);
    
                    return c;
                }
    
                var o = "fh",
                    c = "fc";
    
                try {
                    var l,
                        f = [],
                        d = !0,
                        b = !1,
                        p = new Date().valueOf(),
                        v = h.length,
                        g = [],
                        m = [],
                        O = u.body,
                        S = u.createElement("div"),
                        A = u.createElement("div"),
                        j = u.createElement("div");
                    S.style.cssText = "position: relative; left: -9999px; visibility: hidden; display: block !important", A.innerHTML = t(["monospace"]), S.appendChild(A), S.appendChild(j), O.insertBefore(S, O.firstChild);
                    var w = A.childNodes[0].offsetWidth;
                    0 === w && (b = !0);
    
                    for (var y = 0; y < v; y++) y % 7 == 0 ? g.push(y) : m.push(y);
    
                    if (l = r(g, h, j, w, !0), null === l ? b = !0 : new Date().valueOf() - p > 100 ? d = !1 : f = r(m, h, j, w, !1), O.removeChild(S), b) i(o, !1), i(e, !1), i(c, !1);
                    else {
                        var R = l.concat(f);
                        R.sort(function (e, t) {
                            return e - t;
                        }), R += "", i(o, s.hash(R)), i(e, R), i(c, d);
                    }
                } catch (t) {
                    try {
                        O.removeChild(S);
                    } catch (e) { }
    
                    i(o, null), i(e, null), i(c, !1);
                }
            }
    
            function k(e) {
                var t = ["1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "1.7", "1.8", "1.9", "2.0"],
                    n = "",
                    a = "urhehlevkedkilrobacf";
                f[a] = "";
    
                try {
                    for (var r = u.getElementsByTagName("head")[0], o = [], s = 0; s < t.length; s++) {
                        var c = u.createElement("script"),
                            l = t[s];
                        c.setAttribute("language", "JavaScript" + l), c.text = a + "=\"" + l + "\"", r.appendChild(c), o.push(c);
                    }
    
                    for (n = f[a], s = 0; s < t.length; s++) r.removeChild(o[s]);
                } catch (e) { }
    
                i(e, n);
            }
    
            function T(e) {
                try {
                    var t = f.innerWidth,
                        n = f.outerWidth,
                        a = f.screenX,
                        r = f.pageXOffset,
                        o = b.availWidth,
                        s = b.width,
                        c = {
                            inner: void 0 !== t ? [t, f.innerHeight] : 0,
                            outer: void 0 !== n ? [n, f.outerHeight] : 0,
                            screen: void 0 !== a ? [a, f.screenY] : 0,
                            pageOffset: void 0 !== r ? [r, f.pageYOffset] : 0,
                            avail: void 0 !== o ? [o, b.availHeight] : 0,
                            size: void 0 !== s ? [s, b.height] : 0,
                            client: u.body ? [u.body.clientWidth, u.body.clientHeight] : -1,
                            colorDepth: b.colorDepth,
                            pixelDepth: b.pixelDepth
                        };
                    iCustom(e, c); /* Custom */
                    i(e, l.stringify(c));
                } catch (t) {
                    i(e, null);
                }
            }
    
            function F(e) {
                var t = [],
                    a = n();
                if (a)
                    for (var r = 0; r < a.length; r++)
                        for (var o = 0; o < a[r].length; o++) t.push(c([a[r].name, a[r].description, a[r].filename, a[r][o].description, a[r][o].type, a[r][o].suffixes].toString()));
                i(e, t.toString());
            }
    
            function M(e) {
                var t = !1;
    
                try {
                    var n = new f.Date(),
                        a = -n.getTimezoneOffset() / 60;
                    a > 0 ? a = "+" + a : a += "", t = n.valueOf() + a;
                } catch (e) { }
    
                i(e, t);
            }
    
            function x(e) {
                var t = [],
                    n = ["geolocation", "notifications", "push", "midi", "camera", "microphone", "speaker", "device-info", "background-sync", "bluetooth", "persistent-storage", "ambient-light-sensor", "accelerometer", "gyroscope", "magnetometer", "clipboard", "accessibility-events", "clipboard-read", "clipboard-write", "payment-handler"];
                if (!navigator.permissions) return void i(e, 6);
    
                try {
                    var a = function (e, n) {
                        return navigator.permissions.query({
                            name: e
                        }).then(function (e) {
                            switch (e.state) {
                                case "prompt":
                                    t[n] = 1;
                                    break;
    
                                case "granted":
                                    t[n] = 2;
                                    break;
    
                                case "denied":
                                    t[n] = 0;
                                    break;
    
                                default:
                                    t[n] = 5;
                            }
                        }).catch(function (e) {
                            t[n] = -1 !== e.message.indexOf("is not a valid enum value of type PermissionName") ? 4 : 3;
                        });
                    },
                        r = n.map(function (e, t) {
                            return a(e, t);
                        });
    
                    Promise.all(r).then(function () {
                        i(e, t.join(""));
                    });
                } catch (t) {
                    i(e, 7);
                }
            }
    
            function D(e) {
                var t = {
                    "window.chrome": window.chrome || "-not-existent"
                };
                iCustom("chrome", window.chrome); /* Custom */
                iCustom("chromejson", l.stringify(window.chrome)); /* Custom */
                i(e, l.stringify(t));
            }
    
            var U = {
                pData: {}, /* Custom */
                ap: null,
                bt: null,
                fonts: null,
                fh: null,
                timing: {
                    profile: {}
                }
            },
                V = "ap",
                X = "bt",
                H = 0;
            this.compute = function (e) {
                H++, a(F, "bp"), a(T, "sr"), a(j, "dp"), a(M, "lt"), a(N, "ps"), a(B, "cv"), a(P, "fp"), a(C, "sp"), a(E, "br"), a(R, "ieps"), a(y, "av"), a(w, "z" + H), a(k, "jsv"), a(O, "nav"), a(x, "nap"), a(D, "crc"), i("t", t(v)), i("u", g), r(), e(U);
            }, this.exitEarly = function () {
                return U.z.a != v;
            }, this.fonts = function () {
                a(I, "fonts");
            }, this.retry = function () {
                a(w, "z" + ++H);
            };
        }
    
        function r() {
            if (!S) {
                f.performance && f.performance.timing && (A = f.performance.timing.responseStart), j = new Date().valueOf(), S = !0;
                var e = new a(m, O),
                    t = 0;
                e.compute(function (n) {
                    function a() {
                        var i = new Date().valueOf(),
                            s = i - r;
                        t++, n.timing[t] = i - j, e.exitEarly() || s > 500 ? (e.fonts(), o(n)) : f.setTimeout(function () {
                            e.retry(), a();
                        }, 100);
                    }
    
                    var r = new Date().valueOf();
                    n.timing.main = A ? j - A : 0, n.timing.compute = r - j, a();
                });
            }
        }
    
        function i(e) {
            var t = "";
            for (var n in e) e.hasOwnProperty(n) && (t += f.encodeURIComponent(n) + "=" + f.encodeURIComponent(e[n]) + "&");
    
            return t.length && (t = t.substr(0, t.length - 1)), t;
        }
    
        /* Custom */
        function o(e) {
          /* Custom */
          var pluginsArray = [],
            thePlugins = navigator.plugins;
          if (thePlugins)
            for (var r = 0; r < thePlugins.length; r++)
              for (var o = 0; o < thePlugins[r].length; o++)
                pluginsArray.push({
                  name: thePlugins[r].name,
                  description: thePlugins[r].description,
                  filename: thePlugins[r].filename,
                  mimeDescription: thePlugins[r][o].description,
                  mimeType: thePlugins[r][o].type,
                  mimeSuffixes: thePlugins[r][o].suffixes,
                });
          // var plguinsAsJson = l.(pluginsArray);
          e.pData['plugins'] = pluginsArray;
          /* Custom */
          (e.timing.send = r - j), (e.timing = l.stringify(e.timing)), (e.z = l.stringify(e.z));
          window.uPixel = e.pData;
        }
    
        var s = {};
        s.hash = function (e) {
            e = e.utf8Encode();
            var t = [1518500249, 1859775393, 2400959708, 3395469782];
            e += String.fromCharCode(128);
    
            for (var n = e.length / 4 + 2, a = Math.ceil(n / 16), r = new Array(a), i = 0; i < a; i++) {
                r[i] = new Array(16);
    
                for (var o = 0; o < 16; o++) r[i][o] = e.charCodeAt(64 * i + 4 * o) << 24 | e.charCodeAt(64 * i + 4 * o + 1) << 16 | e.charCodeAt(64 * i + 4 * o + 2) << 8 | e.charCodeAt(64 * i + 4 * o + 3);
            }
    
            r[a - 1][14] = 8 * (e.length - 1) / Math.pow(2, 32), r[a - 1][14] = Math.floor(r[a - 1][14]), r[a - 1][15] = 8 * (e.length - 1) & 4294967295;
    
            for (var c, l, f, u, d, b = 1732584193, h = 4023233417, p = 2562383102, v = 271733878, g = 3285377520, m = new Array(80), i = 0; i < a; i++) {
                for (var O = 0; O < 16; O++) m[O] = r[i][O];
    
                for (var O = 16; O < 80; O++) m[O] = s.ROTL(m[O - 3] ^ m[O - 8] ^ m[O - 14] ^ m[O - 16], 1);
    
                c = b, l = h, f = p, u = v, d = g;
    
                for (var O = 0; O < 80; O++) {
                    var S = Math.floor(O / 20),
                        A = s.ROTL(c, 5) + s.f(S, l, f, u) + d + t[S] + m[O] & 4294967295;
                    d = u, u = f, f = s.ROTL(l, 30), l = c, c = A;
                }
    
                b = b + c & 4294967295, h = h + l & 4294967295, p = p + f & 4294967295, v = v + u & 4294967295, g = g + d & 4294967295;
            }
    
            var toReturn = s.toHexStr(b) + s.toHexStr(h) + s.toHexStr(p) + s.toHexStr(v) + s.toHexStr(g);
            return toReturn;
        }, s.f = function (e, t, n, a) {
            switch (e) {
                case 0:
                    return t & n ^ ~t & a;
    
                case 1:
                    return t ^ n ^ a;
    
                case 2:
                    return t & n ^ t & a ^ n & a;
    
                case 3:
                    return t ^ n ^ a;
            }
        }, s.ROTL = function (e, t) {
            return e << t | e >>> 32 - t;
        }, s.toHexStr = function (e) {
            for (var t, n = "", a = 7; a >= 0; a--) t = e >>> 4 * a & 15, n += t.toString(16);
    
            return n;
        }, void 0 === String.prototype.utf8Encode && (String.prototype.utf8Encode = function () {
            return unescape(encodeURIComponent(this));
        }), void 0 === String.prototype.utf8Decode && (String.prototype.utf8Decode = function () {
            try {
                return decodeURIComponent(escape(this));
            } catch (e) {
                return this;
            }
        });
    
        var c = window.btoa || function () {
            var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            return function (t) {
                for (var n, a, r = String(t), i = 0, o = e, s = ""; r.charAt(0 | i) || (o = "=", i % 1); s += o.charAt(63 & n >> 8 - i % 1 * 8)) {
                    if ((a = r.charCodeAt(i += .75)) > 255) throw new Error("\\'btoa\\' failed: The string to be encoded contains characters outside of the Latin1 range.");
                    n = n << 8 | a;
                }
    
                return s;
            };
        }(),
            l = window.JSON || {
                stringify: function () {
                    var e = Object.prototype.toString,
                        t = Array.isArray || function (t) {
                            return "[object Array]" === e.call(t);
                        },
                        n = {
                            '"': "\\\\\"",
                            "\\": "\\\\\\\\",
                            "\b": "\\\\b",
                            "\f": "\\\\f",
                            "\n": "\\\n",
                            "\r": "\\\\r",
                            "\t": "\\\t"
                        },
                        a = function (e) {
                            return n[e] || "\\\\u" + (e.charCodeAt(0) + 65536).toString(16).substr(1);
                        },
                        r = /[\\"\u0000-\u001F\u2028\u2029]/g;
    
                    return function n(i) {
                        if (null == i) return "null";
                        if ("number" == typeof i) return isFinite(i) ? i.toString() : "null";
                        if ("boolean" == typeof i) return i.toString();
    
                        if ("object" == typeof i) {
                            if ("function" == typeof i.toJSON) return n(i.toJSON());
    
                            if (t(i)) {
                                for (var o = "[", s = 0; s < i.length; s++) o += (s ? ", " : "") + n(i[s]);
    
                                return o + "]";
                            }
    
                            if ("[object Object]" === e.call(i)) {
                                var c = [];
    
                                for (var l in i) i.hasOwnProperty(l) && c.push(n(l) + ": " + n(i[l]));
    
                                return "{" + c.join(", ") + "}";
                            }
                        }
    
                        return "\"" + i.toString().replace(r, a) + "\"";
                    };
                }()
            },
    
    
    
            f = window,
            u = f.document,
            d = f.navigator,
            b = f.screen,
            h = ["Party LET", "Academy Engraved LET", "David", "Palatino Linotype", "Microsoft Sans Serif", "Segoe UI", "Malgun Gothic", "Nirmala UI", "Segoe Pseudo", "Gadugi", "Leelawadee UI Bold", "Sitka Subheading Italic", "Yu Gothic UI Light", "Bahnschrift", "Trattatello", "Skia", "Muna", "PingFang", "San Francisco UI", "San Francisco Mono", "Monotype LingWai Medium", "American Typewriter", "Rockwell", "Al Nile", "Roboto", "Noto", "Ubuntu", "Century Schoolbook L", "URW Chancery L", "URW Gothic L", "URW Bookman L", "Nimbus Mono L", "FreeMono", "FreeSans", "FreeSerif", "Bitstream Vera Sans", "Bitstream Charter", "Liberation Sans", "Liberation Serif", "Liberation Mono", "Luxi", "Nimbus Mono", "Nimbus Sans L", "Nimbus Roman No 9 L", "DejaVu Sans", "MONO", "DB LCD Temp", "Oriya Sangam MN", "Sinhala Sangam MN", "Apple Color Emoji", "Chalkboard", "Andale Mono", "Sitka Banner", "Segoe UI Emoji", "Leelawadee UI", "Vijaya", "Utsaah", "Shonar Bangla", "Aparajita", "Khmer UI", "Franklin Gothic", "MV Boli", "Corbel", "Cambria", "Segoe UI Light", "MS Gothic"],
            p = {},
            v = f.bazadebezolkohpepadr,
            g = "515ec61897105209b59e7744bfe8f4b7",
            m = "c0df195c126e571085c501a5e165ba0f",
            O = "796aef7b0d985a1592335c12a247fc37",
            S = !1,
            A = null,
            j = null;
    
        try {
            document.body ? r() : u.addEventListener ? (u.addEventListener("DOMContentLoaded", r, !1), u.addEventListener("load", r, !1)) : u.attachEvent && (u.attachEvent("DOMContentLoaded", r), u.attachEvent("onload", r));
        } catch (e) { }
    })();
    
    /* Custom */ /* Pixel Ended */
    
    var _cf = _cf || [],
        bmak = bmak && bmak.hasOwnProperty("ver") && bmak.hasOwnProperty("sed") ? bmak : {
            ver: 1.68,
            ke_cnt_lmt: 150,
            mme_cnt_lmt: 100,
            mduce_cnt_lmt: 75,
            pme_cnt_lmt: 25,
            pduce_cnt_lmt: 25,
            tme_cnt_lmt: 25,
            tduce_cnt_lmt: 25,
            doe_cnt_lmt: 10,
            dme_cnt_lmt: 10,
            vc_cnt_lmt: 100,
            doa_throttle: 0,
            dma_throttle: 0,
            session_id: "default_session",
            js_post: !1,
            loc: "",
            cf_url: "https:" === document.location.protocol ? "https://" : "http://",
            params_url: ("https:" === document.location.protocol ? "https://" : "http://") + document.location.hostname + "/get_params",
            auth: "",
            api_public_key: "afSbep8yjnZUjq3aL010jO15Sawj2VZfdYK8uY90uxq",
            aj_lmt_doact: 1,
            aj_lmt_dmact: 1,
            aj_lmt_tact: 1,
            ce_js_post: 0,
            init_time: 0,
            informinfo: "",
            prevfid: -1,
            fidcnt: 0,
            sensor_data: 0,
            ins: null,
            cns: null,
            enGetLoc: 0,
            enReadDocUrl: 1,
            disFpCalOnTimeout: 0,
            xagg: -1,
            pen: -1,
            brow: "",
            browver: "",
            psub: "-",
            lang: "-",
            prod: "-",
            plen: -1,
            doadma_en: 0,
            sdfn: [],
            d2: 0,
            d3: 0,
            thr: 0,
            cs: "0a46G5m17Vrp4o4c",
            hn: "unk",
            z1: 0,
            o9: 0,
            vc: "",
            y1: 2016,
            ta: 0,
            tst: -1,
            t_tst: 0,
            ckie: "_abck",
            n_ck: "0",
            ckurl: 0,
            bm: !1,
            mr: "-1",
            altFonts: !1,
            rst: !1,
            runFonts: !1,
            fsp: !1,
            firstLoad: !0,
            pstate: !1,
            mn_mc_lmt: 10,
            mn_state: 0,
            mn_mc_indx: 0,
            mn_sen: 0,
            mn_tout: 100,
            mn_stout: 1e3,
            mn_ct: 1,
            mn_cc: "",
            mn_cd: 1e4,
            mn_lc: [],
            mn_ld: [],
            mn_lcl: 0,
            mn_al: [],
            mn_il: [],
            mn_tcl: [],
            mn_r: [],
            mn_rt: 0,
            mn_wt: 0,
            mn_abck: "",
            mn_psn: "",
            mn_ts: "",
            mn_lg: [],
            loap: 1,
            dcs: 0,
            allRCFP: [], /* Custom */
            wglSupportedExtensions: [], /* Custom */
            navigatorPluginsArr: [], /* Custom */
            submittedDataCount: 0, /* Custom */
            ir: function () {
                bmak.start_ts = Date.now ? Date.now() : +new Date(), bmak.kact = "", bmak.ke_cnt = 0, bmak.ke_vel = 0, bmak.mact = "", bmak.mme_cnt = 0, bmak.mduce_cnt = 0, bmak.me_vel = 0, bmak.pact = "", bmak.pme_cnt = 0, bmak.pduce_cnt = 0, bmak.pe_vel = 0, bmak.tact = "", bmak.tme_cnt = 0, bmak.tduce_cnt = 0, bmak.te_vel = 0, bmak.doact = "", bmak.doe_cnt = 0, bmak.doe_vel = 0, bmak.dmact = "", bmak.dme_cnt = 0, bmak.dme_vel = 0, bmak.vcact = "", bmak.vc_cnt = 0, bmak.aj_indx = 0, bmak.aj_ss = 0, bmak.aj_type = -1, bmak.aj_indx_doact = 0, bmak.aj_indx_dmact = 0, bmak.aj_indx_tact = 0, bmak.me_cnt = 0, bmak.pe_cnt = 0, bmak.te_cnt = 0, bmak.nav_perm = "", bmak.brv = 0, bmak.hbCalc = !1, bmak.fmh = "", bmak.fmz = "", bmak.ssh = "", bmak.wv = "", bmak.wr = "", bmak.weh = "", bmak.wl = 0;
            },
            get_cf_date: function () {
                return Date.now ? Date.now() : +new Date();
            },
            sd_debug: function (t) {
                if (!bmak.js_post) {
                    var a = t;
                    "string" == typeof _sd_trace ? _sd_trace += a : _sd_trace = a;
                }
            },
            pi: function (t) {
                return parseInt(t);
            },
            uar: function () {
                return window.navigator.userAgent.replace(/\\|"/g, "");
            },
            gd: function () {
                var t = bmak.uar(),
                    a = "" + bmak.ab(t),
                    e = bmak.start_ts / 2,
                    n = -1,
                    o = -1,
                    m = -1,
                    r = -1,
                    i = -1,
                    c = -1,
                    b = -1;
    
                try {
                    n = window.screen ? window.screen.availWidth : -1;
                } catch (t) {
                    n = -1;
                }
    
                try {
                    o = window.screen ? window.screen.availHeight : -1;
                } catch (t) {
                    o = -1;
                }
    
                try {
                    m = window.screen ? window.screen.width : -1;
                } catch (t) {
                    m = -1;
                }
    
                try {
                    r = window.screen ? window.screen.height : -1;
                } catch (t) {
                    r = -1;
                }
    
                try {
                    i = window.innerHeight || (document.body && "clientHeight" in document.body ? document.body.clientHeight : document.documentElement && "clientHeight" in document.documentElement ? document.documentElement.clientHeight : -1);
                } catch (t) {
                    i = -1;
                }
    
                try {
                    c = window.innerWidth || (document.body && "clientWidth" in document.body ? document.body.clientWidth : document.documentElement && "clientWidth" in document.documentElement ? document.documentElement.clientWidth : -1);
                } catch (t) {
                    c = -1;
                }
    
                try {
                    b = "outerWidth" in window && void 0 !== window.outerWidth ? window.outerWidth : -1;
                } catch (t) {
                    b = -1;
                }
    
                bmak.z1 = bmak.pi(bmak.start_ts / (bmak.y1 * bmak.y1));
                var d = Math.random(),
                    s = bmak.pi(1e3 * d / 2),
                    k = d + "";
                return k = k.slice(0, 11) + s, bmak.gbrv(), bmak.get_browser(), bmak.bc(), bmak.bmisc(), t + ",uaend," + bmak.xagg + "," + bmak.psub + "," + bmak.lang + "," + bmak.prod + "," + bmak.plen + "," + bmak.pen + "," + bmak.wen + "," + bmak.den + "," + bmak.z1 + "," + bmak.d3 + "," + n + "," + o + "," + m + "," + r + "," + c + "," + i + "," + b + "," + bmak.bd() + "," + a + "," + k + "," + e + "," + bmak.brv + ",loc:" + bmak.loc;
            },
            get_browser: function () {
                navigator.productSub && (bmak.psub = navigator.productSub), navigator.language && (bmak.lang = navigator.language), navigator.product && (bmak.prod = navigator.product), bmak.plen = void 0 !== navigator.plugins ? navigator.plugins.length : -1;
            },
            gbrv: function () {
                navigator.brave && navigator.brave.isBrave().then(function (t) {
                    bmak.brv = t ? 1 : 0;
                }).catch(function (t) {
                    bmak.brv = 0;
                });
            },
            bc: function () {
                var t = window.addEventListener ? 1 : 0,
                    a = window.XMLHttpRequest ? 1 : 0,
                    e = window.XDomainRequest ? 1 : 0,
                    n = window.emit ? 1 : 0,
                    o = window.DeviceOrientationEvent ? 1 : 0,
                    m = window.DeviceMotionEvent ? 1 : 0,
                    r = window.TouchEvent ? 1 : 0,
                    i = window.spawn ? 1 : 0,
                    c = window.chrome ? 1 : 0,
                    b = Function.prototype.bind ? 1 : 0,
                    d = window.Buffer ? 1 : 0,
                    s = window.PointerEvent ? 1 : 0;
    
                try {
                    var k = window.innerWidth ? 1 : 0;
                } catch (t) {
                    var k = 0;
                }
    
                try {
                    var l = window.outerWidth ? 1 : 0;
                } catch (t) {
                    var l = 0;
                }
    
                bmak.xagg = t + (a << 1) + (e << 2) + (n << 3) + (o << 4) + (m << 5) + (r << 6) + (i << 7) + (k << 8) + (l << 9) + (c << 10) + (b << 11) + (d << 12) + (s << 13);
            },
            bmisc: function () {
                bmak.pen = window._phantom ? 1 : 0, bmak.wen = window.webdriver ? 1 : 0, bmak.den = window.domAutomation ? 1 : 0;
            },
            bd: function () {
                var t = [],
                    a = window.callPhantom ? 1 : 0;
                t.push(",cpen:" + a);
                var e = 0;
                window.ActiveXObject && "ActiveXObject" in window && (e = 1), t.push("i1:" + e);
                var n = "number" == typeof document.documentMode ? 1 : 0;
                t.push("dm:" + n);
                var o = window.chrome && window.chrome.webstore ? 1 : 0;
                t.push("cwen:" + o);
                var m = navigator.onLine ? 1 : 0;
                t.push("non:" + m);
                var r = window.opera ? 1 : 0;
                t.push("opc:" + r);
                var i = "undefined" != typeof InstallTrigger ? 1 : 0;
                t.push("fc:" + i);
                var c = window.HTMLElement && Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0 ? 1 : 0;
                t.push("sc:" + c);
                var b = "function" == typeof window.RTCPeerConnection || "function" == typeof window.mozRTCPeerConnection || "function" == typeof window.webkitRTCPeerConnection ? 1 : 0;
                t.push("wrc:" + b);
                var d = "mozInnerScreenY" in window ? window.mozInnerScreenY : 0;
                t.push("isc:" + d), bmak.d2 = bmak.pi(bmak.z1 / 23);
                var s = "function" == typeof navigator.vibrate ? 1 : 0;
                t.push("vib:" + s);
                var k = "function" == typeof navigator.getBattery ? 1 : 0;
                t.push("bat:" + k);
                var l = Array.prototype.forEach ? 0 : 1;
                t.push("x11:" + l);
                var u = "FileReader" in window ? 1 : 0;
                return t.push("x12:" + u), t.join(",");
            },
            fas: function () {
                try {
                    return Boolean(navigator.credentials) + (Boolean(navigator.appMinorVersion) << 1) + (Boolean(navigator.bluetooth) << 2) + (Boolean(navigator.storage) << 3) + (Boolean(Math.imul) << 4) + (Boolean(navigator.getGamepads) << 5) + (Boolean(navigator.getStorageUpdates) << 6) + (Boolean(navigator.hardwareConcurrency) << 7) + (Boolean(navigator.mediaDevices) << 8) + (Boolean(navigator.mozAlarms) << 9) + (Boolean(navigator.mozConnection) << 10) + (Boolean(navigator.mozIsLocallyAvailable) << 11) + (Boolean(navigator.mozPhoneNumberService) << 12) + (Boolean(navigator.msManipulationViewsEnabled) << 13) + (Boolean(navigator.permissions) << 14) + (Boolean(navigator.registerProtocolHandler) << 15) + (Boolean(navigator.requestMediaKeySystemAccess) << 16) + (Boolean(navigator.requestWakeLock) << 17) + (Boolean(navigator.sendBeacon) << 18) + (Boolean(navigator.serviceWorker) << 19) + (Boolean(navigator.storeWebWideTrackingException) << 20) + (Boolean(navigator.webkitGetGamepads) << 21) + (Boolean(navigator.webkitTemporaryStorage) << 22) + (Boolean(Number.parseInt) << 23) + (Boolean(Math.hypot) << 24);
                } catch (t) {
                    return 0;
                }
            },
            getmr: function () {
                try {
                    if ("undefined" == typeof performance || void 0 === performance.now || "undefined" == typeof JSON) return void (bmak.mr = "undef");
    
                    for (var t = "", a = 1e3, e = [Math.abs, Math.acos, Math.asin, Math.atanh, Math.cbrt, Math.exp, Math.random, Math.round, Math.sqrt, isFinite, isNaN, parseFloat, parseInt, JSON.parse], n = 0; n < e.length; n++) {
                        var o = [],
                            m = 0,
                            r = performance.now(),
                            i = 0,
                            c = 0;
    
                        if (void 0 !== e[n]) {
                            for (i = 0; i < a && m < .6; i++) {
                                for (var b = performance.now(), d = 0; d < 4e3; d++) e[n](3.14);
    
                                var s = performance.now();
                                o.push(Math.round(1e3 * (s - b))), m = s - r;
                            }
    
                            var k = o.sort();
                            c = k[Math.floor(k.length / 2)] / 5;
                        }
    
                        t = t + c + ",";
                    }
    
                    bmak.mr = t;
                } catch (t) {
                    bmak.mr = "exception";
                }
            },
            sed: function () {
                var t;
                t = window.$cdc_asdjflasutopfhvcZLmcfl_ || document.$cdc_asdjflasutopfhvcZLmcfl_ ? "1" : "0";
                var a;
                a = null != window.document.documentElement.getAttribute("webdriver") ? "1" : "0";
                var e;
                e = void 0 !== navigator.webdriver && navigator.webdriver ? "1" : "0";
                var n;
                n = void 0 !== window.webdriver ? "1" : "0";
                var o;
                o = void 0 !== window.XPathResult || void 0 !== document.XPathResult ? "1" : "0";
                var m;
                m = null != window.document.documentElement.getAttribute("driver") ? "1" : "0";
                var r;
                return r = null != window.document.documentElement.getAttribute("selenium") ? "1" : "0", [t, a, e, n, o, m, r].join(",");
            },
            cma: function (t, a) {
                return; /* Custom */
                /*
                try {
                    if (1 == a && bmak.mme_cnt < bmak.mme_cnt_lmt || 1 != a && bmak.mduce_cnt < bmak.mduce_cnt_lmt) {
                        var e = t || window.event,
                            n = -1,
                            o = -1;
                        e && e.pageX && e.pageY ? (n = Math.floor(e.pageX), o = Math.floor(e.pageY)) : e && e.clientX && e.clientY && (n = Math.floor(e.clientX), o = Math.floor(e.clientY));
                        var m = e.toElement;
                        null == m && (m = e.target);
                        var r = bmak.gf(m),
                            i = bmak.get_cf_date() - bmak.start_ts,
                            c = bmak.me_cnt + "," + a + "," + i + "," + n + "," + o;
    
                        if (1 != a) {
                            c = c + "," + r;
                            var b = void 0 !== e.which ? e.which : e.button;
                            null != b && 1 != b && (c = c + "," + b);
                        }
    
                        void 0 !== e.isTrusted && !1 === e.isTrusted && (c += ",it0"), c += ";", bmak.me_vel = bmak.me_vel + bmak.me_cnt + a + i + n + o, bmak.mact = bmak.mact + c, bmak.ta += i;
                    }
    
                    1 == a ? bmak.mme_cnt++ : bmak.mduce_cnt++, bmak.me_cnt++, bmak.js_post && 3 == a && (bmak.aj_type = 1, bmak.bpd(), bmak.pd(!0), bmak.ce_js_post = 1);
                } catch (t) { }
                */  /* Custom */
            },
            x2: function () {
                var t = bmak.ff,
                    a = t(98) + t(109) + t(97) + t(107),
                    e = t(103) + t(101) + t(116) + t(95) + t(99) + t(102) + t(95) + t(100) + t(97) + t(116) + t(101),
                    n = window[a][e],
                    o = 0;
                return "function" == typeof n && (o = n()), o;
            },
            np: function () {
                var t = [],
                    a = ["geolocation", "notifications", "push", "midi", "camera", "microphone", "speaker", "device-info", "background-sync", "bluetooth", "persistent-storage", "ambient-light-sensor", "accelerometer", "gyroscope", "magnetometer", "clipboard", "accessibility-events", "clipboard-read", "clipboard-write", "payment-handler"];
    
                try {
                    if (!navigator.permissions) return void (bmak.nav_perm = 6);
                    bmak.nav_perm = 8;
    
                    var e = function (a, e) {
                        return navigator.permissions.query({
                            name: a
                        }).then(function (a) {
                            switch (a.state) {
                                case "prompt":
                                    t[e] = 1;
                                    break;
    
                                case "granted":
                                    t[e] = 2;
                                    break;
    
                                case "denied":
                                    t[e] = 0;
                                    break;
    
                                default:
                                    t[e] = 5;
                            }
                        }).catch(function (a) {
                            t[e] = -1 !== a.message.indexOf("is not a valid enum value of type PermissionName") ? 4 : 3;
                        });
                    },
                        n = a.map(function (t, a) {
                            return e(t, a);
                        });
    
                    Promise.all(n).then(function () {
                        bmak.nav_perm = t.join("");
                    });
                } catch (t) {
                    bmak.nav_perm = 7;
                }
            },
            cpa: function (t, a) {
                try {
                    var e = !1;
    
                    if (1 == a && bmak.pme_cnt < bmak.pme_cnt_lmt || 1 != a && bmak.pduce_cnt < bmak.pduce_cnt_lmt) {
                        var n = t || window.event;
    
                        if (n && "mouse" != n.pointerType) {
                            e = !0;
                            var o = -1,
                                m = -1;
                            n && n.pageX && n.pageY ? (o = Math.floor(n.pageX), m = Math.floor(n.pageY)) : n && n.clientX && n.clientY && (o = Math.floor(n.clientX), m = Math.floor(n.clientY));
                            var r = bmak.get_cf_date() - bmak.start_ts,
                                i = bmak.pe_cnt + "," + a + "," + r + "," + o + "," + m;
                            void 0 !== n.isTrusted && !1 === n.isTrusted && (i += ",0"), bmak.pe_vel = bmak.pe_vel + bmak.pe_cnt + a + r + o + m, bmak.pact = bmak.pact + i + ";", bmak.ta += r, 1 == a ? bmak.pme_cnt++ : bmak.pduce_cnt++;
                        }
                    }
    
                    1 == a ? bmak.pme_cnt++ : bmak.pduce_cnt++, bmak.pe_cnt++, bmak.js_post && 3 == a && e && (bmak.aj_type = 2, bmak.bpd(), bmak.pd(!0), bmak.ce_js_post = 1);
                } catch (t) { }
            },
            ab: function (t) {
                if (null == t) return -1;
    
                try {
                    for (var a = 0, e = 0; e < t.length; e++) {
                        var n = t.charCodeAt(e);
                        n < 128 && (a += n);
                    }
    
                    return a;
                } catch (t) {
                    return -2;
                }
            },
            ff: function (t) {
                return String.fromCharCode(t);
            },
            cal_dis: function (t) {
                var a = t[0] - t[1],
                    e = t[2] - t[3],
                    n = t[4] - t[5],
                    o = Math.sqrt(a * a + e * e + n * n);
                return Math.floor(o);
            },
            to: function () {
                var t = bmak.x2() % 1e7;
                bmak.d3 = t;
    
                for (var a = t, e = bmak.pi(bmak.ff(51)), n = 0; n < 5; n++) {
                    var o = bmak.pi(t / Math.pow(10, n)) % 10,
                        m = o + 1;
                    op = bmak.cc(o), a = op(a, m);
                }
    
                bmak.o9 = a * e;
            },
            jrs: function (t) {
                for (var a = Math.floor(1e5 * Math.random() + 1e4), e = String(t * a), n = 0, o = [], m = e.length >= 18; o.length < 6;) o.push(parseInt(e.slice(n, n + 2))), n = m ? n + 3 : n + 2;
    
                return [a, bmak.cal_dis(o)];
            },
            fm: function () {
                var t = ["Monospace", "Wingdings 2", "ITC Bodoni 72 Bold", "Menlo", "Gill Sans MT", "Lucida Sans", "Bodoni 72", "Serif", "Shree Devanagari 714", "Microsoft Tai Le", "Nimbus Roman No 9 L", "Candara", "Press Start 2P", "Waseem"],
                    a = document.createElement("span");
                a.innerHTML = "mmmmmmmmlli", a.style.fontSize = "192px";
                var e = "",
                    n = document.getElementsByTagName("body")[0];
    
                if (n) {
                    for (var o in t) a.style.fontFamily = t[o], n.appendChild(a), e += t[o] + ":" + a.offsetWidth + "," + a.offsetHeight + ";", n.removeChild(a);
    
                    bmak.fmh = bmak.ats(bmak.mn_s(e));
                } else bmak.fmh = "";
    
                bmak.fmz = "devicePixelRatio" in window && void 0 !== window.devicePixelRatio ? window.devicePixelRatio : -1;
            },
            wgl: function () {
                try {
                    var t = document.createElement("canvas"),
                        a = t.getContext("webgl");
                    bmak.wv = "n", bmak.wr = "n", bmak.weh = "n", bmak.wl = 0, a && (bmak.wv = "b", bmak.wr = "b", bmak.weh = "b", a.getSupportedExtensions() && (bmak.wglSupportedExtensions = a.getSupportedExtensions() /* Custom */, bmak.weh = bmak.ats(bmak.mn_s(JSON.stringify(a.getSupportedExtensions().sort()))), bmak.wl = a.getSupportedExtensions().length, a.getSupportedExtensions().indexOf("WEBGL_debug_renderer_info") >= 0 && (bmak.wv = a.getParameter(a.getExtension("WEBGL_debug_renderer_info").UNMASKED_VENDOR_WEBGL), bmak.wr = a.getParameter(a.getExtension("WEBGL_debug_renderer_info").UNMASKED_RENDERER_WEBGL))));
                } catch (t) {
                    bmak.wv = "e", bmak.wr = "e", bmak.weh = "e", bmak.wl = 0;
                }
            },
            csh: function () {
                if (window.speechSynthesis) {
                    var t = window.speechSynthesis.getVoices();
    
                    if (t.length > 0) {
                        for (var a = "", e = 0; e < t.length; e++) a += t[e].voiceURI + "_" + t[e].lang;
    
                        bmak.ssh = bmak.ats(bmak.mn_s(a));
                    } else bmak.ssh = "0";
                } else bmak.ssh = "n";
            },
            gf: function (t) {
                var a;
                if (a = null == t ? document.activeElement : t, null == document.activeElement) return -1;
                var e = a.getAttribute("name");
    
                if (null == e) {
                    var n = a.getAttribute("id");
                    return null == n ? -1 : bmak.ab(n);
                }
    
                return bmak.ab(e);
            },
            cc: function (t) {
                var a = t % 4;
                2 == a && (a = 3);
    
                var e = 42 + a,
                    n = function (t, a) {
                        return 0;
                    };
    
                if (42 == e) var n = function (t, a) {
                    return t * a;
                };
                else if (43 == e) var n = function (t, a) {
                    return t + a;
                };
                else var n = function (t, a) {
                    return t - a;
                };
                return n;
            },
            isIgn: function (t) {
                return 1; /* Custom */
                /*
                var a = document.activeElement;
                if (null == document.activeElement) return 0;
                var e = a.getAttribute("type");
                return 1 == (null == e ? -1 : bmak.get_type(e)) && bmak.fidcnt > 12 && -2 == t ? 1 : 0;
                */  /* Custom */
            },
            cka: function (t, a) {
                return; /* Custom */
                /*
                try {
                    var e = t || window.event,
                        n = -1,
                        o = 1;
    
                    if (bmak.ke_cnt < bmak.ke_cnt_lmt && e) {
                        n = e.keyCode;
                        var m = e.charCode,
                            r = e.shiftKey ? 1 : 0,
                            i = e.ctrlKey ? 1 : 0,
                            c = e.metaKey ? 1 : 0,
                            b = e.altKey ? 1 : 0,
                            d = 8 * r + 4 * i + 2 * c + b,
                            s = bmak.get_cf_date() - bmak.start_ts,
                            k = bmak.gf(null),
                            l = 0;
                        m && n && (n = 0 != m && 0 != n && m != n ? -1 : 0 != n ? n : m), 0 == i && 0 == c && 0 == b && n >= 32 && (n = 3 == a && n >= 32 && n <= 126 ? -2 : n >= 33 && n <= 47 ? -3 : n >= 112 && n <= 123 ? -4 : -2), k != bmak.prevfid ? (bmak.fidcnt = 0, bmak.prevfid = k) : bmak.fidcnt = bmak.fidcnt + 1;
    
                        if (0 == bmak.isIgn(n)) {
                            var u = bmak.ke_cnt + "," + a + "," + s + "," + n + "," + l + "," + d + "," + k;
                            void 0 !== e.isTrusted && !1 === e.isTrusted && (u += ",0"), u += ";", bmak.kact = bmak.kact + u, bmak.ke_vel = bmak.ke_vel + bmak.ke_cnt + a + s + n + d + k, bmak.ta += s;
                        } else o = 0;
                    }
    
                    o && e && bmak.ke_cnt++, !bmak.js_post || 1 != a || 13 != n && 9 != n || (bmak.aj_type = 3, bmak.bpd(), bmak.pd(!0), bmak.ce_js_post = 1);
                } catch (t) { }
                */  /* Custom */
            },
            cta: function (t, a) {
                return; /* Custom */
                /*
                try {
                    if (1 == a && bmak.tme_cnt < bmak.tme_cnt_lmt || 1 != a && bmak.tduce_cnt < bmak.tduce_cnt_lmt) {
                        var e = t || window.event,
                            n = -1,
                            o = -1;
                        e && e.pageX && e.pageY ? (n = Math.floor(e.pageX), o = Math.floor(e.pageY)) : e && e.clientX && e.clientY && (n = Math.floor(e.clientX), o = Math.floor(e.clientY));
                        var m = bmak.get_cf_date() - bmak.start_ts,
                            r = bmak.te_cnt + "," + a + "," + m + "," + n + "," + o;
                        void 0 !== e.isTrusted && !1 === e.isTrusted && (r += ",0"), bmak.tact = bmak.tact + r + ";", bmak.ta += m, bmak.te_vel = bmak.te_vel + bmak.te_cnt + a + m + n + o, bmak.doa_throttle = 0, bmak.dma_throttle = 0;
                    }
    
                    1 == a ? bmak.tme_cnt++ : bmak.tduce_cnt++, bmak.te_cnt++, bmak.js_post && 2 == a && bmak.aj_indx_tact < bmak.aj_lmt_tact && (bmak.aj_type = 5, bmak.bpd(), bmak.pd(!0), bmak.ce_js_post = 1, bmak.aj_indx_tact++);
                } catch (t) { }
                */  /* Custom */
            },
            getFloatVal: function (t) {
                try {
                    if (-1 != bmak.chknull(t) && !isNaN(t)) {
                        var a = parseFloat(t);
                        if (!isNaN(a)) return a.toFixed(2);
                    }
                } catch (t) { }
    
                return -1;
            },
            cdoa: function (t) {
                try {
                    if (bmak.doe_cnt < bmak.doe_cnt_lmt && bmak.doa_throttle < 2 && t) {
                        var a = bmak.get_cf_date() - bmak.start_ts,
                            e = bmak.getFloatVal(t.alpha),
                            n = bmak.getFloatVal(t.beta),
                            o = bmak.getFloatVal(t.gamma),
                            m = bmak.doe_cnt + "," + a + "," + e + "," + n + "," + o;
                        void 0 !== t.isTrusted && !1 === t.isTrusted && (m += ",0"), bmak.doact = bmak.doact + m + ";", bmak.ta += a, bmak.doe_vel = bmak.doe_vel + bmak.doe_cnt + a, bmak.doe_cnt++;
                    }
    
                    bmak.js_post && bmak.doe_cnt > 1 && bmak.aj_indx_doact < bmak.aj_lmt_doact && (bmak.aj_type = 6, bmak.bpd(), bmak.pd(!0), bmak.ce_js_post = 1, bmak.aj_indx_doact++), bmak.doa_throttle++;
                } catch (t) { }
            },
            cdma: function (t) {
                try {
                    if (bmak.dme_cnt < bmak.dme_cnt_lmt && bmak.dma_throttle < 2 && t) {
                        var a = bmak.get_cf_date() - bmak.start_ts,
                            e = -1,
                            n = -1,
                            o = -1;
                        t.acceleration && (e = bmak.getFloatVal(t.acceleration.x), n = bmak.getFloatVal(t.acceleration.y), o = bmak.getFloatVal(t.acceleration.z));
                        var m = -1,
                            r = -1,
                            i = -1;
                        t.accelerationIncludingGravity && (m = bmak.getFloatVal(t.accelerationIncludingGravity.x), r = bmak.getFloatVal(t.accelerationIncludingGravity.y), i = bmak.getFloatVal(t.accelerationIncludingGravity.z));
                        var c = -1,
                            b = -1,
                            d = 1;
                        t.rotationRate && (c = bmak.getFloatVal(t.rotationRate.alpha), b = bmak.getFloatVal(t.rotationRate.beta), d = bmak.getFloatVal(t.rotationRate.gamma));
                        var s = bmak.dme_cnt + "," + a + "," + e + "," + n + "," + o + "," + m + "," + r + "," + i + "," + c + "," + b + "," + d;
                        void 0 !== t.isTrusted && !1 === t.isTrusted && (s += ",0"), bmak.dmact = bmak.dmact + s + ";", bmak.ta += a, bmak.dme_vel = bmak.dme_vel + bmak.dme_cnt + a, bmak.dme_cnt++;
                    }
    
                    bmak.js_post && bmak.dme_cnt > 1 && bmak.aj_indx_dmact < bmak.aj_lmt_dmact && (bmak.aj_type = 7, bmak.bpd(), bmak.pd(!0), bmak.ce_js_post = 1, bmak.aj_indx_dmact++), bmak.dma_throttle++;
                } catch (t) { }
            },
            get_type: function (t) {
                return 0;  /* Custom */
                /* Custom */ // return t = t.toLowerCase(), "text" == t || "search" == t || "url" == t || "email" == t || "tel" == t || "number" == t ? 0 : "password" == t ? 1 : 2;
            },
            chknull: function (t) {
                return null == t ? -1 : t;
            },
            getforminfo: function () {
                return ""; /* Custom */
                /* 
                for (var t = "", a = "", e = document.getElementsByTagName("input"), n = -1, o = 0; o < e.length; o++) {
                    var m = e[o],
                        r = bmak.ab(m.getAttribute("name")),
                        i = bmak.ab(m.getAttribute("id")),
                        c = m.getAttribute("required"),
                        b = null == c ? 0 : 1,
                        d = m.getAttribute("type"),
                        s = null == d ? -1 : bmak.get_type(d),
                        k = m.getAttribute("autocomplete");
                    null == k ? n = -1 : (k = k.toLowerCase(), n = "off" == k ? 0 : "on" == k ? 1 : 2);
                    var l = m.defaultValue,
                        u = m.value,
                        _ = 0,
                        f = 0;
                    l && 0 != l.length && (f = 1), !u || 0 == u.length || f && u == l || (_ = 1), 2 != s && (t = t + s + "," + n + "," + _ + "," + b + "," + i + "," + r + "," + f + ";"), a = a + _ + ";";
                }
    
                return null == bmak.ins && (bmak.ins = a), bmak.cns = a, t;
                */ /* Custom */
            },
            startdoadma: function () {
                0 == bmak.doadma_en && window.addEventListener && (window.addEventListener("deviceorientation", bmak.cdoa, !0), window.addEventListener("devicemotion", bmak.cdma, !0), bmak.doadma_en = 1), bmak.doa_throttle = 0, bmak.dma_throttle = 0;
            },
            updatet: function () {
                return bmak.get_cf_date() - bmak.start_ts;
            },
            htm: function (t) {
                bmak.cta(t, 1);
            },
            hts: function (t) {
                bmak.cta(t, 2);
            },
            hte: function (t) {
                bmak.cta(t, 3);
            },
            htc: function (t) {
                bmak.cta(t, 4);
            },
            hmm: function (t) {
                bmak.cma(t, 1);
            },
            hc: function (t) {
                bmak.cma(t, 2);
            },
            hmd: function (t) {
                bmak.cma(t, 3);
            },
            hmu: function (t) {
                bmak.cma(t, 4);
            },
            hpd: function (t) {
                bmak.cpa(t, 3);
            },
            hpu: function (t) {
                bmak.cpa(t, 4);
            },
            hkd: function (t) {
                bmak.cka(t, 1);
            },
            hku: function (t) {
                bmak.cka(t, 2);
            },
            hkp: function (t) {
                bmak.cka(t, 3);
            },
            form_submit: function () {
                try {
                    if (bmak.bpd(), 0 == bmak.sdfn.length) {
                        if (document.getElementById("bm-telemetry") && (document.getElementById("bm-telemetry").value = bmak.sensor_data), void 0 !== document.getElementsByName("bm-telemetry"))
                            for (var t = document.getElementsByName("bm-telemetry"), a = 0; a < t.length; a++) t[a].value = bmak.sensor_data;
                    } else
                        for (var a = 0; a < bmak.sdfn.length; a++) document.getElementById(bmak.sdfn[a]) && (document.getElementById(bmak.sdfn[a]).value = bmak.sensor_data);
                } catch (t) {
                    bmak.sd_debug(",s7:" + t + "," + bmak.sensor_data);
                }
            },
            get_telemetry: function () {
                return bmak.bpd(), bmak.ir(), bmak.sensor_data;
            },
            getdurl: function () {
                return bmak.enReadDocUrl ? document.URL.replace(/\\|"/g, "") : "";
            },
            x1: function () {
                return Math.floor(16777216 * (1 + Math.random())).toString(36);
            },
            gck: function () {
                var t = bmak.x1() + bmak.x1() + bmak.x1() + bmak.x1();
                return bmak.set_cookie(bmak.ckie, t + "_" + bmak.ab(t)), t;
            },
            set_cookie: function (t, a) {
                void 0 !== document.cookie && (document.cookie = t + "=" + a + "; path=/; expires=Fri, 01 Feb 2025 08:00:00 GMT;");
            },
            get_cookie: function () {
                var t = "0";
    
                try {
                    var t = bmak.cookie_chk_read(bmak.ckie);
                    t || (bmak.n_ck = 1, t = bmak.bm ? "2" : "1");
                } catch (t) { }
    
                return t;
            },
            cookie_chk_read: function (t) {
                if (document.cookie)
                    for (var a = t + "=", e = document.cookie.split("; "), n = 0; n < e.length; n++) {
                        var o = e[n];
    
                        if (0 === o.indexOf(a)) {
                            var m = o.substring(a.length, o.length);
                            if (-1 != m.indexOf("~") || -1 != decodeURIComponent(m).indexOf("~")) return m;
                        }
                    }
                return !1;
            },
            bpd: function () {
                bmak.sd_debug("<bpd>");
                var t = 0;
    
                try {
                    t = bmak.get_cf_date();
                    var a = bmak.updatet(),
                        e = "3";
                    bmak.ckie && (e = bmak.get_cookie());
                    var n = bmak.gd(),
                        o = window.DeviceOrientationEvent ? "do_en" : "do_dis",
                        m = window.DeviceMotionEvent ? "dm_en" : "dm_dis",
                        r = window.TouchEvent ? "t_en" : "t_dis",
                        i = o + "," + m + "," + r,
                        c = bmak.getforminfo(),
                        b = bmak.getdurl(),
                        d = bmak.aj_type + "," + bmak.aj_indx;
                    !bmak.fpcf.fpValCalculated && (0 == bmak.js_post || bmak.aj_indx > 0) && bmak.fpcf.fpVal();
    
                    var s = bmak.ke_vel + bmak.me_vel + bmak.doe_vel + bmak.dme_vel + bmak.te_vel + bmak.pe_vel,
                        k = bmak.ff,
                        l = k(80) + k(105) + k(90) + k(116) + k(69),
                        u = bmak.jrs(bmak.start_ts),
                        _ = bmak.get_cf_date() - bmak.start_ts,
                        f = bmak.pi(bmak.d2 / 6),
                        p = bmak.fas(),
                        h = [bmak.ke_vel + 1, bmak.me_vel + 32, bmak.te_vel + 32, bmak.doe_vel, bmak.dme_vel, bmak.pe_vel, s, a, bmak.init_time, bmak.start_ts, bmak.fpcf.td, bmak.d2, bmak.ke_cnt, bmak.me_cnt, f, bmak.pe_cnt, bmak.te_cnt, _, bmak.ta, bmak.n_ck, e, bmak.ab(e), bmak.fpcf.rVal, bmak.fpcf.rCFP, p, l, u[0], u[1]],
                        v = h.join(","),
                        g = "" + bmak.ab(bmak.fpcf.fpValstr);
    
                    bmak.firstLoad ? bmak.np() : bmak.csh(), !bmak.hbCalc && (0 == bmak.js_post || bmak.aj_indx > 0) && (bmak.fm(), bmak.wgl(), bmak.hbCalc = !0);
                    var w = "";
                    bmak.hbCalc && (w = bmak.fmh + "," + bmak.fmz + "," + bmak.ssh + "," + bmak.wv + "," + bmak.wr + "," + bmak.weh + "," + bmak.wl);
                    var y = bmak.sed(),
                        E = bmak.mn_get_current_challenges(),
                        S = "",
                        C = "",
                        x = "";
    
                    if (void 0 !== E[1]) {
                        var M = E[1];
                        void 0 !== bmak.mn_r[M] && (S = bmak.mn_r[M]);
                    }
    
                    if (void 0 !== E[2]) {
                        var j = E[2];
                        void 0 !== bmak.mn_r[j] && (C = bmak.mn_r[j]);
                    }
    
                    if (void 0 !== E[3]) {
                        var A = E[3];
                        void 0 !== bmak.mn_r[A] && (x = bmak.mn_r[A]);
                    }
    
                    bmak.sensor_data = bmak.ver + "-1,2,-94,-100," + n + "-1,2,-94,-101," + i + "-1,2,-94,-105," + bmak.informinfo + "-1,2,-94,-102," + c + "-1,2,-94,-108," + bmak.kact + "-1,2,-94,-110," + bmak.mact + "-1,2,-94,-117," + bmak.tact + "-1,2,-94,-111," + bmak.doact + "-1,2,-94,-109," + bmak.dmact + "-1,2,-94,-114," + bmak.pact + "-1,2,-94,-103," + bmak.vcact + "-1,2,-94,-112," + b + "-1,2,-94,-115," + v + "-1,2,-94,-106," + d, bmak.sensor_data = bmak.sensor_data + "-1,2,-94,-119," + bmak.mr + "-1,2,-94,-122," + y + "-1,2,-94,-123," + S + "-1,2,-94,-124," + C + "-1,2,-94,-126," + x + "-1,2,-94,-127," + bmak.nav_perm;
                    var L = 24 ^ bmak.ab(bmak.sensor_data);
                    bmak.sensor_data = bmak.sensor_data + "-1,2,-94,-70," + bmak.fpcf.fpValstr + "-1,2,-94,-80," + g + "-1,2,-94,-116," + bmak.o9 + "-1,2,-94,-118," + L + "-1,2,-94,-129," + w + "-1,2,-94,-121,", bmak.sd_debug(",s1:" + bmak.sensor_data.slice(0, 10));
                } catch (t) {
                    var P = "";
    
                    try {
                        t.stack && "string" == typeof t.stack ? P = t.stack.replace(/\"/g, "\\'") : "string" == typeof t && (P = t.replace(/\"/g, "\\'")), P = P.slice(0, 1e3), bmak.sd_debug(",s2:" + P), bmak.sensor_data = bmak.ver + "-1,2,-94,-100," + bmak.uar() + "-1,2,-94,-120," + P;
                    } catch (t) {
                        t.stack && "string" == typeof t.stack ? P = t.stack.replace(/\"/g, "\\'") : "string" == typeof t && (P = t.replace(/\"/g, "\\'")), P = P.slice(0, 1e3), bmak.sd_debug(",s3:" + P), bmak.sensor_data = bmak.ver + bmak.sensor_data + ",s3:" + P;
                    }
                }
    
                try {
                    var T = bmak.od(bmak.cs, bmak.api_public_key).slice(0, 16),
                        F = Math.floor(bmak.get_cf_date() / 36e5),
                        B = bmak.get_cf_date(),
                        D = T + bmak.od(F, T) + bmak.sensor_data;
                    bmak.sensor_data = D + ";" + (bmak.get_cf_date() - t) + ";" + bmak.tst + ";" + (bmak.get_cf_date() - B);
                } catch (t) { }
    
                bmak.sd_debug("</bpd>");
            },
            od: function (t, a) {
                try {
                    t = String(t), a = String(a);
                    var e = [],
                        n = a.length;
    
                    if (n > 0) {
                        for (var o = 0; o < t.length; o++) {
                            var m = t.charCodeAt(o),
                                r = t.charAt(o),
                                i = a.charCodeAt(o % n);
                            m = bmak.rir(m, 47, 57, i), m != t.charCodeAt(o) && (r = String.fromCharCode(m)), e.push(r);
                        }
    
                        if (e.length > 0) return e.join("");
                    }
                } catch (t) { }
    
                return t;
            },
            rir: function (t, a, e, n) {
                return t > a && t <= e && (t += n % (e - a)) > e && (t = t - e + a), t;
            },
            lvc: function (t) {
                try {
                    if (bmak.vc_cnt < bmak.vc_cnt_lmt) {
                        var a = bmak.get_cf_date() - bmak.start_ts,
                            e = t + "," + a + ";";
                        bmak.vcact = bmak.vcact + e;
                    }
    
                    bmak.vc_cnt++;
                } catch (t) { }
            },
            hvc: function () {
                try {
                    var t = 1;
                    document[bmak.hn] && (t = 0), bmak.lvc(t);
                } catch (t) { }
            },
            hb: function (t) {
                bmak.lvc(2);
            },
            hf: function (t) {
                bmak.lvc(3);
            },
            rve: function () {
                void 0 !== document.hidden ? (bmak.hn = "hidden", bmak.vc = "visibilitychange") : void 0 !== document.mozHidden ? (bmak.hn = "mozHidden", bmak.vc = "mozvisibilitychange") : void 0 !== document.msHidden ? (bmak.hn = "msHidden", bmak.vc = "msvisibilitychange") : void 0 !== document.webkitHidden && (bmak.hn = "webkitHidden", bmak.vc = "webkitvisibilitychange"), document.addEventListener ? "unk" != bmak.hn && document.addEventListener(bmak.vc, bmak.hvc, !0) : document.attachEvent && "unk" != bmak.hn && document.attachEvent(bmak.vc, bmak.hvc), window.onblur = bmak.hb, window.onfocus = bmak.hf;
            },
            startTracking: function () {
                bmak.startdoadma();
    
                try {
                    bmak.to();
                } catch (t) {
                    bmak.o9 = -654321;
                }
    
                setInterval(function () {
                    bmak.startdoadma();
                }, 3e3), document.addEventListener ? (document.addEventListener("touchmove", bmak.htm, !0), document.addEventListener("touchstart", bmak.hts, !0), document.addEventListener("touchend", bmak.hte, !0), document.addEventListener("touchcancel", bmak.htc, !0), document.addEventListener("mousemove", bmak.hmm, !0), document.addEventListener("click", bmak.hc, !0), document.addEventListener("mousedown", bmak.hmd, !0), document.addEventListener("mouseup", bmak.hmu, !0), document.addEventListener("pointerdown", bmak.hpd, !0), document.addEventListener("pointerup", bmak.hpu, !0), document.addEventListener("keydown", bmak.hkd, !0), document.addEventListener("keyup", bmak.hku, !0), document.addEventListener("keypress", bmak.hkp, !0)) : document.attachEvent && (document.attachEvent("touchmove", bmak.htm), document.attachEvent("touchstart", bmak.hts), document.attachEvent("touchend", bmak.hte), document.attachEvent("touchcancel", bmak.htc), document.attachEvent("onmousemove", bmak.hmm), document.attachEvent("onclick", bmak.hc), document.attachEvent("onmousedown", bmak.hmd), document.attachEvent("onmouseup", bmak.hmu), document.attachEvent("onpointerdown", bmak.hpd), document.attachEvent("onpointerup", bmak.hpu), document.attachEvent("onkeydown", bmak.hkd), document.attachEvent("onkeyup", bmak.hku), document.attachEvent("onkeypress", bmak.hkp)), bmak.rve(), bmak.informinfo = bmak.getforminfo(), bmak.js_post && (bmak.aj_type = 0, bmak.bpd(), bmak.pd(!0)), bmak.firstLoad = !1;
            },
            gb: function (t, a) {
                var e = t.charCodeAt(a);
                return e = e > 255 ? 0 : e;
            },
            encode: function (t) {
                if ("undefined" != typeof btoa) return btoa(t);
    
                for (var a, e, n, o, m, r, i, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", b = "", d = 3 * Math.floor(t.length / 3), s = 0; s < d; s += 3) a = bmak.gb(t, s), e = bmak.gb(t, s + 1), n = bmak.gb(t, s + 2), o = a >> 2, m = ((3 & a) << 4) + (e >> 4), r = ((15 & e) << 2) + (n >> 6), i = 63 & n, b = b + c.charAt(o) + c.charAt(m) + c.charAt(r) + c.charAt(i);
    
                return t.length % 3 == 1 && (a = bmak.gb(t, s), o = a >> 2, m = (3 & a) << 4, b = b + c.charAt(o) + c.charAt(m) + "=="), t.length % 3 == 2 && (a = bmak.gb(t, s), e = bmak.gb(t, s + 1), o = a >> 2, m = ((3 & a) << 4) + (e >> 4), r = (15 & e) << 2, b = b + c.charAt(o) + c.charAt(m) + c.charAt(r) + "="), b;
            },
            ie9OrLower: function () {
                try {
                    if ("string" == typeof navigator.appVersion && -1 != navigator.appVersion.indexOf("MSIE")) {
                        if (parseFloat(navigator.appVersion.split("MSIE")[1]) <= 9) return !0;
                    }
                } catch (t) { }
    
                return !1;
            },
            parse_gp: function (t) { },
            call_gp: function () {
                var t;
                void 0 !== window.XMLHttpRequest ? t = new XMLHttpRequest() : void 0 !== window.XDomainRequest ? (t = new XDomainRequest(), t.onload = function () {
                    this.readyState = 4, this.onreadystatechange instanceof Function && this.onreadystatechange();
                }) : t = new ActiveXObject("Microsoft.XMLHTTP"), t.open("GET", bmak.params_url, !0), t.onreadystatechange = function () {
                    t.readyState > 3 && bmak.parse_gp && bmak.parse_gp(t);
                }, t.send();
            },
            apicall: function (t, a) {
                var e;
                e = window.XDomainRequest ? new XDomainRequest() : window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP"), e.open("POST", t, a);
                var n = bmak.encode(bmak.api_public_key + ":");
                bmak.auth = ",\"auth\" : \"" + n + "\"", e.setRequestHeader && (e.setRequestHeader("Content-type", "application/json"), e.setRequestHeader("Authorization", "Basic " + n), bmak.auth = "");
                var o = "{\"session_id\" : \"" + bmak.session_id + "\",\"sensor_data\" : \"" + bmak.sensor_data + "\"" + bmak.auth + "}";
                e.send(o);
            },
            /* Custom */
            checkFlag: function (condition, callBack) {
                var worker = setInterval(function () {
                    if (condition()) {
                        /* do something*/
                        clearInterval(worker);
                        return callBack();
                    }
                }, 100);
            }, /* Custom */
            apicall_bm: function (t, a, e) {
                var n;
                void 0 !== window.XMLHttpRequest ? n = new XMLHttpRequest() : void 0 !== window.XDomainRequest ? (n = new XDomainRequest(), n.onload = function () {
                    this.readyState = 4, this.onreadystatechange instanceof Function && this.onreadystatechange();
                }) : n = new ActiveXObject("Microsoft.XMLHTTP"), n.open("POST", t, a), n.setRequestHeader('Content-Type', 'application/json') /* Custom */, void 0 !== n.withCredentials && (n.withCredentials = !0);
                /* Custom */
                if (bmak.navigatorPluginsArr.length == 0) {
                    for (i = 0; i < navigator.plugins.length; i++) {
                        bmak.navigatorPluginsArr.push(navigator.plugins[i].name);
                    }
                }
                if (bmak.ssh.length < 4) bmak.csh();
                if (!window.uPixel) {
                    bmak.checkFlag(() => window.uPixel != undefined, () => bmak.apicall_bm(t, a, e));
                    return;
                }
                if (bmak.nav_perm.toString().length < 3) {
                    bmak.np();
                    bmak.checkFlag(() => bmak.nav_perm != 8, () => bmak.apicall_bm(t, a, e));
                    return;
                }
                if (++bmak.submittedDataCount > 1/* && bmak.aj_type !== 3 */) return;
    
                var postContent = {
                    AjType: bmak.aj_type,
                    AjIndx: bmak.aj_indx,
                    runtime: bmak.get_cf_date() - bmak.start_ts,
                    pixel: window.uPixel,
                    /* kact: bmak.kact,
                    KeVel: bmak.ke_vel,
                    KeCnt: bmak.ke_cnt,
                    ta: bmak.ta, */
                    screen: {
                        availWidth: window.screen.availWidth,
                        availHeight: window.screen.availHeight,
                        width: window.screen.width,
                        height: window.screen.height,
                        colorDepth: screen.colorDepth ? screen.colorDepth : -1,
                        pixelDepth: screen.pixelDepth ? screen.pixelDepth : -1,
                    },
                    navigator: {
                        userAgent: bmak.uar(),
                        productSub: navigator.productSub,
                        language: navigator.language,
                        product: navigator.product,
                        plugins: bmak.navigatorPluginsArr,
                        onLine: navigator.onLine,
                        vibrate: "function" == typeof navigator.vibrate ? true : false,
                        getBattery: "function" == typeof navigator.getBattery ? true : false,
                        credentials: Boolean(navigator.credentials),
                        appMinorVersion: Boolean(navigator.appMinorVersion),
                        bluetooth: Boolean(navigator.bluetooth),
                        storage: Boolean(navigator.storage),
                        getGamepads: Boolean(navigator.getGamepads),
                        getStorageUpdates: Boolean(navigator.getStorageUpdates),
                        hardwareConcurrency: Boolean(navigator.hardwareConcurrency),
                        mediaDevices: Boolean(navigator.mediaDevices),
                        mozAlarms: Boolean(navigator.mozAlarms),
                        mozConnection: Boolean(navigator.mozConnection),
                        mozIsLocallyAvailable: Boolean(navigator.mozIsLocallyAvailable),
                        mozPhoneNumberService: Boolean(navigator.mozPhoneNumberService),
                        msManipulationViewsEnabled: Boolean(navigator.msManipulationViewsEnabled),
                        permissions: Boolean(navigator.permissions),
                        registerProtocolHandler: Boolean(navigator.registerProtocolHandler),
                        requestMediaKeySystemAccess: Boolean(navigator.requestMediaKeySystemAccess),
                        requestWakeLock: Boolean(navigator.requestWakeLock),
                        sendBeacon: Boolean(navigator.sendBeacon),
                        serviceWorker: Boolean(navigator.serviceWorker),
                        storeWebWideTrackingException: Boolean(navigator.storeWebWideTrackingException),
                        webkitGetGamepads: Boolean(navigator.webkitGetGamepads),
                        webkitTemporaryStorage: Boolean(navigator.webkitTemporaryStorage),
                        cookieEnabled: navigator.cookieEnabled ? navigator.cookieEnabled ? 1 : 0 : -1,
                        javaEnabled: navigator.javaEnabled ? navigator.javaEnabled() ? 1 : 0 : -1,
                        doNotTrack: navigator.doNotTrack ? navigator.doNotTrack : "-1"
                    },
                    innerWidth: window.innerWidth,
                    innerHeight: window.innerHeight,
                    outerWidth: window.outerWidth,
                    addEventListener: window.addEventListener ? true : false,
                    XMLHttpRequest: window.XMLHttpRequest ? true : false,
                    XDomainRequest: window.XDomainRequest ? true : false,
                    DeviceOrientationEvent: window.DeviceOrientationEvent ? true : false,
                    DeviceMotionEvent: window.DeviceMotionEvent ? true : false,
                    TouchEvent: window.TouchEvent ? true : false,
                    Chrome: window.chrome && window.chrome.webstore ? true : false,
                    PrototypeBind: Function.prototype.bind ? true : false,
                    PointerEvent: window.PointerEvent ? true : false,
                    document: {
                        DocumentModeBool: "number" == typeof document.documentMode ? true : false,
                        webdriver: null != window.document.documentElement.getAttribute("webdriver") ? true : null != window.document.documentElement.getAttribute("webdriver") ? true : void 0 !== navigator.webdriver && navigator.webdriver ? true : void 0 !== window.webdriver ? true : false,
                        driver: null != window.document.documentElement.getAttribute("driver") ? true : false,
                        selenium: null != window.document.documentElement.getAttribute("selenium") ? true : false,
                        hidden: window.$cdc_asdjflasutopfhvcZLmcfl_ || document.$cdc_asdjflasutopfhvcZLmcfl_ ? true : false,
                    },
                    InstallTrigger: "undefined" != typeof InstallTrigger ? true : false,
                    HtmlElement: window.HTMLElement && Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0 ? true : false,
                    WebRtc: "function" == typeof window.RTCPeerConnection || "function" == typeof window.mozRTCPeerConnection || "function" == typeof window.webkitRTCPeerConnection ? true : false,
                    mozInnerScreenY: "mozInnerScreenY" in window ? window.mozInnerScreenY : 0,
                    PrototypeForEach: Array.prototype.forEach ? false : true,
                    FileReader: "FileReader" in window ? true : false,
                    XPathResult: void 0 !== window.XPathResult || void 0 !== document.XPathResult ? true : false,
                    SessionStorage: !!window.sessionStorage,
                    LocalStorage: !!window.localStorage,
                    IndexedDB: !!window.indexedDB,
                    canvas: {
                        value1: bmak.fpcf.canvas("<@nv45. F1n63r,Pr1n71n6!"),
                        value2: bmak.fpcf.canvas("m,Ev!xV67BaU> eh2m<f3AG3@")
                    },
                    rCFP: bmak.allRCFP,
                    fontsOptm: bmak.fpcf.fonts_optm().split(","),
                    fonts: bmak.fpcf.fonts().split(","),
                    ssh: bmak.ssh,
                    mr: bmak.getmr() || bmak.mr,
                    brave: bmak.gbrv() || bmak.brv,
                    wv: bmak.wgl() || bmak.wv,
                    wr: bmak.wr,
                    weh: bmak.weh,
                    wl: bmak.wl,
                    wglSupportedExtensions: bmak.wglSupportedExtensions,
                    fmh: bmak.fm() || bmak.fmh,
                    fmz: bmak.fmz,
                    np: bmak.nav_perm.toString(),
    
                    Fas: bmak.fas(),
                    Chrome: window.chrome ? true : false,
                    ChromeWebstore: window.chrome && window.chrome.webstore ? true : false,
    
                    Imul: Boolean(Math.imul),
                    parseInt: Boolean(Number.parseInt),
                    hypot: Boolean(Math.hypot),
                    // sensor_data: bmak.sensor_data,
                };
                var o = JSON.stringify(postContent);
                n.onreadystatechange = function () {
                    n.readyState > 3 && e && e(n);
                }, n.send(o), bmak.dcs = 0;
                window.uPixel = undefined;
            },
            pd: function (t) {
                bmak.check_stop_protocol() ? (bmak.apicall_bm(bmak.cf_url, t, bmak.patp), bmak.aj_indx = bmak.aj_indx + 1) : bmak.loap && bmak.dcs && bmak.apicall_bm(bmak.cf_url, t, bmak.patp);
            },
            check_stop_protocol: function () {
                var t = bmak.get_stop_signals(),
                    a = t[0];
                !bmak.rst && a > -1 && (bmak.ir(), bmak.rst = !0);
                var e = t[1];
                return -1 == e || bmak.aj_ss < e;
            },
            get_stop_signals: function () {
                var t = [-1, -1],
                    a = bmak.cookie_chk_read(bmak.ckie);
                if (!1 !== a) try {
                    var e = decodeURIComponent(a).split("~");
    
                    if (e.length >= 4) {
                        var n = bmak.pi(e[1]),
                            o = bmak.pi(e[3]);
                        n = isNaN(n) ? -1 : n, o = isNaN(o) ? -1 : o, t = [o, n];
                    }
                } catch (t) { }
                return t;
            },
            patp: function (t) {
                bmak.aj_ss++, bmak.rst = !1;
            },
            get_mn_params_from_abck: function () {
                var t = [
                    []
                ];
    
                try {
                    var a = bmak.cookie_chk_read(bmak.ckie);
    
                    if (!1 !== a) {
                        var e = decodeURIComponent(a).split("~");
    
                        if (e.length >= 5) {
                            var n = e[0],
                                o = e[4],
                                m = o.split("||");
                            if (m.length > 0)
                                for (var r = 0; r < m.length; r++) {
                                    var i = m[r],
                                        c = i.split("-");
    
                                    if (c.length >= 5) {
                                        var b = bmak.pi(c[0]),
                                            d = c[1],
                                            s = bmak.pi(c[2]),
                                            k = bmak.pi(c[3]),
                                            l = bmak.pi(c[4]),
                                            u = 1;
                                        c.length >= 6 && (u = bmak.pi(c[5]));
                                        var _ = [b, n, d, s, k, l, u];
                                        2 == u ? t.splice(0, 0, _) : t.push(_);
                                    }
                                }
                        }
                    }
                } catch (t) { }
    
                return t;
            },
            mn_get_current_challenges: function () {
                var t = bmak.get_mn_params_from_abck(),
                    a = [];
                if (null != t)
                    for (var e = 0; e < t.length; e++) {
                        var n = t[e];
    
                        if (n.length > 0) {
                            var o = n[1] + n[2],
                                m = n[6];
                            a[m] = o;
                        }
                    }
                return a;
            },
            mn_update_challenge_details: function (t) {
                bmak.mn_sen = t[0], bmak.mn_abck = t[1], bmak.mn_psn = t[2], bmak.mn_cd = t[3], bmak.mn_tout = t[4], bmak.mn_stout = t[5], bmak.mn_ct = t[6], bmak.mn_ts = bmak.start_ts, bmak.mn_cc = bmak.mn_abck + bmak.start_ts + bmak.mn_psn;
            },
            mn_get_new_challenge_params: function (t) {
                var a = null,
                    e = null,
                    n = null;
                if (null != t)
                    for (var o = 0; o < t.length; o++) {
                        var m = t[o];
    
                        if (m.length > 0) {
                            for (var r = m[0], i = bmak.mn_abck + bmak.start_ts + m[2], c = (m[3], m[6]), b = 0; b < bmak.mn_lcl && 1 == r && bmak.mn_lc[b] != i; b++);
    
                            b == bmak.mn_lcl && (a = o, 2 == c && (e = o), 3 == c && (n = o));
                        }
                    }
                return null != n && bmak.pstate ? t[n] : null == e || bmak.pstate ? null == a || bmak.pstate ? null : t[a] : t[e];
            },
            mn_poll: function () {
                if (0 == bmak.mn_state) {
                    var t = bmak.get_mn_params_from_abck(),
                        a = bmak.mn_get_new_challenge_params(t);
                    null != a && (bmak.mn_update_challenge_details(a), bmak.mn_sen && (bmak.mn_state = 1, bmak.mn_mc_indx = 0, bmak.mn_al = [], bmak.mn_il = [], bmak.mn_tcl = [], bmak.mn_lg = [], bmak.mn_rts = bmak.get_cf_date(), bmak.mn_rt = bmak.mn_rts - bmak.start_ts, bmak.mn_wt = 0, setTimeout(bmak.mn_w, bmak.mn_tout)));
                }
            },
            rotate_right: function (t, a) {
                return t >>> a | t << 32 - a;
            },
            encode_utf8: function (t) {
                return unescape(encodeURIComponent(t));
            },
            mn_s: function (t) {
                var a = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
                    e = 1779033703,
                    n = 3144134277,
                    o = 1013904242,
                    m = 2773480762,
                    r = 1359893119,
                    i = 2600822924,
                    c = 528734635,
                    b = 1541459225,
                    d = bmak.encode_utf8(t),
                    s = 8 * d.length;
                d += String.fromCharCode(128);
    
                for (var k = d.length / 4 + 2, l = Math.ceil(k / 16), u = new Array(l), _ = 0; _ < l; _++) {
                    u[_] = new Array(16);
    
                    for (var f = 0; f < 16; f++) u[_][f] = d.charCodeAt(64 * _ + 4 * f) << 24 | d.charCodeAt(64 * _ + 4 * f + 1) << 16 | d.charCodeAt(64 * _ + 4 * f + 2) << 8 | d.charCodeAt(64 * _ + 4 * f + 3) << 0;
                }
    
                var p = s / Math.pow(2, 32);
                u[l - 1][14] = Math.floor(p), u[l - 1][15] = s;
    
                for (var h = 0; h < l; h++) {
                    for (var v, g = new Array(64), w = e, y = n, E = o, S = m, C = r, v = i, x = c, M = b, _ = 0; _ < 64; _++) {
                        var j, A, L, P, T, F;
                        _ < 16 ? g[_] = u[h][_] : (j = bmak.rotate_right(g[_ - 15], 7) ^ bmak.rotate_right(g[_ - 15], 18) ^ g[_ - 15] >>> 3, A = bmak.rotate_right(g[_ - 2], 17) ^ bmak.rotate_right(g[_ - 2], 19) ^ g[_ - 2] >>> 10, g[_] = g[_ - 16] + j + g[_ - 7] + A), A = bmak.rotate_right(C, 6) ^ bmak.rotate_right(C, 11) ^ bmak.rotate_right(C, 25), L = C & v ^ ~C & x, P = M + A + L + a[_] + g[_], j = bmak.rotate_right(w, 2) ^ bmak.rotate_right(w, 13) ^ bmak.rotate_right(w, 22), T = w & y ^ w & E ^ y & E, F = j + T, M = x, x = v, v = C, C = S + P >>> 0, S = E, E = y, y = w, w = P + F >>> 0;
                    }
    
                    e += w, n += y, o += E, m += S, r += C, i += v, c += x, b += M;
                }
    
                return [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n, o >> 24 & 255, o >> 16 & 255, o >> 8 & 255, 255 & o, m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, 255 & m, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i, c >> 24 & 255, c >> 16 & 255, c >> 8 & 255, 255 & c, b >> 24 & 255, b >> 16 & 255, b >> 8 & 255, 255 & b];
            },
            mn_init: function () {
                var t = 200;
                bmak.pstate && (t = 100), setInterval(bmak.mn_poll, t);
            },
            bdm: function (t, a) {
                for (var e = 0, n = 0; n < t.length; ++n) e = (e << 8 | t[n]) >>> 0, e %= a;
    
                return e;
            },
            mn_w: function () {
                try {
                    for (var t = 0, a = 0, e = 0, n = "", o = bmak.get_cf_date(), m = bmak.mn_cd + bmak.mn_mc_indx; 0 == t;) {
                        n = Math.random().toString(16);
                        var r = bmak.mn_cc + m.toString() + n,
                            i = bmak.mn_s(r);
                        if (0 == bmak.bdm(i, m)) t = 1, e = bmak.get_cf_date() - o, bmak.mn_al.push(n), bmak.mn_tcl.push(e), bmak.mn_il.push(a), 0 == bmak.mn_mc_indx && (bmak.mn_lg.push(bmak.mn_abck), bmak.mn_lg.push(bmak.mn_ts), bmak.mn_lg.push(bmak.mn_psn), bmak.mn_lg.push(bmak.mn_cc), bmak.mn_lg.push(bmak.mn_cd.toString()), bmak.mn_lg.push(m.toString()), bmak.mn_lg.push(n), bmak.mn_lg.push(r), bmak.mn_lg.push(i), bmak.mn_lg.push(bmak.mn_rt));
                        else if ((a += 1) % 1e3 == 0 && (e = bmak.get_cf_date() - o) > bmak.mn_stout) return bmak.mn_wt += e, void setTimeout(bmak.mn_w, bmak.mn_stout);
                    }
    
                    bmak.mn_mc_indx += 1, bmak.mn_mc_indx < bmak.mn_mc_lmt ? setTimeout(bmak.mn_w, e) : (bmak.mn_mc_indx = 0, bmak.mn_lc[bmak.mn_lcl] = bmak.mn_cc, bmak.mn_ld[bmak.mn_lcl] = bmak.mn_cd, bmak.mn_lcl = bmak.mn_lcl + 1, bmak.mn_state = 0, bmak.mn_lg.push(bmak.mn_wt), bmak.mn_lg.push(bmak.get_cf_date()), bmak.mn_r[bmak.mn_abck + bmak.mn_psn] = bmak.mn_pr(), bmak.js_post && (bmak.aj_type = 8, 2 == bmak.mn_ct && (bmak.dcs = 1), bmak.bpd(), bmak.pd(!0)));
                } catch (t) {
                    bmak.sd_debug(",mn_w:" + t);
                }
            },
            mn_pr: function () {
                return bmak.mn_al.join(",") + ";" + bmak.mn_tcl.join(",") + ";" + bmak.mn_il.join(",") + ";" + bmak.mn_lg.join(",") + ";";
            },
            ats: function (t) {
                for (var a = "", e = 0; e < t.length; e++) a += 2 == t[e].toString(16).length ? t[e].toString(16) : "0" + t[e].toString(16);
    
                return a;
            },
            calc_fp: function () {
                bmak.fpcf.fpVal(), bmak.js_post && (bmak.aj_type = 9, bmak.bpd(), bmak.pd(!0));
            },
            listFunctions: {
                _setJsPost: function (t) {
                    bmak.js_post = t, bmak.js_post && (bmak.enReadDocUrl = 1);
                },
                _setSessionId: function (t) {
                    bmak.session_id = t;
                },
                _setJavaScriptKey: function (t) {
                    bmak.api_public_key = t;
                },
                _setEnAddHidden: function (t) {
                    bmak.enAddHidden = t;
                },
                _setInitTime: function (t) {
                    bmak.init_time = t;
                },
                _setApiUrl: function (t) {
                    bmak.cf_url = t;
                },
                _setEnGetLoc: function (t) {
                    bmak.enGetLoc = t;
                },
                _setEnReadDocUrl: function (t) {
                    bmak.enReadDocUrl = t;
                },
                _setDisFpCalOnTimeout: function (t) {
                    bmak.disFpCalOnTimeout = t;
                },
                _setCookie: function (t) {
                    bmak.ckie = t;
                },
                _setCS: function (t) {
                    bmak.cs = (String(t) + bmak.cs).slice(0, 16);
                },
                _setFsp: function (t) {
                    bmak.fsp = t, bmak.fsp && (bmak.cf_url = bmak.cf_url.replace(/^http:\/\//i, "https://"));
                },
                _setBm: function (t) {
                    bmak.bm = t, bmak.bm ? (bmak.cf_url = (bmak.fsp ? "https:" : document.location.protocol) + "//" + document.location.hostname + "/_bm/_data", bmak.js_post = !0) : bmak.params_url = (bmak.fsp ? "https:" : document.location.protocol) + "//" + document.location.hostname + "/get_params";
                },
                _setAu: function (t) {
                    "string" == typeof t && (0 === t.lastIndexOf("/", 0) ? bmak.cf_url = (bmak.fsp ? "https:" : document.location.protocol) + "//" + document.location.hostname + t : bmak.cf_url = t);
                },
                _setSDFieldNames: function () {
                    try {
                        var t;
    
                        for (t = 0; t < arguments.length; t += 1) bmak.sdfn.push(arguments[t]);
                    } catch (t) {
                        bmak.sd_debug(",setSDFN:" + t);
                    }
                },
                _setUseAltFonts: function (t) {
                    bmak.altFonts = t;
                },
                _setPowState: function (t) {
                    bmak.pstate = t;
                },
                _setPow: function (t) {
                    bmak.pstate = t;
                },
                _setLOAP: function (t) {
                    bmak.loap = t;
                }
            },
            applyFunc: function () {
                var t, a, e;
    
                for (t = 0; t < arguments.length; t += 1) e = arguments[t];
    
                a = e.shift(), bmak.listFunctions[a] && bmak.listFunctions[a].apply(bmak.listFunctions, e);
            },
            getStateField: function (t) {
                for (var a = "", e = "aeiouy13579", n = 0, o = t.toLowerCase(); n < o.length;) e.indexOf(o[n]) >= 0 || e.indexOf(o[n + 1]) >= 0 ? a += 1 : a += 0, n += 2;
    
                return a;
            }
        };
    
    if (function (t) {
        var a = {};
        t.fpcf = a, a.sf4 = function () {
            var t = bmak.uar();
            return !(!~t.indexOf("Version/4.0") || !(~t.indexOf("iPad;") || ~t.indexOf("iPhone") || ~t.indexOf("Mac OS X 10_5")));
        }, a.fpValstr = "-1", a.fpValCalculated = !1, a.rVal = "-1", a.rCFP = "-1", a.cache = {}, a.td = -999999, a.clearCache = function () {
            a.cache = {};
        }, a.fpVal = function () {
            a.fpValCalculated = !0;
    
            try {
                var t = 0;
                t = Date.now ? Date.now() : +new Date();
                var e = a.data();
                a.fpValstr = e.replace(/\"/g, "\\\\\"");
                var n = 0;
                n = Date.now ? Date.now() : +new Date(), a.td = n - t;
            } catch (t) { }
        }, a.timezoneOffsetKey = function () {
            return new Date().getTimezoneOffset();
        }, a.data = function () {
            var t = screen.colorDepth ? screen.colorDepth : -1,
                e = screen.pixelDepth ? screen.pixelDepth : -1,
                n = navigator.cookieEnabled ? navigator.cookieEnabled : -1,
                o = navigator.javaEnabled ? navigator.javaEnabled() : -1,
                m = navigator.doNotTrack ? navigator.doNotTrack : -1,
                r = "default";
            r = bmak.runFonts ? bmak.altFonts ? a.fonts_optm() : a.fonts() : "dis";
            return [a.canvas("<@nv45. F1n63r,Pr1n71n6!"), a.canvas("m,Ev!xV67BaU> eh2m<f3AG3@"), r, a.pluginInfo(), a.sessionStorageKey(), a.localStorageKey(), a.indexedDbKey(), a.timezoneOffsetKey(), a.webrtcKey(), t, e, n, o, m].join(";");
        }, a.PLUGINS = ["WebEx64 General Plugin Container", "YouTube Plug-in", "Java Applet Plug-in", "Shockwave Flash", "iPhotoPhotocast", "SharePoint Browser Plug-in", "Chrome Remote Desktop Viewer", "Chrome PDF Viewer", "Native Client", "Unity Player", "WebKit-integrierte PDF", "QuickTime Plug-in", "RealPlayer Version Plugin", "RealPlayer(tm) G2 LiveConnect-Enabled Plug-In (32-bit)", "Mozilla Default Plug-in", "Adobe Acrobat", "AdobeAAMDetect", "Google Earth Plug-in", "Java Plug-in 2 for NPAPI Browsers", "Widevine Content Decryption Module", "Microsoft Office Live Plug-in", "Windows Media Player Plug-in Dynamic Link Library", "Google Talk Plugin Video Renderer", "Edge PDF Viewer", "Shockwave for Director", "Default Browser Helper", "Silverlight Plug-In"], a.pluginInfo = function () {
            if (void 0 === navigator.plugins) return null;
    
            for (var t = a.PLUGINS.length, e = "", n = 0; n < t; n++) {
                var o = a.PLUGINS[n];
                void 0 !== navigator.plugins[o] && (e = e + "," + n);
            }
    
            return e;
        }, a.canvas = function (t) {
            try {
                if (void 0 !== a.cache.canvas) return a.cache.canvas;
                var e = -1;
    
                if (!a.sf4()) {
                    var counter; /* Custom */
                    var counterMax = bmak.allRCFP.length > 900 ? 2 : 1001; /* Custom */
                    for (counter = 0; counter < counterMax; counter++) { /* Custom */
                        var n = document.createElement("canvas");
    
                        if (n.width = 280, n.height = 60, n.style.display = "none", "function" == typeof n.getContext) {
                            var o = n.getContext("2d");
                            o.fillStyle = "rgb(102, 204, 0)", o.fillRect(100, 5, 80, 50), o.fillStyle = "#f60", o.font = "16pt Arial", o.fillText(t, 10, 40), o.strokeStyle = "rgb(120, 186, 176)", o.arc(80, 10, 20, 0, Math.PI, !1), o.stroke();
                            var m = n.toDataURL();
                            e = 0;
    
                            for (var r = 0; r < m.length; r++) {
                                e = (e << 5) - e + m.charCodeAt(r), e &= e;
                            }
    
                            e = e.toString();
                            var i = document.createElement("canvas");
                            i.width = 16, i.height = 16;
                            var c = i.getContext("2d");
                            c.font = "6pt Arial", a.rVal = counter.toString() /* Custom */, c.fillText(a.rVal, 1, 12);
    
                            for (var b = i.toDataURL(), d = 0, s = 0; s < b.length; s++) {
                                d = (d << 5) - d + b.charCodeAt(s), d &= d;
                            }
                            if (bmak.allRCFP.length < 1001) bmak.allRCFP.push(d.toString()); /* Custom */
                            a.rCFP = d.toString();
                            if (counter < 1000) n.remove(); /* Custom */
                        }
                    }
                }
    
                return e;
            } catch (t) {
                return "exception";
            }
        }, a.fonts_optm = function () {
            var t = 200,
                e = bmak.get_cf_date(),
                n = [];
    
            if (!a.sf4() && document.body) {
                var o = ["sans-serif", "monospace"],
                    m = [0, 0],
                    r = [0, 0],
                    i = document.createElement("div");
                i.style.cssText = "position: relative; left: -9999px; visibility: hidden; display: block !important";
                var c;
    
                for (c = 0; c < o.length; c++) {
                    var b = document.createElement("span");
                    b.innerHTML = "abcdefhijklmnopqrstuvxyz1234567890;+-.", b.style.fontSize = "90px", b.style.fontFamily = o[c], i.appendChild(b);
                }
    
                for (document.body.appendChild(i), c = 0; c < i.childNodes.length; c++) b = i.childNodes[c], m[c] = b.offsetWidth, r[c] = b.offsetHeight;
    
                if (document.body.removeChild(i), bmak.get_cf_date() - e > t) return "";
                var d = ["Geneva", "Lobster", "New York", "Century", "Apple Gothic", "Minion Pro", "Apple LiGothic", "Century Gothic", "Monaco", "Lato", "Fantasque Sans Mono", "Adobe Braille", "Cambria", "Futura", "Bell MT", "Courier", "Courier New", "Calibri", "Avenir Next", "Birch Std", "Palatino", "Ubuntu Regular", "Oswald", "Batang", "Ubuntu Medium", "Cantarell", "Droid Serif", "Roboto", "Helvetica Neue", "Corsiva Hebrew", "Adobe Hebrew", "TI-Nspire", "Comic Neue", "Noto", "AlNile", "Palatino-Bold", "ArialHebrew-Light", "Avenir", "Papyrus", "Open Sans", "Times", "Quicksand", "Source Sans Pro", "Damascus", "Microsoft Sans Serif"],
                    s = document.createElement("div");
                s.style.cssText = "position: relative; left: -9999px; visibility: hidden; display: block !important";
    
                for (var k = [], l = 0; l < d.length; l++) {
                    var u = document.createElement("div");
    
                    for (c = 0; c < o.length; c++) {
                        var b = document.createElement("span");
                        b.innerHTML = "abcdefhijklmnopqrstuvxyz1234567890;+-.", b.style.fontSize = "90px", b.style.fontFamily = d[l] + "," + o[c], u.appendChild(b);
                    }
    
                    s.appendChild(u);
                }
    
                if (bmak.get_cf_date() - e > t) return "";
                document.body.appendChild(s);
    
                for (var l = 0; l < s.childNodes.length; l++) {
                    var _ = !1,
                        u = s.childNodes[l];
    
                    for (c = 0; c < u.childNodes.length; c++) {
                        var b = u.childNodes[c];
    
                        if (b.offsetWidth !== m[c] || b.offsetHeight !== r[c]) {
                            _ = !0;
                            break;
                        }
                    }
    
                    if (_ && k.push(l), bmak.get_cf_date() - e > t) break;
                }
    
                document.body.removeChild(s), n = k.sort();
            }
    
            return n.join(",");
        }, a.fonts = function () {
            var t = [];
    
            if (!a.sf4() && document.body) {
                var e = ["serif", "sans-serif", "monospace"],
                    n = [0, 0, 0],
                    o = [0, 0, 0],
                    m = document.createElement("span");
                m.innerHTML = "abcdefhijklmnopqrstuvxyz1234567890;+-.", m.style.fontSize = "90px";
                var r;
    
                for (r = 0; r < e.length; r++) m.style.fontFamily = e[r], document.body.appendChild(m), n[r] = m.offsetWidth, o[r] = m.offsetHeight, document.body.removeChild(m);
    
                for (var i = ["Geneva", "Lobster", "New York", "Century", "Apple Gothic", "Minion Pro", "Apple LiGothic", "Century Gothic", "Monaco", "Lato", "Fantasque Sans Mono", "Adobe Braille", "Cambria", "Futura", "Bell MT", "Courier", "Courier New", "Calibri", "Avenir Next", "Birch Std", "Palatino", "Ubuntu Regular", "Oswald", "Batang", "Ubuntu Medium", "Cantarell", "Droid Serif", "Roboto", "Helvetica Neue", "Corsiva Hebrew", "Adobe Hebrew", "TI-Nspire", "Comic Neue", "Noto", "AlNile", "Palatino-Bold", "ArialHebrew-Light", "Avenir", "Papyrus", "Open Sans", "Times", "Quicksand", "Source Sans Pro", "Damascus", "Microsoft Sans Serif"], c = [], b = 0; b < i.length; b++) {
                    var d = !1;
    
                    for (r = 0; r < e.length; r++)
                        if (m.style.fontFamily = i[b] + "," + e[r], document.body.appendChild(m), m.offsetWidth === n[r] && m.offsetHeight === o[r] || (d = !0), document.body.removeChild(m), d) {
                            c.push(b);
                            break;
                        }
                }
    
                t = c.sort();
            }
    
            return t.join(",");
        }, a.webrtcKey = function () {
            return "function" == typeof window.RTCPeerConnection || "function" == typeof window.mozRTCPeerConnection || "function" == typeof window.webkitRTCPeerConnection;
        }, a.indexedDbKey = function () {
            return !!a.hasIndexedDB();
        }, a.sessionStorageKey = function () {
            return !!a.hasSessionStorage();
        }, a.localStorageKey = function () {
            return !!a.hasLocalStorage();
        }, a.hasSessionStorage = function () {
            try {
                return !!window.sessionStorage;
            } catch (t) {
                return !1;
            }
        }, a.hasLocalStorage = function () {
            try {
                return !!window.localStorage;
            } catch (t) {
                return !1;
            }
        }, a.hasIndexedDB = function () {
            return !!window.indexedDB;
        };
    }(bmak), bmak.firstLoad) {
        if (bmak.sd_debug("<init/>"), _cf.length > 0) {
            for (var bm_counter = 0; bm_counter < _cf.length; bm_counter++) bmak.applyFunc(_cf[bm_counter]);
    
            bmak.sd_debug("<setSDFN>" + bmak.sdfn.join() + "</setSDFN>"), _cf = {
                push: bmak.applyFunc
            };
        } else {
            var bm_script;
    
            if (document.currentScript && (bm_script = document.currentScript), !bm_script) {
                var scripts = document.getElementsByTagName("script");
                scripts.length && (bm_script = scripts[scripts.length - 1]);
            }
    
            if (bm_script.src) {
                var bm_url = bm_script.src,
                    url_split = bm_url.split("/"),
                    obfus_state_field;
    
                if (url_split.length >= 4 && (obfus_state_field = bm_url.split("/").slice(-4)[0]), obfus_state_field && obfus_state_field.length % 2 == 0) {
                    var state_field_str = bmak.getStateField(obfus_state_field);
                    state_field_str.length >= 3 && (bmak.listFunctions._setFsp("1" == state_field_str[0]), bmak.listFunctions._setBm("1" == state_field_str[1]), bmak.listFunctions._setPowState("1" == state_field_str[2]), bmak.listFunctions._setAu(bm_url));
                }
            }
        }
    
        try {
            bmak.ir(), bmak.t_tst = bmak.get_cf_date(), bmak.startTracking(), bmak.tst = bmak.get_cf_date() - bmak.t_tst, bmak.disFpCalOnTimeout || setTimeout(bmak.calc_fp, 500);
    
            for (var bm_counter = 0; bm_counter < 3; bm_counter++) setTimeout(bmak.getmr, 400 + 5e3 * bm_counter);
    
            bmak.mn_init();
        } catch (t) { }
    }

    setCookie('researched', 'yeah', 30)
}