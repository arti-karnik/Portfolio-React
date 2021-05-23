import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      <img src={`url`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>name</h5>
                          <p>description</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
          </div>
        </div>
      </div>
  </section>
        );
  }
}