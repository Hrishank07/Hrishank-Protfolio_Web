import styles from './About.module.css'

const skills = [
  'Java', 'Python', 'AWS', 'Cloud Architecture', 
  'Distributed Systems', 'Machine Learning'
]

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.sectionContainer}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <p className={styles.aboutText}>
          I'm a software engineer with experience at AWS Lambda, where I worked on systems serving millions of users. 
          My passion lies in building robust, efficient infrastructure and creating seamless user experiences.
        </p>
        <p className={styles.aboutText}>
          When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
          or enjoying the beautiful Los Angeles weather.
        </p>
        <div className={styles.skillsSimple}>
          {skills.map((skill) => (
            <span key={skill} className={styles.skillTag}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}