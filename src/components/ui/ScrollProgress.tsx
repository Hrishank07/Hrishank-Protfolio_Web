'use client'

import { useEffect, useState } from 'react'
import styles from './ScrollProgress.module.css'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPosition = window.scrollY
      const progressPercentage = scrollHeight > 0 ? (scrollPosition / scrollHeight) * 100 : 0
      setProgress(progressPercentage)
    }

    window.addEventListener('scroll', updateProgress)
    updateProgress() // Initial call
    
    return () => window.removeEventListener('scroll', updateProgress)
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