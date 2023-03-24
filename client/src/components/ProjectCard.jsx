import React from 'react'
import '../styles/ProjectCard.css'

export default function ProjectCard() {
  return (
    <>
    <div className='project-card'>
        <h5 className='project-card-title'>Project Title</h5>
        <img className='project-card-img' src='public/test-img.png' />
        <a href='#'>open project</a>
    </div>

    {/* <div className='project-card'>
        <h5 className='project-card-title'>Project Title</h5>
        <img className='project-card-img' src='public/test-img.png' />
        <a href='#'>open project</a>
    </div> */}
    </>
  )
}
