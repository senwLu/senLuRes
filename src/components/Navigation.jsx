import React, { Component } from 'react';

class Navigation extends Component {
   constructor(props) {
      super(props);

      this.onChange = this.onChange.bind(this);
   }

   onChange(e) {
      this.props.newPage(e.target.getAttribute('name'));
   }

   render() {
      return (
         <nav className="nav-container">
            <div className="nav-title-wrapper">
               <h1>
                  <span className="set-black">SEN W. LU</span>
               </h1>
               <h2 className="change-to-outline">SEATTLE, WASHINGTON</h2>
               <h2 className="set-black">FULL-STACK DEVELOPER</h2>
            </div>
            <div className="nav-list-wrapper">
               <span href="" name="home" className="strike" onClick={this.onChange}>HOME</span>
               <span href="" name="about" className="strike" onClick={this.onChange}>ABOUT</span>
               <span href="" name="projects" className="strike" onClick={this.onChange}>PROJECT/S</span>
               <span href="" name="home" className="strike" onClick={this.onChange}>CONTACT</span>
            </div>
            <div className="nav-social-wrapper"></div>
            
         </nav>
      )
   }
}

export default Navigation;