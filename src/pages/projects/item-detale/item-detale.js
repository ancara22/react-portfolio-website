import React, {Component} from "react";
import "./item-detale.css";
import { connect } from "react-redux";



 class ItemDetale extends Component {

    state = {
        element: undefined
    }

   
    closeShowBox = () => {
        this.props.dispatch({type:"CLOSE_ITEM_BOX"})
    }

    UNSAFE_componentWillMount() {    
        const dataBase = this.props.store.dataBase

        const element = dataBase.find((element, _index, _array)=>{
            if(element.id == this.props.store.id) {
                return element
            }
        })

        this.setState({element})
    }


    componentDidMount() {    
        document.body.style.overflow = 'hidden'; 
    }

    componentWillUnmount() {
        document.body.style.overflow = 'scroll';
    }

    render() {
        

        const {title, description, img} = this.state.element


        return (
            <div className="item-box" >
                <div className="item-box-descr">
                    <button 
                        onClick={this.closeShowBox}
                        className="close-btn">X</button>
                    <div>
                        <h3>{title}</h3>
                        <div className="img">
                            <img src={require(`../IMG/${img}`)} alt="img"/>
                        </div>
                        <div className="line"></div>
                        <p>{description}</p>
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