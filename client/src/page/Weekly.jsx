import { Link } from "react-router-dom";


const Weekly = () => {

    return (
        <div className="container">
            <Link to="/weekly/1" target="_parent" rel="noopener noreferrer">
                <button id='x'>weekly 1</button>
            </Link>
            <Link to="/weekly/2" target="_parent" rel="noopener noreferrer">
                <button id='xx'>weekly 2</button>
            </Link>
            <Link to="/weekly/3" target="_parent" rel="noopener noreferrer">
                <button id='xxx'>weekly 3</button>
            </Link>
            <Link to="/weekly/4" target="_parent" rel="noopener noreferrer">
                <button id='xxxx'>weekly 4</button>
            </Link>
        </div>
    )
}

export default Weekly
