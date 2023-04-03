import React from 'react'
import { useRef, useEffect, useState } from 'react';
import '../styles/Projects.css'
import ProjectCard from './ProjectCard'

<<<<<<< HEAD

export default function Projects({ projects }) {

  const [activeIndex, setActiveIndex] = useState(null);
  const refArray = useRef([]);
  // const [titleOffset, setTitleOffset] = useState(0);
=======
export default function Projects({ projects }) {
  const images = [
    'public/art.png',
    'public/jobhub.png',
    'public/game.png',
    'public/house.png',
    
  ];
>>>>>>> parent of a614b31 (implemented parralax scroll for title/image)

  const refs = useRef(projects?.map(() => null));
  const [visibleIndices, setVisibleIndices] = useState([]);
  console.log(projects)

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
<<<<<<< HEAD
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
=======
    
      {projects.map((project, index) => (
      <ProjectCard key={project.id} project={project} index={index} refs={refs}  visibleIndices={visibleIndices} />
    ))}
>>>>>>> parent of a614b31 (implemented parralax scroll for title/image)
    </div>
  )
}
