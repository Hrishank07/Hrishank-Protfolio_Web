'use client'

import { useEffect, useState } from 'react'
import styles from './ThemeToggle.module.css'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null)

  const applyTheme = (value: 'light' | 'dark') => {
    document.documentElement.setAttribute('data-theme', value)
    localStorage.setItem('theme', value)
  }

  useEffect(() => {
    // Only run on client
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    const initialTheme = savedTheme || (mediaQuery.matches ? 'dark' : 'light')

    applyTheme(initialTheme)
    setTheme(initialTheme)

    const handleChange = (event: MediaQueryListEvent) => {
      if (!savedTheme) {
        const nextTheme = event.matches ? 'dark' : 'light'
        applyTheme(nextTheme)
        setTheme(nextTheme)
      }
    }

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', handleChange)
    } else {
      mediaQuery.addListener(handleChange)
    }

    return () => {
      if (typeof mediaQuery.removeEventListener === 'function') {
        mediaQuery.removeEventListener('change', handleChange)
      } else {
        mediaQuery.removeListener(handleChange)
      }
    }
  }, [])

  const toggleTheme = () => {
    if (!theme) return
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    applyTheme(newTheme)
    setTheme(newTheme)
  }

  // Return skeleton during SSR
  if (!theme) {
    return <div className={styles.skeleton} />
  }

  return (
    <button
      className={styles.themeToggle}
      onClick={toggleTheme}
      type="button"
      aria-label="Toggle theme"
      aria-pressed={theme === 'dark'}
    >
      <div className={`${styles.toggleTrack} ${theme === 'dark' ? styles.trackDark : styles.trackLight}`}>
        <span className={`${styles.sunIcon} ${theme === 'light' ? styles.activeIcon : ''}`}>☀️</span>
        <span className={`${styles.moonIcon} ${theme === 'dark' ? styles.activeIcon : ''}`}>🌙</span>
        <div className={`${styles.toggleThumb} ${theme === 'dark' ? styles.dark : ''}`} />
      </div>
    </button>
  )
}
