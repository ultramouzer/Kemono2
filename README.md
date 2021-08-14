# Kemono project

## Setup
```sh
git clone https://github.com/OpenYiff/Kemono2.git kemono-2
cd kemono-2
cp .env.example .env # open .env and configure
cp flask.cfg.example flask.cfg # open flask.cfg and configure
```
## Docker
```sh
cp kitsune.py.example kitsune.py # open kitsune.py and configure
```

### Develop
```sh
docker-compose --file docker-compose.dev.yml build
docker-compose --file docker-compose.dev.yml up
```
Open `http://localhost:5000/` in the browser.

#### Database
Assuming the dev setup is running:

1. Retrieve a database dump.
2. Run this command in the folder of said dump:
    ```sh
    cat db-filename.dump | gunzip | docker exec --interactive kemono-db psql --username=nano kemonodb
    ```
3. Restart the archiver to trigger migrations:
    ```sh
    docker restart kemono-archiver
    ```
    If that didn't start the migrations, refer to [FAQ section](#my-dump-doesnt-migrate) for manual instructions.

#### Files
Assuming the dev setup is running:

1. Retrieve the files in required folder structure.
2. Copy them into nginx image:
    ```sh
    docker cp ./ kemono-nginx:/storage
    ```
3. Add required permissions to that folder:
    ```sh
    docker exec kemono-nginx chown --recursive nginx /storage
    ```

### Build
```sh
docker-compose build
docker-compose up --detach
```

Open `http://localhost:8000/` in the browser.

## Manual
TODO: write installation and setup instructions

This assumes you have Python 3, Node 12+ installed and a running PostgreSQL server.
```sh
# make sure your database is initialized
# cd to kemono directory
pip install virtualenv
virtualenv venv
source venv/bin/activate # venv\Scripts\activate on Windows
pip install --requirement requirements.txt
cd client && npm install && npm run build && cd ..
cp .env.example .env # open .env and configure
cp flask.cfg.example flask.cfg # open flask.cfg and configure
set FLASK_APP=server.py
set FLASK_ENV=development
flask run
```

## Frequently Asked Questions

### __My dump doesn't migrate.__
Assuming the running setup:

1. Enter into database container:
    ```sh
    docker exec --interactive --tty kemono-db psql --username=nano kemonodb
    ```
2. Check the contents of the `posts` table:
    ```sql
    SELECT * FROM posts;
    ```
    Most likely it has 0 rows.
3. Move contents of `booru_posts` to `posts`:
    ```sql
    INSERT INTO posts SELECT * FROM booru_posts ON CONFLICT DO NOTHING;
    ```
4. Restart the archiver:
    ```sh
    docker restart kemono-archiver
    ```
    If you see a bunch of log entries from `kemono-db`, then it means archiver is doing the job.
5. In case the frontend still doesn't show the artists/posts, clear redis cache:
    ```sh
    docker exec kemono-redis redis-cli FLUSHALL
    ```
