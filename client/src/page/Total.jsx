import axios from "axios"

import { useEffect, useState } from "react"
const Total = () => {

    const [ScoreData, setScoreData] = useState([]);

    // const GetApi = () => {
    //     axios.get('https://acs-coc-api.wachawich.repl.co/api/totolscore')
    //         .then((response) => {
    //             setScoreData(response.data.day1)
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // }

    useEffect(() => {
        const GetApi = () => {
            axios.get('https://acs-coc-api.wachawich.repl.co/api/totolscore')
                .then((response) => {
                    setScoreData(response.data)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        GetApi()
    }, [])

    const combineScoresById = () => {
        const combinedScores = {};

        ScoreData.forEach(dayData => {
            for (const dayKey in dayData) {
                const matches = dayData[dayKey];
                for (const match of matches) {
                    for (const player of match.player) {
                        const playerId = player.id;
                        if (!combinedScores[playerId]) {
                            combinedScores[playerId] = {
                                codingamerNickname: player.codingamerNickname,
                                totalScore: 0,
                            };
                        }
                        combinedScores[playerId].totalScore += player.score;
                    }
                }
            }
        });

        const combinedScoresArray = Object.values(combinedScores);

        // เรียงลำดับตามคะแนนที่มากที่สุด
        combinedScoresArray.sort((a, b) => b.totalScore - a.totalScore);
        return combinedScoresArray;
    };

    const combinedScoresArray = combineScoresById();



    return (
        <>
            <h1 className="text-center text-6xl font-bold">Overall</h1>
            <div className="mt-10 container mx-auto px-4 h-screen">
                <div className="flex justify-center pt-6 h-80">
                    <table className="text-center w-full">
                        <thead>
                            <tr className=" text-3xl">
                                <th>Rank</th>
                                <th>Player</th>
                                <th>Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {combinedScoresArray.map((player, index) => (
                                <tr key={player.codingamerNickname} className="text-2xl">
                                    <td>{index + 1}</td>
                                    <td>{player.codingamerNickname}</td>
                                    <td>{player.totalScore}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );
};

export default Total
