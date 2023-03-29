import React from 'react'
import '../styles/ProjectCard.css'
import { useRef, useEffect, useState } from 'react';


export default function ProjectCard({imageUrl, index, visibleIndices, refs}) {



  return (
    <div className={`image ${visibleIndices.includes(index) ? 'animate' : ''}`}>
      <h5 className='project-card-title'>Project Title</h5>
      <img
            ref={ref => refs.current[index] = ref}
            src={imageUrl}
            alt={`Image ${index}`}
      />
      <a className='project-link' href='#'>open project</a>
  </div>
  )
}




