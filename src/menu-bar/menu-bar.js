import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./menu-bar.css"

export default class MenuBar extends Component {
    render() {
        return (
            <div className="menu-bar">
                <div className="menu">
                    <span><Link to="/about" className="link">About</Link></span>
                    <span><Link to="/projects/" className="link">Projects</Link></span>
                    <span><Link to="/contact" className="link">Contact</Link></span>
                </div>
             

               {/* <form className="login-form">
                    <input
                        placeholder="login">
                    </input>
                    <input 
                        placeholder="password">
                    </input>
                    <button type="submit">-></button>
                 </form> */ }

            </div>

        )
    }

};