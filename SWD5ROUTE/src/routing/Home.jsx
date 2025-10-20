import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="min-h-screen flex from-blue-300 to-purple-400 via--300 bg-gradient-to-bl items-center justify-center">
            <div>
                <p>This is home page</p>
                 <Link to="/about">About</Link>
            </div>
   
        </div>
    )
}

export default Home