import React from "react";
import FilterBar from "./filter-bar";
import ProjectsList from "./projects-list";
import dataBase from "./data";
import "./projects.css";
import Footer from "../../footer";



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
       })
    })}


    const data = [ ...createAllItems(dataBase) ];
    

    
    return( 
        <div id="projects_page">
            <div className="intro">
                <span>“Stay focused, go after your dreams and keep moving toward your goals.”</span>
            </div>
            <span className="head_title">My Projects
                <div className="line"></div></span>
            <ul>
                <ProjectsList projectsData={data} />
            </ul>
            <FilterBar />  
            <Footer/>
        </div>
    )
}
    

export default ProjectsPage;
