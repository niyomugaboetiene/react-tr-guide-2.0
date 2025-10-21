import Home from "./routing/Home"
import Contact from "./routing/ContactUS"
import About from "./routing/About"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./routing/project/Home"
import About from "./routing/project/About"
import Service from "./routing/project/Service"
function App() {

  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>  */}
         <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </Router>

  
  )
}

export default App
