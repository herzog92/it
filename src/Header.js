import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './logo1.svg'; 

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
                AT Solution UG
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
                            <li><Link to="/Pentesting" onClick={toggleMenu}>Pentesting</Link></li>
                            <li><Link to="/Cloudd" onClick={toggleMenu}>Cloud Computing & Datenschutz</Link></li>
                            <li><Link to="/Netzsich" onClick={toggleMenu}>IT-Netzwerk&Sicherheit</Link></li>
                            <li><Link to="/Management" onClick={toggleMenu}>Management</Link></li>
                            <li><Link to="/Entwicklung" onClick={toggleMenu}>Web-Entwicklung</Link></li>
                            <li><Link to="/Security" onClick={toggleMenu}>IT-Security</Link></li>
                            <li><Link to="/Test" onClick={toggleMenu}>Test</Link></li>
                            <li><Link to="/Testt" onClick={toggleMenu}>Testt</Link></li>
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
