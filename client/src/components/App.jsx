import '../styles/App.css'
import Footer from './Footer'
import Home from './Home'
import Navbar from './Navbar'
import Projects from './Projects'
import Skills from './Skills'

function App() {
  
  return (
    <div className="App">
    
      <Home /> 
      {/* <div className='nav-skills-container'> */}
      <Navbar />
      <Skills />
      {/* </div> */}
      
      <Projects />
      <Footer />
    </div>
  )
}

export default App
