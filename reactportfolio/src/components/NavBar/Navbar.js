import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./style.css";

const Nav = () => {  
  return (
    <nav id="nav-wrap">
    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
    <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
    <ul id="nav" className="nav">
    <li>
          <NavLink  className="navbar-item" activeClassName="is-active" to="/Portfolio-React" >
            Home
          </NavLink>
      </li>
       <li>
       <NavLink  className="navbar-item" activeClassName="is-active" to="/about" >
            About
          </NavLink>
      </li>
     <li>
      <NavLink  className="navbar-item" activeClassName="is-active" to="/resume" >
            Resume
          </NavLink></li>
       <li>
          <NavLink  className="navbar-item" activeClassName="is-active" to="/portfolio" >
            Portfolio
          </NavLink></li>
         

       <li> <NavLink  className="navbar-item" activeClassName="is-active" to="/contact" >
            Contact
          </NavLink></li>
    </ul>
 </nav>
   
  );
};

export default withRouter(Nav);
