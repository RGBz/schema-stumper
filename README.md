# Schema Stumper
A simple quiz game that loads a database schema and sees if you can name all the fields for the tables.

*This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Some of the Create React App things like tests are not fully implemented at this time.*

## How does it work?
It works by scanning a Postgres database for all of the tables and columns, caches this schema and starts a static web app quiz game based on this schema.

You configure the app via environment variables to point at a Postgres database.

When the app starts up it will try to connect to the DB and generate a static file to power the quiz game.

## How to run it
You run the app by specifying some environment variables to connect to a Postgres database. The environment variables are:
- `DATABASE_HOST` the address of the database. Defaults to `0.0.0.0`
- `DATABASE_PORT` the port for the database. Defaults to `5432`
- `DATABASE_NAME` the name of the database to connect to. **Must be specified.**
- `DATABASE_USER` the user account to connect with. Defaults to `postgres`.
- `DATABASE_PASSWORD` the password to connect with. **Must be specified.**

So to run the game simply run `npm start` preceded by any environment variables that aren't already set in your shell.

e.g.: (this assumes the other required ENV variables are set...)
```
DATABASE_NAME=billing npm start
```

## How to play
Running `npm start` (see above) with the proper DB connection info specified should open a browser pointed at `localhost:3000`.

The first screen you see will list all of the tables from the database you configured. For each table you can either see a completion percentage or a best time.

Clicking on a table name will take you to the quiz screen. When you click **START** begin typing in the names of the columns and hit enter to submit them. Case matters! If the column exists you'll see it appear.

See if you know the columns for every table!
