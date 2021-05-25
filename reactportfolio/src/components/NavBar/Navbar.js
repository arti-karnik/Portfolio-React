import React, { useState } from "react";
import { NavLink, withRouter, Link } from "react-router-dom";
import "./style.css";

const Nav = ({ history }) => {
  const [isOpen, setOpen] = useState(false);
  
  return (
    /*
    <nav id="nav-wrap">
    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
    <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
   

<div className="container">
        <div className={`${isOpen && "is-active"}`} >
          <div>
            <ul id="nav" className="nav">
              <li>
              <NavLink  className="navbar-item" activeClassName="is-active" to="/" >
            Home
          </NavLink>
              </li>
              <li className="smoothscroll">
              <NavLink className="navbar-item" activeClassName="is-active" to="/about">
              About
            </NavLink>
              </li>
              <li>
              <NavLink className="navbar-item" activeClassName="is-active"
              to="/portfolio" >
              Portfolio
            </NavLink>
              </li>
              <li>
              <NavLink className="navbar-item"  activeClassName="is-active" to="/contact" >
              Contact
            </NavLink>
              </li>
              <li>
              <NavLink className="navbar-item" activeClassName="is-active" to="/resume">
              Resume
            </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
     */
    <nav id="nav-wrap">
    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
    <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
    <ul id="nav" className="nav">
    <li><a  className="smoothscroll" href="#home"> 
          <NavLink  className="navbar-item" activeClassName="is-active" to="/PortfolioReact" >
            Home
          </NavLink></a></li>
       <li><a className="smoothscroll" href="#about">
       <NavLink  className="navbar-item" activeClassName="is-active" to="/about" >
            Aboutus
          </NavLink>
          </a></li>
     <li><a className="smoothscroll" href="#resume"> <NavLink  className="navbar-item" activeClassName="is-active" to="/resume" >
            Resume
          </NavLink></a></li>
       <li><a  className="smoothscroll" href="#portfolio"> 
          <NavLink  className="navbar-item" activeClassName="is-active" to="/portfolio" >
            Portfolio
          </NavLink></a></li>
         

       <li><a className="smoothscroll" href="#contact"> <NavLink  className="navbar-item" activeClassName="is-active" to="/contact" >
            Contact
          </NavLink></a></li>
    </ul>
 </nav>
   
  );
};

export default withRouter(Nav);
