import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import NavScore from '../components/NavScore';


const Roundpage = () => {
    const { dateId } = useParams();
    const [match1, setMatch1] = useState({});
    const [match2, setMatch2] = useState({});
    const [match3, setMatch3] = useState({});
    let round1 = {}
    let round2 = {}
    let round3 = {}


    const getMatch1 = async (dateId) => {
        const res = await fetch(`https://acs-api-coc.onrender.com/cocdata/${dateId}/1/data_match`);
        const data = await res.json();
        setMatch1(data);
    }

    const getMatch2 = async (dateId) => {
        const res = await fetch(`https://acs-api-coc.onrender.com/cocdata/${dateId}/2/data_match`);
        const data = await res.json();
        setMatch2(data);
    }

    const getMatch3 = async (dateId) => {
        const res = await fetch(`https://acs-api-coc.onrender.com/cocdata/${dateId}/2/data_match`);
        const data = await res.json();
        setMatch3(data);
    };

    round1 = match1.players
    round2 = match2.players
    round3 = match3.players

    console.log(round1);
    console.log(round2);
    console.log(round3);

    useEffect(() => {
        getMatch1(dateId);
        getMatch2(dateId);
        getMatch3(dateId);
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
    const Showmatch3 = round3?.map((player) => {
        const score = 100 - (player.rank - 1) * 100 / match3.players.length
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
                <div className='bg-black px-5 py-5 rounded-3xl bg-opacity-[20%]'>
                    <div className='mb-10'>
                        <NavScore />
                    </div>
                    <div className='flex flex-wrap gap-10'>
                        <h1 className='text-white font-bold text-3xl'>Round 1</h1>
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

                        <h1 className='text-white font-bold text-3xl'>Round 1</h1>
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

                        
                        
                        <h1 className='text-white font-bold text-3xl'>Round 1</h1>
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
                                    {Showmatch3}
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
