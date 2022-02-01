import styles from '@styles/footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLogo}>
        <img src="/assets/svgs/Beanies-Logo.svg" alt="Netlify Logo" />
      </div>
      <h3 className={styles.contactAddress}>Contract address: <a href="#">ashbhff774683bmnndgb000bfnbd</a></h3>
      <ul className={styles.footerSocialsContainer}>
        <li className={styles.socialLink}>
          <a href="#">
            <img src="/assets/svgs/Discord.svg" alt="Discord" />
          </a>
        </li>
        <li className={styles.socialLink}>
          <a href="#">
            <img src="/assets/svgs/Instagram.svg" alt="Instagram" />
          </a>
        </li>
        <li className={styles.socialLink}>
          <a href="#">
            <img src="/assets/svgs/Twitter.svg" alt="Twitter" />
          </a>
        </li>
      </ul>
    </footer>
  )
}
