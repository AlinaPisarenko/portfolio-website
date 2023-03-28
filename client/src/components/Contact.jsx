import React from 'react'
import '../styles/Contact.css'

export default function Contact() {
  return (
    <div className='contact'>

      <div className='contact-links'>
        <a className='contact-link' href="mailto:pisarenko.alina@gmail.com" target="_blank">email</a>
        <a className='contact-link' href="https://www.linkedin.com/in/alina-pisarenko-web-developer/" target="_blank">linkedin</a>
        <a className='contact-link' href="https://github.com/AlinaPisarenko" target="_blank">github</a>
      </div>
      <h5 className='contact-title'>Let's work together</h5>
    </div>
  )
}
