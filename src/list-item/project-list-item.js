import React, { Component } from "react";


export default class ProjectListItem extends Component {

    render() {
        
        const { title, description, githublink, netlifylink, 
                img, languages} = this.props;

        return (
            <div>
                <h3>{title}</h3>
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