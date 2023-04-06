import React from 'react'
import { useRef, useEffect, useState } from 'react';
import '../styles/Projects.css'
import ProjectCard from './ProjectCard'


export default function Projects({ projects }) {

  const [activeIndex, setActiveIndex] = useState(null);
  const [currentProject, setCurrentProject] = useState(null);
  const [hover, setHover] = useState(false)
  const [visibleIndices, setVisibleIndices] = useState([]);

  const refs = useRef(projects?.map(() => null));
  const projectRef = useRef(null)




 // testing intersection observer
  const [isVisible, setIsVisible] = useState(false)
  
  const displayLine = (entries) => {
    const [ entry ] = entries
    setIsVisible(entry.isIntersecting)
  }

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(displayLine, options);
    if (projectRef.current) observer.observe(projectRef.current);

    return () => {
      if (projectRef.current) observer.unobserve(projectRef.current);
    }

  }, [projectRef, options])
  
  

 
  
  



  useEffect(() => {
    const onScroll = () => {
      const  divBottom  = projectRef.current.getBoundingClientRect().bottom;
    

      const newVisibleIndices = refs.current
        .map((ref, index) => {
          if (ref) {
            const { top, bottom } = ref.getBoundingClientRect();
            const windowHeight = window.innerHeight;
    
            if (top < windowHeight && bottom >= 0) {
              
              if (top < windowHeight/1.2) {
                setActiveIndex(index)
              }
              if (divBottom < windowHeight ) {
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

const handleHover = () => {
  // console.log('active index', activeIndex)
  // console.log('curr ref', refs.current[activeIndex])
  setHover(!hover)
  setCurrentProject(activeIndex)
}

  return (
    <div ref={projectRef} id='projects' className='projects'>

      <div className='line' id={`${isVisible ? 'line-top-projects' : ''}`} ></div>
      <p className={`${isVisible ? 'work-name-display' : 'work-name'}`} >my work</p>

      {projects.map((project,index) => (
            <div
              key={index}
              className={`content-title ${activeIndex === index && isVisible ? 'active' : ''}`}
              //  ref={ref => refArray.current[index] = ref}
            >
                <div className='active-wrap'>
                  <p className={` ${activeIndex === index && isVisible ? 'active-1' : ''}`}>
                  {project.title}
                  </p>
                </div>
                <a 
                onMouseEnter={handleHover} 
                onMouseLeave={handleHover} 
                className={`project-link ${activeIndex === index && isVisible ? 'display' : ''}`} 
                href={project.link} 
                target='_blank'>open project</a>
            </div>
      ))}
   
      {projects.map((project, index) => {
        return (
          <ProjectCard 
            key={project.id} 
            project={project} 
            index={index} 
            refs={refs} 
            currentProject={currentProject}
            hover={hover} 
            visibleIndices={visibleIndices} />
        )
      })}
    
    </div>
  )
}
