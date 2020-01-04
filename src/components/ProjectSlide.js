import React from 'react'

export default function ProjectSlide(props) {
    return (
        <div className="my-slide">
            {/* desktop */}
            <h2 id="desktop-slide">{props.project.title}</h2>
            <img id="desktop-slide" className="image-slide" src={props.project.photo} alt="app" onClick={props.show}/>
            {/* mobile */}
            <h2 id="mobile-slide" >{props.project.title}</h2>
            <img id="mobile-slide" className="image-slide" src={props.project.photo} alt="app" onClick={props.show}/>
            <h4 id="mobile-slide" onClick={props.show} > More details</h4>
        </div>
    )
}
