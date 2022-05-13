import MyCv from "./cv/cv-box";
import IntroBox from "./intro/intro";
import "./about.css";
import React, { Component} from "react";



export default class AboutPage extends Component {

    state = {
        cvPage: false,
        mainPage: true,
        classN: ""
    }

    showMyCV = () => {
       this.setState({
            cvPage: true,
            mainPage: false,
            classNintro: "drop",
            classNcv: "show"

       })
    }


    showBox = () => {
        return (
            <div>
                <IntroBox classN={this.state.classNintro} showMyCV={this.showMyCV}/> 
                <MyCv classN={this.state.classNcv}/>
            </div>
            


        )



    }


    
    
    render() {


        return (
            <div>
               {this.showBox()}
               
            </div>
            )
    }
    
    
}
