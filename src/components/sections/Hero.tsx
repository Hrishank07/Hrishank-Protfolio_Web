'use client'

import { useEffect, useState } from 'react'
import AnimatedBackground from '../animations/AnimatedBackground'
import styles from './Hero.module.css'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'

const roles = ['Software Engineer', 'Cloud Architect', 'Problem Solver']

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || !prefersReducedMotion) {
      return
    }

    setDisplayText(roles[roleIndex])

    const interval = window.setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3500)

    return () => window.clearInterval(interval)
  }, [mounted, prefersReducedMotion, roleIndex])

  useEffect(() => {
    if (!mounted || prefersReducedMotion) return

    const currentRole = roles[roleIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex, mounted, prefersReducedMotion])

  return (
    <section className={styles.hero} id="home">
      <AnimatedBackground />
      <div className={styles.heroContent}>
        <p className={styles.greeting}>Hi, I'm</p>
        <h1 className={styles.heroTitle}>
          <span className={styles.name}>Hrishank Chhatbar</span>
        </h1>
        <p className={styles.heroTagline}>
          <span>{displayText || 'Software Engineer'}</span>
          <span className={styles.cursor}>|</span>
        </p>
        
        <div className={styles.heroInfo}>
          <div className={styles.infoCard}>
            <span className={styles.infoIcon}>🎓</span>
            <div className={styles.infoContent}>
              <span className={styles.infoLabel}>Education</span>
              <span className={styles.infoValue}>USC Graduate Student</span>
            </div>
          </div>
          <div className={styles.infoCard}>
            <span className={styles.infoIcon}>📊</span>
            <div className={styles.infoContent}>
              <span className={styles.infoLabel}>GPA</span>
              <span className={styles.infoValue}>3.9/4.0</span>
            </div>
          </div>
          <div className={styles.infoCard}>
            <span className={styles.infoIcon}>🚀</span>
            <div className={styles.infoContent}>
              <span className={styles.infoLabel}>Recent</span>
              <span className={styles.infoValue}>AWS SDE Intern</span>
            </div>
          </div>
        </div>
        
        <div className={styles.heroButtons}>
          <a href="#about" className={`${styles.btn} ${styles.btnPrimary}`}>
            <span>About Me</span>
          </a>
          <a href="#projects" className={`${styles.btn} ${styles.btnSecondary}`}>
            <span>View Projects</span>
          </a>
        </div>
      </div>
      
      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
        <span className={styles.scrollText}>Scroll</span>
      </div>
    </section>
  )
}
