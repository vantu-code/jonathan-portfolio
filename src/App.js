import React, { Component, createRef } from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import { Slide } from 'react-slideshow-image';
import './App.css'
import NavBar from './components/NavBar'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import quotes from './quotes.json'



// import React, { Component } from 'react'

export default class App extends Component {
  state={
    quoteNumber: null,
  }
  getqoute=()=>{
    const quoteNumber = Math.floor(Math.random()*quotes.length)
    this.setState({quoteNumber})
  }
  componentDidMount(){
    this.getqoute()
  }

  render() {
    const quote = quotes[this.state.quoteNumber]
    return (
      <div className="all-page">
              <CSSTransitionGroup
                transitionName="nav"
                transitionAppear={true}
                transitionAppearTimeout={1000}
                transitionEnter={false}
                transitionLeave={false}>
                <NavBar/>
              </CSSTransitionGroup>
        <div className="title" id="projects">
          <h1>Projects</h1>
        </div>
              <CSSTransitionGroup
                transitionName="fade"
                transitionAppear={true}
                transitionAppearTimeout={800}
                transitionEnter={false}
                transitionLeave={false}>
                <Projects />
              </CSSTransitionGroup>
        <About getqoute={this.getqoute} quote={quote}/>
        <Footer quote={quote}/>
      </div>
    )
  }
}
