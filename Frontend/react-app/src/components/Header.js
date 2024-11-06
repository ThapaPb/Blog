import React from 'react';
import './Header.css';

function Header() {
    return (
        <header>
            <nav className="navbar">
                <div className="logo">
                    <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="Blog Logo" className="logo-img" />
                    <span>The Memorial Blog</span>
                </div>
            </nav>
        </header>
    );
}

export default Header;
