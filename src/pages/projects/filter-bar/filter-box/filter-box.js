import React, {useState, useEffect} from "react";
import "./filter-box.css";




const FilterBox = (props) => {
    const [show, setShow] = useState({})
    

    useEffect(()=> {
        if(!props.showBox) {
            if(props.classN == "display-box"){
                props.hideBox()
            } 
            setShow({ display: "none"})
        } else {
            setShow({})
        }
    }, [props.showBox])
    


    return (
        <div 
        className={`filter-box ${props.classN}`}
        style={show}
        >
        </div>
    )
    
}


export default FilterBox;