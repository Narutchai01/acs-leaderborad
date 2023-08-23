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
                        "nbPlayersMax": 8,
                        "publicHandle": "321632724a0526f84b32bfff26322cf5a13f540",
                        "clashDurationTypeId": "SHORT",
                        "mode": "FASTEST",
                        "creationTime": "Aug 9, 2023, 3:42:10 AM",
                        "startTime": "Aug 9, 2023, 3:44:06 AM",
                        "endTime": "Aug 9, 2023, 3:59:06 AM",
                        "startTimestamp": 1691552646826,
                        "msBeforeStart": -1041840236,
                        "msBeforeEnd": -1040940236,
                        "finished": true,
                        "started": true,
                        "publicClash": true,
                        "players": [
                            {
                                "codingamerId": 4388865,
                                "codingamerNickname": "VarinPond",
                                "codingamerHandle": "e07a034861180d16d6e1c9869e5f9d0b5688834",
                                "codingamerAvatarId": 68202409504423,
                                "score": 100,
                                "duration": 81953,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "Python3",
                                "rank": 1,
                                "position": 6,
                                "solutionShared": true,
                                "testSessionHandle": "61580707a7cad32bd0e2dcea16e93e3a74d2f682",
                                "submissionId": 31428194
                            },
                            {
                                "codingamerId": 3885656,
                                "codingamerNickname": "kg1427",
                                "codingamerHandle": "e50a4257cf484a545108b1d160053bdf6565883",
                                "codingamerAvatarId": 101376907897878,
                                "score": 100,
                                "duration": 165161,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "Python3",
                                "rank": 2,
                                "position": 8,
                                "solutionShared": true,
                                "testSessionHandle": "61580709cecfd538dc6a64bfa66723758e9aa203",
                                "submissionId": 31428201
                            },
                            {
                                "codingamerId": 5641199,
                                "codingamerNickname": "wt288",
                                "codingamerHandle": "dc7af5cf5a39aacaf7a5f0fcfc6567d99911465",
                                "score": 100,
                                "duration": 389683,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "C++",
                                "rank": 3,
                                "position": 3,
                                "solutionShared": true,
                                "testSessionHandle": "6158070477a779ecb04f21a5d71a0d5c223583d9",
                                "submissionId": 31428217
                            },
                            {
                                "codingamerId": 5638519,
                                "codingamerNickname": "kobyarcher",
                                "codingamerHandle": "e6b6f3ba57852dea83e3018899ebbaa09158365",
                                "codingamerAvatarId": 109372842710296,
                                "score": 100,
                                "duration": 470271,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "Python3",
                                "rank": 4,
                                "position": 5,
                                "solutionShared": false,
                                "testSessionHandle": "61580706f8a261e6cd42f43026771316184ea64d",
                                "submissionId": 31428222
                            },
                            {
                                "codingamerId": 2560246,
                                "codingamerNickname": "BSoD",
                                "codingamerHandle": "935c902624dbe460f2c3176a08861ba46420652",
                                "codingamerAvatarId": 18116239967837,
                                "score": 100,
                                "duration": 835175,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "Clojure",
                                "rank": 5,
                                "position": 4,
                                "solutionShared": true,
                                "testSessionHandle": "61580705f20bd2fad5b3406e2f9605cceb8bbc08",
                                "submissionId": 31428252
                            },
                            {
                                "codingamerId": 2560325,
                                "codingamerNickname": "KaneyklovAleck",
                                "codingamerHandle": "929a32931c811078ab286744570b24f05230652",
                                "codingamerAvatarId": 18116630002811,
                                "score": 20,
                                "duration": 190176,
                                "status": "OWNER",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "Clojure",
                                "rank": 6,
                                "position": 1,
                                "solutionShared": true,
                                "testSessionHandle": "615807029712ad01383bdd107c12a9574776039d",
                                "submissionId": 31428204
                            },
                            {
                                "codingamerId": 4804392,
                                "codingamerNickname": "o0SoloWolf0o",
                                "codingamerHandle": "3fc25ef1727b6b655438dd479076fdac2934084",
                                "score": 20,
                                "duration": 725539,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "Python3",
                                "rank": 7,
                                "position": 7,
                                "solutionShared": false,
                                "testSessionHandle": "61580708a2efb7ece695a0949841ee06dcb7888e",
                                "submissionId": 31428248
                            },
                            {
                                "codingamerId": 5623147,
                                "codingamerNickname": "catlie",
                                "codingamerHandle": "0aaa89f0af304824db999440d5aa1bed7413265",
                                "codingamerAvatarId": 109366702753074,
                                "score": 0,
                                "duration": 900000,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "Python3",
                                "rank": 8,
                                "position": 2,
                                "solutionShared": false,
                                "testSessionHandle": "61580703d2213922466dc2aace86460431bb02e0",
                                "submissionId": 31428259
                            }
                        ],
                        "programmingLanguages": [],
                        "type": "PUBLIC"
                    }
                ]
            },
            {
                match_id: "2",
                match_data: [
                    {
                        "nbPlayersMin": 2,
                        "nbPlayersMax": 8,
                        "publicHandle": "321632724a0526f84b32bfff26322cf5a13f540",
                        "clashDurationTypeId": "SHORT",
                        "mode": "FASTEST",
                        "creationTime": "Aug 9, 2023, 3:42:10 AM",
                        "startTime": "Aug 9, 2023, 3:44:06 AM",
                        "endTime": "Aug 9, 2023, 3:59:06 AM",
                        "startTimestamp": 1691552646826,
                        "msBeforeStart": -1041840236,
                        "msBeforeEnd": -1040940236,
                        "finished": true,
                        "started": true,
                        "publicClash": true,
                        "players": [
                            {
                                "codingamerId": 4388865,
                                "codingamerNickname": "VarinPond",
                                "codingamerHandle": "e07a034861180d16d6e1c9869e5f9d0b5688834",
                                "codingamerAvatarId": 68202409504423,
                                "score": 100,
                                "duration": 81953,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "Python3",
                                "rank": 1,
                                "position": 6,
                                "solutionShared": true,
                                "testSessionHandle": "61580707a7cad32bd0e2dcea16e93e3a74d2f682",
                                "submissionId": 31428194
                            },
                            {
                                "codingamerId": 3885656,
                                "codingamerNickname": "kg1427",
                                "codingamerHandle": "e50a4257cf484a545108b1d160053bdf6565883",
                                "codingamerAvatarId": 101376907897878,
                                "score": 100,
                                "duration": 165161,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "Python3",
                                "rank": 2,
                                "position": 8,
                                "solutionShared": true,
                                "testSessionHandle": "61580709cecfd538dc6a64bfa66723758e9aa203",
                                "submissionId": 31428201
                            },
                            {
                                "codingamerId": 5641199,
                                "codingamerNickname": "wt288",
                                "codingamerHandle": "dc7af5cf5a39aacaf7a5f0fcfc6567d99911465",
                                "score": 100,
                                "duration": 389683,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "C++",
                                "rank": 3,
                                "position": 3,
                                "solutionShared": true,
                                "testSessionHandle": "6158070477a779ecb04f21a5d71a0d5c223583d9",
                                "submissionId": 31428217
                            },
                            {
                                "codingamerId": 5638519,
                                "codingamerNickname": "kobyarcher",
                                "codingamerHandle": "e6b6f3ba57852dea83e3018899ebbaa09158365",
                                "codingamerAvatarId": 109372842710296,
                                "score": 100,
                                "duration": 470271,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "Python3",
                                "rank": 4,
                                "position": 5,
                                "solutionShared": false,
                                "testSessionHandle": "61580706f8a261e6cd42f43026771316184ea64d",
                                "submissionId": 31428222
                            },
                            {
                                "codingamerId": 2560246,
                                "codingamerNickname": "BSoD",
                                "codingamerHandle": "935c902624dbe460f2c3176a08861ba46420652",
                                "codingamerAvatarId": 18116239967837,
                                "score": 100,
                                "duration": 835175,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "Clojure",
                                "rank": 5,
                                "position": 4,
                                "solutionShared": true,
                                "testSessionHandle": "61580705f20bd2fad5b3406e2f9605cceb8bbc08",
                                "submissionId": 31428252
                            },
                            {
                                "codingamerId": 2560325,
                                "codingamerNickname": "KaneyklovAleck",
                                "codingamerHandle": "929a32931c811078ab286744570b24f05230652",
                                "codingamerAvatarId": 18116630002811,
                                "score": 20,
                                "duration": 190176,
                                "status": "OWNER",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "Clojure",
                                "rank": 6,
                                "position": 1,
                                "solutionShared": true,
                                "testSessionHandle": "615807029712ad01383bdd107c12a9574776039d",
                                "submissionId": 31428204
                            },
                            {
                                "codingamerId": 4804392,
                                "codingamerNickname": "o0SoloWolf0o",
                                "codingamerHandle": "3fc25ef1727b6b655438dd479076fdac2934084",
                                "score": 20,
                                "duration": 725539,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "Python3",
                                "rank": 7,
                                "position": 7,
                                "solutionShared": false,
                                "testSessionHandle": "61580708a2efb7ece695a0949841ee06dcb7888e",
                                "submissionId": 31428248
                            },
                            {
                                "codingamerId": 5623147,
                                "codingamerNickname": "catlie",
                                "codingamerHandle": "0aaa89f0af304824db999440d5aa1bed7413265",
                                "codingamerAvatarId": 109366702753074,
                                "score": 0,
                                "duration": 900000,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "Python3",
                                "rank": 8,
                                "position": 2,
                                "solutionShared": false,
                                "testSessionHandle": "61580703d2213922466dc2aace86460431bb02e0",
                                "submissionId": 31428259
                            }
                        ],
                        "programmingLanguages": [],
                        "type": "PUBLIC"
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