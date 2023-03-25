import React from 'react'
import '../styles/ProjectCard.css'

import { useRef, useEffect, useState } from 'react';



export default function ProjectCard() {

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
    <div>
    {images.map((imageUrl, index) => (
      <img
        key={index}
        ref={ref => refs.current[index] = ref}
        className={`image ${visibleIndices.includes(index) ? 'animate' : ''}`}
        src={imageUrl}
        alt={`Image ${index}`}
      />
    ))}
  </div>
    // <>
    // <div className='project-card'>
    //     <h5 className='project-card-title'>Project Title</h5>
    //     <img className='project-card-img' src='public/house.png' />
    //     <a href='#'>open project</a>
    // </div>

    // </>
  )
}




