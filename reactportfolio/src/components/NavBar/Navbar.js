import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./style.css";

const Navbar = ({ history }) => {
  const [isOpen, setOpen] = useState(false);
  
  return (
    
    <nav id="nav-wrap"  role="navigation"  aria-label="main navigation" >
<div className="container">
        <div className="navbar-brand">
          <a  role="button" className="smoothscroll"  aria-label="menu"  aria-expanded="false"  onClick={() => setOpen(!isOpen)} >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

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
  );
};

export default withRouter(Navbar);
