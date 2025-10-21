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
    <div>
    <BrowserRouter>
     <Main />
      <Routes>
        {/* <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>   */}

              <Route path="/" element={<HomePage />}/>
              <Route path="/about" element={<AboutPage />}/>
              <Route path="/service" element={<Service />}/>
      </Routes>
    </BrowserRouter>

    </div>

  
  )
}

export default App
