'use client'

import { useEffect, useRef } from 'react'
import styles from './HeroGlobe.module.css'

export default function HeroGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    if (!context) return

    let width = 0
    let height = 0
    let rotation = 0
    let targetRotation = 0
    let driftVelocity = 0.002
    let frame = 0
    let reduceMotion = false

    const color = {
      primary: '#6366f1',
      accent: '#22d3ee',
      surface: '#0f172a',
    }

    const updateColors = () => {
      const computed = getComputedStyle(document.documentElement)
      color.primary = computed.getPropertyValue('--primary').trim() || color.primary
      color.accent = computed.getPropertyValue('--accent').trim() || color.accent
      color.surface = computed.getPropertyValue('--bg-primary').trim() || color.surface
    }

    updateColors()

    const mutationObserver = new MutationObserver(updateColors)
    mutationObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    reduceMotion = motionQuery.matches
    const handleMotionChange = (event: MediaQueryListEvent) => {
      reduceMotion = event.matches
    }
    if (typeof motionQuery.addEventListener === 'function') {
      motionQuery.addEventListener('change', handleMotionChange)
    } else {
      motionQuery.addListener(handleMotionChange)
    }

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      width = rect.width
      height = rect.height
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      context.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = () => {
      frame += 1
      if (reduceMotion) {
        rotation += (targetRotation - rotation) * 0.2
        driftVelocity = 0
      } else {
        rotation += (targetRotation - rotation) * 0.04 + driftVelocity
        driftVelocity *= 0.98
      }
      const limit = Math.PI * 0.9
      if (targetRotation > limit) targetRotation = limit
      if (targetRotation < -limit) targetRotation = -limit

      context.clearRect(0, 0, width, height)

      context.save()
      context.translate(width / 2, height / 2)

      const radius = Math.min(width, height) / 2 - 10
      const glowGradient = context.createRadialGradient(
        -radius * 0.25,
        -radius * 0.35,
        radius * 0.15,
        0,
        0,
        radius
      )
      glowGradient.addColorStop(0, `${color.primary}1A`)
      glowGradient.addColorStop(0.65, `${color.primary}33`)
      glowGradient.addColorStop(1, `${color.surface}00`)

      const fillGradient = context.createRadialGradient(
        -radius * 0.4,
        -radius * 0.45,
        radius * 0.1,
        0,
        0,
        radius
      )
      fillGradient.addColorStop(0, `${color.primary}CC`)
      fillGradient.addColorStop(0.5, `${color.primary}AA`)
      fillGradient.addColorStop(1, `${color.surface}DD`)

      context.fillStyle = fillGradient
      context.beginPath()
      context.arc(0, 0, radius, 0, Math.PI * 2)
      context.fill()

      context.fillStyle = glowGradient
      context.beginPath()
      context.arc(0, 0, radius, 0, Math.PI * 2)
      context.fill()

      context.globalAlpha = 0.4
      context.strokeStyle = '#FFFFFF'
      context.lineWidth = Math.max(1, radius * 0.012)

      for (let i = -3; i <= 3; i++) {
        const lat = (i / 6) * Math.PI
        const y = radius * Math.sin(lat)
        const rx = radius * Math.cos(lat)
        context.beginPath()
        context.ellipse(0, y, rx, rx * 0.18, 0, 0, Math.PI * 2)
        context.stroke()
      }

      context.globalAlpha = 0.35
      for (let i = 0; i < 6; i++) {
        const angle = rotation + (i * Math.PI * 2) / 6
        context.save()
        context.rotate(angle)
        context.beginPath()
        context.ellipse(0, 0, radius, radius * 0.2, 0, 0, Math.PI * 2)
        context.stroke()
        context.restore()
      }

      context.globalAlpha = 1
      const orbitAngle = rotation * 2 + Math.sin(frame * 0.01) * 0.1
      const orbitX = radius * Math.cos(orbitAngle)
      const orbitY = radius * 0.35 * Math.sin(orbitAngle)
      const depth = (Math.sin(orbitAngle) + 1) / 2
      const markerSize = 6 + depth * 5

      context.fillStyle = `${color.accent}F0`
      context.beginPath()
      context.arc(orbitX * 0.85, orbitY * 0.85, markerSize * 0.7, 0, Math.PI * 2)
      context.fill()

      context.fillStyle = `${color.accent}`
      context.beginPath()
      context.arc(orbitX, orbitY, markerSize, 0, Math.PI * 2)
      context.fill()

      context.beginPath()
      context.moveTo(orbitX * 0.5, orbitY * 0.5)
      context.lineTo(orbitX, orbitY)
      context.strokeStyle = `${color.accent}80`
      context.lineWidth = 2
      context.stroke()

      context.restore()

      animationRef.current = requestAnimationFrame(draw)
    }

    resize()
    draw()

    let resizeObserver: ResizeObserver | null = null
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(resize)
      resizeObserver.observe(canvas)
    }

    const handlePointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      const relativeX = (event.clientX - rect.left) / rect.width - 0.5
      targetRotation = relativeX * Math.PI * 0.8
      driftVelocity += relativeX * 0.0006
    }

    const handlePointerLeave = () => {
      targetRotation = 0
    }

    canvas.addEventListener('pointermove', handlePointerMove)
    canvas.addEventListener('pointerdown', handlePointerMove)
    canvas.addEventListener('pointerleave', handlePointerLeave)

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      resizeObserver?.disconnect()
      canvas.removeEventListener('pointermove', handlePointerMove)
      canvas.removeEventListener('pointerdown', handlePointerMove)
      canvas.removeEventListener('pointerleave', handlePointerLeave)
      mutationObserver.disconnect()
      if (typeof motionQuery.removeEventListener === 'function') {
        motionQuery.removeEventListener('change', handleMotionChange)
      } else {
        motionQuery.removeListener(handleMotionChange)
      }
    }
  }, [])

  return (
    <div className={styles.globeWrapper}>
      <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
      <div className={styles.globeOverlay} aria-hidden="true" />
      <span className={styles.statusTag}>
        <span className={styles.statusDot} aria-hidden="true" />
        Live canvas
      </span>
    </div>
  )
}
