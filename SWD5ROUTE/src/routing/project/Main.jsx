import {  Link  } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <div className="flex justify-end bg-gradient-to-br from-green-400 to-violet-400 via-blue-400  p-9 rounded-b-2xl shadow-2xl">
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