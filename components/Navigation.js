import { useContext } from 'react'
import AppContext from '../state/AppContext'
// import Link from 'next/link'
import WalletButton from "../components/walletButton";
import styles from '@styles/navigation.module.scss'

export default function Navigation({wallet}) {
    const value = useContext(AppContext);
    const { setPopupStatus, showMobileMenu } = value;
    const { mobileMenu } = value.state;


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
                {/*<button className={styles.unavailableBtn} onClick={()=>setPopupStatus(true)}>
                    Connect Wallet
                </button>*/}
                <div>
                <WalletButton />
                </div>
            </div>
            <button className={ styles.mobileMenuBtn} onClick={()=>showMobileMenu(true)}>
                <img src='/assets/svgs/menu.svg' alt="Close button" />
            </button>
            <div className={styles.mobileMenuContainer} style={ mobileMenu ? {transform:`translateX(0)`} : {transform:`translateX(1000px)`} }>
                <button className={styles.closeMobileMenuBtn} onClick={()=>showMobileMenu(false)}>
                    <img src='/assets/svgs/close-btn.svg' alt="Close button" />
                </button>
                <div className={styles.jesterImg}>
                    <img src="/assets/pngs/beanie-jester.png" alt="Beanie Jester"/>
                </div>
                <ul className={styles.mobileMenu}>
                    <li className={styles.menuItem} onClick={()=>showMobileMenu(false)}><a href="#home" className={styles.menuItemLink}>Home</a></li>
                    <li className={styles.menuItem} onClick={()=>showMobileMenu(false)}><a href="#the-plan" className={styles.menuItemLink}>The plan</a></li>
                    <li className={styles.menuItem} onClick={()=>showMobileMenu(false)}><a href="#team" className={styles.menuItemLink}>Team</a></li>
                    <li className={styles.menuItem} onClick={()=>showMobileMenu(false)}><a href="#faqs" className={styles.menuItemLink}>FAQS</a></li>
                </ul>  
                <div className={styles.socialMediaContainer}>
                    <a className={styles.socialLink} href="https://discord.gg/AQSzuhmz" target="_blank">
                        <img src="/assets/svgs/Discord-mobile.svg" alt="Discord"/>
                    </a>
                    <a className={styles.socialLink} href="https://www.instagram.com/wearebeanies/" target="_blank">
                        <img src="/assets/svgs/Instagram-mobile.svg" alt="Instagram"/>
                    </a>
                    <a className={styles.socialLink} href="https://twitter.com/wearebeanies?s=21" target="_blank">
                        <img src="/assets/svgs/Twitter-mobile.svg" alt="Twitter"/>
                    </a>
                </div>
            </div>
        </nav>
    )
}