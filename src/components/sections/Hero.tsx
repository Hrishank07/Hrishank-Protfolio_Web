'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import AnimatedBackground from '../animations/AnimatedBackground'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'
import styles from './Hero.module.css'

const roles = ['Software Engineer', 'Cloud Architect', 'Problem Solver']

const heroHighlights = [
  { id: 'recent', label: 'Recent', value: 'AWS SDE Intern' },
  { id: 'location', label: 'Location', value: 'Los Angeles, CA' },
  { id: 'focus', label: 'Focus', value: 'Cloud Platforms & AI Systems' },
]

const heroStats = [
  { id: 'impact', value: '35%', label: 'Lambda performance uplift' },
  { id: 'scale', value: 'Millions', label: 'Of requests supported' },
  { id: 'projects', value: '8+', label: 'Projects engineered end-to-end' },
]

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
      <div className={styles.heroInner}>
        <div className={styles.contentColumn}>
          <p className={styles.greeting}>Hi, I'm</p>
          <h1 className={styles.heroTitle}>
            <span className={styles.name}>Hrishank Chhatbar</span>
          </h1>
          <p className={styles.heroTagline} aria-live="polite">
            <span className={styles.roleText}>{displayText || 'Software Engineer'}</span>
            <span aria-hidden="true" className={styles.cursor}>
              |
            </span>
          </p>
          <p className={styles.heroDescription}>
            I design resilient cloud platforms and ship production-grade experiences that
            bridge engineering rigor with user-first thinking.
          </p>

          <div className={styles.heroButtons}>
            <a href="#projects" className={`${styles.btn} ${styles.btnPrimary}`}>
              <span>Explore Projects</span>
            </a>
            <a
              href="/assets/HrishankC_Resume.pdf"
              className={`${styles.btn} ${styles.btnSecondary}`}
              target="_blank"
              rel="noreferrer"
            >
              <span>Download Résumé</span>
            </a>
          </div>

          <div className={styles.heroHighlights}>
            {heroHighlights.map((highlight) => (
              <div key={highlight.id} className={styles.highlightCard}>
                <span className={styles.highlightLabel}>{highlight.label}</span>
                <span className={styles.highlightValue}>{highlight.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.visualColumn}>
          <div className={styles.profileCard}>
            <span className={styles.profileGlow} aria-hidden="true" />
            <Image
              src="/assets/profile.jpg"
              alt="Hrishank Chhatbar smiling with a blurred city backdrop"
              fill
              sizes="(max-width: 768px) 70vw, (max-width: 1200px) 40vw, 420px"
              className={styles.profileImage}
              priority
            />
            <div className={styles.profileBadge}>
              <span className={styles.badgeDot} aria-hidden="true" />
              <span>USC Graduate Student</span>
            </div>
          </div>

          <div className={styles.statGrid}>
            {heroStats.map((stat) => (
              <div key={stat.id} className={styles.statCard}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
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
