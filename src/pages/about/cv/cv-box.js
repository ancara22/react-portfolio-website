import React from "react";
import "./cv-box.css";
import Footer from "../../../footer";



const MyCv = ({classN}) => {

    return (
        <div>
             <div className={"my_cv " + classN}>
                <span>My CV</span>
                
                
            </div>
        </div>
       
    )
}


export default MyCv;