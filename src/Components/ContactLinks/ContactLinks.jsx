import { Link } from 'react-router-dom';
import React from 'react';
import './ContactLinks.scss'

function ContactLinks({id,img,title}) {
    return (
       
        <Link to={`/${id}`}>
            <div className='coordinates'>
                <img src={img} alt={title} className='coordinates_link'/>
                {/* <p className='card__title'>{title}</p> */}          
            </div>
        </Link>
        
    );
}

export default ContactLinks;

