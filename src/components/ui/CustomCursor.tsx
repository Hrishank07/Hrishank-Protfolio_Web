'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './CustomCursor.module.css'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    setMounted(true)
    
    // Check if mobile or touch device
    const checkMobile = () => {
      const mobile = window.innerWidth < 768 || 
                    'ontouchstart' in window ||
                    navigator.maxTouchPoints > 0
      setIsMobile(mobile)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    if (!isMobile) {
      let animationFrameId: number
      
      const updateCursor = (e: MouseEvent) => {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId)
        }
        
        animationFrameId = requestAnimationFrame(() => {
          if (cursorRef.current) {
            cursorRef.current.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`
          }
        })
      }
      
      document.addEventListener('mousemove', updateCursor, { passive: true })
      
      return () => {
        document.removeEventListener('mousemove', updateCursor)
        window.removeEventListener('resize', checkMobile)
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId)
        }
      }
    }
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [isMobile])
  
  if (!mounted || isMobile) {
    return null
  }
  
  return (
    <div 
      ref={cursorRef}
      className={styles.cursor}
      style={{ position: 'fixed', pointerEvents: 'none', zIndex: 10000 }}
    />
  )
}
