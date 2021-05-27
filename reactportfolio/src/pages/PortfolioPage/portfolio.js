import React, { useState, useRef, Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import { Container } from '@material-ui/core';

import { useSpring, animated } from 'react-spring';
import ReactParticles from 'react-particles-js';
import particlesConfig from './particles-config.js';
import Particles from '../../components/Particles/Particles';

import "./style.css";
import {  Row, Col } from 'react-bootstrap';
import Card from '../../components/Project/Project'
import { Button } from '@material-ui/core';
const images_Event = [
  '/images/screenshots/Event1.png',
  '/images/screenshots/Event2.png',
];

/*
function Card({ children }) {
  // We add this ref to card element and use in onMouseMove event ...
  // ... to get element's offset and dimensions.
  const ref = useRef();
  const [isHovered, setHovered] = useState(false);

  const [animatedProps, setAnimatedProps] = useSpring(() => {
    return {
      xys: [0, 0, 1],
      config: { mass: 10, tension: 400, friction: 40, precision: 0.00001 }
    };
  });

  return (
    <animated.div
      ref={ref}
      className="card"
      onMouseEnter={() => setHovered(true)}
      onMouseMove={({ clientX, clientY }) => {
        // Get mouse x position within card
        const x =
          clientX -
          (ref.current.offsetLeft -
            (window.scrollX || window.pageXOffset || document.body.scrollLeft));

        // Get mouse y position within card
        const y =
          clientY -
          (ref.current.offsetTop -
            (window.scrollY || window.pageYOffset || document.body.scrollTop));

        // Set animated values based on mouse position and card dimensions
        const dampen = 50; // Lower the number the less rotation
        const xys = [
          -(y - ref.current.clientHeight / 2) / dampen, // rotateX
          (x - ref.current.clientWidth / 2) / dampen, // rotateY
          1.07 // Scale
        ];

        // Update values to animate to
        setAnimatedProps({ xys: xys });
      }}
      onMouseLeave={() => {
        setHovered(false);
        // Set xys back to original
        setAnimatedProps({ xys: [0, 0, 1] });
      }}
      style={{
        // If hovered we want it to overlap other cards when it scales up
        zIndex: isHovered ? 2 : 1,
        // Interpolate function to handle css changes
        transform: animatedProps.xys.interpolate(
          (x, y, s) =>
            `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
        )
      }}
    >
      {children}
    </animated.div>
  );
}*/
/*
function Particles({ children }) {
  return (
    <div style={{ position: 'relative' }}>
      <ReactParticles
        params={particlesConfig}
        style={{
          position: 'absolute',
          zIndex: 1,
          left: 0,
          right: 0,
          bottom: 90,
          top: 100,
        }}
      />
      {children && <div style={{ position: 'relative' }}>{children}</div>}
    </div>
  );
}*/

function Hero({ children }) {
  return (
    <div className="hero">
      <div className="hero-body">{children}</div>
    </div>
  );
}

function Image({ ratio, src }) {
  return (
    <div className="image-container">
      <div className="image-inner-container">
        <div
          className="ratio"
          style={{
            paddingTop: ratio * 100 + '%'
          }}
        >
          <div className="ratio-inner">
            <img src={src} alt="image"/>
          </div>
        </div>
      </div>
    </div>
  );
}

const images_Budget = [
  '/images/screenshots/Budget1.png',
  '/images/screenshots/Budget2.png',
];
const images_Food = [
  '/images/screenshots/Food1.png',
  '/images/screenshots/Food2.png',
];

const images_Day = [
  '/images/screenshots/Day1.png',
  '/images/screenshots/Day2.png',
  '/images/screenshots/Day3.png',
  '/images/screenshots/Day4.png',
];
const images_Employee = [
  '/images/screenshots/Employee.png',
];
const images_Note = [
  '/images/screenshots/Note1.png',
  '/images/screenshots/Note2.png',
  '/images/screenshots/Note3.png',

];
const images_Quiz = [
  '/images/screenshots/Quiz1.png',
  '/images/screenshots/Quiz2.png',
];
const images_Weather = [
  '/images/screenshots/Weather.png',
];

const images_Blog = [
  '/images/screenshots/Quiz1.png',
  '/images/screenshots/Quiz2.png',
];



var projects = [
  {
    title: "Event Maker",
    description: "This application allows a host to schedule an event online , in-person or an announcement for a few different types of events.",
    github: "https://github.com/arti-karnik/EventMaker",
    url: "https://serene-oasis-98788.herokuapp.com/",
    image: '/images/icons/invitation.png',
    imageRatio: 784 / 1016,
},
  {
      title: "Food Feed",
      description: "FoodFeed is a web app for users that want to search for a place to eat whether it's local or in another city.", 
      github: "https://github.com/arti-karnik/FoodFeed",
      url: "https://arti-karnik.github.io/FoodFeed/",
      image: "/images/icons/food-icon.png",
      imageRatio: 784 / 1016,
  },
  {
      title: "Plan My Day",
      description: "A simple day planner application that will allow the user to add events in one hour time slots.  hour time slots hour time slots", 
      github: "https://github.com/arti-karnik/PlayMyDay",
      url: "https://arti-karnik.github.io/PlayMyDay/",
      image: "/images/icons/plan-icon.png",
      imageRatio: 784 / 1016,

  },
  {
      title: "Javascript Quizzy",
      description: "Quiz on JavaScript fundamentals that stores high scores. It have multi-choice questions to be answered in given time-limit.",
      github: "https://github.com/arti-karnik/Javascript-Quizzy",
      url: "https://arti-karnik.github.io/Javascript-Quizzy/",
      image: "/images/icons/quiz-icon.png",
      imageRatio: 784 / 1016,

  },
    {
        title: "Weather!",
        description: "Application to get current and 5-day weather forecast for given city name. Current & forecasted temperature details displayed.",
        github: "https://github.com/arti-karnik/WhatsMyWeather",
        url: "https://arti-karnik.github.io/WhatsMyWeather/",
        image: "/images/icons/weather-icon.png",
        imageRatio: 784 / 1016,

    },
    {
      title: "Employee Viewer",
      description: "An employee or manager would benefit greatly from being able to view data about other employees.",
      github: "https://github.com/arti-karnik/EmployeePage",
      url: "https://arti-karnik.github.io/EmployeePage/",
      image: "/images/icons/employee.png",
      imageRatio: 784 / 1016,

    },  
    {
      title: "Technology Blog",
      description: "As a developer who writes about tech, build a CMS-style blog site to publish articles, blog posts, and my thoughts and opinions",
      github: "https://github.com/arti-karnik/Technology-StopAndBlog",
      url: "https://arcane-inlet-16342.herokuapp.com/",
      image: "/images/icons/blog.png",
      imageRatio: 784 / 1016,

    },
    {
      title: "Note Taker",
      description: "Application to get current and 5-day weather forecast for given city name. Searches get saved locally.",
      github: "https://github.com/arti-karnik/WhatsMyWeather",
      url: "https://arti-karnik.github.io/WhatsMyWeather/",
      image: "/images/icons/weather-icon.png",
      imageRatio: 784 / 1016,

  },
]

export default class myportfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
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
        
         <Particles>
        <Container>
            <Row className="row">
                <Col className="column">
                  <Card>
                    <div className="card-title">{projects[0].title}</div>
                    <Image ratio={projects[0].imageRatio} src={process.env.PUBLIC_URL + projects[0].image} />
                    <div className="card-body">{projects[0].description}</div>
                    <div id="share">
                    <Button id="learnmore" href={projects[0].github} target="_blank">Github</Button>
                    <Button id="learnmore" href={projects[0].url} target="_blank">Website</Button>
                    <Button  id="learnmore" onClick={() => this.setState({ isOpenEvent: true })} className="share-button"> 
                    Images
                    </Button>
                    </div>
                    </Card>
                  </Col>
                  
                  <Col className="column">
                    <Card>
                    <div className="card-title">{projects[1].title}</div>
                    <Image ratio={projects[1].imageRatio} src={process.env.PUBLIC_URL + projects[1].image} />
                    <div className="card-body">{projects[1].description}</div>
                    <div id="share">
                    <Button id="learnmore" href={projects[1].github} target="_blank">Github</Button>
                    <Button id="learnmore" href={projects[1].url} target="_blank">Website</Button>
                    <Button  id="learnmore" onClick={() => this.setState({ isOpenFood: true })} className="share-button"> 
                    Images
                    </Button>
                    </div>
                    </Card>
                  </Col>
                  <Col className="column" >
                    <Card>
                    <div className="card-title">{projects[2].title}</div>
                    <Image ratio={projects[2].imageRatio} src={process.env.PUBLIC_URL + projects[1].image} />
                    <div className="card-body">{projects[2].description}</div>
                    <div id="share">
                    <Button id="learnmore" href={projects[2].github} target="_blank">Github</Button>
                    <Button id="learnmore" href={projects[2].url} target="_blank">Website</Button>
                    <Button  id="learnmore" onClick={() => this.setState({ isOpenDay: true })} className="share-button"> 
                    Images
                    </Button>
                    </div>
                    </Card>
                </Col>
                </Row>
                <Row className="row">
                  <Col className="column">
                    <Card>
                    <div className="card-title">{projects[3].title}</div>
                    <Image ratio={projects[2].imageRatio} src={process.env.PUBLIC_URL + projects[3].image} />
                    <div className="card-body">{projects[3].description}</div>
                    <div id="share">
                    <Button id="learnmore" href={projects[3].github} target="_blank">Github</Button>
                    <Button id="learnmore" href={projects[3].url} target="_blank">Website</Button>
                    <Button  id="learnmore" onClick={() => this.setState({ isOpenQuiz: true })} className="share-button"> 
                    Images
                    </Button>
                    </div>
                    </Card>
                  </Col>
                  <Col className="column">
                  <Card>
                    <div className="card-title">{projects[4].title}</div>
                    <Image ratio={projects[4].imageRatio} src={process.env.PUBLIC_URL + projects[4].image} />
                    <div className="card-body">{projects[4].description}</div>
                    <div id="share">
                    <Button id="learnmore" href={projects[4].github} target="_blank">Github</Button>
                    <Button id="learnmore" href={projects[4].url} target="_blank">Website</Button>
                    <Button  id="learnmore" onClick={() => this.setState({ isOpenWeather: true })} className="share-button"> 
                    Images
                    </Button>
                    </div>
                    </Card>
                  </Col>
               
                  <Col className="column">
                    <Card>
                    <div className="card-title">{projects[5].title}</div>
                    <Image ratio={projects[5].imageRatio} src={process.env.PUBLIC_URL + projects[5].image} />
                    <div className="card-body">{projects[5].description}</div>
                    <div id="share">
                    <Button id="learnmore" href={projects[5].github} target="_blank">Github</Button>
                    <Button id="learnmore" href={projects[5].url} target="_blank">Website</Button>
                    <Button  id="learnmore" onClick={() => this.setState({ isOpenEmployee: true })} className="share-button"> 
                    Images
                    </Button>
                    </div>
                    </Card>
                  
                  </Col>
           
                  </Row>
        {isOpenEvent && (
          <Lightbox
          mainSrc={process.env.PUBLIC_URL + images_Event[photoIndex]}
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
        {isOpenDay && (
              <Lightbox
              mainSrc={process.env.PUBLIC_URL + images_Day[photoIndex]}
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

{isOpenEmployee && (
              <Lightbox
              mainSrc={process.env.PUBLIC_URL + images_Employee[photoIndex]}
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

{isOpenWeather && (
          <Lightbox
          mainSrc={process.env.PUBLIC_URL + images_Weather[photoIndex]}
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
          mainSrc={process.env.PUBLIC_URL + images_Budget[photoIndex]}
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
{isOpenQuiz && (
              <Lightbox
              mainSrc={process.env.PUBLIC_URL + images_Quiz[photoIndex]}
              nextSrc={process.env.PUBLIC_URL +  images_Quiz[(photoIndex + 1) % images_Quiz.length]}
                prevSrc={process.env.PUBLIC_URL +  images_Quiz[(photoIndex + images_Quiz.length - 1) % images_Quiz.length]}
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
        

      {isOpenNote && (
              <Lightbox
              mainSrc={process.env.PUBLIC_URL + images_Note[photoIndex]}
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

        {isOpenFood && (
              <Lightbox
              mainSrc={process.env.PUBLIC_URL + images_Food[photoIndex]}
              nextSrc={process.env.PUBLIC_URL + images_Food[(photoIndex + 1) % images_Food.length]}
                prevSrc={process.env.PUBLIC_URL + images_Food[(photoIndex + images_Food.length - 1) % images_Food.length]}
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
        </Container>
      </Particles>
  );
}};


