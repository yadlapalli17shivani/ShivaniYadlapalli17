const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to our API',
        status: 'Active',
        timestamp: new Date()
    });
});

app.get('/students', (req, res) => {
    res.json([
        { id: 1, name: 'Raghav', course: 'Artifical Intelligence' },
        { id: 2, name: 'Adeel', course: 'IT' },
        { id: 3, name: 'Devansh', course: 'ECE' }
    ]);
});

app.get('/product/:id', (req, res) => {
    res.json({
        requestedId: req.params.id,
        category: 'Electronics',
        inStock: true,
        tags: ['gadget', 'new-arrival']
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});