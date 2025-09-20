'use client'

import { useEffect, useState } from 'react'
import styles from './ThemeToggle.module.css'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null)

  useEffect(() => {
    // Only run on client
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light')
    setTheme(initialTheme)
    document.documentElement.setAttribute('data-theme', initialTheme)
  }, [])

  const toggleTheme = () => {
    if (!theme) return
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  // Return skeleton during SSR
  if (!theme) {
    return <div className={styles.skeleton} />
  }

  return (
    <button
      className={styles.themeToggle}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <div className={styles.toggleTrack}>
        <span className={styles.sunIcon}>☀️</span>
        <span className={styles.moonIcon}>🌙</span>
        <div className={`${styles.toggleThumb} ${theme === 'dark' ? styles.dark : ''}`} />
      </div>
    </button>
  )
}
