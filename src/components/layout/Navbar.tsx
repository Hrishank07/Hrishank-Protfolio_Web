'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo} onClick={closeMobileMenu}>
          Hrishank
        </Link>
        
        {/* Desktop Navigation */}
        <ul className={styles.navLinks}>
          <li><Link href="#home" className={styles.navLink}>Home</Link></li>
          <li><Link href="#about" className={styles.navLink}>About</Link></li>
          <li><Link href="#projects" className={styles.navLink}>Projects</Link></li>
          <li><Link href="#contact" className={styles.navLink}>Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className={styles.mobileMenuButton}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className={`${styles.hamburger} ${mobileMenuOpen ? styles.hamburgerOpen : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <ul className={styles.mobileNavLinks}>
          <li><Link href="#home" className={styles.mobileNavLink} onClick={closeMobileMenu}>Home</Link></li>
          <li><Link href="#about" className={styles.mobileNavLink} onClick={closeMobileMenu}>About</Link></li>
          <li><Link href="#projects" className={styles.mobileNavLink} onClick={closeMobileMenu}>Projects</Link></li>
          <li><Link href="#contact" className={styles.mobileNavLink} onClick={closeMobileMenu}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}