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

const images_Budget = [
  'images/screenshots/Budget1.png',
  'images/screenshots/Budget2.png',
];
const images_Food = [
  'images/screenshots/Food1.png',
  'images/screenshots/Food2.png',
];
const images_Event = [
  'images/screenshots/Event1.png',
  'images/screenshots/Event2.png',
];
const images_Day = [
  'images/screenshots/Day1.png',
  'images/screenshots/Day2.png',
  'images/screenshots/Day3.png',
  'images/screenshots/Day4.png',
];
const images_Employee = [
  'images/screenshots/Employee.png',
];
const images_Note = [
  'images/screenshots/Note1.png',
  'images/screenshots/Note2.png',
  'images/screenshots/Note3.png',

];
const images_Quiz = [
  'images/screenshots/Quiz1.png',
  'images/screenshots/Quiz2.png',
];
const images_Weather = [
  'images/screenshots/Weather.png',
];

const images_Blog = [
  'images/screenshots/Quiz1.png',
  'images/screenshots/Quiz2.png',
];



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
              <img src={projects[0].image} className="portfolio-icon"></img>
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
              <img src={projects[1].image} className="portfolio-icon"></img>
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
              <img src={projects[2].image} className="portfolio-icon"></img>
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
              <img src={projects[3].image} className="portfolio-icon"></img>
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
              <img src={projects[4].image} className="portfolio-icon"></img>
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
              <img src={projects[5].image} className="portfolio-icon"></img>
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
     
      {isOpenEvent && (
          <Lightbox
            mainSrc={images_Event[photoIndex]}
            nextSrc={images_Event[(photoIndex + 1) % images_Event.length]}
            prevSrc={images_Event[(photoIndex + images_Event.length - 1) % images_Event.length]}
            onCloseRequest={() => this.setState({ isOpenEvent: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images_Event.length - 1) % images_Event.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images_Event.length,
              })
            }
          />
        )}

      {isOpenWeather && (
          <Lightbox
            mainSrc={images_Weather[photoIndex]}
            nextSrc={images_Weather[(photoIndex + 1) % images_Weather.length]}
            prevSrc={images_Weather[(photoIndex + images_Weather.length - 1) % images_Weather.length]}
            onCloseRequest={() => this.setState({ isOpenWeather: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images_Weather.length - 1) % images_Weather.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images_Weather.length,
              })
            }
          />
        )}

      {isOpenBudget && (
          <Lightbox
            mainSrc={images_Budget[photoIndex]}
            nextSrc={images_Budget[(photoIndex + 1) % images_Budget.length]}
            prevSrc={images_Budget[(photoIndex + images_Budget.length - 1) % images_Budget.length]}
            onCloseRequest={() => this.setState({ isOpenBudget: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images_Budget.length - 1) % images_Budget.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images_Budget.length,
              })
            }
          />
        )}

        {isOpenEmployee && (
              <Lightbox
                mainSrc={images_Employee[photoIndex]}
                nextSrc={images_Employee[(photoIndex + 1) % images_Employee.length]}
                prevSrc={images_Employee[(photoIndex + images_Employee.length - 1) % images_Employee.length]}
                onCloseRequest={() => this.setState({ isOpenEmployee: false })}
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + images_Employee.length - 1) % images_Employee.length,
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + 1) % images_Employee.length,
                  })
                }
              />
        )}

        {isOpenFood && (
              <Lightbox
                mainSrc={images_Food[photoIndex]}
                nextSrc={images_Food[(photoIndex + 1) % images_Food.length]}
                prevSrc={images_Food[(photoIndex + images_Food.length - 1) % images_Food.length]}
                onCloseRequest={() => this.setState({ isOpenFood: false })}
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + images_Food.length - 1) % images_Food.length,
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + 1) % images_Food.length,
                  })
                }
              />
        )}

      {isOpenNote && (
              <Lightbox
                mainSrc={images_Note[photoIndex]}
                nextSrc={images_Note[(photoIndex + 1) % images_Note.length]}
                prevSrc={images_Note[(photoIndex + images_Note.length - 1) % images_Note.length]}
                onCloseRequest={() => this.setState({ isOpenNote: false })}
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + images_Note.length - 1) % images_Note.length,
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + 1) % images_Note.length,
                  })
                }
              />
        )}

        {isOpenDay && (
              <Lightbox
                mainSrc={images_Day[photoIndex]}
                nextSrc={images_Day[(photoIndex + 1) % images_Day.length]}
                prevSrc={images_Day[(photoIndex + images_Day.length - 1) % images_Day.length]}
                onCloseRequest={() => this.setState({ isOpenDay: false })}
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + images_Day.length - 1) % images_Day.length,
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + 1) % images_Day.length,
                  })
                }
              />
        )}

          {isOpenQuiz && (
              <Lightbox
                mainSrc={images_Quiz[photoIndex]}
                nextSrc={images_Quiz[(photoIndex + 1) % images_Quiz.length]}
                prevSrc={images_Quiz[(photoIndex + images_Quiz.length - 1) % images_Quiz.length]}
                onCloseRequest={() => this.setState({ isOpenQuiz: false })}
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + images_Quiz.length - 1) % images_Quiz.length,
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + 1) % images_Quiz.length,
                  })
                }
              />
        )}
              </Container>

  
    )}}
