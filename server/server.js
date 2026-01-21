const express = require('express');
const cors = require('cors');
const db = require('./db');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/api/register', async (req, res) => {
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
});

// Ads Management Endpoints
app.get('/api/ads', async (req, res) => {
    try {
        const [rows] = await db.execute('SELECT * FROM ads ORDER BY createdAt DESC');
        res.json(rows);
    } catch (error) {
        console.error('Error fetching ads:', error);
        res.status(500).json({ message: 'Error fetching ads', error: error.message });
    }
});

app.post('/api/ads', async (req, res) => {
    try {
        const { id, image, title, description, ctaText, ctaLink, isActive, createdAt } = req.body;
        const [result] = await db.execute(
            'INSERT INTO ads (id, image, title, description, ctaText, ctaLink, isActive, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [id, image, title, description, ctaText, ctaLink, isActive, createdAt]
        );
        res.status(201).json({ message: 'Ad created successfully' });
    } catch (error) {
        console.error('Error creating ad:', error);
        res.status(500).json({ message: 'Error creating ad', error: error.message });
    }
});

app.patch('/api/ads/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { isActive } = req.body;
        await db.execute('UPDATE ads SET isActive = ? WHERE id = ?', [isActive, id]);
        res.json({ message: 'Ad status updated' });
    } catch (error) {
        console.error('Error updating ad:', error);
        res.status(500).json({ message: 'Error updating ad', error: error.message });
    }
});

app.delete('/api/ads/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await db.execute('DELETE FROM ads WHERE id = ?', [id]);
        res.json({ message: 'Ad deleted successfully' });
    } catch (error) {
        console.error('Error deleting ad:', error);
        res.status(500).json({ message: 'Error deleting ad', error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
