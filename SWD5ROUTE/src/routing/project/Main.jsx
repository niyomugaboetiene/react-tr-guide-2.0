import {  Link  } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <div className="flex justify-center bg-gradient-to-br from-blue-300 to-green-300 via-violet-300 ">
              <nav className="flex space-x-[100px] mt-5">
                 <Link to="/home">Home</Link>
                 <Link to="/aboutUs">About</Link>
                 <Link to="/service">Service</Link>
              </nav>
            </div>
        </div>

    )
}

export default Main