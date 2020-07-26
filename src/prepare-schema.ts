import fs from 'fs';
import path from 'path';
import util from 'util';
import { Client } from 'pg';
import Field from './Field';
import Schema from './Schema';

const writeFile = util.promisify(fs.writeFile);

const DATABASE_NAME = process.env.DATABASE_NAME;

if (!DATABASE_NAME) {
  console.error('DATABASE_NAME env is required');
  process.exit(1);
}

const client: Client = new Client({
  host: process.env.DATABASE_HOST || '0.0.0.0',
  database: DATABASE_NAME,
  port: process.env.DATABASE_PORT ? Number(process.env.DATABASE_PORT) : 5432,
  user: process.env.USER || 'postgres',
  password: process.env.DATABASE_PASSWORD
});

async function main() {
  try {
    await client.connect();
    const schema = await buildSchemaFromDb(DATABASE_NAME as string);
    await writeSchemaToFile(schema, path.join(__dirname, '..', 'public', 'schema.js'));
  }
  catch(err) {
    console.error(err);
  }
  finally {
    try {
      client.end();
    }
    catch (err) {
      console.error('Failed to close DB client', err);
      process.exit(1);
    }
  }
}

async function buildSchemaFromDb(databaseName: string): Promise<Schema> {
  const tableNames = await fetchTableNamesFromDb();
  const fieldsForTableNames = await Promise.all(tableNames.map(fetchFieldsForTable));
  return {
    name: databaseName,
    types: tableNames.map((name, i) => ({
      name,
      fields: fieldsForTableNames[i],
      bestScore: null,
      bestTime: null
    }))
  };
}

async function writeSchemaToFile(schema: Schema, path: string): Promise<void> {
  return writeFile(path, `var schema = ${JSON.stringify(schema, null, 2)};`);
}

async function fetchTableNamesFromDb(): Promise<string[]> {
  const { rows } = await client.query(
    'SELECT tablename FROM pg_catalog.pg_tables WHERE schemaname=\'public\';',
  );
  return rows.map(row => row.tablename);
}

async function fetchFieldsForTable(tableName: string): Promise<Field[]> {
  const { rows } = await client.query(
    'SELECT column_name, data_type FROM information_schema.columns WHERE table_name=$1;',
    [tableName]
  );
  return rows.map(column => ({
    name: column.column_name,
    type: column.data_type
  }));
}

main();