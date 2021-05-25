import React from "react";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

import "./style.css";
const images_Event = [
    'images/screenshots/Event1.png',
    'images/screenshots/Event2.png',
  ];

function Screenshot() {
  return (
    <Lightbox
      mainSrc={process.env.PUBLIC_URL + '/images/profilepic.png'}
      nextSrc={images_Event[(0 + 1) % images_Event.length]}
      prevSrc={images_Event[(0 + images_Event.length - 1) % images_Event.length]}
/>
  );
}

export default Screenshot;