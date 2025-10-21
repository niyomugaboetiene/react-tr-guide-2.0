import Home from "./routing/Home"
import Contact from "./routing/ContactUS"
import About from "./routing/About"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Main from "./routing/project/Main"
function App() {

  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />}/>
    //     <Route path="/about" element={<About />}/>
    //     <Route path="/contact" element={<Contact />}/>
    //   </Routes>
    // </Router>

    <div>
     <Main />
    </div>
  )
}

export default App
