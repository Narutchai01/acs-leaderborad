import axios from "axios"
import { useEffect, useState } from "react"


const Weekly = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const GetApi = () => {
            axios.get('https://acs-api-coc.onrender.com/cocData')
                .then((response) => {
                    setData(response.data)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        GetApi()
    }, [])

    // console.log(data);

    const getData = data.forEach((item) => {
        return <h1>{item.id}</h1>
    });
    
    
    return (
        <>
        <h1>Weekly</h1>
        {getData}
        </>
    )
}

export default Weekly
