<<<<<<< HEAD
import { useEffect, useState } from "react";
import logo from "../assets/log_acs.png";
const Total = () => {

    const [data, setData] = useState([]);
    let Overall = {};

    const getData = async () => {
        const res = await fetch("http://localhost:3000/cocdata");
        const data = await res.json();
        setData(data);
=======

import { useEffect, useState } from "react"


const Total = () => {

    const [apiData, setApiData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://acs-coc-api.wachawich.repl.co/api/totalscore');
            const data = await response.json();
            setApiData(data);
          } catch (error) {
            console.error('Error fetching API data:', error);
          }
        };
    
        fetchData();
      }, []);

    const combineScoresById = () => {
        const combinedScores = {};

        apiData.forEach(user => {
            user.coc_data.forEach(coc => {
              coc.match_data.forEach(match => {
                match.player.forEach(player => {
                  const playerId = player.id;
                  if (!combinedScores[playerId]) {
                    combinedScores[playerId] = {
                      nickname: player.codingamerNickname,
                      totalScore: 0,
                    };
                  }
                  combinedScores[playerId].totalScore += player.score;
                });
              });
            });
          });

        const combinedScoresArray = Object.values(combinedScores);

        // เรียงลำดับตามคะแนนที่มากที่สุด
        combinedScoresArray.sort((a, b) => b.totalScore - a.totalScore);
        return combinedScoresArray;
>>>>>>> main
    };
    // console.log(data);


    data?.forEach(coc => {
        coc.coc_data?.forEach(match => {
            match.match_data.forEach(dataMatch => {
                dataMatch?.players.forEach(player => {
                    const playId = player.codingamerId;
                    const score = 100 - (player.rank - 1) * 100 / dataMatch.players.length;
                    if (!Overall[playId]) {
                        Overall[playId] = {
                            rank: player.rank,
                            name: player.codingamerNickname,
                            score: score,
                        };
                        Overall[playId].score += Overall[playId].score;
                    }
                })
            })
        })
    })
    Overall = Object.values(Overall).sort((a, b) => b.score - a.score);

    const showOverall = Overall?.map((player) => {
        return (
            <tr key={player.codingamerId} className="">
                <td>{player.rank}</td>
                <td className="text-left">{player.name}</td>
                <td>{player.score}</td>
            </tr>
        )
    });
    useEffect(() => {
        getData();
    }, []);

    return (
        <>
<<<<<<< HEAD
            <div className="container mx-auto px-36">
                <div className="flex justify-center">
                    <img src={logo} alt="" width={500} />
                </div>
                <div className="flex justify-center w-75 bg-black px-5 py-5 rounded-3xl bg-opacity-[20%]">
                    <div className="rounded-3xl w-full h-auto py-5 bg-[#291456]">
                        <table className="text-center w-full bg-black">
                            <thead className="text-[30px] bg-[#291456] text-white">
                                <tr>
                                    <th>Rank</th>
                                    <th>Name</th>
                                    <th>Score</th>
=======
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
                                <tr key={player.nickname} className="text-2xl">
                                    <td>{index + 1}</td>
                                    <td>{player.nickname}</td>
                                    <td>{player.totalScore}</td>
>>>>>>> main
                                </tr>
                            </thead>
                            <tbody className="text-[23px] text-center text-white [&>*:nth-child(2n)]:bg-[#291456] [&>*:nth-child(2n+1)]:bg-[#35246A]">
                                    {showOverall}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Total
