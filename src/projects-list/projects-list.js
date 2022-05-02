import React, { Component } from "react";
import ProjectsListItem from "../list-item"


export default class ProjectsList extends Component {

    render() {
        const listItems = this.props.projectsData.map((item)=> {
            const {id} = item;
            return (
                <li key={id.toString()}><ProjectsListItem {...item} /></li>
            )
        });

        return (
           <ul>
               { listItems }
           </ul>
        )
    }

};