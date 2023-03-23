import React from 'react'
import '../styles/Home.css'

export default function Home() {
  return (
    <div className='home'>
        <div className='line' id='line-top'></div>
        <div className='line' id='line-bottom'></div>
             
        <div className="home-container">
            <h2>ALINA PISARENKO</h2>
            <div className="home-container-inner">
                <div className='f-name'>
                    <h1>WEB</h1>
                </div>
                <div className="l-name">
                    <h1>DEVELOPER</h1>
                </div>
            </div> 
        </div>
    </div>
  )
}
