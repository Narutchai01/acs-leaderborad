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
                <NavScore />
                <div className='flex flex-row gap-52'>
                    <table>
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>Name</th>
                                <th>Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Showmatch1}
                        </tbody>
                    </table>
                    <table>
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>Name</th>
                                <th>Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Showmatch2}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Roundpage
