import { useParams,Link } from "react-router-dom"
import { useState, useEffect } from "react";


const NavScore = () => {
    const { dateId } = useParams();
    const [weeks, setWeeks] = useState();

    const getWeeks = async () => {
        const response = await fetch("http://localhost:3000/cocdata");
        const data = await response.json();
        setWeeks(data);
    }

    useEffect(() => {
        getWeeks(dateId);
    }, [dateId]);

    const getWeek = weeks?.map((week) => {
        return (
            <h1 key={week.id} className="px-4 py-2 bg-white rounded-lg bg-opacity-30 font-bold text-white">
                <Link to={`/weekly/${week.id}`}>{week.id}</Link>
            </h1>
        )
    })

    return (
        <>
            <div className="flex justify-between h-[50px] items-center">
                <div className="flex justify-between gap-20 h-full items-center ">
                    <div>
                        <button className="bg-white py-3 px-5 rounded-xl text-xl font-bold">
                            <Link to={`/weekly/${dateId}`}>Top 10</Link>
                        </button>
                    </div>
                    <div>
                        <button className="bg-white py-3 px-5 rounded-xl text-xl font-bold" >
                            <Link to={`/weekly/${dateId}/round`}>Round</Link>
                        </button>
                    </div>
                </div>
                <div className="flex gap-3 h-full items-center" >
                    <h1 className="text-white text-xl" >Week</h1>
                    {getWeek}
                </div>
            </div>
        </>
    )
}

export default NavScore
