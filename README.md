# Schema Stumper
A simple quiz game that loads a database schema and sees if you can name all the fields for the tables.

*This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Some of the Create React App things like tests are not fully implemented at this time.*

## Quick Start with Docker (Recommended for Testing)

The easiest way to try out Schema Stumper is using our sample Crayon Factory database with Docker:

### Prerequisites
- [Docker](https://www.docker.com/get-started) and Docker Compose installed
- [Node.js](https://nodejs.org/) (version 18 or higher)

### Setup Steps

1. **Clone and install dependencies:**
   ```bash
   git clone <your-repo-url>
   cd schema-stumper
   npm install
   ```

2. **Start the PostgreSQL database:**
   ```bash
   docker-compose up -d
   ```
   This will start a PostgreSQL database with our sample Crayon Factory schema.

3. **Start the app:**
   
   **Option A: Use the convenience script (recommended):**
   ```bash
   ./start-demo.sh
   ```
   
   **Option B: Manual setup:**
   ```bash
   DATABASE_NAME=crayon_factory DATABASE_SCHEMA=crayon_factory DATABASE_USER=postgres DATABASE_PASSWORD=password npm start
   ```

4. **Play the game!**
   The app should open in your browser at `http://localhost:3000`. You'll see tables from our sample Crayon Factory database including:
   - `colors` - All the crayon colors with RGB values
   - `crayon_products` - Different crayon products and sizes
   - `customers` - Customer information (schools, stores, etc.)
   - `orders` - Order history and details
   - `production_batches` - Manufacturing batch information
   - `suppliers` - Raw material suppliers
   - And more!

5. **Stop the database when done:**
   ```bash
   docker-compose down
   ```

### About the Sample Database
The Crayon Factory database is a realistic example schema that includes:
- **10 tables** with various relationships (foreign keys, indexes)
- **Sample data** representing a crayon manufacturing business
- **Different data types** (strings, numbers, dates, booleans)
- **Business logic** with check constraints and views
- **Complex relationships** between suppliers, materials, products, and orders

This makes for an interesting and challenging schema to test your knowledge on!

## How does it work?
It works by scanning a Postgres database for all of the tables and columns, caches this schema and starts a static web app quiz game based on this schema.

You configure the app via environment variables to point at a Postgres database.

When the app starts up it will try to connect to the DB and generate a static file to power the quiz game.

## Using Your Own Database

You can also use Schema Stumper with your own PostgreSQL database:

### Environment Variables
- `DATABASE_HOST` the address of the database. Defaults to `localhost`
- `DATABASE_PORT` the port for the database. Defaults to `5432`
- `DATABASE_NAME` the name of the database to connect to. **Must be specified.**
- `DATABASE_SCHEMA` the schema to scan for tables. Defaults to `public`
- `DATABASE_USER` the user account to connect with. Defaults to `postgres`.
- `DATABASE_PASSWORD` the password to connect with. **Must be specified.**

### Running with Your Database
```bash
DATABASE_NAME=your_db_name DATABASE_USER=your_user DATABASE_PASSWORD=your_password npm start
```

**Note:** By default, the app scans the `public` schema. If your tables are in a different schema, specify it with `DATABASE_SCHEMA=your_schema_name`.

## How to play
Running `npm start` (see above) with the proper DB connection info specified should open a browser pointed at `localhost:3000`.

### Table List Screen
The first screen lists all of the tables from the database you configured.

For each table you'll either see a completion percentage or your best time (scores are stored to the browser's `localStorage`).

Clicking on a table name will take you to the Table Quiz Screen.

### Table Quiz Screen
Here's where you can test your table knowledge! The quiz is to see if you know all the column names.

When you click **START** begin typing in the names of the columns and hit enter to submit them. Case matters! If the column exists you'll see it appear. If it doesn't exist, you'll see a red X. There are no penalties for wrong guesses, it's just feedback.

When you guess all the column names or run out of time, the quiz screen will close and you'll be taken back to the list screen to view your score (it's a little abrupt as currently implemented, but you'll get the idea).

Good Luck and have fun!

## Development

### Available Scripts
- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run build:schema` - Generates the schema file from the database

### Database Schema Generation
The app uses `src/prepare-schema.ts` to connect to your PostgreSQL database and generate a schema file that powers the quiz game.
