'use client'

import { useState, useEffect, useMemo, useId, useCallback, FocusEvent, KeyboardEvent } from 'react'
import ProjectCard from '../ui/ProjectCard'
import { projects } from '../../data/projects'
import styles from './Projects.module.css'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [projectsPerView, setProjectsPerView] = useState(3)
  const [isPaused, setIsPaused] = useState(false)
  const sectionRef = useRevealOnScroll<HTMLElement>()
  const prefersReducedMotion = usePrefersReducedMotion()
  const sliderId = useId()
  const headingId = `${sliderId}-heading`
  const statusId = `${sliderId}-status`

  const updateProjectsPerView = useCallback(() => {
    if (window.innerWidth <= 768) {
      setProjectsPerView(1)
    } else if (window.innerWidth <= 1024) {
      setProjectsPerView(2)
    } else {
      setProjectsPerView(3)
    }
  }, [])

  useEffect(() => {
    updateProjectsPerView()
    window.addEventListener('resize', updateProjectsPerView)
    return () => window.removeEventListener('resize', updateProjectsPerView)
  }, [updateProjectsPerView])

  const maxIndex = useMemo(
    () => Math.max(0, Math.ceil(projects.length / projectsPerView) - 1),
    [projectsPerView]
  )

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex))
  }, [maxIndex])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex))
  }

  useEffect(() => {
    if (prefersReducedMotion || maxIndex === 0 || isPaused) {
      return
    }

    const autoplay = window.setInterval(() => {
      setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0))
    }, 7000)

    return () => window.clearInterval(autoplay)
  }, [prefersReducedMotion, maxIndex, isPaused])

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      nextSlide()
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      prevSlide()
    }
  }

  const handleFocus = (event: FocusEvent<HTMLDivElement>) => {
    setIsPaused(true)
  }

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node)) {
      setIsPaused(false)
    }
  }

  const startIndex = currentIndex * projectsPerView
  const endIndex = Math.min(startIndex + projectsPerView, projects.length)
  const sliderStatus = `Showing projects ${startIndex + 1}-${endIndex} of ${projects.length}`

  return (
    <section
      ref={sectionRef}
      className={styles.projects}
      data-reveal="pending"
      id="projects"
    >
      <div className={styles.projectsContainer}>
        <div className={styles.sectionHeader}>
          <div>
            <h2 className={styles.sectionTitle} id={headingId}>Featured Projects</h2>
            <p className={styles.sectionSubtitle}>
              Selected builds that pair scalable systems with purposeful experiences.
            </p>
          </div>
          <div className={styles.sectionControls}>
            <button
              className={styles.navPill}
              onClick={prevSlide}
              aria-label="Previous projects"
              onFocus={() => setIsPaused(true)}
              onBlur={(event) => {
                if (!(event.currentTarget.parentElement?.contains(event.relatedTarget as Node))) {
                  setIsPaused(false)
                }
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              className={styles.navPill}
              onClick={nextSlide}
              aria-label="Next projects"
              onFocus={() => setIsPaused(true)}
              onBlur={(event) => {
                if (!(event.currentTarget.parentElement?.contains(event.relatedTarget as Node))) {
                  setIsPaused(false)
                }
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <p className={styles.carouselStatus} id={statusId} aria-live="polite">
          {sliderStatus}
        </p>

        <div
          className={styles.carouselWrapper}
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-labelledby={headingId}
          aria-describedby={statusId}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div
            className={styles.projectsGrid}
            style={{
              transform: `translate3d(-${currentIndex * 100}%, 0, 0)`,
              '--cards-per-view': `${projectsPerView}`,
            }}
          >
            {projects.map((project) => (
              <div key={project.id} className={styles.projectSlide}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.carouselProgress} aria-hidden="true">
          <span
            className={styles.progressIndicator}
            style={{ width: `${((currentIndex + 1) / (maxIndex + 1)) * 100}%` }}
          />
        </div>

        <div className={styles.carouselDots}>
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
