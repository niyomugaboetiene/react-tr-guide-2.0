// import Home from "./routing/Home"
// import Contact from "./routing/ContactUS"
// import About from "./routing/About"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./routing/project/Home"
import AboutPage from "./routing/project/About"
import Service from "./routing/project/Service"
import Main from "./routing/project/Main"

function App() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 to-green-300 via-violet-300">
    <BrowserRouter>
     <Main />
      <Routes>
        {/* <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>   */}

              <Route path="/home" element={<HomePage />}/>
              <Route path="/aboutUs" element={<AboutPage />}/>
              <Route path="/service" element={<Service />}/>
      </Routes>
    </BrowserRouter>

    </div>

  
  )
}

export default App
