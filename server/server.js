const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// mock data
const products = [
    {
        id: '1',
        coc_data:[
            {

            }
        ]
    },
    {
        id: '2',
        coc_data:[]
    },
    {
        id: '3',
        coc_data:[]
    },
    {
        id: '4',
        coc_data:[]
    }
]

app.get('/cocData', (req, res) => {
    res.json(products);
});

app.get('/cocData/:id', (req, res) => {
    const { id } = req.params;
    const result = products.find((product) => product.id === id);
    res.json(result);
});


app.listen(3000, () => {
    console.log('Application is running on port 3000');
});