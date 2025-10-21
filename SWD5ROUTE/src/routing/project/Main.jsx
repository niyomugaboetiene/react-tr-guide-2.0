import {  Link  } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <div>
              <nav className="flex space-x-[100px]">
                 <Link to="/home">Home</Link>
                 <Link to="/aboutUs">About</Link>
                 <Link to="/service">Service</Link>
              </nav>
            </div>
        </div>

    )
}

export default Main