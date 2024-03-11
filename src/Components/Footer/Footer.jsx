import React from '../Contact/Contact';
import Contact from "../Contact/Contact";
import './Footer.scss';

function Footer () {
    return (
        <footer className="footer">
            <Contact/> 
            <p className="footer-text">© 2024 Tous droits réservés</p>
        </footer>
    )
}

export default Footer