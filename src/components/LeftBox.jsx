import React from 'react';
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';

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
   } else if (page === 'contact') {
      return (
         <div className='left-container'>
            <Contact />
         </div>
      )
   }
}

export default LeftBox;