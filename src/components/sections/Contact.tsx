'use client'

import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import styles from './Contact.module.css'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'

const MESSAGE_LIMIT = 500

const contactHighlights = [
  { id: 'location', label: 'Based in', value: 'Los Angeles, CA' },
  { id: 'status', label: 'Currently', value: 'Open to opportunities' },
  { id: 'response', label: 'Response time', value: 'Within 2-3 days' },
]

const contactLinks = [
  { id: 'email', label: 'Email', href: 'mailto:hchhatba@usc.edu', icon: '✉️' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/hrishankk/', icon: '💼' },
  { id: 'github', label: 'GitHub', href: 'https://github.com/hrishank07', icon: '💻' },
]

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

        <div className={styles.highlightRow}>
          {contactHighlights.map((item) => (
            <div key={item.id} className={styles.highlightCard}>
              <span className={styles.highlightLabel}>{item.label}</span>
              <span className={styles.highlightValue}>{item.value}</span>
            </div>
          ))}
        </div>

        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h3 className={styles.contactHeading}>Get in Touch</h3>
            <p className={styles.contactText}>
              I'm always interested in hearing about new opportunities and interesting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <div className={styles.contactDetails}>
              {contactLinks.map((link) => (
                <a key={link.id} href={link.href} className={styles.contactLink}>
                  <span className={styles.contactIcon}>{link.icon}</span>
                  <span className={styles.contactLabel}>{link.label}</span>
                  <span className={styles.contactArrow} aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M7 17L17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className={styles.contactForm}>
            <form onSubmit={handleSubmit} noValidate>
              <div className={styles.formRow}>
                <label className={styles.fieldLabel}>
                  <span>Name</span>
                  <input
                    type="text"
                    placeholder="Jane Doe"
                    className={styles.formInput}
                    name="name"
                    required
                  />
                </label>
                <label className={styles.fieldLabel}>
                  <span>Email</span>
                  <input
                    type="email"
                    placeholder="you@email.com"
                    className={styles.formInput}
                    name="email"
                    required
                  />
                </label>
              </div>
              <label className={`${styles.fieldLabel} ${styles.messageField}`}>
                <span>Message</span>
                <textarea
                  placeholder="Tell me about the challenges you're solving…"
                  className={styles.formTextarea}
                  rows={5}
                  name="message"
                  maxLength={MESSAGE_LIMIT}
                  onChange={handleMessageChange}
                  required
                />
              </label>
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
      </div>
    </section>
  )
}
