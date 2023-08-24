import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import NavScore from '../components/NavScore';


const Roundpage = () => {
    const { dateId } = useParams();
    const [match1, setMatch1] = useState({});
    const [match2, setMatch2] = useState({});
    let round1 = {}
    let round2 = {}


    const getMatch1 = async (dateId) => {
        const res = await fetch(`http://localhost:3000/cocdata/${dateId}/1/data_match`);
        const data = await res.json();
        setMatch1(data);
    }

    const getMatch2 = async (dateId) => {
        const res = await fetch(`http://localhost:3000/cocdata/${dateId}/2/data_match`);
        const data = await res.json();
        setMatch2(data);
    }

    round1 = match1.players
    round2 = match2.players

    console.log(round1);
    console.log(round2);

    useEffect(() => {
        getMatch1(dateId);
        getMatch2(dateId);
    }, [dateId]);

    const Showmatch1 = round1?.map((player) => {
        const score = 100 - (player.rank - 1) * 100 / match1.players.length
        return (
            <tr key={player.codingamerId}>
                <td>{player.rank}</td>
                <td>{player.codingamerNickname}</td>
                <td>{score}</td>
            </tr>
        )
    })
    const Showmatch2 = round2?.map((player) => {
        const score = 100 - (player.rank - 1) * 100 / match2.players.length
        return (
            <tr key={player.codingamerId}>
                <td>{player.rank}</td>
                <td>{player.codingamerNickname}</td>
                <td>{score}</td>
            </tr>
        )
    })

    return (
        <>
            <div className='container mx-auto px-36'>
                <div className='mt-12 bg-black p-7 bg-opacity-[20%] rounded-3xl'>
                    <NavScore />
                    <div className='grid grid-cols-2 gap-[30px] justify-center h-[400px] mt-10'>
                        <div className='bg-[#291456] text-white w-full h-auto py-3 rounded-2xl'>
                            <table className='w-full h-full'>
                                <thead>
                                    <tr>
                                        <th>Rank</th>
                                        <th>Name</th>
                                        <th>Score</th>
                                    </tr>
                                </thead>
                                <tbody className='text-center text-[20px] [&>*:nth-child(2n)]:bg-[#291456] [&>*:nth-child(2n+1)]:bg-[#35246A] '>
                                    {Showmatch1}
                                </tbody>
                            </table>
                        </div>
                        <div className='bg-[#291456] text-white w-full h-auto py-3 rounded-2xl'>
                            <table className='w-full h-full'>
                                <thead>
                                    <tr>
                                        <th>Rank</th>
                                        <th>Name</th>
                                        <th>Score</th>
                                    </tr>
                                </thead>
                                <tbody className='text-center text-[20px] [&>*:nth-child(2n)]:bg-[#291456] [&>*:nth-child(2n+1)]:bg-[#35246A] '>
                                    {Showmatch2}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Roundpage
