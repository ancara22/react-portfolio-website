import React, { Component } from "react";
import "./project-list-item.css"


export default class ProjectListItem extends Component {

    render() {
        
        const { title, description, githublink, netlifylink, 
                img, languages} = this.props;

        return (
            <div className="list_item">
                <h3>{title}</h3>
                <div className="image">
                    <img src={require(`./img-items/${img}`)} alt="img"/>
                </div>
                <p>{description}</p>
                
                <div className="links">
                    <span>{languages}</span>
                    <span>{githublink}</span>
                    <span>{netlifylink}</span>
                </div>

            </div>
            
        )
    }

};