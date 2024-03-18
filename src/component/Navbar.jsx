import { useState } from "react";
import React from "react";
import "./navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false)

    return (

        <div className="navbar">
            <div className="logo"></div>
            <div className="menu" onClick={() => {
                setMenuOpen(!menuOpen);
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="list-icon">

                <ul className={menuOpen ? "open" : ""}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Aboutus">About</Link></li>
                    <li><Link to="/Construction">Construction</Link></li>
                    <li><Link to="/Renot">Renovation</Link></li>
                    <li><Link to="/Interior">Interior design</Link></li>
                    <li><Link to="/Painting">Painting</Link></li>
                    <li><Link to="#">Building material</Link></li>
                    <li><Link to="#">Material financing</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </div>

        </div>

    );
}

export default Navbar;
