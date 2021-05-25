import React, { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "./style.css";

const ContactForm = () => {
  return (
    <Container>
  <Row>
    <Col xs={10}>
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
        <button type="submit">Submit</button>
        </Col>
      </Row>
    </Col>
    <Col xs={2}>
        <div className="google-map-code">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"></iframe>
    </div>   
      </Col>
  </Row>
</Container>
  );
};

export default ContactForm;