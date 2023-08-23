import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'


const MatchDay = () => {
    const { dateId } = useParams();
    const [data, setData] = useState({});

    const GetApi = async (dateId) => {
        axios.get(`http://localhost:3000/cocdata/${dateId}`)
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    useEffect(() => {
        GetApi(dateId);
    }, [dateId])


    console.log(data.coc_data);

    const matchDay = data.coc_data?.map((item) => {
        return (
            <option value={item.match_id} key={item.match_id}>
                <h1>
                    <Link to={`${item.match_id}`}>Match : {item.match_id}</Link>
                </h1>
            </option>
            // <h1 key={item.match_id} className='p-4 font-bold border-4 rounded-lg border-black text-lg'>
            // </h1>
        )
    })
    return (
        <>
            <p>{dateId}</p>
            <div className='flex justify-center gap-60'>
                <select>
                    {matchDay}
                </select>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
            </table>
        </>
    )
}

export default MatchDay
