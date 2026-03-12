import 'dotenv/config';
import mysql from 'mysql2/promise';
import fs from 'fs';

async function getLeads() {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT || "3306"),
        user: process.env.DB_USER,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        ssl: false
    });

    try {
        const [rows] = await connection.execute('SELECT * FROM leads ORDER BY created_at DESC');
        fs.writeFileSync('leads_data.json', JSON.stringify(rows, null, 2), 'utf8');
        console.log(`Leads saved to leads_data.json (${rows.length} records)`);
    } catch (error) {
        console.error('Error fetching leads:', error);
    } finally {
        await connection.end();
    }
}

getLeads();
