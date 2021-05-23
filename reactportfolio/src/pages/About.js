import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.png" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               Organized, collaborative, and highly skilled iOS developer with 6+ years of professional experience in dynamic and deadline-driven work environments. Skilled and efficient iOS Developer with 6 years of experience creating unique and modern applications available in the App Store. Eager to join to delight its customers with magical experiences. In previous roles developed 10+ iOS apps that were downloaded over 700K times, and earned featured mentions in the App Store.
            
              
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <i class="fab fa-linkedin-in"></i>


                  <h2>Contact Details</h2>
                  <p className="address">
                     <ul className="social">
                     <li key="key11">
                        <strong>Email:</strong> arti.karnik@gmail.com
                        <a href="google.com" target="_blank"><i className="fa fa-mail"></i></a>
                     </li>
                     <li key="key11">
                        <strong>Address:</strong> El Segundo, CA
                        <a href="google.com" target="_blank"><i className="fa fa-mail"></i></a>
                     </li>
                     <li key="key11">
                        <strong>Phone:</strong> 123-567-3332
                     </li>
                     <li key="key11">
                        <strong>Website:</strong>                             
                        <a href="https://arti-karnik.github.io/MyPortfolioPage/index.html"> Click here </a>
                     </li>
                     <li key="key11">
                     </li>
                     <li key="key11" className="social">
                        <a href="google.com" target="_blank"><i className="fa fa-linkedin fa-lg"></i></a>
                        <a href="google.com" target="_blank"><i className="fa fa-twitter fa-lg"></i></a>
                        <a href="google.com" target="_blank"><i className="fa fa-github fa-lg"></i></a>
                     </li>
                     </ul>
       					
       				</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}