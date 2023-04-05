import React, { useRef, useState } from 'react'
import '../styles/Skills.css'


export default function Skills({ position }) {
  // const frontSkills = useRef(0);

  // if (position>0,  frontSkills.current.clientWidth) {
  //   console.log("position",position, typeof(position))
  //   console.log("window width", window.innerWidth, typeof(window.innerWidth))
  //   console.log("el width", frontSkills.current.clientWidth, typeof(frontSkills.current.clientWidth))
  //   let el_position = position*window.innerWidth/2 - parseFloat(frontSkills.current.clientWidth )

  //   frontSkills.style = {
  //     left: el_position
  //   }
    
  //   console.log('final pos',el_position)
  //   console.log(frontSkills.style.left)
  // }


  // style={{left: `${el_position}`}}

  return (
   
    <div id='skills' className='skills'>

      {/* <div ref={frontSkills} className='skills-bg'></div> */}

        <div className='skills-front' id='skills-1' >
          <div>javascript</div>
          <div>react</div>
          <div>redux</div>
          <div>typescript</div>
        </div>
        <div className='skills-front' id='skills-2' >
          <div>html3</div>
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
          <div>ruby on rails</div>
          <div>node.js</div>
        </div>

        <div className='skills-front' id='skills-5' >
          <div>sql</div>
          <div>sqlalchemy</div>
          <div>mongodb</div>
        </div>
       

     </div>
  )
}
