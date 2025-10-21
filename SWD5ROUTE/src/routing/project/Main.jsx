import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Service from "./Service";

const Main = () => {
    return (
        <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/service">Service</Link>
        </nav>

        <BrowserRouter>
           <Routes>
              <Route path="/" Component={<Home />}/>
              <Route path="/about" Component={<About />}/>
              <Route path="/service" Component={<Service />}/>
           </Routes>
        </BrowserRouter>
        </div>


    )
}