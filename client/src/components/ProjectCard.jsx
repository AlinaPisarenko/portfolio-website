import React from 'react'
import '../styles/ProjectCard.css'
import { useRef, useEffect, useState } from 'react';


export default function ProjectCard({project, index, visibleIndices, refs}) {

console.log(refs)

  return (
    <div 
    ref={ref => refs.current[index] = ref}
    className={`image ${visibleIndices.includes(index) ? 'animate' : ''}`}>
      {/* <h5 className='project-card-title'>{project.title}</h5> */}
      <img
            className='project-card-img'
            
            src={project.image}
            alt={`Image for ${project.title} project`}
      />
      {/* <a className='project-link' href={project.link} target='_blank'>open project</a> */}
  </div>
  )
}




