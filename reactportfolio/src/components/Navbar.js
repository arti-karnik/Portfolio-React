import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";

const Navbar = ({ history }) => {
  const [isOpen, setOpen] = useState(false);
  
  return (
    <nav  id="nav" className="navbar is-primary" role="navigation"  aria-label="main navigation" >
<div className="container">
        <div className="navbar-brand">
          <a  role="button" className="smoothscroll"  aria-label="menu"  aria-expanded="false"  onClick={() => setOpen(!isOpen)} >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={`navbar-menu ${isOpen && "is-active"}`} >
          <div className="navbar-start">
          <NavLink  className="navbar-item" activeClassName="is-active" to="/" >
            Home
          </NavLink>

            <NavLink className="navbar-item" activeClassName="is-active" to="/about">
              About
            </NavLink>

            <NavLink className="navbar-item" activeClassName="is-active"
              to="/portfolio" >
              Portfolio
            </NavLink>

            <NavLink className="navbar-item" activeClassName="is-active" to="/contact" >
              Contact US
            </NavLink>

            <NavLink className="navbar-item" activeClassName="is-active" to="/resume">
              Resume
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
