'use client'

import { useEffect, useState } from 'react'
import AnimatedBackground from '../animations/AnimatedBackground'
import ParticleField from '../animations/ParticleField'
import styles from './Hero.module.css'

const roles = ['Software Engineer', 'Cloud Architect', 'Problem Solver', 'Full Stack Developer']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
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
  }, [displayText, isDeleting, roleIndex])

  return (
    <section className={styles.hero} id="home">
      <AnimatedBackground />
      <ParticleField />
      <div className={styles.heroContent}>
        <p className={styles.greeting}>Hi, I'm</p>
        <h1 className={styles.heroTitle}>
          <span className={styles.name}>Hrishank Chhatbar</span>
        </h1>
        <p className={styles.heroTagline}>
          <span>{displayText}</span>
          <span className={styles.cursor}>|</span>
        </p>
        <p className={styles.heroDescription}>
          I build scalable infrastructure and craft elegant solutions to complex problems. 
          Currently pursuing my Master's at USC while exploring the intersection of cloud computing and AI.
        </p>
        <div className={styles.heroButtons}>
          <a href="#projects" className={`${styles.btn} ${styles.btnPrimary}`}>
            <span>View My Work</span>
            <span className={styles.btnIcon}>→</span>
          </a>
          <a href="#contact" className={`${styles.btn} ${styles.btnSecondary}`}>
            <span>Get in Touch</span>
            <span className={styles.btnIcon}>✉</span>
          </a>
        </div>
        <div className={styles.heroStats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>35%</span>
            <span className={styles.statLabel}>Reduced Latency</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>1M+</span>
            <span className={styles.statLabel}>Users Served</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>3.9</span>
            <span className={styles.statLabel}>GPA</span>
          </div>
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
