import { useState, useEffect } from 'react'
import '../styles/App.css'
import Footer from './Footer'
import Home from './Home'
import Navbar from './Navbar'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'

function App() {
  const [position, setPosition] = useState(null)
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const loadPost = async () => {
        const req = await fetch('http://127.0.0.1:5555/projects')
        const res = await req.json();
        setProjects(res);
    }

    loadPost();
  }, []);

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
      <Projects projects={projects} />
      <Contact />
      <Footer />
    </div>
  )
}

export default App