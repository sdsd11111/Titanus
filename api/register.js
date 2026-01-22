import db from './lib/db.js';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        const { location, name, dob, whatsapp, interest, schedule, suggestions } = req.body;

        // Check for duplicate whatsapp
        const [existing] = await db.execute('SELECT id FROM leads WHERE whatsapp = ?', [whatsapp]);
        if (existing.length > 0) {
            return res.status(409).json({ message: 'Este número de WhatsApp ya está registrado. Por favor usa otro o contáctanos.' });
        }

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
