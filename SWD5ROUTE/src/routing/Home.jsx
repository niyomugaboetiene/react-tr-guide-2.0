import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="min-h-screen flex from-blue-300 to-purple-400 via-green-300 bg-gradient-to-bl items-center justify-center">
            <div className="bg-gradient-to-l from-blue-200 to-purple-200 via-green-200 p-7 w-[20%] rounded-xl shadow-2xl">
                <p className="text-center text-xl font-light">This is home page</p>
                <div className="mt-4 items-center justify-center flex">
                    <Link to="/about" className="bg-green-400 px-10 py-2 text-white rounded-2xl hover:bg-green-300 transition duration-200">About</Link>
                </div>
            </div>
   
        </div>
    )
}

export default Home