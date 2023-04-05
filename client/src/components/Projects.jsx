import React from 'react'
import { useRef, useEffect, useState } from 'react';
import '../styles/Projects.css'
import ProjectCard from './ProjectCard'


export default function Projects({ projects }) {
  const [hover, setHover] = useState(false)
  const [activeIndex, setActiveIndex] = useState(null);
  // const refArray = useRef([]);
  // const [titleOffset, setTitleOffset] = useState(0);

  const refs = useRef(projects?.map(() => null));
  const projectRef = useRef(null)
  const [visibleIndices, setVisibleIndices] = useState([]);

  useEffect(() => {
    const onScroll = () => {
      const  divBottom  = projectRef.current.getBoundingClientRect().bottom;
      const newVisibleIndices = refs.current
        .map((ref, index) => {
          if (ref) {
            const { top, bottom } = ref.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (top < windowHeight && bottom >= 0) {
              
              if (top < windowHeight/2) {
                setActiveIndex(index)
              }
              if (divBottom < windowHeight/1.3) {
                setActiveIndex(null)
              }
              return index;
            }
          }
          return null;
        })
        .filter(index => index !== null);

      setVisibleIndices(newVisibleIndices);
    };

    window.addEventListener('scroll', onScroll);

    return () => {
        window.removeEventListener('scroll', onScroll);
      };
    }, []);

const handleHover = (project) => {
  console.log('active index', activeIndex)
  console.log('curr ref', refs.current[activeIndex])
  if (project.id === activeIndex+1) setHover(!hover)
  
}

  return (
    <div ref={projectRef} id='projects' className='projects'>
    {projects.map((project,index) => (
          <div
            key={index}
            className={`content-title ${activeIndex === index ? 'active' : ''}`}
            //  ref={ref => refArray.current[index] = ref}
          >
              <div className='active-wrap'>
                <p className={` ${activeIndex === index ? 'active-1' : ''}`}>
                {project.title}
                </p>
              </div>
              <a 
              onMouseEnter={() => handleHover(project)} 
              onMouseLeave={() => handleHover(project)} 
              className={`project-link ${activeIndex === index ? 'display' : ''}`} 
              href={project.link} 
              target='_blank'>open project</a>
          </div>
    ))}
   
      {projects.map((project, index) => {
        return (
          <div className={`${hover ? 'hover-img' : ''}`}>
          <ProjectCard 
            key={project.id} 
            project={project} 
            index={index} 
            refs={refs} 
            hover={hover} 
            visibleIndices={visibleIndices} />
            </div>
        )
      })}
    
    </div>
  )
}
