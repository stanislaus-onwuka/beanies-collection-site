import Head from 'next/head'
import styles from '@styles/mintpage.module.scss'

export default function Mint() {
    return (
        <div className={styles.mintpageContainer}>
          <Head>
            <title>Mint Beanies | Beanies</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <h3>Mint</h3>
            </main>
        </div>
    )
}