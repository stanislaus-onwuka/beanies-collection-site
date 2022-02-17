import styles from '@styles/footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLogo}>
        <img src="/assets/svgs/Beanies-Logo.svg" alt="Netlify Logo" />
      </div>
      <h3 className={styles.contractAddress}>Contract address: <a href="#">ashbhff774683bmnndgb000bfnbd</a></h3>
      <ul className={styles.footerSocialsContainer}>
        <li className={styles.socialLink}>
          <a href="https://discord.gg/AQSzuhmz" target="_blank">
            <img src="/assets/svgs/Discord.svg" alt="Discord" />
          </a>
        </li>
        <li className={styles.socialLink}>
          <a href="https://www.instagram.com/wearebeanies/" target="_blank">
            <img src="/assets/svgs/Instagram.svg" alt="Instagram" />
          </a>
        </li>
        <li className={styles.socialLink}>
          <a href="https://twitter.com/wearebeanies?s=21" target="_blank">
            <img src="/assets/svgs/Twitter.svg" alt="Twitter" />
          </a>
        </li>
      </ul>
    </footer>
  )
}
