import mysql from 'mysql2';

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    ssl: false, // Explicitly disable SSL as it is not supported by the server
    waitForConnections: true,
    connectionLimit: 1,
    queueLimit: 0
});

export default pool.promise();
