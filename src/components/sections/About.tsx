import Image from 'next/image'
import styles from './About.module.css'

const skills = [
  'Java', 'Python', 'JavaScript', 'TypeScript',
  'AWS Lambda', 'S3', 'DynamoDB', 'Docker',
  'Kubernetes', 'Spring Boot', 'React', 'Node.js'
]

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        
        <div className={styles.aboutContent}>
          <div className={styles.photoSection}>
            <div className={styles.photoWrapper}>
              {/* Remove the placeholder div since we'll show the actual image */}
              {/* <div className={styles.photoPlaceholder}>
                HC
              </div> */}
              <Image 
                src="/Profile_Pic.jpeg" 
                alt="Hrishank Chhatbar"
                width={550}
                height={550}
                className={styles.photo}
                priority  // Add priority for faster loading
              />
            </div>
          </div>
          
          <div className={styles.infoSection}>
            <h3 className={styles.introTitle}>Software Engineer & Cloud Architect</h3>
            <p className={styles.aboutText}>
              I'm a graduate student at USC pursuing my Master's in Engineering Management 
              with a minor in Business Analytics. Recently, I completed my internship as an 
              SDE at AWS Lambda, where I architected solutions that improved system performance 
              by 35% while serving millions of users.
            </p>
            <p className={styles.aboutText}>
              My passion lies in building scalable, fault-tolerant systems and solving complex 
              technical challenges. I thrive at the intersection of innovation and implementation, 
              turning ambitious ideas into production-ready solutions.
            </p>
            
            <div className={styles.skillsSection}>
              <h4 className={styles.skillsTitle}>Technical Skills</h4>
              <div className={styles.skillsGrid}>
                {skills.map((skill) => (
                  <span key={skill} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}