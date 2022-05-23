import React, { Component, setState } from "react";
import ProjectsListItem from "../list-item";
import "./projects-list.css"
import {connect} from "react-redux";
import uuid from "react-uuid";


class ProjectsList extends Component {

    render() {
        const {projectsData} = this.props;
        const listItems = projectsData.map( (item) => {
            return ( 
                <li key={uuid()} >
                    <ProjectsListItem {...item} />
                </li> )
        });

        return (
            <div className="projects_list">
                <ul >
                    { listItems }
                </ul>
            </div>
           
        )
    }

};



const mapStateToProps = (state) => {
    return ({
        projectsData: state.dataBase})
}


export default connect(mapStateToProps)(ProjectsList);