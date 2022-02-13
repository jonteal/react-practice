import "./Navbar.css";
import React, { useState } from 'react';

// Navbar
const Navbar = ({ currentPage, handlePageChange }) => {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    }

    return (
        <nav className="navbar-items">

            <h1 className="name">Eric Jackson</h1>

            {/* Displays the hamburger menu icon when not clicked (in mobile), and the X when it has been clicked */}
            <div className="menu-icon" onClick={handleClick}>
                <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
                <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <a
                            href="#home"
                            onClick={() => handlePageChange('Home')}
                            className={currentPage === 'Home' ? 'nav-links nav-link active currentLink' : 'nav-links nav-link'}
                        >
                        Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#about"
                            onClick={() => handlePageChange('About')}
                            className={currentPage === 'About' ? 'nav-links nav-link active currentLink' : 'nav-links nav-link'}
                        >
                        About Me
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#photography"
                            onClick={() => handlePageChange('Photography')}
                            className={currentPage === 'Photography' ? 'nav-links nav-link active currentLink' : 'nav-links nav-link'}
                        >
                        Photography
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href= { '#visual-design' }
                            onClick={() => handlePageChange('Visual Design')}
                            className={currentPage === 'Visual Design' ? 'nav-links nav-link active currentLink' : 'nav-links nav-link'}
                        >
                        Visual Design
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#contact"
                            onClick={() => handlePageChange('Contact')}
                            className={currentPage === 'Contact' ? 'nav-links nav-link active currentLink' : 'nav-links nav-link'}
                        >
                        Contact Me
                        </a>
                    </li>
                </ul>
        </nav>
    )
}

export default Navbar;