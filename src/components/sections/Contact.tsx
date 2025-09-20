import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.contactContent}>
        <h2 className={styles.sectionTitle}>Let's Connect</h2>
        <p className={styles.contactText}>
          I'm always interested in hearing about new opportunities and interesting projects.
          Feel free to reach out if you'd like to work together!
        </p>
        <div className={styles.contactLinks}>
          <a href="mailto:hchhatba@usc.edu" className={styles.contactLink}>
            Email
          </a>
          <a href="https://linkedin.com/in/hrishankk/" className={styles.contactLink}>
            LinkedIn
          </a>
          <a href="https://github.com/hrishank07" className={styles.contactLink}>
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
