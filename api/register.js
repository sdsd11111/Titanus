const db = require('./lib/db');

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        const { location, name, dob, whatsapp, interest, schedule, suggestions } = req.body;

        const [result] = await db.execute(
            'INSERT INTO leads (location, name, dob, whatsapp, interest, schedule, suggestions) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [location, name, dob, whatsapp, interest, schedule, suggestions]
        );

        res.status(201).json({ message: 'Lead registered successfully', id: result.insertId });
    } catch (error) {
        console.error('Error inserting lead:', error);
        res.status(500).json({ message: 'Error registering lead', error: error.message });
    }
}
