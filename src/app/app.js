import React, { Component } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import MenuBar from "../menu-bar";
import ProjectsPage from "../pages/projects/projects";
import AboutPage from "../pages/about/about";
import ContactPage from "../pages/contact/contact";
import "./app.css"




export default class App extends Component {

  

    render() {
        return (
            <div>
                <Router>
                    <div>
                        <MenuBar/>
                        <Route path="/projects" component={ProjectsPage}/>
                        <Route path="/about" component={AboutPage}/>
                        <Route path="/contact" component={ContactPage}/>
                    </div>
                </Router>      
            </div>
           
        )
    }

};