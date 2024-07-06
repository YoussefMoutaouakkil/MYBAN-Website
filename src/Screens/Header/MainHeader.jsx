import React from 'react'
import './MainHeader.css'
import logo from '../../../assets/LogoMyBan.png';
import styles from './WeAreBlending.module.css';

export default function MainHeader() {
    return (
        <header className="main-header">
            <nav className="navbar">
                <div className="navbar-logo">
                    <img src={logo} alt="MYBAN Logo" className="logo-image" />
                </div>
                <ul className="navbar-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#how-it-works">How It Works</a></li>
                    <li><a href="#services">Services</a></li>
                </ul>
                <div className="navbar-buttons">
                    <button className="login-button">Log In</button>
                    <button className="signup-button">Sign Up</button>
                </div>
            </nav>
            <div className="header-content">
                <div className={styles.weAreBlendingContainer}>
                    <span>
                        <span>We</span>
                            <i className={styles.i}>{` `}</i>
                    </span>
                    <span className={styles.areBlendingPast}>are Blending Past vibes with</span>
                </div>
                <div className={styles.futureTrends}>Future trends.</div>

                <p className="header-subtitle">
                    Create a legend with your marketing strategy
                </p>
                <p className="header-description">
                    Our forte lies in crafting bespoke strategies to boost your brands presence and increase your reach
                    in the metaverse.
                </p>
                <button className="get-started-button">Get Started</button>
            </div>
        </header>
    );
}