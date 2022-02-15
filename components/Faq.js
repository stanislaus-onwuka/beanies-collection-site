import styles from '@styles/faq.module.scss';

export default function Faq({ faq }) {
    const { faqTitle, faqBody } = faq;

    return (
        <div className={styles.faqContainer}>
            <div className={styles.faqTitle}>
                <div className={styles.headingSpace}></div>
                <h3 className={styles.faqTitleText}>{ faqTitle }</h3>
                <div className={styles.expandIcon}>
                    <img src="/assets/svgs/add.svg" alt="Show more"/>
                </div>
            </div>
            <div className={styles.faqBody}>
                {faqBody}
            </div>
        </div>
    )
}