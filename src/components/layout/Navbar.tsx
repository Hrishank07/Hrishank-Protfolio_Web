'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          Hrishank
        </Link>
        <ul className={styles.navLinks}>
          <li><Link href="#home" className={styles.navLink}>Home</Link></li>
          <li><Link href="#about" className={styles.navLink}>About</Link></li>
          <li><Link href="#projects" className={styles.navLink}>Projects</Link></li>
          <li><Link href="#contact" className={styles.navLink}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}