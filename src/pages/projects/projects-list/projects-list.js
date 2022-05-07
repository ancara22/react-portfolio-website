import React, { Component } from "react";
import ProjectsListItem from "../list-item";
import "./projects-list.css"



export default class ProjectsList extends Component {

    render() {
        const {projectsData} = this.props;

        const listItems = projectsData.map((item)=> {
            return (
                <li key={item.id.toString()}><ProjectsListItem {...item} /></li>
            )
        });

        return (
            <div>
                <span className="head_title">My Projects</span>
                <ul className="projects_list">
                    { listItems }
                </ul>
            </div>
           
        )
    }

};