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
                        "publicHandle": "3287296c3545c8d25366e4ae77adce835e27036",
                        "clashDurationTypeId": "SHORT",
                        "mode": "FASTEST",
                        "creationTime": "Sep 23, 2023, 1:35:25 PM",
                        "startTime": "Sep 23, 2023, 1:40:25 PM",
                        "endTime": "Sep 23, 2023, 1:55:25 PM",
                        "startTimestamp": 1695476425768,
                        "msBeforeStart": -1287787,
                        "msBeforeEnd": -387787,
                        "finished": true,
                        "started": true,
                        "publicClash": false,
                        "players": [
                            {
                                "codingamerId": 4761280,
                                "codingamerNickname": "Jack_Jessada",
                                "codingamerHandle": "97cbc51741f3f5e1f9cc3fd072e73f1a0821674",
                                "score": 100,
                                "duration": 113306,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "Python3",
                                "rank": 1,
                                "position": 2,
                                "solutionShared": true,
                                "testSessionHandle": "62529910b3ebbc520cb755f069d62a591a7c1477",
                                "submissionId": 31908971
                            },
                            {
                                "codingamerId": 4612183,
                                "codingamerNickname": "HE4RT",
                                "codingamerHandle": "2381e85449bdff1693251eb7c264625a3812164",
                                "codingamerAvatarId": 73611224462280,
                                "score": 100,
                                "duration": 158418,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "Python3",
                                "rank": 2,
                                "position": 3,
                                "solutionShared": true,
                                "testSessionHandle": "62529911602e995d4de15b9f239c8b1ec3757b71",
                                "submissionId": 31908977
                            },
                            {
                                "codingamerId": 5039462,
                                "codingamerNickname": "Merukim",
                                "codingamerHandle": "c373d08dc9c299c12c5c070bf10ad6142649305",
                                "codingamerAvatarId": 89984129008921,
                                "score": 100,
                                "duration": 167262,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "Python3",
                                "rank": 3,
                                "position": 17,
                                "solutionShared": true,
                                "testSessionHandle": "625299255188508addb020b607ef369efb36e1d7",
                                "submissionId": 31908981
                            },
                            {
                                "codingamerId": 5673662,
                                "codingamerNickname": "Mayoi",
                                "codingamerHandle": "5a8d9d884aa3dc866f26a5b6dc2846662663765",
                                "codingamerAvatarId": 110499764513563,
                                "score": 100,
                                "duration": 181537,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "Python3",
                                "rank": 4,
                                "position": 5,
                                "solutionShared": true,
                                "testSessionHandle": "625299139fb431ed7d6b8eba7c380c866d3ec049",
                                "submissionId": 31908983
                            },
                            {
                                "codingamerId": 5673693,
                                "codingamerNickname": "BooIsBoo",
                                "codingamerHandle": "5b0c358b4217a86ec74d33460692d2d13963765",
                                "score": 100,
                                "duration": 294393,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "Python3",
                                "rank": 5,
                                "position": 11,
                                "solutionShared": true,
                                "testSessionHandle": "62529919b5f2bec2f7013075d5dc63dea2dd10b4",
                                "submissionId": 31909007
                            },
                            {
                                "codingamerId": 4385417,
                                "codingamerNickname": "Riwara",
                                "codingamerHandle": "4c5db8cd95e4e55b4a0abca3c25e97bf7145834",
                                "codingamerAvatarId": 66348567827423,
                                "score": 100,
                                "duration": 313165,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "Python3",
                                "rank": 6,
                                "position": 26,
                                "solutionShared": true,
                                "testSessionHandle": "62529939f0376ddf35964782ce3ae24b6c5d4a4b",
                                "submissionId": 31909010
                            },
                            {
                                "codingamerId": 4804392,
                                "codingamerNickname": "o0SoloWolf0o",
                                "codingamerHandle": "3fc25ef1727b6b655438dd479076fdac2934084",
                                "score": 100,
                                "duration": 332197,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "Python3",
                                "rank": 7,
                                "position": 14,
                                "solutionShared": true,
                                "testSessionHandle": "625299223f9b97ca89c18490ab694de20a502295",
                                "submissionId": 31909014
                            },
                            {
                                "codingamerId": 5673564,
                                "codingamerNickname": "KhunThanakharn",
                                "codingamerHandle": "81a0ed9a0ec65572b9feada325a608234653765",
                                "score": 100,
                                "duration": 349198,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "Python3",
                                "rank": 8,
                                "position": 25,
                                "solutionShared": true,
                                "testSessionHandle": "62529933a5a9275bf85a27fa0e0efb1e0f6bba36",
                                "submissionId": 31909016
                            },
                            {
                                "codingamerId": 5673740,
                                "codingamerNickname": "Cocoa20",
                                "codingamerHandle": "c1d49debd49bae36b1137546c7c7b53c0473765",
                                "score": 100,
                                "duration": 353911,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "Python3",
                                "rank": 9,
                                "position": 8,
                                "solutionShared": false,
                                "testSessionHandle": "625299166408fea0a3948f89d97c9d7317adac28",
                                "submissionId": 31909017
                            },
                            {
                                "codingamerId": 4388154,
                                "codingamerNickname": "Dpresser",
                                "codingamerHandle": "7a17124f861f4b3029008d3fc7f35eba4518834",
                                "codingamerAvatarId": 93224004508751,
                                "score": 100,
                                "duration": 401144,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "Python3",
                                "rank": 10,
                                "position": 4,
                                "solutionShared": true,
                                "testSessionHandle": "6252991233406503e68e51d6b17170cc977d153f",
                                "submissionId": 31909026
                            },
                            {
                                "codingamerId": 5673719,
                                "codingamerNickname": "myminit",
                                "codingamerHandle": "847afa3caaa1cdb2b785f17c39979da59173765",
                                "score": 100,
                                "duration": 509053,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "Python3",
                                "rank": 11,
                                "position": 10,
                                "solutionShared": false,
                                "testSessionHandle": "62529918f5f9ba628aa84087b6c06b188daf5e33",
                                "submissionId": 31909044
                            },
                            {
                                "codingamerId": 5645399,
                                "codingamerNickname": "ImWachxBrokenHeart",
                                "codingamerHandle": "edbecb86c14cfb51aeeebc25affe34579935465",
                                "codingamerAvatarId": 110499985733262,
                                "score": 100,
                                "duration": 631721,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "Python3",
                                "rank": 12,
                                "position": 24,
                                "solutionShared": true,
                                "testSessionHandle": "625299321ddc9c60002cd5439674014906f59e1d",
                                "submissionId": 31909060
                            },
                            {
                                "codingamerId": 5673699,
                                "codingamerNickname": "T1NNY",
                                "codingamerHandle": "4aab08b3004ba84f515e84500865485f9963765",
                                "score": 100,
                                "duration": 723283,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "Python3",
                                "rank": 13,
                                "position": 9,
                                "solutionShared": true,
                                "testSessionHandle": "62529917141114b276f1906d5a1a7f91d30ded26",
                                "submissionId": 31909074
                            },
                            {
                                "codingamerId": 4511712,
                                "codingamerNickname": "Noppawut",
                                "codingamerHandle": "2f4ccf8aed0bda41c0e2fc9bdab129722171154",
                                "score": 100,
                                "duration": 854400,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "Python3",
                                "rank": 14,
                                "position": 20,
                                "solutionShared": false,
                                "testSessionHandle": "62529928a849eadad84fbf257bfb0e7c7f381736",
                                "submissionId": 31909092
                            },
                            {
                                "codingamerId": 5041262,
                                "codingamerNickname": "SasimaP",
                                "codingamerHandle": "68033c216c59cf1754503fa1d9a2fa012621405",
                                "codingamerAvatarId": 110500465988836,
                                "score": 100,
                                "duration": 890979,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "Python3",
                                "rank": 15,
                                "position": 12,
                                "solutionShared": false,
                                "testSessionHandle": "625299204ab8c0aeb5a04e61c1873569fe29d30d",
                                "submissionId": 31909100
                            },
                            {
                                "codingamerId": 5645401,
                                "codingamerNickname": "Farlos3",
                                "codingamerHandle": "548dadfa600fa76ce32da55df69a89671045465",
                                "score": 100,
                                "duration": 900000,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "Python3",
                                "rank": 16,
                                "position": 22,
                                "solutionShared": false,
                                "testSessionHandle": "62529930c03741a4c8b69513f703ac6aabb9e002",
                                "submissionId": 31909106
                            },
                            {
                                "codingamerId": 5724275,
                                "codingamerNickname": "Duckkrub",
                                "codingamerHandle": "85f9826fb6181556156550603b42a6cc5724275",
                                "score": 50,
                                "duration": 895905,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "C",
                                "rank": 17,
                                "position": 13,
                                "solutionShared": true,
                                "testSessionHandle": "62529921b10e1121fda79aa6885bdac3058d72f2",
                                "submissionId": 31909101
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
                                "rank": 18,
                                "position": 16,
                                "solutionShared": false,
                                "testSessionHandle": "625299244efd0d77e0a6a9229ab5bae7ea9dbbc8",
                                "submissionId": 31909114
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
                                "languageId": "Python3",
                                "rank": 18,
                                "position": 1,
                                "solutionShared": false,
                                "testSessionHandle": "6252990981737404ae2096330ca62e64917772ed",
                                "submissionId": 31909104
                            },
                            {
                                "codingamerId": 5673671,
                                "codingamerNickname": "poppop11",
                                "codingamerHandle": "ccddd109e93851f9f1df7fbff00f1f361763765",
                                "score": 0,
                                "duration": 900000,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "Python3",
                                "rank": 18,
                                "position": 27,
                                "solutionShared": false,
                                "testSessionHandle": "625299683c1e3f4361e7f62e61554267c186cfed",
                                "submissionId": 31909108
                            },
                            {
                                "codingamerId": 5724278,
                                "codingamerNickname": "GTH2202",
                                "codingamerHandle": "efadc381ed58048dc1dcf06d97fd80bb8724275",
                                "score": 0,
                                "duration": 900000,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "C",
                                "rank": 18,
                                "position": 19,
                                "solutionShared": false,
                                "testSessionHandle": "625299277dc9c2bca045b1e4207e1baa995c2695",
                                "submissionId": 31909103
                            },
                            {
                                "codingamerId": 5673636,
                                "codingamerNickname": "OooiooO",
                                "codingamerHandle": "f5eeca2fb0ec9c2815bdb7377cd50a696363765",
                                "score": 0,
                                "duration": 900000,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "C",
                                "rank": 18,
                                "position": 18,
                                "solutionShared": false,
                                "testSessionHandle": "625299261b40a1243e24713f7d25c065218e66d9",
                                "submissionId": 31909107
                            },
                            {
                                "codingamerId": 5670673,
                                "codingamerNickname": "Popeye321",
                                "codingamerHandle": "0f9a60313020fe0601b576e5ac045ac03760765",
                                "score": 0,
                                "duration": 877947,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "Python3",
                                "rank": 18,
                                "position": 15,
                                "solutionShared": false,
                                "testSessionHandle": "62529923d758696e3fc3d81ddce611a689dd1209",
                                "submissionId": 31909097
                            },
                            {
                                "codingamerId": 5673690,
                                "codingamerNickname": "mumu8",
                                "codingamerHandle": "e80f3c88d30cab9c8344cb8465d16dd50963765",
                                "codingamerAvatarId": 112116685755238,
                                "score": 0,
                                "duration": 882854,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "Python3",
                                "rank": 18,
                                "position": 6,
                                "solutionShared": false,
                                "testSessionHandle": "625299146801adfb42732d77666ef24ca22c355a",
                                "submissionId": 31909099
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
                                "rank": 18,
                                "position": 23,
                                "solutionShared": false,
                                "testSessionHandle": "6252993167121998115c72c07c6e58bbd481245f",
                                "submissionId": 31909115
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
                                "rank": 18,
                                "position": 21,
                                "solutionShared": false,
                                "testSessionHandle": "625299290216947315cdcaafffc57c50c33334ae",
                                "submissionId": 31909105
                            },
                            {
                                "codingamerId": 5673663,
                                "codingamerNickname": "LemonJuiceTH",
                                "codingamerHandle": "957e937c810b24e86342b7d73a476d463663765",
                                "score": 0,
                                "duration": 900000,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "undefined",
                                "rank": 18,
                                "position": 7,
                                "solutionShared": false,
                                "testSessionHandle": "6252991593ba61628ada8cedf784f3556c1e0e2b",
                                "submissionId": 31909113
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
                    {
                        "nbPlayersMin": 2,
                        "nbPlayersMax": 100,
                        "publicHandle": "3287327ce3bfa8e188e2d6f3bbede071ae132df",
                        "clashDurationTypeId": "SHORT",
                        "mode": "REVERSE",
                        "creationTime": "Sep 23, 2023, 2:00:56 PM",
                        "startTime": "Sep 23, 2023, 2:05:56 PM",
                        "endTime": "Sep 23, 2023, 2:20:56 PM",
                        "startTimestamp": 1695477956819,
                        "msBeforeStart": -947839,
                        "msBeforeEnd": -47839,
                        "finished": true,
                        "started": true,
                        "publicClash": false,
                        "players": [
                            {
                                "codingamerId": 4385417,
                                "codingamerNickname": "Riwara",
                                "codingamerHandle": "4c5db8cd95e4e55b4a0abca3c25e97bf7145834",
                                "codingamerAvatarId": 66348567827423,
                                "score": 100,
                                "duration": 168949,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "Python3",
                                "rank": 1,
                                "position": 13,
                                "solutionShared": true,
                                "testSessionHandle": "62530328d20f52d92087fa2a4fcbc02208d9ebe5",
                                "submissionId": 31909213
                            },
                            {
                                "codingamerId": 5039462,
                                "codingamerNickname": "Merukim",
                                "codingamerHandle": "c373d08dc9c299c12c5c070bf10ad6142649305",
                                "codingamerAvatarId": 89984129008921,
                                "score": 100,
                                "duration": 231206,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "Python3",
                                "rank": 2,
                                "position": 16,
                                "solutionShared": true,
                                "testSessionHandle": "62530331618f0049ccdff7d0e75dd9c13acc1ae9",
                                "submissionId": 31909228
                            },
                            {
                                "codingamerId": 4612183,
                                "codingamerNickname": "HE4RT",
                                "codingamerHandle": "2381e85449bdff1693251eb7c264625a3812164",
                                "codingamerAvatarId": 73611224462280,
                                "score": 100,
                                "duration": 241072,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "Python3",
                                "rank": 3,
                                "position": 15,
                                "solutionShared": true,
                                "testSessionHandle": "62530330d56018cafa08c7c362879c46b21851e9",
                                "submissionId": 31909229
                            },
                            {
                                "codingamerId": 4388154,
                                "codingamerNickname": "Dpresser",
                                "codingamerHandle": "7a17124f861f4b3029008d3fc7f35eba4518834",
                                "codingamerAvatarId": 93224004508751,
                                "score": 100,
                                "duration": 285851,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "Python3",
                                "rank": 4,
                                "position": 6,
                                "solutionShared": true,
                                "testSessionHandle": "62530321b8a3d7034e091612881f0f12f7d54323",
                                "submissionId": 31909235
                            },
                            {
                                "codingamerId": 4761280,
                                "codingamerNickname": "Jack_Jessada",
                                "codingamerHandle": "97cbc51741f3f5e1f9cc3fd072e73f1a0821674",
                                "score": 100,
                                "duration": 410938,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "Python3",
                                "rank": 5,
                                "position": 5,
                                "solutionShared": true,
                                "testSessionHandle": "62530320e49808d46765445632536e86faadc29f",
                                "submissionId": 31909253
                            },
                            {
                                "codingamerId": 5673663,
                                "codingamerNickname": "LemonJuiceTH",
                                "codingamerHandle": "957e937c810b24e86342b7d73a476d463663765",
                                "score": 100,
                                "duration": 439876,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "Python3",
                                "rank": 6,
                                "position": 12,
                                "solutionShared": true,
                                "testSessionHandle": "62530327622a72aee6490c495c0187c336cfa0ec",
                                "submissionId": 31909259
                            },
                            {
                                "codingamerId": 4804392,
                                "codingamerNickname": "o0SoloWolf0o",
                                "codingamerHandle": "3fc25ef1727b6b655438dd479076fdac2934084",
                                "score": 100,
                                "duration": 626002,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "Python3",
                                "rank": 7,
                                "position": 14,
                                "solutionShared": true,
                                "testSessionHandle": "6253032993ff897ceb3595b093223e3176373c77",
                                "submissionId": 31909285
                            },
                            {
                                "codingamerId": 4511712,
                                "codingamerNickname": "Noppawut",
                                "codingamerHandle": "2f4ccf8aed0bda41c0e2fc9bdab129722171154",
                                "score": 100,
                                "duration": 692052,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "Python3",
                                "rank": 8,
                                "position": 26,
                                "solutionShared": false,
                                "testSessionHandle": "62530341655cb4d111a928b8d71c224b33c01163",
                                "submissionId": 31909292
                            },
                            {
                                "codingamerId": 5645399,
                                "codingamerNickname": "ImWachxBrokenHeart",
                                "codingamerHandle": "edbecb86c14cfb51aeeebc25affe34579935465",
                                "codingamerAvatarId": 110499985733262,
                                "score": 100,
                                "duration": 751860,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "Python3",
                                "rank": 9,
                                "position": 3,
                                "solutionShared": true,
                                "testSessionHandle": "62530318d17654f75d8c413793af696f0af7a158",
                                "submissionId": 31909298
                            },
                            {
                                "codingamerId": 5673690,
                                "codingamerNickname": "mumu8",
                                "codingamerHandle": "e80f3c88d30cab9c8344cb8465d16dd50963765",
                                "codingamerAvatarId": 112116685755238,
                                "score": 50,
                                "duration": 899800,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "Python3",
                                "rank": 10,
                                "position": 7,
                                "solutionShared": false,
                                "testSessionHandle": "62530322140c2296bf6b030f0fdd995716f50b45",
                                "submissionId": 31909325
                            },
                            {
                                "codingamerId": 5563840,
                                "codingamerNickname": "H4aRu",
                                "codingamerHandle": "5efface12a3229efe410c4bcca674daf0483655",
                                "score": 50,
                                "duration": 900000,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "Python3",
                                "rank": 11,
                                "position": 21,
                                "solutionShared": false,
                                "testSessionHandle": "62530336d047d3285dddbe4f717bf0c1627edc0a",
                                "submissionId": 31909339
                            },
                            {
                                "codingamerId": 5673740,
                                "codingamerNickname": "Cocoa20",
                                "codingamerHandle": "c1d49debd49bae36b1137546c7c7b53c0473765",
                                "score": 50,
                                "duration": 900000,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "Python3",
                                "rank": 11,
                                "position": 24,
                                "solutionShared": false,
                                "testSessionHandle": "6253033921f6257d478d0d41604d4ae0cf25dc86",
                                "submissionId": 31909345
                            },
                            {
                                "codingamerId": 5673662,
                                "codingamerNickname": "Mayoi",
                                "codingamerHandle": "5a8d9d884aa3dc866f26a5b6dc2846662663765",
                                "codingamerAvatarId": 110499764513563,
                                "score": 25,
                                "duration": 883829,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "Python3",
                                "rank": 13,
                                "position": 9,
                                "solutionShared": false,
                                "testSessionHandle": "62530324ff7746f51024b4709140a62e5dca9f04",
                                "submissionId": 31909320
                            },
                            {
                                "codingamerId": 5724275,
                                "codingamerNickname": "Duckkrub",
                                "codingamerHandle": "85f9826fb6181556156550603b42a6cc5724275",
                                "score": 25,
                                "duration": 900000,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "C++",
                                "rank": 14,
                                "position": 17,
                                "solutionShared": false,
                                "testSessionHandle": "62530332c4f45e331c85a124d1ff03eedc5ab4e8",
                                "submissionId": 31909346
                            },
                            {
                                "codingamerId": 5673716,
                                "codingamerNickname": "Rashyy",
                                "codingamerHandle": "0ae044a6d0db82c954d5d9d3193f46956173765",
                                "score": 25,
                                "duration": 900000,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "Python3",
                                "rank": 15,
                                "position": 25,
                                "solutionShared": false,
                                "testSessionHandle": "625303407a46a1766885da8c414907fd789d84d3",
                                "submissionId": 31909329
                            },
                            {
                                "codingamerId": 5036600,
                                "codingamerNickname": "iHead_Nicker",
                                "codingamerHandle": "57e6741d41f29335f2077a411ce979350066305",
                                "codingamerAvatarId": 89074083457790,
                                "score": 0,
                                "duration": 526157,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "Python3",
                                "rank": 16,
                                "position": 28,
                                "solutionShared": true,
                                "testSessionHandle": "62530464f0758aa136f4cf60bad8f2f0d024e700",
                                "submissionId": 31909268
                            },
                            {
                                "codingamerId": 5670673,
                                "codingamerNickname": "Popeye321",
                                "codingamerHandle": "0f9a60313020fe0601b576e5ac045ac03760765",
                                "score": 0,
                                "duration": 853984,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "Python3",
                                "rank": 16,
                                "position": 11,
                                "solutionShared": false,
                                "testSessionHandle": "625303264d4df63d14143bf8a95227726346a40f",
                                "submissionId": 31909316
                            },
                            {
                                "codingamerId": 5673699,
                                "codingamerNickname": "T1NNY",
                                "codingamerHandle": "4aab08b3004ba84f515e84500865485f9963765",
                                "score": 0,
                                "duration": 899937,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "Python3",
                                "rank": 16,
                                "position": 4,
                                "solutionShared": false,
                                "testSessionHandle": "625303197683635c21727ef132186f998e067060",
                                "submissionId": 31909326
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
                                "rank": 16,
                                "position": 2,
                                "solutionShared": false,
                                "testSessionHandle": "62530317a1a04c50b513728066da3b806a00ad44",
                                "submissionId": 31909344
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
                                "rank": 16,
                                "position": 18,
                                "solutionShared": false,
                                "testSessionHandle": "6253033300cb479dc943eaf813cdd0c104ef5baa",
                                "submissionId": 31909343
                            },
                            {
                                "codingamerId": 5673671,
                                "codingamerNickname": "poppop11",
                                "codingamerHandle": "ccddd109e93851f9f1df7fbff00f1f361763765",
                                "score": 0,
                                "duration": 900000,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "undefined",
                                "rank": 16,
                                "position": 19,
                                "solutionShared": false,
                                "testSessionHandle": "62530334d399fa8378b591f7270b2570dd26e75d",
                                "submissionId": 31909342
                            },
                            {
                                "codingamerId": 5724278,
                                "codingamerNickname": "GTH2202",
                                "codingamerHandle": "efadc381ed58048dc1dcf06d97fd80bb8724275",
                                "score": 0,
                                "duration": 900000,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "C",
                                "rank": 16,
                                "position": 20,
                                "solutionShared": false,
                                "testSessionHandle": "62530335e3cfc21639387fbbb922d3802a22b49d",
                                "submissionId": 31909347
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
                                "rank": 16,
                                "position": 22,
                                "solutionShared": false,
                                "testSessionHandle": "62530337f131c0c6b73a36479077a02cafe2fb8e",
                                "submissionId": 31909341
                            },
                            {
                                "codingamerId": 5645401,
                                "codingamerNickname": "Farlos3",
                                "codingamerHandle": "548dadfa600fa76ce32da55df69a89671045465",
                                "score": 0,
                                "duration": 900000,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "undefined",
                                "rank": 16,
                                "position": 27,
                                "solutionShared": false,
                                "testSessionHandle": "62530346a55d8c9546aa4e288e9637e657d21aac",
                                "submissionId": 31909340
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
                                "languageId": "Python3",
                                "rank": 16,
                                "position": 1,
                                "solutionShared": false,
                                "testSessionHandle": "625303168f3827fbbc9e33071e41425958dd524d",
                                "submissionId": 31909331
                            },
                            {
                                "codingamerId": 5673636,
                                "codingamerNickname": "OooiooO",
                                "codingamerHandle": "f5eeca2fb0ec9c2815bdb7377cd50a696363765",
                                "score": 0,
                                "duration": 900000,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "C",
                                "rank": 16,
                                "position": 8,
                                "solutionShared": false,
                                "testSessionHandle": "625303236380937a438f4e2c9faae27f0af33b17",
                                "submissionId": 31909333
                            },
                            {
                                "codingamerId": 5673693,
                                "codingamerNickname": "BooIsBoo",
                                "codingamerHandle": "5b0c358b4217a86ec74d33460692d2d13963765",
                                "score": 0,
                                "duration": 900000,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "Python3",
                                "rank": 16,
                                "position": 10,
                                "solutionShared": false,
                                "testSessionHandle": "62530325de3b260a9c72da792c3b164b83e32ea2",
                                "submissionId": 31909334
                            },
                            {
                                "codingamerId": 5041262,
                                "codingamerNickname": "SasimaP",
                                "codingamerHandle": "68033c216c59cf1754503fa1d9a2fa012621405",
                                "codingamerAvatarId": 110500465988836,
                                "score": 0,
                                "duration": 900000,
                                "status": "STANDARD",
                                "testSessionStatus": "COMPLETED",
                                "languageId": "Python3",
                                "rank": 16,
                                "position": 23,
                                "solutionShared": false,
                                "testSessionHandle": "6253033807ca3a27801c94f23e81de30775967b8",
                                "submissionId": 31909337
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
                            "REVERSE"
                        ],
                        "type": "PRIVATE"
                    }
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
