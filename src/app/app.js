import React, { Component } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MenuBar from "../menu-bar";
import ProjectsPage from "../pages/projects";
import AboutPage from "../pages/about/about";
import ContactPage from "../pages/contact/contact";
import "./app.css"



export default class App extends Component {


    render() {
        return (
            <BrowserRouter>
                <MenuBar/>
                    <Routes>
                        <Route path="/" element={<AboutPage/>}/>
                        <Route path="/about" element={<AboutPage/>}/>
                        <Route path="/projects/" element={ <ProjectsPage/> }/>
                        <Route path="/contact"element={<ContactPage/>}/>
                    </Routes>
            </BrowserRouter>  
        )
    }

};