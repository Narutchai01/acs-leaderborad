import { useEffect, useState } from "react";
const Total = () => {

    const [data, setData] = useState([]);
    let Overall = {};

    const getData = async () => {
        const res = await fetch("http://localhost:3000/cocdata");
        const data = await res.json();
        setData(data);
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
            <tr key={player.codingamerId}>
                <td>{player.rank}</td>
                <td>{player.name}</td>
                <td>{player.score}</td>
            </tr>
        )
    });
    useEffect(() => {
        getData();
    }, []);

    return (
        <>
        <h1 className="font-bold my-10 text-center uppercase text-6xl">acs competition</h1>
            <div className="flex justify-center">
                <table className="w-[960px] text-center">
                    <thead className="text-[30px]">
                        <tr>
                            <th className="">Rank</th>
                            <th>Name</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody className="text-[23px]">
                        {showOverall}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Total
