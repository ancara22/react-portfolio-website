import React, { Component } from "react";
import Header from "../header";
import NewsList from "../news-list"
import SearchPanel from "../search-panel";
import NewEvent from "../new-event";




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
                <NewEvent/>
                <ul>
                    <NewsList todo={ this.state.todoData }/>
                </ul>
                
                <SearchPanel/>          
                
            </div>
           
        )
    }

};