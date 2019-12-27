import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        const {quote} =this.props
        return (
            <div className="footer">
                {/* <p className="name"> Jonathan Vantu</p> */}
                <ul className="footer-list">
                    <li><a href="mailto:jonathanvantu@gmail.com">e-mail</a></li>
                    <li><a href='https://www.linkedin.com/in/jonathan-vantu-09a26861/'><img className="linkedin-f" src="https://www.freepnglogos.com/uploads/linkedin-black-logo-19.png" width="60"/></a></li>
                </ul>
            </div>
        )
    }
}
