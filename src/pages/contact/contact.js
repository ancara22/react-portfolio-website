import React  from "react";
import "./contact.css";
/*
import emailjs from "@emailjs/browser";
import apiKey from "./emailkey.js"; */
import Footer from "../../footer"

const ContactPage = () => {

    return (
        <div className="back">
            <span className="title">Contact Me</span>
            <div className="line2"></div>
            <form id="contact_form">
                <label htmlFor="email">Email:</label>
                <input id="email" type="email" placeholder="  Email" required></input>
                <textarea id="message" rows="10" cols="10" type="text" placeholder="  Message..."></textarea>
                <button className="btn_submit" type="submit">Submit</button>
            </form>
            <Footer/>
     
        </div>
    )

}

/*
const handleSubmit = (e) => {
    e.preventDefault(); 

    emailjs.sendForm(`mail.ru`, apiKey.TEMPLATE_ID, e.target, apiKey.USER_ID)
    .then((result) => {
        alert("Message Sent, We will get back to you shortly", result.text);
    }, (error) => {
        alert("An error occurred, Please try again", error.text);
    });
};
*/

export default ContactPage;