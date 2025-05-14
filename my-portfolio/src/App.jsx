import './index.css'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import About from './Pages/About'


function App() {

  return (
    <>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
    </>
  )
}

export default App
