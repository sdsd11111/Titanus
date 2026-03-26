import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

async function initDb() {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT || "3306"),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        ssl: false
    });

    try {
        console.log('Connecting to database...');
        
        // Create settings table
        await connection.execute(`
            CREATE TABLE IF NOT EXISTS settings (
                \`key\` VARCHAR(255) PRIMARY KEY,
                \`value\` TEXT NOT NULL,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )
        `);
        console.log('Table settings created or already exists.');

        // Insert default hero_button_text
        await connection.execute(`
            INSERT IGNORE INTO settings (\`key\`, \`value\`) 
            VALUES ('hero_button_text', '¡Participa por un mes gratis!')
        `);
        console.log('Default hero button text inserted (if not already there).');

        console.log('Database initialization completed successfully.');
    } catch (error) {
        console.error('Error initializing database:', error);
    } finally {
        await connection.end();
    }
}

initDb();
