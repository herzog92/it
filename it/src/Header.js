import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './Logo1.png'; 

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        setDropdownOpen(false); // Close dropdown when menu is toggled
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <header className="app-header">
            <div className="logo">
                <img src={logo} alt="All-Activity-group Logo2" className="logo-image" />
                All-Activity-group
            </div>
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>
            <nav className={menuOpen ? "active" : ""}>
                <ul>
                    <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                    <li>
                        <span onClick={toggleDropdown}>Leistungen</span>
                        <ul className={`dropdown ${dropdownOpen ? "show" : ""}`}>
                            <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
                            <li><Link to="/management" onClick={toggleMenu}>Management</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/contact" onClick={toggleMenu}>Kontakt</Link></li>
                    <li><Link to="/Portfolio" onClick={toggleMenu}>Portfolio</Link></li>
                   
                   
                    
                </ul>
            </nav>
        </header>
    );
}

export default Header;
