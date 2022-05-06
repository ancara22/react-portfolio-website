import React, {Component} from "react";
import FilterBar from "./filter-bar";
import ProjectsList from "./projects-list";
import dataBase from "./data";
import "./projects.css";



const ProjectsPage = () => {

    let idsMaker = 100;

    const createAllItems = (data) => {
        return data.map( ({title, description, githublink, netlifylink, img, languages, level }) => {
           return ({
            title: title,
            description: description,
            githublink: githublink,
            netlifylink : netlifylink,
            img : img,
            languages: languages,
            level: level,
            id: idsMaker++
       })})
    }

    state = {
        projectsData: [ ...this.createAllItems(dataBase) ]
    }

    
        return( 
            <div>
                <div className="intro">
                    <span>Hello World!</span>
                </div>
                <ul>
                    <ProjectsList projectsData={this.state.projectsData} />
                </ul>
                <FilterBar />  
            </div>
        )
}
    

export default ProjectsPage;
