import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import Home from "./pages/Main/Home";
import Contact from "./pages/Contact/contact";
import Resume from "./pages/Resume/Resume";
import Footer from "./components/Footer";
import About from "./pages/About/About";
import Projects from "./pages/PortfolioPage/myportfolio";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    /*<Router>
      <Navbar />
      <div className="main">
        <Switch>
          <Route exact path="/" exact component={Home}> 
          </Route>
          <Route exact path="/Portfolio-React" component={Home} >
          </Route>
        
        </Switch>
        <Footer />
        <Footer/>
      </div>
    </Router>
    */
    <BrowserRouter>
      <Navbar />
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
            <Projects />
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
