import React, { Component, createRef } from 'react'
import { Slide } from 'react-slideshow-image';

 
const slideImages = [
  'images/slide_2.jpg',
  'images/slide_3.jpg',
  'images/slide_4.jpg'
];
 
const properties = {
  duration: 5000,
  transitionDuration: 2000,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

export default class Slideshow extends Component {
  render() {
    return (
      <div className="slide-container" id="projects">
        <Slide {...properties}>
          <div className="each-slide">
            <h2>Name of project</h2>
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <img className="image-slide" src="https://placeit.net/uploads/stage/stage_image/5953/default_a11923base.png"/>
            </div>
            <a href='#anchor'><h4>check app</h4></a>
            <a href='http://www.google.com'><h4>check my repositories</h4></a>
          </div>
          <div className="each-slide">
          <h2>Name of project</h2>
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            <img className="image-slide" src="https://placeit.net/uploads/stage/stage_image/5953/default_a11923base.png"/>
            </div>
            <a href='http://www.google.com'><h4>check app</h4></a>
            <a href='http://www.google.com'><h4>check my repositories</h4></a>
          </div>
          <div className="each-slide">
          <h2>Name of project</h2>
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            <img className="image-slide" src="https://placeit.net/uploads/stage/stage_image/5953/default_a11923base.png"/>
            </div>
            <a href='http://www.google.com'><h4>check app</h4></a>
            <a href='http://www.google.com'><h4>check my repositories</h4></a>
          </div>
          <div className="each-slide">
          <h2>Name of project</h2>
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            <img className="image-slide" src="https://placeit.net/uploads/stage/stage_image/5953/default_a11923base.png"/>
            </div>
            <a href='http://www.google.com'><h4>check app</h4></a>
            <a href='http://www.google.com'><h4>check my repositories</h4></a>
          </div>
        </Slide>
      </div>
    )
  }
}
