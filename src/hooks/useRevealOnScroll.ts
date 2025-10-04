import { useEffect, useRef } from 'react'
import usePrefersReducedMotion from './usePrefersReducedMotion'

/**
 * Adds an IntersectionObserver powered reveal animation to the
 * element that the returned ref is attached to.
 */
export default function useRevealOnScroll<T extends HTMLElement>() {
  const prefersReducedMotion = usePrefersReducedMotion()
  const elementRef = useRef<T | null>(null)

  useEffect(() => {
    const element = elementRef.current

    if (!element) {
      return
    }

    if (element.dataset.reveal === 'shown') {
      return
    }

    if (
      prefersReducedMotion ||
      typeof window === 'undefined' ||
      typeof IntersectionObserver === 'undefined'
    ) {
      element.setAttribute('data-reveal', 'shown')
      return
    }

    let frameId: number | null = null

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement
            target.setAttribute('data-reveal', 'shown')
            observer.unobserve(target)
          }
        })
      },
      {
        threshold: 0.25,
        rootMargin: '0px 0px -10% 0px',
      }
    )

    element.setAttribute('data-reveal', 'hidden')

    frameId = window.requestAnimationFrame(() => {
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId)
      }
      observer.disconnect()
    }
  }, [prefersReducedMotion])

  return elementRef
}
