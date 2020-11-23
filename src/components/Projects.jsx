import React from 'react';

const Projects = () => {
  return (
    <div className="innerL-container">
      <div className="projects-container">
        <h1 className='slide-right'>.Projects(<span className='about-style'>'side'</span>)</h1>
        <div className='projects-holder'>
            <div className='project-box'>
              <p className='project-box-front'>CalculatorJS</p>
              <div className='project-box-back'>
                 <p>A calculator coded with vanilla JS</p>
              </div>
            </div>
            <div className='project-box'>
               <p>Placeholder2</p>
            </div>
            <div className='project-box'>
               <p>Placeholder3</p>
            </div>
            <div className='project-box'>
               <p>Placeholder4</p>
            </div>
            <div className='project-box'>
               <p>Placeholder5</p>
            </div>
            <div className='project-box'>
               <p>Placeholder6</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;