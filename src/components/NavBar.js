import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        return (
            <div className="nav-bar">
                {/* <p className="name"></p> */}
                <ul className="nav-list">
                    <li><a href='#projects'>Projects</a></li>
                    <li><a href='#about'>About</a></li>
                    {/* <li><a href='https://www.linkedin.com/in/jonathan-vantu-09a26861/'><img src="https://www.freepnglogos.com/uploads/linkedin-black-logo-19.png" width="60"/></a></li> */}
                </ul>
            </div>
        )
    }
}
