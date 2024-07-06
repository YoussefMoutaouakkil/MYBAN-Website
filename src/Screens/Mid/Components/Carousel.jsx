import React from 'react'
import "../Styles/Carousel.css"

export default function Carousel() {
  return (
    <div className="header">
      <div className="ArrowBackground">
        <img className='Arrow' src="src/assets/arrow.png" alt="" />
      </div>
      <div className="Text">
        <h2>Check Our Work</h2>
        <p>Take a look at some of our recent projects to see how we've helped <br/>businesses like yours succeed online.</p>
      </div>
      <div className="ArrowBackground">
        <img className='Arrow RightArrow' src="src/assets/arrow.png" alt="" />
      </div>
    </div>
  )
}
