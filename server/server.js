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
    "publicHandle": "32872747d7fec829505f14396a0bd9c75204d9a",
    "clashDurationTypeId": "SHORT",
    "mode": "FASTEST",
    "creationTime": "Sep 23, 2023, 1:10:07 PM",
    "startTime": "Sep 23, 2023, 1:15:07 PM",
    "endTime": "Sep 23, 2023, 1:30:07 PM",
    "startTimestamp": 1695474907481,
    "msBeforeStart": -1040120,
    "msBeforeEnd": -140120,
    "finished": true,
    "started": true,
    "publicClash": false,
    "players": [
        {
            "codingamerId": 5039462,
            "codingamerNickname": "Merukim",
            "codingamerHandle": "c373d08dc9c299c12c5c070bf10ad6142649305",
            "codingamerAvatarId": 89984129008921,
            "score": 100,
            "duration": 108030,
            "status": "STANDARD",
            "testSessionStatus": "COMPLETED",
            "languageId": "Python3",
            "rank": 1,
            "position": 3,
            "solutionShared": true,
            "testSessionHandle": "62529514dda4b9cd38b10390bc8153a184a17373",
            "submissionId": 31908754
        },
        {
            "codingamerId": 4761280,
            "codingamerNickname": "Jack_Jessada",
            "codingamerHandle": "97cbc51741f3f5e1f9cc3fd072e73f1a0821674",
            "score": 100,
            "duration": 194517,
            "status": "STANDARD",
            "testSessionStatus": "COMPLETED",
            "languageId": "Python3",
            "rank": 2,
            "position": 2,
            "solutionShared": true,
            "testSessionHandle": "62529513718758790dbbae81cfbc60ffa71a72cd",
            "submissionId": 31908770
        },
        {
            "codingamerId": 5673693,
            "codingamerNickname": "BooIsBoo",
            "codingamerHandle": "5b0c358b4217a86ec74d33460692d2d13963765",
            "score": 100,
            "duration": 236550,
            "status": "STANDARD",
            "testSessionStatus": "COMPLETED",
            "languageId": "Python3",
            "rank": 3,
            "position": 9,
            "solutionShared": true,
            "testSessionHandle": "625295209280c28458a15fc073bb261390300f44",
            "submissionId": 31908778
        },
        {
            "codingamerId": 5724278,
            "codingamerNickname": "GTH2202",
            "codingamerHandle": "efadc381ed58048dc1dcf06d97fd80bb8724275",
            "score": 100,
            "duration": 247320,
            "status": "STANDARD",
            "testSessionStatus": "COMPLETED",
            "languageId": "C",
            "rank": 4,
            "position": 11,
            "solutionShared": true,
            "testSessionHandle": "62529522ce41522dea7558eea710e23b1a9ac4f7",
            "submissionId": 31908781
        },
        {
            "codingamerId": 5673662,
            "codingamerNickname": "Mayoi",
            "codingamerHandle": "5a8d9d884aa3dc866f26a5b6dc2846662663765",
            "codingamerAvatarId": 110499764513563,
            "score": 100,
            "duration": 274188,
            "status": "STANDARD",
            "testSessionStatus": "COMPLETED",
            "languageId": "Python3",
            "rank": 5,
            "position": 6,
            "solutionShared": true,
            "testSessionHandle": "62529517f250458539a32d53bdcaa8d6ba54d2e3",
            "submissionId": 31908786
        },
        {
            "codingamerId": 4804392,
            "codingamerNickname": "o0SoloWolf0o",
            "codingamerHandle": "3fc25ef1727b6b655438dd479076fdac2934084",
            "score": 100,
            "duration": 451143,
            "status": "STANDARD",
            "testSessionStatus": "COMPLETED",
            "languageId": "Go",
            "rank": 6,
            "position": 12,
            "solutionShared": true,
            "testSessionHandle": "62529523ae91da473891d30b73127e36225fba92",
            "submissionId": 31908805
        },
        {
            "codingamerId": 4511712,
            "codingamerNickname": "Noppawut",
            "codingamerHandle": "2f4ccf8aed0bda41c0e2fc9bdab129722171154",
            "score": 100,
            "duration": 560793,
            "status": "STANDARD",
            "testSessionStatus": "COMPLETED",
            "languageId": "Python3",
            "rank": 7,
            "position": 18,
            "solutionShared": false,
            "testSessionHandle": "625295299346f3f3eb17dd0ae6e06c0d8d529714",
            "submissionId": 31908816
        },
        {
            "codingamerId": 4388154,
            "codingamerNickname": "Dpresser",
            "codingamerHandle": "7a17124f861f4b3029008d3fc7f35eba4518834",
            "codingamerAvatarId": 93224004508751,
            "score": 100,
            "duration": 679941,
            "status": "STANDARD",
            "testSessionStatus": "COMPLETED",
            "languageId": "Python3",
            "rank": 8,
            "position": 10,
            "solutionShared": true,
            "testSessionHandle": "62529521ab15c270b27c16335542b21e84a13b85",
            "submissionId": 31908835
        },
        {
            "codingamerId": 4612183,
            "codingamerNickname": "HE4RT",
            "codingamerHandle": "2381e85449bdff1693251eb7c264625a3812164",
            "codingamerAvatarId": 73611224462280,
            "score": 100,
            "duration": 725144,
            "status": "STANDARD",
            "testSessionStatus": "COMPLETED",
            "languageId": "Python3",
            "rank": 9,
            "position": 7,
            "solutionShared": false,
            "testSessionHandle": "6252951888fa7f8437ce371d7fa149a12f49206f",
            "submissionId": 31908840
        },
        {
            "codingamerId": 5670673,
            "codingamerNickname": "Popeye321",
            "codingamerHandle": "0f9a60313020fe0601b576e5ac045ac03760765",
            "score": 100,
            "duration": 811497,
            "status": "STANDARD",
            "testSessionStatus": "COMPLETED",
            "languageId": "Python3",
            "rank": 10,
            "position": 15,
            "solutionShared": true,
            "testSessionHandle": "625295266d9e6050c46f7f36164c912b863d03a7",
            "submissionId": 31908852
        },
        {
            "codingamerId": 5673663,
            "codingamerNickname": "LemonJuiceTH",
            "codingamerHandle": "957e937c810b24e86342b7d73a476d463663765",
            "score": 100,
            "duration": 821980,
            "status": "STANDARD",
            "testSessionStatus": "COMPLETED",
            "languageId": "Python3",
            "rank": 11,
            "position": 14,
            "solutionShared": true,
            "testSessionHandle": "62529525abd5782efde38393a247be807e5e0588",
            "submissionId": 31908855
        },
        {
            "codingamerId": 5673740,
            "codingamerNickname": "Cocoa20",
            "codingamerHandle": "c1d49debd49bae36b1137546c7c7b53c0473765",
            "score": 57,
            "duration": 896700,
            "status": "STANDARD",
            "testSessionStatus": "COMPLETED",
            "languageId": "Python3",
            "rank": 12,
            "position": 25,
            "solutionShared": false,
            "testSessionHandle": "62529587a317d8c6be7fae8e7c2dec4375a206e2",
            "submissionId": 31908869
        },
        {
            "codingamerId": 5041262,
            "codingamerNickname": "SasimaP",
            "codingamerHandle": "68033c216c59cf1754503fa1d9a2fa012621405",
            "codingamerAvatarId": 110500465988836,
            "score": 28,
            "duration": 704915,
            "status": "STANDARD",
            "testSessionStatus": "COMPLETED",
            "languageId": "Python3",
            "rank": 13,
            "position": 17,
            "solutionShared": false,
            "testSessionHandle": "62529528735615dddf422b52cd9c704d0fa41788",
            "submissionId": 31908837
        },
        {
            "codingamerId": 5673636,
            "codingamerNickname": "OooiooO",
            "codingamerHandle": "f5eeca2fb0ec9c2815bdb7377cd50a696363765",
            "score": 0,
            "duration": 872194,
            "status": "STANDARD",
            "testSessionStatus": "COMPLETED",
            "languageId": "C",
            "rank": 14,
            "position": 8,
            "solutionShared": false,
            "testSessionHandle": "625295193c33fca52ec6371fe295ce3d1d35b47f",
            "submissionId": 31908864
        },
        {
            "codingamerId": 5673687,
            "codingamerNickname": "PPAP01",
            "codingamerHandle": "156045c8680b5ce90485e87e0891fecc7863765",
            "score": 0,
            "duration": 900000,
            "status": "STANDARD",
            "testSessionStatus": "COMPLETED",
            "languageId": "Python3",
            "rank": 14,
            "position": 21,
            "solutionShared": false,
            "testSessionHandle": "62529532f820b7bd23ab9dbb85b5ed0c7dd57c53",
            "submissionId": 31908882
        },
        {
            "codingamerId": 5647871,
            "codingamerNickname": "blackpancake",
            "codingamerHandle": "99cca7c8f5e18a3329807a23c125d8b91787465",
            "score": 0,
            "duration": 417649,
            "status": "STANDARD",
            "testSessionStatus": "COMPLETED",
            "languageId": "Python3",
            "rank": 14,
            "position": 24,
            "solutionShared": false,
            "testSessionHandle": "625295609398f3815ffdf8b306a9d3a7a91f9104",
            "submissionId": 31908801
        },
        {
            "codingamerId": 5673716,
            "codingamerNickname": "Rashyy",
            "codingamerHandle": "0ae044a6d0db82c954d5d9d3193f46956173765",
            "score": 0,
            "duration": 900000,
            "status": "STANDARD",
            "testSessionStatus": "COMPLETED",
            "languageId": "Python3",
            "rank": 14,
            "position": 13,
            "solutionShared": false,
            "testSessionHandle": "625295243fdad265c950406af2dc98032ad43dc9",
            "submissionId": 31908885
        },
        {
            "codingamerId": 5563840,
            "codingamerNickname": "H4aRu",
            "codingamerHandle": "5efface12a3229efe410c4bcca674daf0483655",
            "score": 0,
            "duration": 900000,
            "status": "STANDARD",
            "testSessionStatus": "COMPLETED",
            "languageId": "Python3",
            "rank": 14,
            "position": 5,
            "solutionShared": false,
            "testSessionHandle": "625295163538bb31eba9f34aa626198a53cecc12",
            "submissionId": 31908870
        },
        {
            "codingamerId": 5673690,
            "codingamerNickname": "mumu8",
            "codingamerHandle": "e80f3c88d30cab9c8344cb8465d16dd50963765",
            "codingamerAvatarId": 112116685755238,
            "score": 0,
            "duration": 888471,
            "status": "STANDARD",
            "testSessionStatus": "COMPLETED",
            "languageId": "Python3",
            "rank": 14,
            "position": 19,
            "solutionShared": false,
            "testSessionHandle": "62529530ae320f7a0a082b35d241732e9512ccfd",
            "submissionId": 31908868
        },
        {
            "codingamerId": 5673714,
            "codingamerNickname": "ben333ki",
            "codingamerHandle": "b17929fb530554a7bed9ce6d060b023f4173765",
            "score": 0,
            "duration": 900000,
            "status": "STANDARD",
            "testSessionStatus": "COMPLETED",
            "languageId": "C",
            "rank": 14,
            "position": 16,
            "solutionShared": false,
            "testSessionHandle": "6252952744e87eb246194ae64c0a97e0f8f5585e",
            "submissionId": 31908884
        },
        {
            "codingamerId": 5724275,
            "codingamerNickname": "Duckkrub",
            "codingamerHandle": "85f9826fb6181556156550603b42a6cc5724275",
            "score": 0,
            "duration": 900000,
            "status": "STANDARD",
            "testSessionStatus": "COMPLETED",
            "languageId": "C",
            "rank": 14,
            "position": 4,
            "solutionShared": false,
            "testSessionHandle": "625295152f5dfa93fc6070f43c41df035ee6192a",
            "submissionId": 31908887
        },
        {
            "codingamerId": 5673719,
            "codingamerNickname": "myminit",
            "codingamerHandle": "847afa3caaa1cdb2b785f17c39979da59173765",
            "score": 0,
            "duration": 900000,
            "status": "STANDARD",
            "testSessionStatus": "COMPLETED",
            "languageId": "Python3",
            "rank": 14,
            "position": 20,
            "solutionShared": false,
            "testSessionHandle": "625295316eea3de1d53897ccf6f779db49704707",
            "submissionId": 31908886
        },
        {
            "codingamerId": 5673699,
            "codingamerNickname": "T1NNY",
            "codingamerHandle": "4aab08b3004ba84f515e84500865485f9963765",
            "score": 0,
            "duration": 900000,
            "status": "STANDARD",
            "testSessionStatus": "COMPLETED",
            "languageId": "Python3",
            "rank": 14,
            "position": 23,
            "solutionShared": false,
            "testSessionHandle": "625295344a5a2ea0bf1b3075824ac12def24081f",
            "submissionId": 31908883
        },
        {
            "codingamerId": 5673564,
            "codingamerNickname": "KhunThanakharn",
            "codingamerHandle": "81a0ed9a0ec65572b9feada325a608234653765",
            "score": 0,
            "duration": 900000,
            "status": "STANDARD",
            "testSessionStatus": "COMPLETED",
            "languageId": "Python3",
            "rank": 14,
            "position": 22,
            "solutionShared": false,
            "testSessionHandle": "62529533d4fa863bad46171a2af0263275a03bac",
            "submissionId": 31908881
        },
        {
            "codingamerId": 4388865,
            "codingamerNickname": "VarinPond",
            "codingamerHandle": "e07a034861180d16d6e1c9869e5f9d0b5688834",
            "codingamerAvatarId": 68202409504423,
            "score": 0,
            "duration": 900000,
            "status": "OWNER",
            "testSessionStatus": "COMPLETED",
            "languageId": "undefined",
            "rank": 14,
            "position": 1,
            "solutionShared": false,
            "testSessionHandle": "625295126542f6284dd68292dd0159ef92de0e59",
            "submissionId": 31908880
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
        "FASTEST"
    ],
    "type": "PRIVATE"
}

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
