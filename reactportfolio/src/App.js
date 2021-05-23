import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="main"> 
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
        </Switch>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
