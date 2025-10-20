import { Link } from "react-router-dom"
const Contact = () => {
    return (
        <div className="min-h-screen flex items-center justify-center from-blue-300 to-purple-400 via-green-300 bg-gradient-to-bl">
            <div className="bg-blue-200 p-12 rounded-xl shadow-xl w-[30%]">
                <p className="text-center text-2xl font-light">This is contact page</p>
                <div className="mt-4 items-center justify-center flex">
                    <Link to="/" className="bg-green-400 px-10 py-2 text-white rounded-2xl hover:bg-green-300 transition duration-200">Back to Home</Link>
                </div>
            </div>
        </div>
    )
}

export default Contact