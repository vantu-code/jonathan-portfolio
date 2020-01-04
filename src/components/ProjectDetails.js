import React, { Component } from 'react'
import projects from '../projects.json'

export default class ProjectDetails extends Component {
    render() {
        const {project} = this.props;
        // console.log(project)
        return (
            project?
            <div className="slide-details">
                <div className="description" onClick={this.props.dontShow}>
                    <h2 className="title-d" style={{textAlign:"left"}}>{project.title}</h2>
                    <h3>{project.description} </h3>
                </div>
                <div className="horizontal-flex" onClick={this.props.dontShow}>
                    <div className="features" >
                        <h2>Features:</h2>
                        {   
                            <ul>
                        {
                            project.features.map((feature, i)=>{
                            return <li key={i}>{feature}</li>
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
                            project.programs.map((program, i)=>{
                            return <li key={i}>{program}</li>
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
                            project.devices.map((device, i)=>{
                            return <li key={i}>{device}</li>
                        })
                        }
                            </ul>
                        }
                    </div>
                </div>
                <div className="links">
                    <div className="app-button">
                        <a href={project.deploy}> App </a>
                    </div>
                    <div>
                        <a href={project.repository[0]}> Repository </a>
                    </div>
                    {
                    project.repository[1]?
                    <div>
                        <a href={project.repository[1]}> Backend </a>
                    </div>
                    :null
                    }
                </div>
            </div>
            :
            null
        )
    }
}
