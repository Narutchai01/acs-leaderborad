import { useEffect, useState } from "react";
import logo from "../assets/log_acs.png";
const Total = () => {

    const [data, setData] = useState([]);
    let Overall = {};

    const getData = async () => {
        const res = await fetch("https://acs-api-coc.onrender.com/cocdata");
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
                            score: 0,
                        };
                    }
                    Overall[playId].score += score;
                })
            })
        })
    })
    Overall = Object.values(Overall).sort((a, b) => b.score - a.score);

    const showOverall = Overall?.map((player,index) => {
        return (
            <tr key={player.codingamerId} className="">
                <td>{index+1}</td>
                <td className="text-left">{player.name}</td>
                <td>{parseInt(player.score)}</td>
            </tr>
        )
    });
    useEffect(() => {
        getData();
    }, []);

    return (
        <>
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
