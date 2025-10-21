import {  Link  } from "react-router-dom";

const Main = () => {
    return (
        <nav>
            <Link to="/home">Home</Link>
            <Link to="/aboutUs">About</Link>
            <Link to="/service">Service</Link>
        </nav>
    )
}

export default Main