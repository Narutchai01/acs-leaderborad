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
            <h1 key={week.id} className="border-2 px-4 bg-red-600">
                <Link to={`/weekly/${week.id}`}>{week.id}</Link>
            </h1>
        )
    })

    return (
        <>
            <div className="flex justify-between h-[50px] items-center">
                <div className="flex gap-6">
                    <div>
                        <button>
                            <Link to={`/weekly/${dateId}`}>Top 10</Link>
                        </button>
                    </div>
                    <div>
                        <button>
                            <Link to={`/weekly/${dateId}/round`}>Round</Link>
                        </button>
                    </div>
                </div>
                <div className="flex gap-3">
                    <h1>Week</h1>
                    {getWeek}
                </div>
            </div>
        </>
    )
}

export default NavScore
