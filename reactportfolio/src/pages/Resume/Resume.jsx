import React, { Component } from 'react';
import "./style.css";
import { Row, Col, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default  class Resume extends Component {
  render() {
    return (
    <Container id="resume">
        <Row>
            <Col>
            <h1><span className="header-col">Work</span></h1>
            </Col>
         </Row>
         <Row>
            
            <Col>
               <Row>
               <h3>Wipro Ltd</h3>
               </Row>
               <Row>
               <p className="info">
                  Software Engineer
               <span>&bull;</span> <em className="date"> Aug 2020 - Jan 2021</em></p>
               </Row>
               <Row>
               <ul>
                  <li>
                  Lead in the design, development, and implementation of the graphic, layout, and production communication materials
                  </li>
                  <li>
                  Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.
                  </li>
                  <li>
                  Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design
                  </li>
                  <li>
                  Oversee the efficient use of production project budgets ranging from $2,000 - $25,00
                  </li>
               </ul>
               </Row>
            </Col>
         </Row>
         <Row>
           
            <Col>
               <Row className="row work"> </Row>
               <Row>
               <h3> S.S Solution</h3>
               </Row>
               <Row>
               <p className="info">
                  Software Engineer
               <span>&bull;</span> <em className="date"> Nov 2016 - Aug 2020</em></p>
               </Row>
               <Row>
               <ul>
                  <li>
                  Lead in the design, development, and implementation of the graphic, layout, and production communication materials
                  </li>
                  <li>
                  Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.
                  </li>
                  
               </ul>
               </Row>
            </Col>
         </Row>
         
          <Row>
             <Col>
             <h1><span>Education</span></h1>
             </Col>
         </Row>
         <Row >
          
            <Col>
              <Row>
              <h3> University of Texas, Austin</h3>
              </Row>
              <Row>
              <p className="info">  Full Stack Development Bootcamp
               <span>&bull;</span> <em className="date"> June 2021</em></p>
              </Row>
              
              <Row>
              <h3> M.S University</h3>
              </Row>
              <Row>
              <p className="info">  Master in Computer Application
               <span>&bull;</span> <em className="date"> June 2014</em></p>
              </Row>
            </Col>
         </Row>
         <Row >
          <Col>
          <Link to="./docs/Arti_Resume.pdf" target="_blank" id="download" download>Download</Link>

          </Col>
       </Row>
      </Container>
      );
  }
}