import Head from 'next/head'
import Link from 'next/link'
import styles from '@styles/index.module.scss'
import Navigation from '@components/Navigation'

export default function Home() {
  return (
    <div className={styles.homepageContainer}>
      <Head>
        <title>Home | Beanies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navigation/>
        <div className={styles.heroContainer}>
          <div className={styles.hero}>
            <h2 className={styles.heroTitle}>BEANIES HAS A BEGINNING</h2>
            <div className={styles.heroParagraphs}>
              <p>A scientist who tries to give his jellybean flavours more “life” accidentally grants them sentience, unknown to him. 96 beanies escape the jar and escape into the metaverse on a quest to form their own society. Along with their sentience, the beanies developed rare attributes that gave them humanoid forms.</p>
              <p>The beanies might return to make all the jellybeans in the universe “life”, who knows?</p>
            </div>
            <div className={styles.mintInfoContainer}>
              <Link href="/mint" className={styles.mintPageBtn}>Mint now</Link>
              <p className={styles.mintPrice}>Price : 0.3eth + Gas</p>
            </div>
          </div>
          <div className={styles.heroImg}>

          </div>
        </div>
      </header>
      <main>
        <section className={styles.galleryContainer}>

        </section>
        <section className={styles.planContainer}>

        </section>
        <section className={styles.teamContainer}>

        </section>
        <section className={styles.faqsContainer}>
          
        </section>
      </main>
    </div>
  )
}
