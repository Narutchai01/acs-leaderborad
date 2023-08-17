import axios from "axios"
import { useEffect, useState } from "react"


const Weekly = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const GetApi = () => {
            axios.get('https://acs-api.onrender.com/products')
                .then((response) => {
                    setData(response.data)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        GetApi()
    }, [])

    console.log(data);

    
    
    return (
        <>
            
        </>
    )
}

export default Weekly
