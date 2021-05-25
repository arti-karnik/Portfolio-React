import React, { Component } from 'react';
import "./style.css";
import { Row, Col, Container } from 'react-bootstrap';

export default  class Resume extends Component {
  render() {
    return (
      <Container id="resume">
          <Row>
         <h1><span>Education</span></h1>
         </Row>
         <Row >
            <Col sm={2}>
            </Col>
            <Col sm={10} >
              <Row>
              <h3> University of Texas, Austin</h3>
              </Row>
              <Row>
              <p className="info">  Full Stack Development Bootcamp
               <span>&bull;</span> <em className="date"> June 2021</em></p>
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
              <Row>
              <h3> Gujarat University</h3>
              </Row>
              <Row>
              <p className="info">  Master in Computer Application
               <span>&bull;</span> <em className="date"> June 2014</em></p>
              </Row>
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
               </ul>
              <Row>
              <h3> Gujarat University</h3>
              </Row>
              <Row>
              <p className="info">  Bachelor of Science
               <span>&bull;</span> <em className="date"> June 2007</em></p>
              </Row>
            </Col>
         </Row>
         <Row>
            
           
         </Row>

         <Row>
         <h1><span className="header-col">Work</span></h1>
         </Row>
         <Row>
            <Col sm={2}>
            </Col>
            <Col sm={10}>
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
            <Col sm={2}>
            </Col>
            <Col sm={10}>
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
            <Col sm={2}>
            </Col>
            <Col sm={10}>
               <Row className="row work"> </Row>
               <Row>
               <h3> S.S Solution</h3>
               </Row>
               <Row>
               <p className="info">
                  Software Engineer
               <span>&bull;</span> <em className="date"> Aug 2014 - Noc 2016</em></p>
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
      </Container>
    );
  }
}