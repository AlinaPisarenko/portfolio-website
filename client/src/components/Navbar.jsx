import React from 'react'
import '../styles/Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
      
      <h4>Alina Pisarenko<br>
      </br>specialized in front-end development
      </h4>
      <a href="#projects" className="nav-link">my work</a>
      <a href="#contact" className="nav-link">contact me</a>
      <a href="#skills" className="nav-link">skills</a>

    </div>
  )
}

