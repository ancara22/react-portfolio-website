import "./about.css";
import "./header-box.css";

const AboutPage = () => {

    return (
        <div>
            <div className="header_body"> 
                <div className="info_box">
                    <div id='head1' class='header'></div>
                    <div id='head2' class='header'>
                        <span className="name">Dionis Barcari</span>
                        <span className="profesion">Software Developer</span>
                        <p>2 Year Student,  BSc Computer Science <br/> Middlesex University London  </p>
                    </div>
                    <div id='head3' class='header'></div>


                </div>
                

                <button className="button">My CV</button>
                <div class='light x1'></div>
                <div class='light x2'></div>
                <div class='light x3'></div>
                <div class='light x4'></div>
                <div class='light x5'></div>
                <div class='light x6'></div>
                <div class='light x7'></div>
                <div class='light x8'></div>
                <div class='light x9'></div>
            </div>
        </div>
        

    )

}

export default AboutPage;