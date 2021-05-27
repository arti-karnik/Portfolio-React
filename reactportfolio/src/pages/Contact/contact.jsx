import React, { Component } from 'react';
import ContactForm from '../../components/contactform/contactform';
import "./style.css";
import { Container, Row, Col } from 'react-bootstrap';

export default class contact extends Component {
  render() {
    return (
      <section className="container" id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Whether you have a question about features, need a demo, or anything else, our team is ready to answer all your questions.
              </p>
              <div className="App">  
              <Row>
    <Col>
      <Row>
        <Col>
            <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />
          </div>
          <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" required />
        </div>
        <button type="submit" id="submit">Submit</button>
        </Col>
      </Row>
    </Col>
    
  </Row>               
    </div>
            </div>
          </div>
         
        </section>
        );
  }
}