import styles from '@styles/beanieprofile.module.scss';

export default function BeanieProfile({ beanieId }) {

    let bgColour = "#fff";

    return(
        <div className={styles.beanieProfile} style={{background: bgColour}}>
            <img src={`/assets/pngs/gallery/${beanieId}.png`} alt={`Beanie-${beanieId}`}/>
        </div>
    )
}