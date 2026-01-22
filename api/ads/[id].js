import db from '../lib/db.js';

export default async function handler(req, res) {
    // Standard CORS headers for Vercel
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

    const { id } = req.query;

    if (method === 'PATCH') {
        try {
            const { isActive } = req.body;
            await db.execute('UPDATE ads SET isActive = ? WHERE id = ?', [isActive, id]);
            return res.json({ message: 'Ad status updated' });
        } catch (error) {
            console.error('Error updating ad:', error);
            return res.status(500).json({ message: 'Error updating ad', error: error.message });
        }
    }

    if (method === 'DELETE') {
        try {
            await db.execute('DELETE FROM ads WHERE id = ?', [id]);
            return res.json({ message: 'Ad deleted successfully' });
        } catch (error) {
            console.error('Error deleting ad:', error);
            return res.status(500).json({ message: 'Error deleting ad', error: error.message });
        }
    }

    return res.status(405).json({ message: 'Method Not Allowed' });
}
