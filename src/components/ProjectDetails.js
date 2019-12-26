import React, { Component } from 'react'
import projects from '../projects.json'

export default class ProjectDetails extends Component {
    render() {
        const {project} = this.props;
        // console.log(project)
        return (
            project?
            <div className="slide-details">

            <h3 className="description" onClick={this.props.dontShow}>{project.description} </h3>
<div className="horizontal-flex" onClick={this.props.dontShow}>
<div className="features" >
            <h2>Features:</h2>
            {
            <ul>
            {
                project.features.map((feature)=>{
                return <li>{feature}</li>
                })
            }
            </ul>
            }
</div>
<div className="using">
            <h2>Using:</h2>
            {
            <ul>
            {
                project.programs.map((program)=>{
                return <li>{program}</li>
                })
            }
            </ul>
            }
</div>
<div className="devices">
            <h2>Devices: </h2>
            {
            <ul>
            {
                project.devices.map((device)=>{
                return <li>{device}</li>
                })
            }
            </ul>
            }
</div>
</div>
    <div className="links">
            <div><a href={project.deploy}> App </a></div>
            <div><a href={project.repository[0]}> Repository </a></div>
            {
            project.repository[1]?
            <div><a href={project.repository[1]}> Backend </a></div>
            :null
            }
    </div>
            </div>
            :
            null
        )
    }
}
