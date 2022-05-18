import React, {Component} from "react";
import "./item-detale.css";
import { connect } from "react-redux";



 class ItemDetale extends Component {

   
    closeShowBox = () => {
        this.props.dispatch({type:"CLOSE_ITEM_BOX"})
    }

    componentDidMount() {    
          document.body.style.overflow = 'hidden'; 
    }

    componentWillUnmount() {
            document.body.style.overflow = 'scroll';
    }

    render() {
        return (
            <div className="item-box" >
                <div className="item-box-descr">
                    <button 
                        onClick={this.closeShowBox}
                        className="close-btn">X</button>
                    <div>
                        <h3>title</h3>
                        <div>
                            <img src="" alt="img"/>
                        </div>
                        <p>description</p>
                    </div>  

                </div>
            </div>
        )
    }
        
    

}


const mapStateToProps = (state) => {
    return ({ store: state})
}

export default connect(mapStateToProps)(ItemDetale);