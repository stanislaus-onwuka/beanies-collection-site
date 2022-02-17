import styles from '@styles/faq.module.scss';

export default function Faq({ faq, handleToggle, openFaq }) {
    const { faqTitle, faqBody } = faq;

    return (
        <div className={styles.faqContainer}>
            <div className={ styles.faqTitle } style={openFaq ? {borderRadius: '16px 16px 0 0'} : {borderRadius: '16px'}} onClick={handleToggle}>
                <div className={styles.headingSpace}></div>
                <h3 className={styles.faqTitleText}>{ faqTitle }</h3>
                <div className={styles.expandIcon}>
                    { openFaq ? <img src="/assets/svgs/minus.svg" alt="Show less"/> : <img src="/assets/svgs/add.svg" alt="Show more"/>}
                </div>
            </div>
            {
                openFaq
                &&
                <div className={styles.faqBody}>
                    <p className={styles.faqBodyText}>
                        {faqBody}
                    </p>    
                </div>
            }
        </div>
    )
}