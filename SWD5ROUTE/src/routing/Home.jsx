import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div>
            <p>This is home page</p>
            <Link to="/about">About</Link>
        </div>
    )
}

export default Home