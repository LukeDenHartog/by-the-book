import React from 'react';
import './Footer.css';
import FooterCardImage from './Footer-Img.js';

export default function Footer() {
    return  (
        <div className="footer-container">
            <footer className="footer">
                <section id="footer-links-section">
                        <a href="#About" className="nav-footer-link"><p>About</p></a>
                        <a href="#Contact" className="nav-footer-link"><p>Contact Me</p></a>
                        <a href="#Map" className="nav-footer-link"><p>Site Map</p></a>
                </section>
                <FooterCardImage/>
                <p> © 2023 Luke A DenHartog. All Rights Reserved.</p>
                <p>Have a gambling addiction? <a href="#Home">Get help here!</a></p>
                <p>All trademarks referenced herein are the properties of their respective owners.</p>
            </footer>
        </div>
    )
}