import { useContext } from 'react'
import AppContext from '../state/AppContext'
// import Link from 'next/link'
import styles from '@styles/navigation.module.scss'

export default function Navigation() {
    const value = useContext(AppContext);
    const { setPopupStatus } = value;

    return (
        <nav className={styles.navigation}>
            <div className={styles.logo}>
                <img src="/assets/svgs/Beanies-Logo.svg" /> 
            </div>
            <ul className={styles.desktopMenu}>
                <li className={styles.menuItem}><a href="#home" className={styles.menuItemLink}>Home</a></li>
                <li className={styles.menuItem}><a href="#the-plan" className={styles.menuItemLink}>The plan</a></li>
                <li className={styles.menuItem}><a href="#team" className={styles.menuItemLink}>Team</a></li>
                <li className={styles.menuItem}><a href="#faqs" className={styles.menuItemLink}>FAQS</a></li>
            </ul>
            <div className={styles.subMenu}>
                <div className={styles.navSocialsList}>
                    <a className={styles.socialLink} href="https://discord.gg/AQSzuhmz" target="_blank">
                        <img src="/assets/svgs/Discord.svg" alt="Discord"/>
                    </a>
                    <a className={styles.socialLink} href="https://www.instagram.com/wearebeanies/" target="_blank">
                        <img src="/assets/svgs/Instagram.svg" alt="Instagram"/>
                    </a>
                    <a className={styles.socialLink} href="https://twitter.com/wearebeanies?s=21" target="_blank">
                        <img src="/assets/svgs/Twitter.svg" alt="Twitter"/>
                    </a>
                </div>
                {/* <div className={styles.connectWalletBtn}>
                    <Link href="/mint">Connect Wallet</Link>
                </div> */}
                <button className={styles.unavailableBtn} onClick={()=>setPopupStatus(true)}>
                    Connect Wallet
                </button>
            </div>
            <button className={styles.mobileMenuBtn}>
                <div className={styles.bar1}></div>
                <div className={styles.bar2}></div>
                <div className={styles.bar3}></div>
            </button>
        </nav>
    )
}