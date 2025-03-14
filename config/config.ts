import { config } from 'dotenv';
import { createPool } from 'mysql2/promise';
import path from 'path';

config({ path: path.resolve(__dirname, '../.env') });
config({ path: '../.env' });

// Get the port from the environment, fallback to 3000
export const port = process.env.PORT || 3000;

// Create a MySQL connection pool
export const pool = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});