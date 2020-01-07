import React from 'react'


export default function ProjectSlide(props) {
    
    return (
        <div className="my-slide">
            {/* desktop */}
            <h2 id="desktop-slide">{props.project.title}</h2>
            <img id="desktop-slide" 
                className="image-slide" 
                src={props.project.photo} alt="app" onClick={props.show}
                name={props.passId}
                onMouseEnter={props.show}
            />
            {/* mobile */}
            <h2 id="mobile-slide" >{props.project.title}</h2>
            <img name={props.passId} 
                id="mobile-slide" 
                className="image-slide" 
                src={props.project.photo} alt="app" 
                onClick={props.show}/>
            <button id="mobile-slide" 
                name={props.passId}
                onClick={props.show} > More details
            </button>
    </div>
    )
}
