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

    try {
        if (method === 'GET') {
            // Cache por 5 minutos (300 segundos) para reducir invocaciones serverless
            res.setHeader('Cache-Control', 'public, max-age=300, s-maxage=300, stale-while-revalidate=600');
            
            const [rows] = await db.execute('SELECT `key`, `value` FROM settings');
            const settings = rows.reduce((acc, row) => ({ ...acc, [row.key]: row.value }), {});
            return res.json(settings);
        }

        if (method === 'POST') {
            const { key, value } = req.body;
            if (!key) return res.status(400).json({ message: 'Key is required' });
            
            // value can be an empty string, which we allow
            await db.execute(
                'INSERT INTO settings (`key`, `value`) VALUES (?, ?) ON DUPLICATE KEY UPDATE `value` = ?',
                [key, value, value]
            );
            return res.json({ message: 'Setting updated successfully' });
        }

        return res.status(405).json({ message: 'Method Not Allowed' });
    } catch (error) {
        console.error('SETTINGS API ERROR:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}
