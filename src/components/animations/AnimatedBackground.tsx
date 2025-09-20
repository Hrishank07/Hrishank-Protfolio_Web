import styles from './AnimatedBackground.module.css'

export default function AnimatedBackground() {
  return (
    <>
      <div className={styles.heroBackground}></div>
      <div className={styles.floatingShapes}>
        <div className={`${styles.shape} ${styles.shape1}`}></div>
        <div className={`${styles.shape} ${styles.shape2}`}></div>
        <div className={`${styles.shape} ${styles.shape3}`}></div>
      </div>
    </>
  )
}