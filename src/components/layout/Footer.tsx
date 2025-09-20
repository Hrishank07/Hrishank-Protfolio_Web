import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerLogo}>Hrishank</h3>
            <p className={styles.footerTagline}>
              Building scalable solutions for tomorrow's challenges
            </p>
          </div>
          
          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>Quick Links</h4>
            <ul className={styles.footerLinks}>
              <li><a href="#home" className={styles.footerLink}>Home</a></li>
              <li><a href="#about" className={styles.footerLink}>About</a></li>
              <li><a href="#projects" className={styles.footerLink}>Projects</a></li>
              <li><a href="#contact" className={styles.footerLink}>Contact</a></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>Connect</h4>
            <ul className={styles.footerLinks}>
              <li><a href="mailto:hchhatba@usc.edu" className={styles.footerLink}>Email</a></li>
              <li><a href="https://linkedin.com/in/hrishankc" className={styles.footerLink}>LinkedIn</a></li>
              <li><a href="https://github.com/hrishankc" className={styles.footerLink}>GitHub</a></li>
            </ul>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © 2025 Hrishank Chhatbar. All rights reserved.
          </p>
          <p className={styles.location}>
            Made with AI Tools.
          </p>
        </div>
      </div>
    </footer>
  )
}