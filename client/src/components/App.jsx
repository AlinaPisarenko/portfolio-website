import { useState } from 'react'
import '../styles/App.css'
import Footer from './Footer'
import Home from './Home'
import Navbar from './Navbar'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'

function App() {
  const [position, setPosition] = useState(null)

  window.addEventListener('scroll', () => {

    let scroll_percent = window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    
    setPosition(scroll_percent)

    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  }, false);

  
  return (
    <div className="App">
      <Home /> 
      <Navbar />
      <Skills position={position}/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
