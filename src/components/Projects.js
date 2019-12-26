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
    // console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

export default class Slideshow extends Component {
    state={
        show: null,
        idForSlide: "short",
    }
    show1=()=>{
        this.setState({show: 1})
        this.setState({idForSlide:""})
    }
    show2=()=>{
        this.setState({show: 2})
        this.setState({idForSlide:""})
    }
    show3=()=>{
        this.setState({show: 3})
        this.setState({idForSlide:""})
    }
    dontShow=()=>{
        this.setState({show: null})
        this.setState({idForSlide:"short"})
    }
    properties = {
        duration: 10000,
      //   transitionDuration: 1000,
        infinite: true,
        indicators: true,
        arrows: true,
        onChange: (oldIndex, newIndex) => {
            this.setState({idForSlide:"short", show: null})

          // console.log(`slide transition from ${oldIndex} to ${newIndex}`);
        }
      }
  render() {
    return (
      <div className="slide-container" id="projects">
        <Slide {...this.properties}>

          <div id={`${this.state.idForSlide}`} className="each-slide"  onMouseEnter={this.show1} onMouseLeave={this.dontShow} >
          {
          this.state.show !== 1?

            <div className="my-slide">
            <h2>Musical Scales</h2>
              <img className="image-slide" src={projects[0].photo} onClick={this.show1}/>
            </div>
            :
            <ProjectDetails project={projects[0]} dontShow={this.dontShow}/>
          }
          
          </div>

          <div id={`${this.state.idForSlide}`} className="each-slide"  onMouseEnter={this.show2} onMouseLeave={this.dontShow} >
          {
          this.state.show !== 2?

            <div className="my-slide">
            <h2>One News</h2>
              <img className="image-slide" src={projects[0].photo} onClick={this.show2}/>
            </div>
            :
            <ProjectDetails project={projects[1]} dontShow={this.dontShow}/>
          }
          </div>

          <div id={`${this.state.idForSlide}`} className="each-slide" onMouseEnter={this.show3} onMouseLeave={this.dontShow} >
          {
          this.state.show !== 3?

            <div className="my-slide" style={{'backgroundImage': `url(${slideImages[0]})`}}>
            <h2>Catch Me There</h2>
              <img className="image-slide" src={projects[0].photo} onClick={this.show3}/>
            </div>
            :
            <ProjectDetails project={projects[2]} dontShow={this.dontShow}/>
          }
          </div>

        </Slide>
      </div>
    )
  }
}
