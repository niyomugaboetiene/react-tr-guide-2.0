// import Home from "./routing/Home"
// import Contact from "./routing/ContactUS"
// import About from "./routing/About"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./routing/project/Home"
import AboutPage from "./routing/project/About"
import Service from "./routing/project/Service"
import Main from "./routing/project/Main"

function App() {

  return (
    <div>
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>   */}

              <Route path="/" Component={<HomePage />}/>
              <Route path="/about" Component={<AboutPage />}/>
              <Route path="/service" Component={<Service />}/>
      </Routes>
    </Router>

    <Main />
    </div>

  
  )
}

export default App
