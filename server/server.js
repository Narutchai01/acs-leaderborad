const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// mock data
const products = [
    {
        id: '1',
        coc_data: [
            {
                match_id: "1",
                match_data: [

                ]
            },
            {
                match_id: "2",
                match_data: [

                ]
            },
            {
                match_id: "3",
                match_data: [

                ]
            }
        ]
    },
    {
        id: '2',
        coc_data: [
            {
                match_id: "1",
                match_data: [

                ]
            },
            {
                match_id: "2",
                match_data: [

                ]
            }
        ]
    },
    {
        id: '3',
        coc_data: [
            {
                match_id: "1",
                match_data: [

                ]
            },
            {
                match_id: "2",
                match_data: [

                ]
            }
        ]
    },
    {
        id: '4',
        coc_data: [
            {
                match_id: "1",
                match_data: [

                ]
            },
            {
                match_id: "2",
                match_data: [
                    
                ]
            }
        ]
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

app.get('/cocData/:id/:match_id', (req, res) => {
    const { id, match_id } = req.params;
    const result = products.find((product) => product.id === id);
    const result2 = result.coc_data.find((product) => product.match_id === match_id);
    res.json(result2);
});
app.get('/cocData/:id/:match_id/data_match', (req, res) => {
    const { id, match_id, match_data } = req.params;
    const result = products.find((product) => product.id === id);
    const result2 = result.coc_data.find((product) => product.match_id === match_id);
    const result3 = result2.match_data.find((product) => product.match_data === match_data);

    res.json(result3);
});


app.listen(3000, () => {
    console.log('Application is running on port 3000');
});
