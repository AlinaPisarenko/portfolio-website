import React from 'react'
import { useRef, useEffect, useState } from 'react';
import '../styles/Projects.css'
import ProjectCard from './ProjectCard'


export default function Projects({ projects }) {

  const [activeIndex, setActiveIndex] = useState(null);
  const refArray = useRef([]);
  // const [titleOffset, setTitleOffset] = useState(0);

  const refs = useRef(projects?.map(() => null));
  const [visibleIndices, setVisibleIndices] = useState([]);

  useEffect(() => {
    const onScroll = () => {
      
      const newVisibleIndices = refs.current
        .map((ref, index) => {
          if (ref) {
            const { top, bottom } = ref.getBoundingClientRect();
            const windowHeight = window.innerHeight;
 
            if (top < windowHeight && bottom >= 0) {
              setActiveIndex(index);
              return index;
            }
          }
          return null;
        })
        .filter(index => index !== null);

      setVisibleIndices(newVisibleIndices);

      // setTitleOffset(window.innerHeight / 2);

    };

    window.addEventListener('scroll', onScroll);

    return () => {
        window.removeEventListener('scroll', onScroll);
      };
    }, []);



  // useEffect(() => {
  //   const handleScroll = () => {
  //     let closestComponentIndex = 0;
  //     let closestDistance = Number.MAX_VALUE;
  
  //     refArray.current.forEach((ref, index) => {
  //       const distance = Math.abs(ref.getBoundingClientRect().top - titleOffset);
  //       if (distance < closestDistance) {
  //         closestDistance = distance;
  //         closestComponentIndex = index;
  //       }
  //     });
  //     setActiveIndex(closestComponentIndex);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [titleOffset]);





  return (
    <div id='projects' className='projects'>
      <h3>My Work</h3>
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

{/* {projects.map((project,index) => (
             <div
             key={index}
             className={`content-title ${activeIndex === index ? 'active' : ''}`}
            //  ref={ref => refArray.current[index] = ref}
          
           >
            <h4>{project.title}</h4>
             
            <a className='demo-link' href={project.link} target='_blank'>open project</a>
           </div>     
      ))} */}
    
    
      {projects.map((project, index) => {

        return (
          <div>
            <div
             key={index}
             className={`content-title ${activeIndex === index ? 'active' : ''}`}
            //  ref={ref => refArray.current[index] = ref}
          
           >
            <h4>{project.title}</h4>
             
            <a className='project-link' href={project.link} target='_blank'>open project</a>
           </div> 
          {/* <div
          key={index}
          className={`content-title ${activeIndex === index ? 'active' : ''}`}
       
        >
          {project.title}
        </div> */}
            <ProjectCard key={project.id} project={project} index={index} refs={refs}  visibleIndices={visibleIndices} />
          </div>
        )
      })}
    </div>
  )
}
