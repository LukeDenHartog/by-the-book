import React from 'react';
import './Footer.css';
import FooterCardImage from './Footer-Img.js';
import linkedinIcon from '../../assets/images/footerImages/icons8-linkedin-50.png';
import githubIcon from '../../assets/images/footerImages/icons8-github-64.png';


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
                <a href="https://www.linkedin.com/in/luke-denhartog-113123261/"><img src={linkedinIcon} alt="LinkedIn Icon" className="footer-icon" /></a>
                <a href="https://github.com/LukeDenHartog"><img src={githubIcon} alt="GitHub Icon" className="footer-icon" /></a>
                <p> © 2023 Luke A DenHartog. All Rights Reserved.</p>
                <p>Have a gambling addiction? <a href="#Home">Get help here!</a></p>
                <p>All trademarks referenced herein are the properties of their respective owners.</p>
            </footer>
        </div>
    )
}