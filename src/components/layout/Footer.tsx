import styles from './Footer.module.css'

export default function Footer() {
  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerBody}>
          <div className={styles.brandBlock}>
            <span className={styles.brandMark}>Hrishank</span>
            <p className={styles.brandSummary}>
              Engineering cloud-native platforms and delightful experiences.
            </p>
          </div>

          <nav className={styles.navBlock} aria-label="Footer">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className={styles.socialBlock}>
            <a href="mailto:hchhatba@usc.edu" className={styles.socialLink}>
              <span>Email</span>
            </a>
            <a href="https://linkedin.com/in/hrishankk/" className={styles.socialLink}>
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/hrishank07" className={styles.socialLink}>
              <span>GitHub</span>
            </a>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>© {new Date().getFullYear()} Hrishank Chhatbar</p>
          <p>Crafted with curiosity & care.</p>
        </div>
      </div>
    </footer>
  )
}
