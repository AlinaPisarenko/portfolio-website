import React, { useRef, useState } from 'react'
import '../styles/Skills.css'


export default function Skills({ position }) {


  return (
   
    <div id='skills' className='skills'>


        <div className='skills-front' id='skills-1' >
          <div>javascript</div>
          <div>react</div>
          <div>redux</div>
          <div>typescript</div>
        </div>
        <div className='skills-front' id='skills-2' >
          <div>html5</div>
          <div>css</div>
          <div>scss</div>
          <div>figma</div>
        </div>
        <div className='skills-front' id='skills-3' >
          <div>bootstrap</div>
          <div>mui</div>
          <div>tailwind</div>
        </div>
        <div className='skills-front' id='skills-4' >
          <div>python</div>
          <div>flask</div>
          <div>node.js</div>
          <div>express</div>
        </div>

        <div className='skills-front' id='skills-5' >
          <div>ruby on rails</div>
          <div>sql</div>
          <div>sqlalchemy</div>
          <div>mongodb</div>
        </div>
       

     </div>
  )
}
