import React, { Component } from "react";
import MenuBar from "../menu-bar";
import ProjectsList from "../projects-list"
import SearchPanel from "../search-panel";
import NewProject from "../add-new-project";
import FilterBar from "../filter-bar";
import "./app.css"



const dataBase = [
    { 
        title: "Project 1",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", 
        githublink: "https://www.lipsum.com",
        netlifylink : "https://www.lipsum.com",
        img : "./img/",
        languages: ["a", "b", "c"],
        level: 1,
        id: 2

    },
    { 
        title: "Project 2",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", 
        githublink: "https://www.lipsum.com",
        netlifylink : "https://www.lipsum.com",
        img : "./img/",
        languages: ["a", "b", "c"],
        level: 1,
       
    }
]



export default class App extends Component {

    idsMaker = 100;
     
    state = {
        projectsData: [
           this.createItems(dataBase[0]),
           this.createItems(dataBase[1])
        ]
    }

    
    createItems({title, description, githublink, netlifylink, img, languages, level }) {
           return ({
                title: title,
                description: description,
                githublink: githublink,
                netlifylink : netlifylink,
                img : img,
                languages: languages,
                level: level,
                id: this.idsMaker++
           })
    }

    

    render() {
        return (
            <div>
                <MenuBar/>
                <div className="intro">
                    <span>Hello World!</span>
                </div>

                <NewProject/>
                <ul>
                    <ProjectsList projectsData={ this.state.projectsData }/>
                </ul>
                <FilterBar/>
                <SearchPanel/>          
                
            </div>
           
        )
    }

};