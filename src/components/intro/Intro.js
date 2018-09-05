
import React from 'react';
import {Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <h1>Intro</h1>
      <Link to="/about"><p> About</p></Link>
      <Link to="/article"><p> Article</p></Link>
    </div>
  )
}
