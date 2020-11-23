import React from 'react';
import Home from './Home.jsx';
import About from './About.jsx';
import Projects from './Projects.jsx';

const LeftBox = ( {page} ) => {
   if (page === 'home') {
      return (
         <div className='left-container'>
            <Home />
         </div>
      )
   } else if (page === 'about') {
      return (
         <div className='left-container'>
            <About />
         </div>
      )
   } else if (page === 'projects') {
      return (
         <div className='left-container'>
            <Projects />
         </div>
      )
   } 
}

export default LeftBox;