import ProjectCard from '../ui/ProjectCard'
import { projects } from '../../data/projects'
import styles from './Projects.module.css'

export default function Projects() {
  return ( s
    <section className={styles.projects} id="projects">
      <div className={styles.projectsContainer}>
        <h2 className={styles.sectionTitle}>Featured Projects</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}