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

    show=(e)=>{
        console.log(e.target.name);
        
        const slideNum = parseInt(e.target.name);
        this.setState({show: slideNum, idForSlide:""})
    }
    dontShow=()=>{
        this.setState({show: null, idForSlide:"short"})
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
{
        projects.map((project, i)=>{
        return <div key={i} id={`${this.state.idForSlide}`} 
            className="each-slide" >
            {
                this.state.show !== i?
                <ProjectSlide project={project} show={this.show} passId={i}/>
                :
                <ProjectDetails project={project} dontShow={this.dontShow}/>
            }
        </div>
        })
}
        </Slide>
    </div>
    )
    }
}
