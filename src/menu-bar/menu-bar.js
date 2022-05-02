import React, { Component } from "react";
import "./menu-bar.css"

export default class MenuBar extends Component {
    render() {
        return (
            <div className="menu-bar">
                <div className="menu">
                    <span>About me</span>
                    <span>Projects</span>
                    <span>Contact</span>
                </div>
             

                <form className="login-form">
                    <input
                        placeholder="login">
                    </input>
                    <input 
                        placeholder="password">
                    </input>
                    <button type="submit">-></button>
                </form>

            </div>
        )
    }

};