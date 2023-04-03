import React from 'react'
import '../styles/ProjectCard.css'
import { useRef, useEffect, useState } from 'react';


export default function ProjectCard({project, index, visibleIndices, refs}) {
  const [opacity, setOpacity] = useState(true)

  const handleOpacity = () => {
    setOpacity(prev => !prev)
    if (opacity) {
      document.getElementById(`project-card-img-${project.id}`).style.opacity = 1;
    } else {
      document.getElementById(`project-card-img-${project.id}`).style.opacity = 0.5;
    }
    
  }

  return (
    <div className='project-card-container'>
      <div 
        ref={ref => refs.current[index] = ref}
        className={`image ${visibleIndices.includes(index) ? 'animate' : ''}`}>
          {/* <h5 className='project-card-title'>{project.title}</h5> */}
      
          {/* <a onMouseEnter={handleOpacity} onMouseLeave={handleOpacity} className='project-link' href={project.link} target='_blank'>open project</a> */}
      </div>
      <img
        id={`project-card-img-${project.id}`}
        className='project-card-img'
        src={project.image}
        alt={`Image for ${project.title} project`}/>
    </div>
  )
}




