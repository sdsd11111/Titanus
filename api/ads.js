import db from './lib/db.js';

export default async function handler(req, res) {
    // Robust CORS headers
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    const method = req.method.toUpperCase();

    if (method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Capture ID from query (works for both /api/ads?id=xxx and /api/ads/xxx via rewrite)
    const { id } = req.query;

    try {
        if (method === 'GET') {
            if (id) {
                const [rows] = await db.execute('SELECT * FROM ads WHERE id = ?', [id]);
                if (rows.length === 0) return res.status(404).json({ message: 'Ad not found' });
                return res.json(rows[0]);
            }
            const [rows] = await db.execute('SELECT * FROM ads ORDER BY createdAt DESC');
            return res.json(rows);
        }

        if (method === 'POST') {
            const { id: newId, image, title, description, ctaText, ctaLink, isActive, createdAt } = req.body;
            await db.execute(
                'INSERT INTO ads (id, image, title, description, ctaText, ctaLink, isActive, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
                [newId, image, title, description, ctaText, ctaLink, isActive, createdAt]
            );
            return res.status(201).json({ message: 'Ad created successfully' });
        }

        if (method === 'PATCH') {
            if (!id) return res.status(400).json({ message: 'Missing Ad ID' });
            const { isActive } = req.body;
            await db.execute('UPDATE ads SET isActive = ? WHERE id = ?', [isActive, id]);
            return res.json({ message: 'Ad status updated' });
        }

        if (method === 'DELETE') {
            if (!id) return res.status(400).json({ message: 'Missing Ad ID' });
            await db.execute('DELETE FROM ads WHERE id = ?', [id]);
            return res.json({ message: 'Ad deleted successfully' });
        }

        return res.status(405).json({ message: 'Method Not Allowed' });
    } catch (error) {
        console.error('ADS API ERROR:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}
