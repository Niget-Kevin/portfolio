import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/logo';
import './Header.scss';

function Header() {

    window.addEventListener('scroll', () => {
        const nav = document.querySelector('header nav');
        const header = document.querySelector('header');
        const offset = header.offsetHeight; 
    
        if (window.scrollY >= offset) {
            nav.classList.add('fixed-nav'); 
        } else {
            nav.classList.remove('fixed-nav'); 
        }
    });

    return (
        <header className="main-nav">
            <div className="header-container">
                <Logo/>               
            </div>
            <span className="header-img-mobile"></span>
            <nav id="navbar">
                <ul>                   
                    <li>
                        <Link to="/" className="nav_bottom">
                            <span className="nav-text">Accueil</span>
                            <i className="fa-solid fa-house nav-icon" title="Accueil"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="/profil" className="nav_bottom">
                            <span className="nav-text">Profil</span>
                            <i className="fa-solid fa-circle-user nav-icon" title="Profil"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="/competences" className="nav_bottom">
                            <span className="nav-text">Compétences</span>
                            <i className="fa-solid fa-screwdriver-wrench nav-icon" title="Compétences"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="/realisations" className="nav_bottom">
                            <span className="nav-text">Réalisations</span>
                            <i className="fa-solid fa-code nav-icon" title="Réalisations"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="nav_bottom">
                            <span className="nav-text">Contact</span>
                            <i className="fa-solid fa-envelope nav-icon" title="Contact"></i>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
