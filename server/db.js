import mysql from 'mysql2';
import 'dotenv/config';

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    ssl: false,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export default pool.promise();
