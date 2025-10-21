import {  Link  } from "react-router-dom";

const Main = () => {
    return (
        <div>
           <nav>
              <Link to="/home">Home</Link>
              <Link to="/aboutUs">About</Link>
              <Link to="/service">Service</Link>
        </nav>
        </div>

    )
}

export default Main