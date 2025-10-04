'use client'

import { useRef } from 'react'
import styles from './ProjectCard.module.css'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'

interface Project {
  id: number
  icon: string
  title: string
  description: string
}

export default function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const animationFrame = useRef<number | null>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return

    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const rotateX = ((y / rect.height) - 0.5) * -10
    const rotateY = ((x / rect.width) - 0.5) * 10

    if (animationFrame.current) {
      window.cancelAnimationFrame(animationFrame.current)
    }

    animationFrame.current = window.requestAnimationFrame(() => {
      card.style.setProperty('--tilt-x', `${rotateX.toFixed(2)}deg`)
      card.style.setProperty('--tilt-y', `${rotateY.toFixed(2)}deg`)
      card.style.setProperty('--glow-x', `${(x / rect.width) * 100}%`)
      card.style.setProperty('--glow-y', `${(y / rect.height) * 100}%`)
    })
  }

  const resetTilt = () => {
    const card = cardRef.current
    if (!card) return

    if (animationFrame.current) {
      window.cancelAnimationFrame(animationFrame.current)
    }

    animationFrame.current = window.requestAnimationFrame(() => {
      card.style.setProperty('--tilt-x', '0deg')
      card.style.setProperty('--tilt-y', '0deg')
      card.style.setProperty('--glow-x', '50%')
      card.style.setProperty('--glow-y', '50%')
    })
  }

  return (
    <div
      ref={cardRef}
      className={styles.projectCard}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      onPointerCancel={resetTilt}
      onPointerUp={resetTilt}
      onBlur={resetTilt}
      tabIndex={0}
      role="group"
      aria-label={`${project.title}: ${project.description}`}
    >
      <div className={styles.projectIcon}>{project.icon}</div>
      <h3 className={styles.projectTitle}>{project.title}</h3>
      <p className={styles.projectDescription}>{project.description}</p>
    </div>
  )
}
