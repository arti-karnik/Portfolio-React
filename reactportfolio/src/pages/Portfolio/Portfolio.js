import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import { makeStyles } from '@material-ui/core/styles';
import Card from 'react-bootstrap/Card';
import { Button, Row, Container, Col } from 'react-bootstrap';
import "./style.css";
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
var projects = [
  {
    title: "Event Maker",
    description: "This application allows a host to schedule an event online , in-person or an announcement for a few different types of events: Potluck & Party.",
    github: "https://github.com/arti-karnik/EventMaker",
    url: "https://serene-oasis-98788.herokuapp.com/",
    image: "/images/icons/invitation.png",
},
  {
      title: "Food Feed",
      description: "FoodFeed is a web app for users that want to search for a place to eat whether it's local or in another city. User is asked to share their location", 
      github: "https://github.com/arti-karnik/FoodFeed",
      url: "https://arti-karnik.github.io/FoodFeed/",
      image: "/images/icons/food-icon.png",
  },
  {
      title: "Plan My Day",
      description: "A simple day planner application that will allow the user to add events in one hour time slots.  hour time slots hour time slots", 
      github: "https://github.com/arti-karnik/PlayMyDay",
      url: "https://arti-karnik.github.io/PlayMyDay/",
      image: "/images/icons/plan-icon.png",
  },
  {
      title: "Javascript Quizzy",
      description: "Quiz on JavaScript fundamentals that stores high scores. It have multi-choice questions to be answered in given time-limit.",
      github: "https://github.com/arti-karnik/Javascript-Quizzy",
      url: "https://arti-karnik.github.io/Javascript-Quizzy/",
      image: "/images/icons/quiz-icon.png",
  },
    {
        title: "Weather!",
        description: "Application to get current and 5-day weather forecast for given city name. Current & forecasted temperature details displayed.",
        github: "https://github.com/arti-karnik/WhatsMyWeather",
        url: "https://arti-karnik.github.io/WhatsMyWeather/",
        image: "/images/icons/weather-icon.png",
    },
    {
      title: "Employee Viewer",
      description: "An employee or manager would benefit greatly from being able to view data about other employees. Filter employees by name.",
      github: "https://github.com/arti-karnik/EmployeePage",
      url: "https://arti-karnik.github.io/EmployeePage/",
      image: "/images/icons/employee.png",
    },  
    {
      title: "Technology Blog",
      description: "As a developer who writes about tech, build a CMS-style blog site to publish articles, blog posts, and my thoughts and opinions",
      github: "https://github.com/arti-karnik/Technology-StopAndBlog",
      url: "https://arcane-inlet-16342.herokuapp.com/",
      image: "/images/icons/blog.png",
    },
    {
      title: "Note Taker",
      description: "Application to get current and 5-day weather forecast for given city name. Searches get saved locally.",
      github: "https://github.com/arti-karnik/WhatsMyWeather",
      url: "https://arti-karnik.github.io/WhatsMyWeather/",
      image: "/images/icons/weather-icon.png",
  },
]


export default class LightboxExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
      isOpenEvent: false,
      isOpenEmployee: false,
      isOpenNote: false,
      isOpenQuiz: false,
      isOpenBudget: false,
      isOpenDay: false,
      isOpenFood: false,
      isOpenWeather: false

    };
  }
  
  render() {
    const { photoIndex, isOpen, isOpenBudget, isOpenDay, isOpenEvent, isOpenNote, isOpenEmployee, isOpenQuiz, isOpenFood, isOpenWeather } = this.state;

    return (
      <Container id="portfolio">
        <Row>
            <Col xs={12} md={3} className="portfolio-item">
            <Row>
              <Col>
              <h5>{projects[0].title}</h5>
              </Col>
            </Row>
            <Row>
              <Col>
              <img src={process.env.PUBLIC_URL + projects[0].image} className="portfolio-icon"></img>
              </Col>
          </Row>
          <Row>
              <Col>
              <p> {projects[0].description}</p>
              </Col>
          </Row>
          <Row className="share-button">

          <Button variant="outline-primary" target="_blank" href={projects[0].github} className="share-button"> Github
          </Button>
          <Button variant="outline-primary" target="_blank" className="share-button" href={projects[0].github}> Website
          </Button>
          <Button variant="primary" onClick={() => this.setState({ isOpenEvent: true })} className="share-button"> Images
          </Button>
          </Row>
          </Col>
          
            
          <Col xs={12} md={3} className="portfolio-item">
            <Row>
              <Col>
              <h5>{projects[1].title}</h5>
              </Col>
            </Row>
            
            <Row>
              <Col>
              <img src={process.env.PUBLIC_URL + projects[1].image}  className="portfolio-icon"></img>
              </Col>
          </Row>
          <Row>
              <Col>
              <p> {projects[1].description}</p>
              </Col>
          </Row>
          <Row className="share-button">
          <Button variant="outline-primary" target="_blank" href={projects[1].github} className="share-button"> Github
          </Button>
          <Button variant="outline-primary" target="_blank" className="share-button" href={projects[1].github}> Website
          </Button>
          <Button variant="primary" className="share-button" onClick={() => this.setState({ isOpenFood: true })}> Images
            <a  target="_blank"></a>
          </Button>
          </Row>
          </Col>
          
           
          <Col xs={12} md={3} className="portfolio-item">
            <Row>
              <Col>
              <h5>{projects[2].title}</h5>
              </Col>
            </Row>
            
            <Row>
              <Col>
              <img src={process.env.PUBLIC_URL + projects[2].image}  className="portfolio-icon"></img>
              </Col>
          </Row>
          <Row>
              <Col>
              <p> {projects[2].description}</p>
              </Col>
          </Row>
          <Row className="share-button">
          <Button variant="outline-primary" target="_blank" href={projects[2].github} className="share-button"> Github
          </Button>
          <Button variant="outline-primary" target="_blank" className="share-button" href={projects[2].url}> Website
          </Button>
          <Button variant="primary" onClick={() => this.setState({ isOpenDay: true })} className="share-button"> Images
          </Button>
          </Row>
          </Col>
          
           
        </Row>
        <Row>
            <Col xs={12} md={3} className="portfolio-item">
            <Row>
              <Col>
              <h5>{projects[3].title}</h5>
              </Col>
            </Row>
            <Row>
              <Col>
              <img src={process.env.PUBLIC_URL + projects[3].image}  className="portfolio-icon"></img>
              </Col>
          </Row>
          <Row>
              <Col>
              <p> {projects[3].description}</p>
              </Col>
          </Row>
          <Row className="share-button">

          <Button variant="outline-primary" target="_blank" href={projects[3].github} className="share-button"> Github
          </Button>
          <Button variant="outline-primary" target="_blank" className="share-button" href={projects[3].github}> Website
          </Button>
          <Button variant="primary" onClick={() => this.setState({ isOpenQuiz: true })} className="share-button"> Images
          </Button>
          </Row>
          </Col>
          
            
          <Col xs={12} md={3} className="portfolio-item">
            <Row>
              <Col>
              <h5>{projects[4].title}</h5>
              </Col>
            </Row>
            
            <Row>
              <Col>
              <img src={process.env.PUBLIC_URL + projects[4].image}  className="portfolio-icon"></img>
              </Col>
          </Row>
          <Row>
              <Col>
              <p> {projects[4].description}</p>
              </Col>
          </Row>
          <Row className="share-button">
          <Button variant="outline-primary" target="_blank" href={projects[4].github} className="share-button"> Github
          </Button>
          <Button variant="outline-primary" target="_blank" className="share-button" href={projects[4].github}> Website
          </Button>
          <Button variant="primary" className="share-button" onClick={() => this.setState({ isOpenWeather: true })}> Images
            <a  target="_blank"></a>
          </Button>
          </Row>
          </Col>
          
           
          <Col xs={12} md={3} className="portfolio-item">
            <Row>
              <Col>
              <h5>{projects[5].title}</h5>
              </Col>
            </Row>
            
            <Row>
              <Col>
              <img src={process.env.PUBLIC_URL + projects[5].image} className="portfolio-icon"></img>
              </Col>
          </Row>
          <Row>
              <Col>
              <p> {projects[5].description}</p>
              </Col>
          </Row>
          <Row className="share-button">
          <Button variant="outline-primary" target="_blank" href={projects[5].github} className="share-button"> Github
          </Button>
          <Button variant="outline-primary" target="_blank" className="share-button" href={projects[5].url}> Website
          </Button>
          <Button variant="primary" onClick={() => this.setState({ isOpenEmployee: true })} className="share-button"> Images
          </Button>
          </Row>
          </Col>
        </Row>
        </Container>
    )}}
