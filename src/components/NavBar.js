import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        return (
            <div className="nav-bar">
                <ul className="nav-list">
                    <li><a href='#projects'>Projects</a></li>
                    <li><a href='#about'>About</a></li>
                </ul>
            </div>
        )
    }
}
