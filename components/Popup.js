import { useContext } from 'react'
import AppContext from '../state/AppContext'
import styles from '@styles/popup.module.scss'


export default function Popup({ message }) {
    const value = useContext(AppContext);
    const { popupStatus } = value.state;
    const { setPopupStatus } = value;

    return (
        <div className={styles.popupContainer} style={popupStatus ? {display: 'block'}:{display: 'none'}}>
            <div className={styles.popup}>
                <button className={styles.closePopupBtn} onClick={()=>setPopupStatus(false)}>
                    <img src="/assets/svgs/x.svg" alt="Close Button"/>
                </button>
                <h3 className={styles.popupMessage}>{message}</h3>
                <div className={styles.spaceBelow}></div>
            </div>
            <div className={styles.popupMask} onClick={()=>setPopupStatus(false)}></div>
        </div>
    )
}