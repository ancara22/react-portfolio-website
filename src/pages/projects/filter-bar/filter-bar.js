import React, {Component} from "react";
import "./filter-bar.css";
import FilterBox from "./filter-box";



export default  class FilterBar extends Component {

    state = {
        classN: "",
        addClass: ""
    }

    dispayBox = () => {
        this.setState((prevState)=>({
            classN: prevState.classN == "" ? "display-box" : "",
            addClass: prevState.addClass == "" ? "move" : ""
                
        }))
    }

    render(){
        const {showBox} = this.props
    
        return (
            <div>
                <div 
                    className={`filter-bar ${this.state.addClass}`}
                    style={!showBox? {display: "none"}: {}}
                    onClick={this.dispayBox}>

                    <div className="menuIcon"></div>
                </div>
                <FilterBox 
                    classN={this.state.classN}
                    showBox={showBox}
                    hideBox={this.dispayBox}/>
                    
            </div>
        )

    }
    
}


