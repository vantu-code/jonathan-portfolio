import React, { Component, createRef } from 'react'
import { Slide } from 'react-slideshow-image';
import './App.css'
import NavBar from './components/NavBar'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'

// import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div className="all-page">
      <NavBar/>      
      <div className="title">
      {/* <h1>Welcome to my portfolio!</h1> */}
      </div>
      <Projects/>
      <div className="hero"></div>
      <About/>
      <Footer/>
      </div>
    )
  }
}
