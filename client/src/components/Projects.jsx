import React from 'react'
import { useRef, useEffect, useState } from 'react';
import '../styles/Projects.css'
import ProjectCard from './ProjectCard'



export default function Projects({ projects }) {

  const [activeIndex, setActiveIndex] = useState(null);
  // const refArray = useRef([]);
  // const [titleOffset, setTitleOffset] = useState(0);

  const refs = useRef(projects?.map(() => null));
  const [visibleIndices, setVisibleIndices] = useState([]);

  console.log(activeIndex)
  useEffect(() => {
    const onScroll = () => {
      console.log(refs.current)
      const newVisibleIndices = refs.current
        .map((ref, index) => {
          if (ref) {
            const { top, bottom } = ref.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (top < windowHeight && bottom >= 0) {
              
              setActiveIndex(index)
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
  return (
    <div id='projects' className='projects'>
     {/* {titles.map((title, index) => (
          <div
            key={index}
            className={`content-title ${activeIndex === index ? 'active' : ''}`}
         
          >
            {title}
          </div>
        ))} */}
      {/* {projects.map(project => project.title).map((title, index) => (
             <div
             key={index}
             className={`content-title ${activeIndex === index ? 'active' : ''}`}
             ref={ref => refArray.current[index] = ref}
          
           >
             {title}
           </div>
      ))} */}

{projects.map((project,index) => (

          <div
            key={index}
            className={`content-title ${activeIndex === index ? 'active' : ''}`}
            //  ref={ref => refArray.current[index] = ref}
          >
              <div className='active-wrap'>
                <p className={`content-title ${activeIndex === index ? 'active-1' : ''}`}>
                {project.title}
                </p>
              </div>
             {/* <p className='project-link'>{project.link}</p> */}
              <a  className={`project-link ${activeIndex === index ? 'display' : ''}`} href={project.link} target='_blank'>open project</a>
            
          </div>
              
     
      ))}
    
    
      {projects.map((project, index) => {

        return (
          <div>
          {/* <div
          key={index}
          className={`content-title ${activeIndex === index ? 'active' : ''}`}
       
        >
          {project.title}
        </div> */}
          <ProjectCard key={project.id} project={project} index={index} refs={refs}  visibleIndices={visibleIndices} />
          {/* <a  className='project-link' href={project.link} target='_blank'>open project</a> */}
          </div>
        )
      })}
    </div>
  )
}
