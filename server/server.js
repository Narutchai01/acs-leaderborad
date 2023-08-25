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
                   {
    "nbPlayersMin": 2,
    "nbPlayersMax": 100,
    "publicHandle": "324238669616f08b3300783bad63664dad17931",
    "clashDurationTypeId": "SHORT",
    "mode": "REVERSE",
    "creationTime": "Aug 25, 2023, 2:33:31 PM",
    "startTime": "Aug 25, 2023, 2:37:44 PM",
    "endTime": "Aug 25, 2023, 2:52:44 PM",
    "startTimestamp": 1692974264715,
    "msBeforeStart": -220087,
    "msBeforeEnd": 679912,
    "finished": false,
    "started": true,
    "publicClash": false,
    "players": [
        {
            "codingamerId": 4388865,
            "codingamerNickname": "VarinPond",
            "codingamerHandle": "e07a034861180d16d6e1c9869e5f9d0b5688834",
            "codingamerAvatarId": 68202409504423,
            "score": 100,
            "duration": 100090,
            "status": "OWNER",
            "testSessionStatus": "COMPLETED",
            "languageId": "Python3",
            "rank": 1,
            "position": 1,
            "solutionShared": true,
            "testSessionHandle": "6191531510bb4b70c162b3908afad515cafac3a7",
            "submissionId": 31603232
        },
        {
            "codingamerId": 5563840,
            "codingamerNickname": "H4aRu",
            "codingamerHandle": "5efface12a3229efe410c4bcca674daf0483655",
            "duration": 0,
            "status": "STANDARD",
            "testSessionStatus": "READY",
            "rank": 2,
            "position": 2,
            "testSessionHandle": "61915316e312df42cd77d4a78feb73d3dbca5e15"
        }
    ],
    "programmingLanguages": [
        "Bash",
        "C",
        "C#",
        "C++",
        "Clojure",
        "D",
        "Dart",
        "F#",
        "Go",
        "Groovy",
        "Haskell",
        "Java",
        "Javascript",
        "Kotlin",
        "Lua",
        "ObjectiveC",
        "OCaml",
        "Pascal",
        "Perl",
        "PHP",
        "Python3",
        "Ruby",
        "Rust",
        "Scala",
        "Swift",
        "TypeScript",
        "VB.NET"
    ],
    "modes": [
        "FASTEST",
        "REVERSE",
        "SHORTEST"
    ],
    "type": "PRIVATE"
}
                ]
            },
            {
                match_id: "2",
                match_data: [
                    {
    "nbPlayersMin": 2,
    "nbPlayersMax": 100,
    "publicHandle": "324238669616f08b3300783bad63664dad17931",
    "clashDurationTypeId": "SHORT",
    "mode": "REVERSE",
    "creationTime": "Aug 25, 2023, 2:33:31 PM",
    "startTime": "Aug 25, 2023, 2:37:44 PM",
    "endTime": "Aug 25, 2023, 2:52:44 PM",
    "startTimestamp": 1692974264715,
    "msBeforeStart": -12308351,
    "msBeforeEnd": -11408351,
    "finished": true,
    "started": true,
    "publicClash": false,
    "players": [
        {
            "codingamerId": 4388865,
            "codingamerNickname": "VarinPond",
            "codingamerHandle": "e07a034861180d16d6e1c9869e5f9d0b5688834",
            "codingamerAvatarId": 68202409504423,
            "score": 100,
            "duration": 100090,
            "status": "OWNER",
            "testSessionStatus": "COMPLETED",
            "languageId": "Python3",
            "rank": 1,
            "position": 1,
            "solutionShared": true,
            "testSessionHandle": "6191531510bb4b70c162b3908afad515cafac3a7",
            "submissionId": 31603232
        },
        {
            "codingamerId": 5563840,
            "codingamerNickname": "H4aRu",
            "codingamerHandle": "5efface12a3229efe410c4bcca674daf0483655",
            "score": 0,
            "duration": 900000,
            "status": "STANDARD",
            "testSessionStatus": "COMPLETED",
            "languageId": "undefined",
            "rank": 2,
            "position": 2,
            "solutionShared": false,
            "testSessionHandle": "61915316e312df42cd77d4a78feb73d3dbca5e15",
            "submissionId": 31603389
        }
    ],
    "programmingLanguages": [
        "Bash",
        "C",
        "C#",
        "C++",
        "Clojure",
        "D",
        "Dart",
        "F#",
        "Go",
        "Groovy",
        "Haskell",
        "Java",
        "Javascript",
        "Kotlin",
        "Lua",
        "ObjectiveC",
        "OCaml",
        "Pascal",
        "Perl",
        "PHP",
        "Python3",
        "Ruby",
        "Rust",
        "Scala",
        "Swift",
        "TypeScript",
        "VB.NET"
    ],
    "modes": [
        "FASTEST",
        "REVERSE",
        "SHORTEST"
    ],
    "type": "PRIVATE"
}
                ]
            }
        ]
    },
    {
        id: '2',
        coc_data: [
            {
                match_id: "1",
                match_data: []
            },
            {
                match_id: "2",
                match_data: []
            }
        ]
    },
    {
        id: '3',
        coc_data: [
            {
                match_id: "1",
                match_data: []
            },
            {
                match_id: "2",
                match_data: []
            }
        ]
    },
    {
        id: '4',
        coc_data: [
            {
                match_id: "1",
                match_data: []
            },
            {
                match_id: "2",
                match_data: []
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
