import React from 'react'
import '../styles/ProjectCard.css'
import { useRef, useEffect, useState } from 'react';


export default function ProjectCard({project, index, visibleIndices, refs, currentProject, hover}) {


  return (
    <div 
    ref={ref => refs.current[index] = ref}
    name={project.id}
    className={`image 
                ${visibleIndices.includes(index) ? 'animate' : ''}
                ${currentProject+1 === project.id && hover ? 'hover-img' : ''}
              `}>
              
      <p className='title-sm-screen'>
           {project.title}
      </p>
      <img
            className={`project-card-img ${project.id}`}
            src={project.image}
            alt={`Image for ${project.title} project`}
      />
      <a
            className='project-link-sm-screen' 
            href={project.link} 
            target='_blank'>open project</a>
  </div>
  )
}




