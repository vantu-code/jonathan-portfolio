import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        return (
            <div className="nav-bar">
                <p className="name"> Jonathan Vantu's portfolio</p>
                <ul className="nav-list">
                    <li><a href='#about'>About</a></li>
                    <li><a href='#projects'>Projects</a></li>
                </ul>
            </div>
        )
    }
}
