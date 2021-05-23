import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
      <header id="home">
         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">I am Arti Karnik.</h1>
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>I am a iOS Developer/ Full Stack Developer/ QA Automation
               </h3>
               <hr/>
            </div>
         </div>

         <ul className="social">
         <li key="linkednin">
         <a href="www.linkedin.com" target="_blank"><i className="fa fa-github"></i></a>

               <a href="www.linkedin.com" target="_blank">
                  <i className="fa fa-linkedin"></i></a>
         </li> 
         <li key="github">
            <a href="www.linkedin.com" target="_blank"><i className="fa fa-github"></i></a>
         </li>  
         <li key="twitter">
            <a href="www.linkedin.com" target="_blank"><i className="fa fa-twitter"></i></a>
         </li> 

         </ul>
           </header>
      </React.Fragment>

     
    )}
  ;
}