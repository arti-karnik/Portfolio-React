import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import Home from "./pages/Main/Home";
import Contact from "./pages/Contact/contact";
import Resume from "./pages/Resume/Resume";
import Footer from "./components/Footer";
import About from "./pages/About/About";
import "bootstrap/dist/css/bootstrap.min.css";
import Portfolio from "./pages/PortfolioPage/portfolio";

function App() {
  return (
    <BrowserRouter>
      <Navbar className="top"/>
      <div className="main"> 
        <Switch>
          <Route exact path="/">
          <Home />
          </Route>
          <Route exact path="/Portfolio-React">
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
      <Footer className="bottom"/>
    </BrowserRouter>
  );
}

export default App;
