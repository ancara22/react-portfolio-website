import React, { Component } from "react";
import "./project-list-item.css"
import { AiFillGithub } from 'react-icons/ai';
import { SiNetlify } from 'react-icons/si';
import uuid from "react-uuid";
import {connect} from "react-redux";


class ProjectListItem extends Component {
    dotColor(item) {
        if(item ==="React") return {backgroundColor: "lightblue"}
        else if(item ==="JavaScript") return {backgroundColor: "yellow"}
        else return {backgroundColor: "rgb(255, 180, 30)"}

    }

    openShowBox = () => {
        this.props.dispatch(
            {
                type: 'SHOW_ITEM_BOX',
                payload: this.props.id
            })
    }


    render() {
        
        const { title, description, githublink, netlifylink, 
                img, languages} = this.props;
                
        const lang = languages.map((item)=>{
            return ( 
                <div className="lang" key={uuid()}>
                    <div style={ this.dotColor(item)} className="dot"></div>
                    <span >{item}</span>
                </div>
                 )
        })

        return (
            <div className="list_item" >
                <h3>{title}</h3>
                <div className="image" onClick={this.openShowBox}>
                    <img src={require(`../IMG/${img}`)} alt="img"/>
                </div>
                <p>{description}</p>
                
                <div className="links">
                    <div className="lang-box">
                        {lang}
                    </div>
                    <div className="icons-box">   
                        <a href={netlifylink}><SiNetlify className="icons"/></a>
                        <a href={githublink}><AiFillGithub className="icons"/></a>
                    </div>
                </div>
            </div>   
        )
    }
};

const mapStateToProps = (state) => {
    return ({ store: state })
}

export default connect(mapStateToProps)(ProjectListItem)