import styles from '@styles/footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      Made with <img src="/assets/netliheart.svg" alt="Netlify Logo" className={styles.logo} /> for you
    </footer>
  )
}
