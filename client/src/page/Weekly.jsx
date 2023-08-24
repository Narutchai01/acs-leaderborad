import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavScore from "../components/NavScore";


const Weekly = () => {
    const { dateId } = useParams();
    const [dataMatch, setDataMatch] = useState([]);
    // let round1 = {}
    // let round2 = {}
    let top10 = { rank: 0, name: '', score1: 0, score2: 0, total: 0 }



    const getDataMatch = async (dateId) => {
        const res = await fetch(`http://localhost:3000/cocdata/${dateId}`);
        const data = await res.json();
        setDataMatch(data);
    }

    dataMatch.coc_data?.forEach(coc => {
        coc.match_data?.forEach(match => {
            match.players?.forEach(player => {
                const playerId = player.codingamerId
                if (!top10[playerId]) {
                    top10[playerId] = {
                        rank: player.rank,
                        name: player.codingamerNickname,
                        score1: 0,
                        score2: 0,
                        total: 0
                    }
                }
                if (coc.match_id === "1") {
                    top10[playerId].score1 = 100 - (player.rank - 1) * 100 / match.players.length
                }
                if (coc.match_id === "2") {
                    top10[playerId].score2 = 100 - (player.rank - 1) * 100 / match.players.length
                }
                top10[playerId].total = top10[playerId].score1 + top10[playerId].score2
            })
        })
    })

    top10 = Object.values(top10).sort((a, b) => b.total - a.total).slice(0, 10)

    console.log(top10);

    const ShowTop10 = top10?.map((player) => {
        return (
            <tr key={player.codingamerId} >
                <td>{player.rank}</td>
                <td>{player.name}</td>
                <td>{player.score1}</td>
                <td>{player.score2}</td>
                <td>{player.total}</td>
            </tr>
        )
    })

    useEffect(() => {
        getDataMatch(dateId);
    }, [dateId]);


    return (
        <>

            <div className="container mx-auto px-36">
                <div className="bg-black px-5 py-5 rounded-3xl bg-opacity-[20%]">
                    <NavScore />
                    <div className="flex justify-center w-75 mt-5">
                        <div className="rounded-3xl w-full h-[500px] py-5 bg-[#291456]">
                            <table className="text-center w-full h-full bg-black">
                                <thead className="text-[30px] bg-[#291456] text-white">
                                    <tr>
                                        <th>Rank</th>
                                        <th>Name</th>
                                        <th>Round 1</th>
                                        <th>Round 2</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody className="text-[20px] text-center text-white [&>*:nth-child(2n)]:bg-[#291456] [&>*:nth-child(2n+1)]:bg-[#35246A]">
                                    {ShowTop10}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Weekly


