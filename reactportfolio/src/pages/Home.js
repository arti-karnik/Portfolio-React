import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
      
      <header id="home">
         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">I am .</h1>
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>I am a 
               </h3>
               <hr/>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>

     
    )}
  ;
}