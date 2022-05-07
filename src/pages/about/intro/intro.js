import React from "react";
import "./intro.css";



const IntroBox = ({showMyCV, classN}) => {

    return (
        <div>
                <div className={"header_body " + classN}> 
                    <div className="info_box">
                        <div id='head1' className='header'></div>
                        <div id='head2' className='header'>
                            <span className="name">Dionis Barcari</span>
                            <span className="profesion">Software Developer</span>
                            <p>2 Year Student,  BSc Computer Science <br/> Middlesex University London  </p>
                        </div>
                        <div id='head3' className='header'></div>
                    </div>  
                    <button 
                        className="button"
                        onClick={showMyCV}>My CV</button>
                        
                    <div className='light x1'></div>
                    <div className='light x2'></div>
                    <div className='light x3'></div>
                    <div className='light x4'></div>
                    <div className='light x5'></div>
                    <div className='light x6'></div>
                    <div className='light x7'></div>
                    <div className='light x8'></div>
                    <div className='light x9'></div>
                </div>
            </div> 
    )
}


export default IntroBox;