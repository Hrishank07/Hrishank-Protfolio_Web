'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './ScrollProgress.module.css'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  const [mounted, setMounted] = useState(false)
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    setMounted(true)

    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPosition = window.scrollY
      const progressPercentage = scrollHeight > 0 ? (scrollPosition / scrollHeight) * 100 : 0
      setProgress((previous) => {
        if (Math.abs(previous - progressPercentage) < 0.5) {
          return previous
        }
        return progressPercentage
      })
    }

    const handleScroll = () => {
      if (frameRef.current !== null) {
        return
      }

      frameRef.current = window.requestAnimationFrame(() => {
        updateProgress()
        frameRef.current = null
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    updateProgress()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current)
      }
    }
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className={styles.progressContainer}>
      <div 
        className={styles.progressBar} 
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}