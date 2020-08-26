import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <nav className="header__menu">
                <a href="http://">Home</a>
                <a href="http://">About Us</a>
                <a href="http://">Contact Us</a>
            </nav>
            <div>
                Social Media Icons
            </div>
        </header>
    )
}

export default Header
