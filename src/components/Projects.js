import React, { Component, createRef } from 'react'
import { Slide } from 'react-slideshow-image';
import projects from '../projects.json'
import ProjectDetails from './ProjectDetails'



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

            <div id={`${this.state.idForSlide}`} className="each-slide"  onMouseEnter={this.show1} onMouseLeave={this.dontShow} >
                {
                this.state.show !== 1?

                <div className="my-slide">
                    {/* desktop */}
                    <h2 id="desktop-slide">{projects[0].title}</h2>
                    <img id="desktop-slide" className="image-slide" src={projects[0].photo} onClick={this.show1}/>
                    {/* mobile */}
                    <h2 id="mobile-slide" >{projects[0].title}</h2>
                    <img id="mobile-slide" className="image-slide" src={projects[0].photo} onClick={this.show1}/>
                    <h4 id="mobile-slide" onClick={this.show1} > More details</h4>
                </div>
                :
                <ProjectDetails project={projects[0]} dontShow={this.dontShow}/>
                }
            </div>
            <div id={`${this.state.idForSlide}`} className="each-slide"  onMouseEnter={this.show2} onMouseLeave={this.dontShow} >
                {
                this.state.show !== 2?

                <div className="my-slide">
                    {/* desktop */}
                    <h2 id="desktop-slide">{projects[1].title}</h2>
                    <img id="desktop-slide" className="image-slide" src={projects[1].photo} onClick={this.show2}/>
                    {/* mobile */}
                    <h2 id="mobile-slide" >{projects[1].title}</h2>
                    <img id="mobile-slide" className="image-slide" src={projects[1].photo} onClick={this.show2}/>
                    <h4 id="mobile-slide" onClick={this.show2}  > More details</h4>
                </div>
                :
                <ProjectDetails project={projects[1]} dontShow={this.dontShow}/>
                }
            </div>

            <div id={`${this.state.idForSlide}`} className="each-slide" onMouseEnter={this.show3} onMouseLeave={this.dontShow} >
                {
                this.state.show !== 3?

                <div className="my-slide">
                    {/* desktop */}
                    <h2 id="desktop-slide">{projects[2].title}</h2>
                    <img id="desktop-slide" className="image-slide" src={projects[2].photo} onClick={this.show3}/>
                    {/* mobile */}
                    <h2 id="mobile-slide" >{projects[2].title}</h2>
                    <img id="mobile-slide" className="image-slide" src={projects[2].photo} onClick={this.show3}/>
                    <h4 id="mobile-slide" onClick={this.show3}  > More details</h4>
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
