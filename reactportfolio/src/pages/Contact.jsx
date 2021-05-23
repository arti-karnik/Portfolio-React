import React, { Component } from 'react';
import ContactForm from '../components/contactform';

export default class ContactUs extends Component {
  render() {
    return (
      <section id="contact">
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