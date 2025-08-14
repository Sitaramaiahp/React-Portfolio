
import React, { useState } from 'react'
import styles from './Navbar.module.css'
import menu from "/assets/nav/menuIcon.png"
import close from "/assets/nav/closeIcon.png"

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className={styles.navbar}>
            <a href="/" className={styles.title}>Portfolio</a>
            <div className={styles.menu}>
                <img src={menuOpen?close:menu} 
                alt="menu-icon" 
                onClick={() => setMenuOpen(!menuOpen)}
                className={styles.menuBtn} />
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#resume">Resume</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar