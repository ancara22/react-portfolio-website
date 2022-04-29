import React, { Component } from "react";
import Header from "../header";
import TodoList from "../todo-list"


export default class App extends Component {
    render() {
        return (
            <div >
                <Header/>
                <TodoList/>
             </div>
        )
    }

};