import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div id="about">
                <img className="my-pic" src="/images/IRONHACK_RETRATOS_GRUPOS0105.jpg"/>
                <div className="about-text">
                <h1>About</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada risus at nibh varius condimentum. Maecenas suscipit, felis ac blandit auctor, diam nisl molestie orci, vitae convallis lacus urna id magna. Aenean varius ex et pellentesque sagittis. Pellentesque porttitor ante vel laoreet dapibus. Quisque venenatis aliquet augue, sit amet venenatis risus convallis nec. Integer nibh risus, suscipit ac sapien non, eleifend ultrices dui. Morbi in erat orci. Etiam tellus nibh, vulputate non erat a, finibus rhoncus urna. Curabitur condimentum sed ex malesuada vehicula.</p>
                </div>
            </div>
        )
    }
}
