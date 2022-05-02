import React, { Component } from "react";
import Header from "../header";
import ProjectsList from "../projects-list"
import SearchPanel from "../search-panel";
import NewProject from "../new-project";




export default class App extends Component {

    idsMaker = 100;
     
    state = {
        todoData: [
            this.createItems("Drink coffee."),
            this.createItems("Write some code!."),
            this.createItems("Sleep!.")
        ]
    }


    createItems(label) {
        
        return ({
            label: label,
            done: false,
            important: false,
            id: this.idsMaker++,
        })
        

    };

    
    render() {

        return (
            <div>
                <Header/>
                <NewProject/>
                <ul>
                    <ProjectsList todo={ this.state.todoData }/>
                </ul>
                
                <SearchPanel/>          
                
            </div>
           
        )
    }

};