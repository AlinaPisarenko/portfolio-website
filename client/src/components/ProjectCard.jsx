import React from 'react'
import '../styles/ProjectCard.css'
import { useRef, useEffect, useState } from 'react';


export default function ProjectCard({project, index, visibleIndices, refs, hover}) {



  return (
    <div 
    ref={ref => refs.current[index] = ref}
     name={project.id}
    className={`image 
                ${visibleIndices.includes(index) ? 'animate' : ''}
               
              `}>
      <img
            className={`project-card-img ${project.id}`}
            src={project.image}
            alt={`Image for ${project.title} project`}
      />
  </div>
  )
}




