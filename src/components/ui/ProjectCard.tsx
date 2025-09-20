import styles from './ProjectCard.module.css'

interface Project {
  id: number
  icon: string
  title: string
  description: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectIcon}>{project.icon}</div>
      <h3 className={styles.projectTitle}>{project.title}</h3>
      <p className={styles.projectDescription}>{project.description}</p>
    </div>
  )
}
