import React from 'react';
import { FaEnvelope} from "react-icons/fa";


import './Contact.scss'

function Contact() {
    return (
        <section id="contact">
            <h2 className="contact-title">Me contacter</h2>
            <div className="contact-me">                                
            <a href="mailto:kevin.niget@gmail.com" className="email-link">
                    <FaEnvelope className="envelope close" />                    
                    Mail
                </a>
            </div>
        </section>
    );
}

export default Contact;
