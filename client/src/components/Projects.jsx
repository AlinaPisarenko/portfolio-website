import React from 'react'
import { useRef, useEffect, useState } from 'react';
import '../styles/Projects.css'
import ProjectCard from './ProjectCard'

export default function Projects({ projects }) {
  const images = [
    'public/art.png',
    'public/jobhub.png',
    'public/game.png',
    'public/house.png',
    
  ];

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
    
      {projects.map((project, index) => (
      <ProjectCard key={project.id} project={project} index={index} refs={refs}  visibleIndices={visibleIndices} />
    ))}
    </div>
  )
}
