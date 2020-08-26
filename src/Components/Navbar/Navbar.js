import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';


function Navbar() {
    const [search, setSearch] = useState(false);

    const submitSearch = (e) => {
        e.preventDefault();
        alert('Searched');
    }

    const openSearch = () => {
        setSearch(true);
    }

    return (
        <div className="navbar">
            <ul className="navbar__menu">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about-us">About Us</NavLink></li>
                <li><NavLink to="/post">Posts</NavLink></li>
                <li><NavLink to="/contact-us">Contact Us</NavLink></li>
            </ul>
            <div className="navbar__search">
                <form onSubmit={submitSearch}>
                    <input type="text" className={search ? 'navbar__searchInput active' : 'navbar__searchInput'} placeholder="Search" />
                    <img onClick={openSearch} className="navbar__searchIcon" src={require('../../Assets/Icons/search.png')} alt="Search"/>
                </form>                
            </div>
        </div>
    )
}

export default Navbar
