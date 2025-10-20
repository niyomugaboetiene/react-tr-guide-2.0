import { Link } from "react-router-dom"
const About = () => {
    return (
        <div className="min-h-screen flex from-blue-300 to-purple-400 via-green-300 bg-gradient-to-bl items-center justify-center">
            <div className="bg-gradient-to-l from-blue-200 to-purple-200 via-green-200 p-7 w-[20%] rounded-xl shadow-2xl">
                <p lassName="font-bold">This is About page</p>
                  <div className="mt-4 items-center justify-center flex">
                    <Link to="/contact" className="bg-green-400 px-10 py-2 text-white rounded-2xl hover:bg-green-300 transition duration-200">Contact us</Link>
                </div>
            </div>
        </div>
    )
}

export default About