import React from 'react';

import ContactLinks from '../ContactLinks/ContactLinks';
import data from '../../Data/contact.json'
import './Contact.scss'

function Contact() {
    return (
        <section id="contact">
            <h2 className="contact-title">Me contacter</h2>
            <div className="contact-me">                                
                    <a href="kevin.niget@gmail.com" className="fa-solid fa-envelope "> kevin.niget@gmail.com</a>                
                <div>        
                    {data.map(data => {
                        return (
                        <ContactLinks
                            key={data.id} 
                            id={data.id} 
                            img={data.title} 
                            title={data.title}                            
                        />
                        )
                    })}
                </div> 
            </div>
        </section>
    );
}

export default Contact;
