const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// mock data
const products = [
    {
        id: '1',
        data: [
            {
                "nbPlayersMin": 2,
                "nbPlayersMax": 8,
                "publicHandle": "322959174291b27530024d18453903467d83d76",
                "clashDurationTypeId": "SHORT",
                "mode": "REVERSE",
                "creationTime": "Aug 17, 2023, 3:07:07 PM",
                "startTime": "Aug 17, 2023, 3:08:20 PM",
                "endTime": "Aug 17, 2023, 3:17:34 PM",
                "startTimestamp": 1692284900749,
                "msBeforeStart": -553349,
                "msBeforeEnd": -84,
                "finished": true,
                "started": true,
                "publicClash": true,
                "players": [
                    {
                        "codingamerId": 4189794,
                        "codingamerNickname": "__balrog__",
                        "codingamerHandle": "59995c19fa8d8247cc0eacb4a3f1d6414979814",
                        "codingamerAvatarId": 107381702318748,
                        "score": 100,
                        "duration": 131804,
                        "status": "OWNER",
                        "testSessionStatus": "COMPLETED",
                        "languageId": "Python3",
                        "rank": 1,
                        "position": 1,
                        "solutionShared": true,
                        "testSessionHandle": "6174212927fa522cde31b31afdced85186b515b8",
                        "submissionId": 31515135
                    },
                    {
                        "codingamerId": 5379407,
                        "codingamerNickname": "Eevee89",
                        "codingamerHandle": "184bda730d772c9adc6d4c8f299001cb7049735",
                        "codingamerAvatarId": 100057848436886,
                        "score": 100,
                        "duration": 288292,
                        "status": "STANDARD",
                        "testSessionStatus": "COMPLETED",
                        "languageId": "Python3",
                        "rank": 2,
                        "position": 4,
                        "solutionShared": true,
                        "testSessionHandle": "617421327d39e5aa83962dae75f76cd25a14e113",
                        "submissionId": 31515162
                    },
                    {
                        "codingamerId": 5175648,
                        "codingamerNickname": "jasonchester",
                        "codingamerHandle": "5ea83655c33565d9db1bfd628c9d64a58465715",
                        "codingamerAvatarId": 96669263717945,
                        "score": 100,
                        "duration": 552342,
                        "status": "STANDARD",
                        "testSessionStatus": "COMPLETED",
                        "languageId": "Python3",
                        "rank": 3,
                        "position": 5,
                        "solutionShared": false,
                        "testSessionHandle": "61742133450cd6160474efc451f9d85f2ab68426",
                        "submissionId": 31515203
                    },
                    {
                        "codingamerId": 1855900,
                        "codingamerNickname": "Narutchai01",
                        "codingamerHandle": "2775ee6cae96ce992b5842c98293961c0095581",
                        "score": 0,
                        "duration": 5751,
                        "status": "STANDARD",
                        "testSessionStatus": "COMPLETED",
                        "languageId": "Python3",
                        "rank": 4,
                        "position": 6,
                        "solutionShared": false,
                        "testSessionHandle": "61742134609f517c89cd141978d08e603a77a342",
                        "submissionId": 31515110
                    },
                    {
                        "codingamerId": 5409972,
                        "codingamerNickname": "Srivarshan",
                        "codingamerHandle": "d7b96933ba69fd298e2978edfe1338d22799045",
                        "score": 0,
                        "duration": 180731,
                        "status": "STANDARD",
                        "testSessionStatus": "COMPLETED",
                        "languageId": "Python3",
                        "rank": 4,
                        "position": 3,
                        "solutionShared": false,
                        "testSessionHandle": "6174213102bab198dc74cad98fb3ed6a88f0a362",
                        "submissionId": 31515144
                    },
                    {
                        "codingamerId": 3303748,
                        "codingamerNickname": "Hall_Alexandra",
                        "codingamerHandle": "81f28df556a8bb9dad94b25d2d8005448473033",
                        "codingamerAvatarId": 26734726036547,
                        "score": 0,
                        "duration": 242487,
                        "status": "STANDARD",
                        "testSessionStatus": "COMPLETED",
                        "languageId": "Python3",
                        "rank": 4,
                        "position": 2,
                        "solutionShared": false,
                        "testSessionHandle": "617421300f16d97fa3a660029a7e6fff8325a770",
                        "submissionId": 31515155
                    }
                ],
                "programmingLanguages": [],
                "type": "PUBLIC"
            }
        ]
    },
    {
        id: '2',
        data: [
            {
                "nbPlayersMin": 2,
                "nbPlayersMax": 8,
                "publicHandle": "322959174291b27530024d18453903467d83d76",
                "clashDurationTypeId": "SHORT",
                "mode": "REVERSE",
                "creationTime": "Aug 17, 2023, 3:07:07 PM",
                "startTime": "Aug 17, 2023, 3:08:20 PM",
                "endTime": "Aug 17, 2023, 3:17:34 PM",
                "startTimestamp": 1692284900749,
                "msBeforeStart": -553349,
                "msBeforeEnd": -84,
                "finished": true,
                "started": true,
                "publicClash": true,
                "players": [
                    {
                        "codingamerId": 4189794,
                        "codingamerNickname": "__balrog__",
                        "codingamerHandle": "59995c19fa8d8247cc0eacb4a3f1d6414979814",
                        "codingamerAvatarId": 107381702318748,
                        "score": 100,
                        "duration": 131804,
                        "status": "OWNER",
                        "testSessionStatus": "COMPLETED",
                        "languageId": "Python3",
                        "rank": 1,
                        "position": 1,
                        "solutionShared": true,
                        "testSessionHandle": "6174212927fa522cde31b31afdced85186b515b8",
                        "submissionId": 31515135
                    },
                    {
                        "codingamerId": 5379407,
                        "codingamerNickname": "Eevee89",
                        "codingamerHandle": "184bda730d772c9adc6d4c8f299001cb7049735",
                        "codingamerAvatarId": 100057848436886,
                        "score": 100,
                        "duration": 288292,
                        "status": "STANDARD",
                        "testSessionStatus": "COMPLETED",
                        "languageId": "Python3",
                        "rank": 2,
                        "position": 4,
                        "solutionShared": true,
                        "testSessionHandle": "617421327d39e5aa83962dae75f76cd25a14e113",
                        "submissionId": 31515162
                    },
                    {
                        "codingamerId": 5175648,
                        "codingamerNickname": "jasonchester",
                        "codingamerHandle": "5ea83655c33565d9db1bfd628c9d64a58465715",
                        "codingamerAvatarId": 96669263717945,
                        "score": 100,
                        "duration": 552342,
                        "status": "STANDARD",
                        "testSessionStatus": "COMPLETED",
                        "languageId": "Python3",
                        "rank": 3,
                        "position": 5,
                        "solutionShared": false,
                        "testSessionHandle": "61742133450cd6160474efc451f9d85f2ab68426",
                        "submissionId": 31515203
                    },
                    {
                        "codingamerId": 1855900,
                        "codingamerNickname": "Narutchai01",
                        "codingamerHandle": "2775ee6cae96ce992b5842c98293961c0095581",
                        "score": 0,
                        "duration": 5751,
                        "status": "STANDARD",
                        "testSessionStatus": "COMPLETED",
                        "languageId": "Python3",
                        "rank": 4,
                        "position": 6,
                        "solutionShared": false,
                        "testSessionHandle": "61742134609f517c89cd141978d08e603a77a342",
                        "submissionId": 31515110
                    },
                    {
                        "codingamerId": 5409972,
                        "codingamerNickname": "Srivarshan",
                        "codingamerHandle": "d7b96933ba69fd298e2978edfe1338d22799045",
                        "score": 0,
                        "duration": 180731,
                        "status": "STANDARD",
                        "testSessionStatus": "COMPLETED",
                        "languageId": "Python3",
                        "rank": 4,
                        "position": 3,
                        "solutionShared": false,
                        "testSessionHandle": "6174213102bab198dc74cad98fb3ed6a88f0a362",
                        "submissionId": 31515144
                    },
                    {
                        "codingamerId": 3303748,
                        "codingamerNickname": "Hall_Alexandra",
                        "codingamerHandle": "81f28df556a8bb9dad94b25d2d8005448473033",
                        "codingamerAvatarId": 26734726036547,
                        "score": 0,
                        "duration": 242487,
                        "status": "STANDARD",
                        "testSessionStatus": "COMPLETED",
                        "languageId": "Python3",
                        "rank": 4,
                        "position": 2,
                        "solutionShared": false,
                        "testSessionHandle": "617421300f16d97fa3a660029a7e6fff8325a770",
                        "submissionId": 31515155
                    }
                ],
                "programmingLanguages": [],
                "type": "PUBLIC"
            }
        ]
    },

];

app.get('/products', (req, res) => {
    res.json(products);
});

app.get('/products/:id', (req, res) => {
    const { id } = req.params;
    const result = products.find((product) => product.id === id);
    res.json(result);
});


app.listen(3000, () => {
    console.log('Application is running on port 3000');
});