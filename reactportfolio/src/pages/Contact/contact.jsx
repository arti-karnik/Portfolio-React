import React, { Component } from 'react';
import ContactForm from '../../components/contactform/contactform';
import "./style.css";

export default class ContactUs extends Component {
  render() {
    return (
      <section className="container" id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Whether you have a question about features, trials, pricing, need a demo, or anything else, our team is ready to answer all your questions
              </p>
              <div className="App">                 
        <ContactForm />           
    </div>
            </div>
          </div>
         
        </section>
        );
  }
}