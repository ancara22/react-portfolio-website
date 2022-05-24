import React, {Component} from "react";
import FilterBar from "./filter-bar";
import ProjectsList from "./projects-list";
import ItemDetale from "./item-detale";

import "./projects.css";
import Footer from "../../footer";

import { Provider } from "react-redux";
import reducer from "./storeData/reducer";
import {configureStore} from '@reduxjs/toolkit';

import Observer from '@researchgate/react-intersection-observer';


const store = configureStore({reducer: reducer});



class ProjectsPage extends Component {

    state = {
        showBox: "",
        observeState: true
    }

   

    setItemBox = () => {
        if(store.getState().showItemBox) {
             this.setState((prevState) => ({
                observeState: false,
                showBox: <ItemDetale/> 
             }))
        } else {
            this.setState((prevState) => ({
                observeState: false,
                showBox: ""
            }))
        }
    }

    

    observerFunction = (entries, _observer) => {
        if(entries.isIntersecting) {
            this.setState((prevState) => ({
                ...prevState,
                observeState: false
                
             }))
        } else {
            this.setState((prevState) => ({
                ...prevState,
                observeState: true
                
             }))
        }
    
    }

    options = {
        onChange: this.observerFunction,
        root: null,
        rootMargin: '0%',
    }

    
    render() {
        store.subscribe(this.setItemBox)

    

        return( 
            <div id="projects_page">
                <Observer {...this.options}>
                <div className="intro">
                    <span>“Stay focused, go after your dreams and keep moving toward your goals.”</span>
                </div>
                </Observer>
                <span className="head_title">My Projects
                    <div className="line"></div></span>
                <Provider store={store} >
                    <ProjectsList/> 
                    {this.state.showBox}
                </Provider>
                <FilterBar showBox={this.state.observeState}/>
                <Footer/>
            </div>
        )
    }
}




export default ProjectsPage;
