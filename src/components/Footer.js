import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                {/* <p className="name"> Jonathan Vantu</p> */}
                <ul className="footer-list">
                    <li><a href='#about'>e-mail</a></li>
                    <li><a href='#projects'><img className="linkedin-f" src="https://www.freepnglogos.com/uploads/linkedin-black-logo-19.png" width="60"/></a></li>
                </ul>
            </div>
        )
    }
}
