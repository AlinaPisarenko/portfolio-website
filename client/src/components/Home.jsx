import React from 'react'
import '../styles/Home.css'

export default function Home() {
  return (
    <div className='home'>
        <div className='line' id='line-top'></div>
        <div className='line' id='line-bottom'></div>
             
        <div className="home-container">
            <h2>I'm a front-end <br/>
                web developer <br/>
                based in New York
            </h2>
            <div className="home-container-inner">
                <div className='f-name'>
                    <h1>
                        <span id='cap-letter'>W</span>
                        <span className='low-letter'>e</span>
                        <span className='low-letter'>b</span>
                    </h1>
                </div>
                <div className="l-name">
                    <h1>    
                    <span className='low-letter'>D</span>
                    <span className='low-letter'>e</span>
                    <span className='low-letter'>v</span>
                    <span className='low-letter'>e</span>
                    <span className='low-letter'>l</span>
                    <span className='low-letter'>o</span>
                    <span className='low-letter'>p</span>
                    <span className='low-letter'>e</span>
                    <span className='low-letter'>r</span>
                    </h1>
                </div>
            </div> 
        </div>
    </div>
  )
}
