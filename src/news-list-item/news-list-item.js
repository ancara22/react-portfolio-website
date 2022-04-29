import React, { Component } from "react";


export default class NewsListItem extends Component {
    render() {
        
        const { label } = this.props;

        return (
            <span>{label}</span>
        )
    }

};