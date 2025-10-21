import Home from "./Home";
import About from "./About";
import Service from "./Service";

const Interaction = () => {
    return (
        <BrowserRouter>
           <Routes>
              <Route path="/" Component={<Home />}/>
              <Route path="/about" Component={<About />}/>
              <Route path="/service" Component={<Service />}/>
           </Routes>
        </BrowserRouter>
    )
}

export default Interaction