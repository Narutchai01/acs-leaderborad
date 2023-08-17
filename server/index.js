const express = require('express');
const app = express();

// mock data
const products = [
    {
        id: "1001",
        name: 'Node.js for Beginners',
        category: 'Node',
        price: 990
    },
    {
        id: "1002",
        name: 'React 101',
        category: 'React',
        price: 3990
    },
    {
        id: "1003",
        name: 'Getting started with MongoDB',
        category: 'MongoDB',
        price: 1990
    }
];

app.get('/products', (req, res) => {
    res.json(products);
});

app.get('/products/:id', (req, res) => {
    const { id } = req.params;
    const result = products.find((product) => product.id === id);
    res.json(result);
});


app.listen(9000, () => {
    console.log('Application is running on port 9000');
});