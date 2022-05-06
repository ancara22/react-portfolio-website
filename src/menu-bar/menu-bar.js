import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./menu-bar.css"

export default class MenuBar extends Component {
    render() {
        return (
            <div className="menu-bar">
                <div className="menu">
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
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