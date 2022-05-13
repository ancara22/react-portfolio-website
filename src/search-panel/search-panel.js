import React, {Component} from "react";

export default class SearchPanel extends Component {


    render() {
        return (
            <div>
                <input
                    placeholder="Search..."    
                ></input>
                <button>All</button>
                <button>Done</button>
                <button>Todo</button>
            </div>
        )
    }

}