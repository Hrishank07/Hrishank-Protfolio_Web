'use client'

import { useState } from 'react'
import ProjectCard from '../ui/ProjectCard'
import { projects } from '../../data/projects'
import styles from './Projects.module.css'

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const projectsPerView = 3
  const maxIndex = Math.max(0, Math.ceil(projects.length / projectsPerView) - 1)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex))
  }

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.projectsContainer}>
        <h2 className={styles.sectionTitle}>Featured Projects</h2>
        
        <div className={styles.carouselContainer}>
          <button 
            className={`${styles.carouselButton} ${styles.prevButton}`}
            onClick={prevSlide}
            aria-label="Previous projects"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          
          <div className={styles.carouselWrapper}>
            <div 
              className={styles.projectsGrid}
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
          
          <button 
            className={`${styles.carouselButton} ${styles.nextButton}`}
            onClick={nextSlide}
            aria-label="Next projects"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
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
