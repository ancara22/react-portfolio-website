import React, {Component} from "react";
import FilterBar from "./filter-bar";
import ProjectsList from "./projects-list";
import ItemDetale from "./item-detale";

import "./projects.css";
import Footer from "../../footer";

import { Provider } from "react-redux";
import reducer from "./storeData/reducer";
import {configureStore} from '@reduxjs/toolkit';


const store = configureStore({reducer: reducer});



class ProjectsPage extends Component {

    state = {
        showBox: ""
    }

    setItemBox = () => {
        if(store.getState().showItemBox) {
             this.setState({ showBox: <ItemDetale/> })
        } else {
            this.setState({showBox: ""})
        }
    }

    
    render() {
        store.subscribe(this.setItemBox)


        return( 
            <div id="projects_page">
                <div className="intro">
                    <span>“Stay focused, go after your dreams and keep moving toward your goals.”</span>
                </div>
                <span className="head_title">My Projects
                    <div className="line"></div></span>
                <ul>
                <Provider store={store} >
                    <ProjectsList/> 
                    {this.state.showBox}
                </Provider>
                </ul>
                
                <FilterBar />
                <Footer/>
            </div>
        )
    }
}




export default ProjectsPage;
