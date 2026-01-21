import db from '../lib/db.js';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const [rows] = await db.execute('SELECT * FROM ads ORDER BY createdAt DESC');
            return res.json(rows);
        } catch (error) {
            console.error('Error fetching ads:', error);
            return res.status(500).json({ message: 'Error fetching ads', error: error.message });
        }
    }

    if (req.method === 'POST') {
        try {
            const { id, image, title, description, ctaText, ctaLink, isActive, createdAt } = req.body;
            await db.execute(
                'INSERT INTO ads (id, image, title, description, ctaText, ctaLink, isActive, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
                [id, image, title, description, ctaText, ctaLink, isActive, createdAt]
            );
            return res.status(201).json({ message: 'Ad created successfully' });
        } catch (error) {
            console.error('Error creating ad:', error);
            return res.status(500).json({ message: 'Error creating ad', error: error.message });
        }
    }

    return res.status(405).json({ message: 'Method Not Allowed' });
}
