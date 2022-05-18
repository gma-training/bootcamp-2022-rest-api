# Demo REST API in Next.js

This code is for one of the projects from bootcamp.dev.

It contains a fledgling implementation of a Postgres-backed REST API, built using Next.js and the Prisma ORM library.

## Setup

To install and run the server, make sure you've got Node installed (I'm using 16.14.2) and then run:

```sh
npm install
npm run dev
```

You'll need to connect it to a database. Point the app at your database by setting the `DATABASE_URL` environment variable. You can do that in a `.env` file containing a variable similar to this (Postgres not required; see the comments):

```sh
$ cat .env
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB (Preview).
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="postgresql://<user>:<password>@<hostname>:<port>/<database>"
```

Once you've defined `DATABASE_URL` and created your empty database you can create the database tables by running the migrations:

```sh
npx prisma migrate dev
```
