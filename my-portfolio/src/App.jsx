import './index.css'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import About from './Pages/About'
import Work from './Pages/Work'
import Contact from './Pages/Contact'
import Experience from './Pages/Experience'

function App() {

  return (
    <>
      <Navbar />
      <div id="home" className="bg-gradient-to-r from-indigo-950 via-indigo-950 to-slate-600/80 pt-14">
        <Home />
      </div>
      <div id="about" className="bg-gradient-to-r from-indigo-950 to-slate-900 pt-14">
        <About />
      </div>
      <div id="work" className="bg-gradient-to-r from-indigo-950 to-slate-900 pt-14">
        <Work />
      </div>
      <div id="experience" className="bg-gradient-to-r from-indigo-950 to-slate-900 pt-14">
        <Experience />
      </div>
      <div id="contact" className="bg-gradient-to-r from-indigo-950 to-slate-900 pt-14">
        <Contact />
      </div>
    </>
  )
}

export default App
