import db from '../lib/db.js';

export default async function handler(req, res) {
    const { id } = req.query;

    if (req.method === 'PATCH') {
        try {
            const { isActive } = req.body;
            await db.execute('UPDATE ads SET isActive = ? WHERE id = ?', [isActive, id]);
            return res.json({ message: 'Ad status updated' });
        } catch (error) {
            console.error('Error updating ad:', error);
            return res.status(500).json({ message: 'Error updating ad', error: error.message });
        }
    }

    if (req.method === 'DELETE') {
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
