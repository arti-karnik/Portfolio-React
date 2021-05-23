import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import { makeStyles } from '@material-ui/core/styles';
import Card from 'react-bootstrap/Card';
import { Button, Row, Container, Col } from 'react-bootstrap';

import CardDeck from 'react-bootstrap/CardDeck';

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
      description: "FoodFeed is a web app for users that want to search for a place to eat whether it's local or in another city.",
      github: "https://github.com/arti-karnik/FoodFeed",
      url: "https://arti-karnik.github.io/FoodFeed/",
      image: "/images/icons/food-icon.png",
  },
  {
      title: "Plan My Day",
      description: "A simple day planner application that will allow the user to add events in one hour time slots.",
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
        title: "What's my Weather!",
        description: "Application to get current and 5-day weather forecast for given city name. Searches get saved locally.",
        github: "https://github.com/arti-karnik/WhatsMyWeather",
        url: "https://arti-karnik.github.io/WhatsMyWeather/",
        image: "/images/icons/weather-icon.png",
    },
    {
      title: "Employee Viewer",
      description: "An employee or manager would benefit greatly from being able to view non-sensitive data about other employees. It would be particularly helpful to be able to filter employees by name.",
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
]

const images_Budget = [
  'images/screenshots/Budget1.png',
  'images/screenshots/Budget2.png',
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
      isOpenDay: false
    };
  }
  render() {
    const { photoIndex, isOpen, isOpenBudget, isOpenDay, isOpenEvent, isOpenNote, isOpenEmployee, isOpenQuiz } = this.state;

    return (
      <Container>
      <Row>
        <Col className="portfolio-item">
        <h5>{projects[0].title}</h5>
                  <div className="item-wrap" >
                      <img src={projects[0].image} className="item-img"/>
                      <p> {projects[0].description}</p>
                  </div>
                  <a  href={projects[0].github}>Github  </a>
                  <a href={projects[0].url}>Live url  </a>
                  <a href="https://www.google.com/">Screenshots  </a>
       </Col>
        <Col className="portfolio-item"><h5>{projects[1].title}</h5>
                  <div className="item-wrap" >
                      <img src={projects[1].image} className="item-img"/>
                      <p> {projects[1].description}</p>
                  </div>
                  <a  href={projects[1].github}>Github  </a>
                  <a href={projects[1].url}>Live url  </a>
                  <a href="https://www.google.com/">Screenshots  </a>
       
       </Col>
        <Col className="portfolio-item"><h5>{projects[2].title}</h5>
                  <div className="item-wrap" >
                      <img src={projects[2].image} className="item-img"/>
                      <p> {projects[2].description}</p>
                  </div>
                  <a  href={projects[2].github}>Github  </a>
                  <a href={projects[2].url}>Live url  </a>
                  <a href="https://www.google.com/">Screenshots  </a>
       </Col>
      </Row>
      <Row>
        <Col className="portfolio-item">
        <h5>{projects[3].title}</h5>
                  <div className="item-wrap" >
                      <img src={projects[3].image} className="item-img"/>
                      <p> {projects[3].description}</p>
                  </div>
                  <a  href={projects[3].github}>Github  </a>
                  <a href={projects[3].url}>Live url  </a>
                  <a href="https://www.google.com/">Screenshots  </a>
       </Col>
        <Col className="portfolio-item"><h5>{projects[4].title}</h5>
                  <div className="item-wrap" >
                      <img src={projects[4].image} className="item-img"/>
                      <p> {projects[4].description}</p>
                  </div>
                  <a  href={projects[4].github}>Github  </a>
                  <a href={projects[4].url}>Live url  </a>
                  <a href="https://www.google.com/">Screenshots  </a>
       
       </Col>
        <Col className="portfolio-item"><h5>{projects[5].title}</h5>
                  <div className="item-wrap" >
                      <img src={projects[5].image} className="item-img"/>
                      <p> {projects[5].description}</p>
                  </div>
                  <a  href={projects[5].github}>Github  </a>
                  <a href={projects[5].url}>Live url  </a>
                  <a href="https://www.google.com/">Screenshots  </a>
       </Col>
      </Row>

      <Row>
        <Col>
        <h5>{projects[6].title}</h5>
                  <div className="item-wrap" >
                      <img src={projects[6].image} className="item-img"/>
                      <p> {projects[6].description}</p>
                  </div>
                  <a  href={projects[6].github}>Github  </a>
                  <a href={projects[6].url}>Live url  </a>
                  <a href="https://www.google.com/">Screenshots  </a>
       </Col>
      </Row>


    </Container>
      /*
         <div className="row my-5">
           <div className="col-12 col-sm-12 col-md-4 portfolio-item">
           <h5>{projects[0].title}</h5>
                  <div className="item-wrap" >
                      <img src={projects[0].image} className="item-img"/>
                      <p> {projects[0].description}</p>
                  </div>
                  <a  href={projects[0].github}>Github  </a>
                  <a href={projects[0].url}>Live url  </a>
                  <a href="https://www.google.com/">Screenshots  </a>
            </div>
            <div className="columns portfolio-item">
           <h5>{projects[1].title}</h5>
                  <div className="item-wrap" >
                      <img src={projects[1].image} className="item-img"/>
                      <p> {projects[1].description}</p>
                  </div>
                  <a  href={projects[1].github}>Github  </a>
                  <a href={projects[1].url}>Live url  </a>
                  <a href="https://www.google.com/">Screenshots  </a>
            </div>
            <div className="columns portfolio-item">
           <h5>{projects[2].title}</h5>
                  <div className="item-wrap" >
                      <img src={projects[2].image} className="item-img"/>
                      <p> {projects[2].description}</p>
                  </div>
                  <a  href={projects[2].github}>Github  </a>
                  <a href={projects[2].url}>Live url  </a>
                  <a href="https://www.google.com/">Screenshots  </a>
            </div>
            <div className="columns portfolio-item">
           <h5>{projects[3].title}</h5>
                  <div className="item-wrap" >
                      <img src={projects[3].image} className="item-img"/>
                      <p> {projects[3].description}</p>
                  </div>
                  <a  href={projects[3].github}>Github  </a>
                  <a href={projects[3].url}>Live url  </a>
                  <a href="https://www.google.com/">Screenshots  </a>
            </div>
            <div className="columns portfolio-item">
           <h5>{projects[4].title}</h5>
                  <div className="item-wrap" >
                      <img src={projects[4].image} className="item-img"/>
                      <p> {projects[4].description}</p>
                  </div>
                  <a  href={projects[4].github}>Github  </a>
                  <a href={projects[4].url}>Live url  </a>
                  <a href="https://www.google.com/">Screenshots  </a>
            </div>
            <div className="columns portfolio-item">
           <h5>{projects[5].title}</h5>
                  <div className="item-wrap" >
                      <img src={projects[5].image} className="item-img"/>
                      <p> {projects[5].description}</p>
                  </div>
                  <a  href={projects[5].github}>Github  </a>
                  <a href={projects[5].url}>Live url  </a>
                  <a href="https://www.google.com/">Screenshots  </a>
            </div>
            <div className="columns portfolio-item">
           <h5>{projects[6].title}</h5>
                  <div className="item-wrap" >
                      <img src={projects[6].image} className="item-img"/>
                      <p> {projects[6].description}</p>
                  </div>
                  <a  href={projects[6].github}>Github  </a>
                  <a href={projects[6].url}>Live url  </a>
                  <a href="https://www.google.com/">Screenshots  </a>
            </div>
                
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
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
     </div>*/
    );
  }


  render1() {
    const { photoIndex, isOpen, isOpenBudget, isOpenDay, isOpenEvent, isOpenNote, isOpenEmployee, isOpenQuiz } = this.state;

    return (
         <div className="row">
           <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      <img src={projects[0].image} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta" onClick={() => this.setState({ isOpenEvent: true})}>
                          <h5>{projects[0].title}</h5>
                          <p>{projects[0].url}</p>
                          
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

        <div className="twelve columns collapsed">
        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
           <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      <img src={projects[0].image} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{projects[0].title}</h5>
                          <p>{projects[0].url}</p>
                          <button type="button" onClick={() => this.setState({ isOpenEvent: true})}>
                          </button>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
          
        </div>
        <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      <img src='/images/icons/blog.png' className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>item.name</h5>
                          <p>item.description</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      <img src='/images/icons/blog.png' className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>item.name</h5>
                          <p>item.description</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      <img src='/images/icons/blog.png' className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>item.name</h5>
                          <p>item.description</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      <img src='/images/icons/blog.png' className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>item.name</h5>
                          <p>item.description</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
          </div>
        </div>
        </div>
       
        

        <button type="button" onClick={() => this.setState({ isOpenNote: true })}>
          Open Note Taker
        </button>
        <button type="button" onClick={() => this.setState({ isOpenEmployee: true })}>
          Open Employee
        </button>
        <button type="button" onClick={() => this.setState({ isOpenDay: true })}>
          Open Day Planeer
        </button>
        <button type="button" onClick={() => this.setState({ isOpenQuiz: true })}>
          Open Quiz
        </button>
        <button type="button" onClick={() => this.setState({ isOpenBudget: true })}>
          Open Budget
        </button>
      </div>
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

      </div>
    );
  }
}