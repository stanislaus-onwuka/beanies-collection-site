import styles from '@styles/beanieprofile.module.scss';

export default function BeanieProfile({ beanieId, beanieBg }) {

    return(
        <div className={styles.beanieProfile} style={{background: beanieBg}}>
            <img src={`/assets/pngs/gallery/${beanieId}.png`} alt={`Beanie-${beanieId}`}/>
        </div>
    )
}