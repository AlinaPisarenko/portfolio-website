import React from 'react'
import { useRef, useEffect, useState } from 'react';
import '../styles/Projects.css'
import ProjectCard from './ProjectCard'

const titles = ['Title 1', 'Title 2', 'Title 3'];

export default function Projects({ projects }) {

  const [activeIndex, setActiveIndex] = useState(null);
  const refArray = useRef([]);
  // const [titleOffset, setTitleOffset] = useState(0);

  const refs = useRef(projects?.map(() => null));
  const [visibleIndices, setVisibleIndices] = useState([]);


  useEffect(() => {
    const onScroll = () => {
      console.log(refs.current)
      const newVisibleIndices = refs.current
        .map((ref, index) => {
          if (ref) {
            console.log(ref)
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
             ref={ref => refArray.current[index] = ref}
          
           >
             {project.title}
             <a  className='project-link' href={project.link} target='_blank'>open project</a>
           </div>
              
     
      ))}
    
    
      {projects.map((project, index) => {

        return (
        //   <div>
        //   <div
        //   key={index}
        //   className={`content-title ${activeIndex === index ? 'active' : ''}`}
       
        // >
        //   {project.title}
        // </div>
          <ProjectCard key={project.id} project={project} index={index} refs={refs}  visibleIndices={visibleIndices} />
          // </div>
        )
      })}
    </div>
  )
}
