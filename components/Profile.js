import styles from '@styles/profile.module.scss'

export default function Profile({ profile }) {
    
    const { name, role, imgLink } = profile;

    return (
        <div className={styles.profile}>
            <div className={styles.profileImg}>
                <img src={imgLink} alt={name} />
            </div>
            <div className={styles.profileDetails}>
                <h3 className={styles.position}>{ role }</h3>
                <p className={styles.name}>{ name }</p>
            </div>
        </div>
    )
}