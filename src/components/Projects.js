import React, { Component, createRef } from 'react'
import { Slide } from 'react-slideshow-image';
import projects from '../projects.json'
import ProjectDetails from './ProjectDetails'
import ProjectSlide from './ProjectSlide'


export default class Slideshow extends Component {
    state={
        show: null,
        idForSlide: "short",
    }
    show1=(e)=>{
        if (e.type === "mouseenter" && e.target.id === "mobile-slide") return;
            else this.setState({show: 1, idForSlide:""})
    }
    show2=(e)=>{
        if (e.type === "mouseenter" && e.target.id === "mobile-slide") return;
            else this.setState({show: 2, idForSlide:""})
    }
    show3=(e)=>{
        if (e.type === "mouseenter" && e.target.id === "mobile-slide") return;
            else this.setState({show: 3, idForSlide:""})
    }
    dontShow=(e)=>{
        if (e.type === "mouseenter" && e.target.id === "mobile-slide"){
            return;
            }
            else{
        this.setState({show: null})
        this.setState({idForSlide:"short"})
                }
    }
    properties = {
        duration: 1000000,
        transitionDuration: 1000,
        infinite: true,
        indicators: true,
        arrows: true,
        onChange: (oldIndex, newIndex) => {
            this.setState({idForSlide:"short", show: null})
          // console.log(`slide transition from ${oldIndex} to ${newIndex}`);
        }
        }
render() 
    {
    return (
    <div className="slide-container" id="projects">
        <Slide {...this.properties}>

        <div id={`${this.state.idForSlide}`} 
            className="each-slide" 
            onMouseEnter={this.show1} 
            onMouseLeave={this.dontShow} >
            {
                this.state.show !== 1?
                <ProjectSlide project={projects[0]} show={this.show1} />
                :
                <ProjectDetails project={projects[0]} dontShow={this.dontShow}/>
            }
        </div>

        <div id={`${this.state.idForSlide}`} 
            className="each-slide" 
            onMouseEnter={this.show2} 
            onMouseLeave={this.dontShow} >
            {
                this.state.show !== 2?
                <ProjectSlide project={projects[1]} show={this.show2} />
                :
                <ProjectDetails project={projects[1]} dontShow={this.dontShow}/>
            }
        </div>

        <div id={`${this.state.idForSlide}`} 
            className="each-slide" 
            onMouseEnter={this.show3} 
            onMouseLeave={this.dontShow} >
            {
                this.state.show !== 3?
                <ProjectSlide project={projects[2]} show={this.show3} />
                :
                <ProjectDetails project={projects[2]} dontShow={this.dontShow}/>
            } 
        </div>

        </Slide>
    </div>
    )
    }
}
