import { Container } from '@material-ui/core';
import React, { Component } from 'react';
import "./style.css";
import {  Row, Col } from 'react-bootstrap';

export default class About extends Component {
  render() {
    return (
       <Container id="about-me">
          <Row>
             <Col sm={4}>
             <img className="profile-pic" src={process.env.PUBLIC_URL + '/images/profilepic.png'} alt="11" />
            </Col>
             <Col sm={8}>
                <Row>
                  <h2>About Me</h2>
                </Row>
                <Row>
                <p>
                      Organized, collaborative, and highly skilled iOS developer with 6+ years of professional experience in dynamic and deadline-driven work environments. Skilled and efficient iOS Developer with 6 years of experience creating unique and modern applications available in the App Store. Eager to join to delight its customers with magical experiences. In previous roles developed 10+ iOS apps that were downloaded over 700K times, and earned featured mentions in the App Store.
               </p>
                </Row>
                <Row>
                <h2>Contact Details</h2>

                </Row>
                <Row>
                <i class="fab fa-linkedin-in"></i>
                
                     <ul className="social">
                     <li key="key1">
                        <strong>Email:</strong> arti.karnik@gmail.com
                        <a href="google.com" target="_blank"><i className="fa fa-mail"></i></a>
                     </li>
                     <li key="key2">
                        <strong>Address:</strong> El Segundo, CA
                        <a href="google.com" target="_blank"><i className="fa fa-mail"></i></a>
                     </li>
                     <li key="key3">
                        <strong>Phone:</strong> 123-567-3332
                     </li>
                     <li key="key4">
                        <strong>Website:</strong>                             
                        <a href="https://arti-karnik.github.io/MyPortfolioPage/index.html"> Click here </a>
                     </li>
                     <li key="key5">
                     </li>
                     <li key="key-social" className="social">
                        <a href="google.com" target="_blank" ><i className="fa fa-linkedin fa-lg circle-icon"></i></a>
                        <a href="google.com" target="_blank"><i className="fa fa-twitter fa-lg circle-icon"></i></a>
                        <a href="google.com" target="_blank"><i className="fa fa-github fa-lg circle-icon"></i></a>
                     </li>
                     </ul>
                </Row>

              
               <div className="contact">

                   </div>
            </Col>
          </Row>
       </Container>
     
    );
  }
}