import React from 'react'
import { useRef, useEffect, useState } from 'react';
import '../styles/Projects.css'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const images = [
    'public/art.png',
    'public/game.png',
    'public/house.png'
  ];

  const refs = useRef(images.map(() => null));
  const [visibleIndices, setVisibleIndices] = useState([]);

  useEffect(() => {
    const onScroll = () => {
      const newVisibleIndices = refs.current
        .map((ref, index) => {
          if (ref) {
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
    
      {images.map((imageUrl, index) => (
      <ProjectCard key={index} imageUrl={imageUrl} index={index} refs={refs}  visibleIndices={visibleIndices}/>
    ))}
    </div>
  )
}
