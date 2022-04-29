import React, { Component } from "react";
import NewsListItem from "../news-list-item"


export default class NewsList extends Component {

    render() {
        const listItems = this.props.todo.map((item)=> {
            const {id} = item;
            return (
                <li key={id.toString()}><NewsListItem {...item} /></li>
            )
        });

        return (
           <ul>
               { listItems }
           </ul>
        )
    }

};