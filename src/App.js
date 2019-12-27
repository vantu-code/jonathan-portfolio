import React, { Component, createRef } from 'react'
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
    // console.log(this.state.quoteNumber)
    return (
      <div className="all-page">
      <NavBar/>
      <div className="title" id="projects">
       <h1>Projects</h1>
       </div>
      <Projects/>
      <div className="hero"></div>
      <About getqoute={this.getqoute} quote={quote}/>
      <Footer quote={quote}/>
      </div>
    )
  }
}
