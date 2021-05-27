import React, { Component } from 'react';
import ContactForm from '../../components/contactform/contactform';
import "./style.css";
import { Container, Row, Col } from 'react-bootstrap';
import Particles from '../../components/Particles/Particles';
export default class contact extends Component {
  render() {
    return (
      <Particles>
        <form id="contact-form">
    <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" />
    </div>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email"  className="form-control" aria-describedby="emailHelp" />
    </div>
    <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea className="form-control" rows="5"></textarea>
    </div>
    <button type="submit" id="submit">Submit</button>
</form>    
</Particles>
    );
  }
}