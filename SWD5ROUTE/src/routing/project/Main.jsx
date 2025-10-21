import {  Link  } from "react-router-dom";


const Main = () => {
    return (
        <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/service">Service</Link>
        </nav>
        </div>
    )
}

export default Main