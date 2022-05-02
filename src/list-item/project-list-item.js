import React, { Component } from "react";
import "./project-list-item.css"


export default class ProjectListItem extends Component {

    render() {
        
        const { title, description, githublink, netlifylink, 
                img, languages} = this.props;

        return (
            <div className="list_item">
                <h2>{title}</h2>
                <img src={img} alt=""></img>
                <p>{description}</p>
                <span>{languages}</span>
                <div>
                    <span>{githublink}</span>
                    <span>{netlifylink}</span>
                </div>

            </div>
            
        )
    }

};