import {  Link  } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <div className="flex ms-[550px] justify-center bg-gradient-to-br from-green-400 to-violet-400 via-blue-400 max-w-2xl p-9">
              <nav className="flex space-x-[100px] mt-5 justify-center">
                 <Link to="/home">Home</Link>
                 <Link to="/aboutUs">About</Link>
                 <Link to="/service">Service</Link>
              </nav>
            </div>
        </div>

    )
}

export default Main