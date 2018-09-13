import React from 'react'
import './about.css'
import aboutsean from '../../images/aboutsean.jpg'
import aboutrachel from '../../images/aboutrachel.jpg'
import aboutjesse from '../../images/aboutjesse.jpg'
import aboutgreg from '../../images/aboutgreg.JPG'

export default () => {
  return (
    <div>
      <div className='wrapper'>
        <div className="card-box">
          <h1>About Our Team</h1>
          
          <div className="member">
            <div className='row'>
              <img src={aboutsean} alt="Sean White" className='leftshadow' />
              <h3>Sean</h3>
            </div>
            <div className='floatright'>
              <p>Full Stack web developer living and exploring Utah every chance I get. <a href="https://www.linkedin.com/in/seanbrwh/" target="_blank" rel="noopener noreferrer"> LinkedIn</a></p>
            </div>
          </div>

          <div className="member rowright">
            <div className='row'>
              <img src={aboutrachel} alt="Rachel Kariuki" className='righshadow' />
              <h3>Rachel</h3>
            </div>
            <div className='floatright'>
              <p>Full Stack Javascript Developer excited to create problem solving Applications. <a href="https://www.linkedin.com/in/dev-rachel-kariuki/" target="_blank" rel="noopener noreferrer" >LinkedIn</a></p>
            </div>
          </div>

          <div className="member">
            <div className='row'>
              <img src={aboutjesse} alt="Jesse Fisher, Web Developer" className='leftshadow' />
              <h3>Jesse</h3>
            </div>
            <div className='floatright'>
              <p>Solutions Architect / Web Developer / Operations Analyst. <a href="https://www.linkedin.com/in/jessefisherwebdev/" target="_blank" rel="noopener noreferrer" >LinkedIn</a></p>
            </div>
          </div>

          <div className="member rowright">
            <div className='row'>
              <img src={aboutgreg} alt="Greg Hart" className='righshadow' />
              <h3>Greg</h3>
            </div>
            <div className='floatright'>
              <p>Full stack web developer, avid read, loves long walks on the beach. <a href="https://www.linkedin.com/in/gkhart/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}
