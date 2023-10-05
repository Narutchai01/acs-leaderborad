import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavScore from "../components/NavScore";
import TableWeely3 from "../components/TableWeely3";
import TableWeely4 from "../components/TableWeely4";

const Weekly = () => {
    const { dateId } = useParams();
    const [dataMatch, setDataMatch] = useState([]);
    // let round1 = {}
    // let round2 = {}
    let top10 = { rank: 0, name: '', score1: 0, score2: 0, score3: 0, score4: 0, total: 0 }



    const getDataMatch = async (dateId) => {
        const res = await fetch(`https://acs-api-coc.onrender.com/cocdata/${dateId}`);
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
                        score3: 0,
                        score4: 0,
                        total: 0
                    }
                }
                if (coc.match_id === "1") {
                    parseInt(
                        top10[playerId].score1 = 100 - (player.rank - 1) * 100 / match.players.length
                    )
                }
                if (coc.match_id === "2") {
                    parseInt(
                        top10[playerId].score2 = 100 - (player.rank - 1) * 100 / match.players.length
                    )
                }
                if (coc.match_id === "3") {
                    parseInt(
                        top10[playerId].score3 = 100 - (player.rank - 1) * 100 / match.players.length
                    )
                }
                if (coc.match_id === "4") {
                    parseInt(
                        top10[playerId].score4 = 100 - (player.rank - 1) * 100 / match.players.length
                    )
                }
                parseInt(
                    top10[playerId].total = parseInt(top10[playerId].score1) + parseInt(top10[playerId].score2) + parseInt(top10[playerId].score3 + parseInt(top10[playerId].score4))
                )
            })
        })
    })

    top10 = Object.values(top10).sort((a, b) => b.total - a.total).slice(0, 10)


    const ShowTop103 = top10?.map((player, index) => {
        return (
            <tr key={player.codingamerId} >
                <td>{index + 1}</td>
                <td>{player.name}</td>
                <td>{parseInt(player.score1)}</td>
                <td>{parseInt(player.score2)}</td>
                <td>{parseInt(player.score3)}</td>
                <td>{parseInt(player.total)}</td>
            </tr>
        )
    })
    const ShowTop104 = top10?.map((player, index) => {
        return (
            <tr key={player.codingamerId} >
                <td>{index + 1}</td>
                <td>{player.name}</td>
                <td>{parseInt(player.score1)}</td>
                <td>{parseInt(player.score2)}</td>
                <td>{parseInt(player.score3)}</td>
                <td>{parseInt(player.score4)}</td>
                <td>{parseInt(player.total)}</td>
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
                                    {dateId == 3 ? <TableWeely4 /> : <TableWeely3 />}
                                    <TableWeely4 />
                                </thead>
                                <tbody className="text-[20px] text-center text-white [&>*:nth-child(2n)]:bg-[#291456] [&>*:nth-child(2n+1)]:bg-[#35246A]">
                                    {dateId == 3 ? ShowTop104 : ShowTop103}
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


