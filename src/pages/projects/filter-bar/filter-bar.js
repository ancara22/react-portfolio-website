import React, {Component} from "react";
import "./filter-bar.css";
import FilterBox from "./filter-box";




export default  class FilterBar extends Component {

    state = {
        classN: ""
    }

    dispayBox = () => {
        this.setState((prevState)=>({
            classN: prevState.classN == "" ? "display-box" : ""
                
        }))
    }

    render(){
        return (
            <div>
                <div className="filter-bar"
                    onClick={this.dispayBox}>
                    <div className="menuIcon"></div>
                </div>
                <FilterBox classN={this.state.classN}/>
            </div>
        )

    }
    
}


