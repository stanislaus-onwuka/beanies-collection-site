import Link from 'next/link'

import styles from '@styles/navigation.module.scss'

export default function Navigation() {
    return (
        <nav className={styles.navigation}>
            <div className={styles.logo}>
                <img src="/assets/svgs/Beanies-Logo.svg" /> 
            </div>
            <ul className={styles.desktopMenu}>
                <li className={styles.menuItem}><a href="#" className={styles.menuItemLink}>Home</a></li>
                <li className={styles.menuItem}><a href="#" className={styles.menuItemLink}>The plan</a></li>
                <li className={styles.menuItem}><a href="#" className={styles.menuItemLink}>Team</a></li>
                <li className={styles.menuItem}><a href="#" className={styles.menuItemLink}>FAQS</a></li>
            </ul>
            <div className={styles.subMenu}>
                <div className={styles.navSocialsList}>
                    <a className={styles.socialLink} href="#">
                        <img src="/assets/svgs/Discord.svg" alt="Discord"/>
                    </a>
                    <a className={styles.socialLink} href="#">
                        <img src="/assets/svgs/Instagram.svg" alt="Instagram"/>
                    </a>
                    <a className={styles.socialLink} href="#">
                        <img src="/assets/svgs/Twitter.svg" alt="Twitter"/>
                    </a>
                </div>
                <div className={styles.connectWalletBtn}>
                    <Link href="/mint">Connect Wallet</Link>
                </div>
            </div>
            <button className={styles.mobileMenuBtn}>
                menu
            </button>
            <div className={styles.mobileMenuContainer}>

            </div>
        </nav>
    )
}