import React from 'react';


import './Contact.scss'

function Contact() {
    return (
        <section id="contact">
            <h2 className="contact-title">Me contacter</h2>
            <div className="contact-me">                                
            <a href="mailto:kevin.niget@gmail.com" className="fa-solid fa-envelope"> Mail</a>                
                
            </div>
        </section>
    );
}

export default Contact;
