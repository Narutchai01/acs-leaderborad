import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import NavScore from '../components/NavScore';


const Roundpage = () => {
    const [check, setCheck] = useState([]);
    const { dateId } = useParams();
    const [match1, setMatch1] = useState({});
    const [match2, setMatch2] = useState({});
    const [match3, setMatch3] = useState({});
    const [match4, setMatch4] = useState({});
    let round1 = {}
    let round2 = {}
    let round3 = {}
    let round4 = {}

    const getCheck = async (dateId) => {
        const res = await fetch(`https://acs-api-coc.onrender.com/cocdata/${dateId}`);
        // const res = await fetch(`http://localhost:3000/cocData/${dateId}`);
        const data = await res.json();
        setCheck(data);
    }
    const getMatch1 = async (dateId) => {
        const res = await fetch(`https://acs-api-coc.onrender.com/cocdata/${dateId}/1/data_match`);
        // const res = await fetch(`http://localhost:3000/cocData/${dateId}/1/data_match`);
        const data = await res.json();
        setMatch1(data);
    }

    const getMatch2 = async (dateId) => {
        const res = await fetch(`https://acs-api-coc.onrender.com/cocdata/${dateId}/2/data_match`);
        // const res = await fetch(`http://localhost:3000/cocData/${dateId}/2/data_match`);
        const data = await res.json();
        setMatch2(data);
    }

    const getMatch3 = async (dateId) => {
        const res = await fetch(`https://acs-api-coc.onrender.com/cocdata/${dateId}/3/data_match`);
        // const res = await fetch(`http://localhost:3000/cocData/${dateId}/3/data_match`);
        const data = await res.json();
        setMatch3(data);
    };
    const getMatch4 = async (dateId) => {
        const res = await fetch(`https://acs-api-coc.onrender.com/cocdata/${dateId}/4/data_match`);
        // const res = await fetch(`http://localhost:3000/cocData/${dateId}/4/data_match`);
        const data = await res.json();
        setMatch4(data);
    };


    round1 = match1.players
    round2 = match2.players
    round3 = match3.players
    round4 = match4.players

    // console.log(round1);
    // console.log(round2);
    // console.log(round3);

    useEffect(() => {
        getMatch1(dateId);
        getMatch2(dateId);
        getMatch3(dateId);
        getCheck(dateId);
        getMatch4(dateId);
    }, [dateId]);


    const Showmatch1 = round1?.map((player) => {
        const score = 100 - (player.rank - 1) * 100 / match1.players.length
        return (
            <tr key={player.codingamerId}>
                <td>{player.rank}</td>
                <td>{player.codingamerNickname}</td>
                <td>{parseInt(score)}</td>
            </tr>
        )
    })
    const Showmatch2 = round2?.map((player) => {
        const score = 100 - (player.rank - 1) * 100 / match2.players.length
        return (
            <tr key={player.codingamerId}>
                <td>{player.rank}</td>
                <td>{player.codingamerNickname}</td>
                <td>{parseInt(score)}</td>
            </tr>
        )
    })
    const Showmatch3 = round3?.map((player) => {
        const score = 100 - (player.rank - 1) * 100 / match3.players.length
        return (
            <tr key={player.codingamerId}>
                <td>{player.rank}</td>
                <td>{player.codingamerNickname}</td>
                <td>{parseInt(score)}</td>
            </tr>
        )
    })
    const Showmatch4 = round4?.map((player) => {
        const score = 100 - (player.rank - 1) * 100 / match4.players.length
        return (
            <tr key={player.codingamerId}>
                <td>{player.rank}</td>
                <td>{player.codingamerNickname}</td>
                <td>{parseInt(score)}</td>
            </tr>
        )
    })

    const CreateTable = check.coc_data?.map((player) => {
        return (
            <div key={player.match_id}>
                <h1 className='text-white font-bold text-3xl mb-10'>Round {player.match_id}</h1>
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
                            {player.match_id == 1 ? Showmatch1 : player.match_id == 2 ? Showmatch2 : player.match_id == 3 ? Showmatch3 : Showmatch4}
                        </tbody>
                    </table>
                </div>

            </div>
        )
    })
    return (
        <>
            <div className='container mx-auto px-36'>
                <div className='bg-black px-5 py-5 rounded-3xl bg-opacity-[20%]'>
                    <div className='mb-10'>
                        <NavScore />
                    </div>
                    <div className='flex flex-col gap-10'>
                        {CreateTable}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Roundpage
