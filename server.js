// Simple Node.js backend to provide server time for Asia/Karachi
// 1. Run: npm install express node-fetch
// 2. Start: node server.js

const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 3000;

app.get('/api/karachi-time', async (req, res) => {
    try {
        const response = await fetch('https://worldtimeapi.org/api/timezone/Asia/Karachi');
        if (!response.ok) throw new Error('Failed to fetch time');
        const data = await response.json();
        res.json({ datetime: data.datetime });
    } catch (e) {
        res.status(500).json({ error: 'Could not fetch server time' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
