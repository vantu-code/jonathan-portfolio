import React, { Component } from 'react'

export default class About extends Component {
    state={
        showAbout: true
    }
    showAbout=()=>{
    const showAbout = this.state.showAbout
    this.setState({showAbout: !showAbout})
    }
    render() {
        const {quote} = this.props
        const {showAbout} = this.state 
        return (
            <div id="about">
                <div className="about-text">

                <div className="about-flex">
                <div className="my-text">
                <button className="button-about"><h1  >About</h1></button>
                <img className="my-pic" src="./images/IRONHACK_RETRATOS_GRUPOS0105.jpg"/>
                <h4 className="name-text">Jonathan Vantu</h4>
                <h4>Full Stack Developer</h4> 
                <p>My programming knowledge so far is 
                <span style={{fontWeight:"bold"}}> Javascript, ES6, MongoDB, Express, React, Node-js, HTML & CSS. </span>
                I am fascinated by inovations, creativity and combining both. 
                {/* <a href="#about" onClick={this.showAbout}> read more</a> */}
                </p>
                <span style={{fontWeight:"bold"}}>Experience in marketing and management </span>
                <p>
                I have experience in marketing strategy and team leader for Google ads project. 
                working with Google ads, Google analytics, Google tag manager, Google spreadsheet, salesForce and more.
                </p>
                <p>
                My goal is to always learn and explore more and let my curiosity lead me forward.
                In my free time I enjoy the nature, I love to kitesurf, snowboard, produce music and explore new interests.
                </p>
                <p>
                I would love to hear from you, feel free to contact me. 
                </p>
                <p>
                Jonathan
                </p>
                </div>
                {
                quote?
                <div className="quote2">
                <h4>"{quote.quote}" <p>-{quote.author}</p></h4>
                <button className="button-quote" onClick={this.props.getqoute}>Get a new quote</button>
                </div>
                :null
                }
                </div>
                </div>
            </div>
        )
    }
}
