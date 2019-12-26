import React, { Component, createRef } from 'react'
import { Slide } from 'react-slideshow-image';
import projects from '../projects.json'
import ProjectDetails from './ProjectDetails'

 
const slideImages = [
  'images/slide_2.jpg',
  'images/slide_3.jpg',
  'images/slide_4.jpg'
];
 
const properties = {
  duration: 10000,
//   transitionDuration: 1000,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

export default class Slideshow extends Component {
    state={
        show: null,
    }
    show1=()=>{
        this.setState({show: 1})
        console.log("hi", this.state)
    }
    dontShow=()=>{
        this.setState({show: null})
    }
  render() {
      const features1 = projects[0].features;
    return (
      <div className="slide-container" id="projects">
        <Slide {...properties}>
          <div className="each-slide" onMouseEnter={this.show1} onMouseLeave={this.dontShow} >
          {
          this.state.show !== 1?

            <div className="my-slide" style={{'backgroundImage': `url(${slideImages[0]})`}}>
            <h2>Musical Scales</h2>
              <img className="image-slide" src={projects[0].photo} onClick={this.show1}/>
            </div>
            :
            <ProjectDetails project={projects[0]} dontShow={this.dontShow}/>
          }
          </div>
          <div className="each-slide">
          <ProjectDetails project={projects[2]}/>
          </div>
          {/* <div className="each-slide">
          <h2>Name of project</h2>
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            <img className="image-slide" src="https://placeit.net/uploads/stage/stage_image/5953/default_a11923base.png"/>
            </div>
            <a href='http://www.google.com'><h4>check app</h4></a>
            <a href='http://www.google.com'><h4>check my repositories</h4></a>
          </div> */}
          {/* <div className="each-slide">
          <h2>Name of project</h2>
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            <img className="image-slide" src="https://placeit.net/uploads/stage/stage_image/5953/default_a11923base.png"/>
            </div>
            <a href='http://www.google.com'><h4>check app</h4></a>
            <a href='http://www.google.com'><h4>check my repositories</h4></a>
          </div> */}
        </Slide>
      </div>
    )
  }
}
