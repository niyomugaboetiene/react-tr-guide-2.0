import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="min-h-screen flex from-blue-300 to-purple-400 via-green-300 bg-gradient-to-bl items-center justify-center">
            <div className="bg-gradient-to-l from-blue-200 to-purple-200 ">
                <p>This is home page</p>
                 <Link to="/about">About</Link>
            </div>
   
        </div>
    )
}

export default Home