'use client'

import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import styles from './Contact.module.css'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'

const MESSAGE_LIMIT = 500

export default function Contact() {
  const sectionRef = useRevealOnScroll<HTMLElement>()
  const [status, setStatus] = useState<'idle' | 'success'>('idle')
  const [messageLength, setMessageLength] = useState(0)

  useEffect(() => {
    if (status === 'idle') {
      return
    }

    const timeout = window.setTimeout(() => setStatus('idle'), 5000)
    return () => window.clearTimeout(timeout)
  }, [status])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = (formData.get('name') ?? '').toString().trim()
    const email = (formData.get('email') ?? '').toString().trim()
    const message = (formData.get('message') ?? '').toString().trim()

    const subject = name ? `Portfolio Contact: ${name}` : 'Portfolio Contact'
    const mailto = `mailto:hchhatba@usc.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name || 'Anonymous'}\nEmail: ${email}\n\n${message}`)}`

    const newWindow = window.open(mailto, '_blank')
    if (!newWindow) {
      window.location.href = mailto
    }
    setStatus('success')
    setMessageLength(0)
    event.currentTarget.reset()
  }

  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessageLength(event.target.value.length)
  }

  return (
    <section
      ref={sectionRef}
      className={styles.contact}
      data-reveal="pending"
      id="contact"
    >
      <div className={styles.contactContainer}>
        <h2 className={styles.sectionTitle}>Let's Connect</h2>
        <p className={styles.contactSubtitle}>
          Have a project in mind? Let's work together to build something amazing.
        </p>

        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h3 className={styles.contactHeading}>Get in Touch</h3>
            <p className={styles.contactText}>
              I'm always interested in hearing about new opportunities and interesting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <span className={styles.contactValue}>Los Angeles, CA</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>🎓</span>
                <span className={styles.contactValue}>USC Graduate Student</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>💼</span>
                <span className={styles.contactValue}>Open to Opportunities</span>
              </div>
            </div>
          </div>

          <div className={styles.contactForm}>
            <form onSubmit={handleSubmit} noValidate>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  placeholder="Your Name"
                  className={styles.formInput}
                  name="name"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  type="email"
                  placeholder="Your Email"
                  className={styles.formInput}
                  name="email"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <textarea
                  placeholder="Your Message"
                  className={styles.formTextarea}
                  rows={4}
                  name="message"
                  maxLength={MESSAGE_LIMIT}
                  onChange={handleMessageChange}
                  required
                />
              </div>
              <div className={styles.formFooter}>
                <span className={styles.charCount}>
                  {messageLength}/{MESSAGE_LIMIT}
                </span>
                {status === 'success' && (
                  <span className={styles.formStatus} role="status" aria-live="polite">
                    Email draft opened — feel free to edit before sending! If nothing opens, email hchhatba@usc.edu.
                  </span>
                )}
              </div>
              <button type="submit" className={styles.submitButton}>
                Send Message
                <span className={styles.buttonIcon}>→</span>
              </button>
            </form>
          </div>
        </div>
        
        <div className={styles.socialLinks}>
          <a href="mailto:hchhatba@usc.edu" className={styles.socialLink} aria-label="Email">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m22 7-10 5L2 7"/>
            </svg>
            <span>Email</span>
          </a>
          <a href="https://linkedin.com/in/hrishankk/" className={styles.socialLink} aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/hrishank07" className={styles.socialLink} aria-label="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  )
}
