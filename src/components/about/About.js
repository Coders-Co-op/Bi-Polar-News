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
    <h3>About Our Team</h3>
      <div className="member">
        <div className='row'>
        <img src={aboutsean} alt="" className='leftshadow'/>
        <h3>Sean</h3>
        </div>
        <div className='floatright'>
          <p>Full Stack web developer living and exploring Utah every change i get.</p>
        </div>
      </div>
      <div className="member rowright">
        <div className='row'>
        <img src={aboutrachel} alt="" className='righshadow'/>
        <h3>Rachel</h3>
        </div>
        <div className='floatright'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta expedita quidem.</p>
        </div>
      </div>
      <div className="member">
        <div className='row'>
        <img src={aboutjesse} alt="" className='leftshadow'/>
        <h3>Jesse</h3>
        </div>
        <div className='floatright'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta expedita quidem.</p>
        </div>
      </div>
      <div className="member rowright">
        <div className='row'>
        <img src={aboutgreg} alt="" className='righshadow'/>
        <h3>Greg</h3>
        </div>
        <div className='floatright'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta expedita quidem.</p>
        </div>
      </div>
    </div>
    <div>
    </div>
    </div>
    </div>
  )
}
