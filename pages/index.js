import Head from 'next/head'
import Link from 'next/link'
import styles from '@styles/index.module.scss'
import Navigation from '@components/Navigation'
import Profile from '@components/Profile'
import { teamData, faqsData } from '../data'
import Faq from '@components/Faq'
import Gallery from '@components/Gallery'

export default function Home({team,faqs}) {
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
              <div className={styles.mintPageBtn}>
                <Link href="/mint">Mint now</Link>
              </div>
              <p className={styles.mintPrice}>Price : 0.3eth + Gas</p>
            </div>
          </div>
          <div className={styles.heroImg}>
            <img src="/assets/pngs/header-beanie.png" alt="Beanie"/>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.galleryContainer}>
          <h2 className={styles.galleryContainerTitle}>Gallery</h2>
          <Gallery/>
        </section>
        <section className={styles.thePlanContainer}>
          <h2 className={styles.thePlanContainerTitle}>The plan</h2>
          <div className={styles.planDesktopView}>
            <div className={styles.planOneContainer}>
              <div className={styles.plan}>
                <h3 className={styles.planTitle}>Sentience</h3>
                <p className={styles.planSubtitle}>
                  Pieces are sold out and minted on the blockchain and become available on the secondaries. Holders are eligible for smart contract based exclusive perks and merchandise.
                </p>
              </div>
            </div>
            <div className={styles.jarOfBeansContainer}>
              <img src="/assets/pngs/roadmap.png" alt="jar of beans" />
            </div>
            <div className={styles.plansContainer}>
              <div className={styles.plan}>
                <h3 className={styles.planTitle}>The Escape</h3>
                <p className={styles.planSubtitle}>
                  Launch of beanies into the metaverse starts, beanies are minted on this website. Giveaways of pieces of the collection goes to active followers and members of the community.
                </p>
              </div>
              <div className={styles.plan}>
                <h3 className={styles.planTitle}>Society</h3>
                <p className={styles.planSubtitle}>
                  Through the community’s support, more beanies will become sentient and our holders will be whitelisted in the expansion  of the collection.
                  A charity pledged to aid the improvement of food security in Africa aimed at childeren wil be set up to give back and make a positive change.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.teamContainer}>
          <h3 className={styles.teamContainerTitle}>Team</h3>
          <div className={styles.teamMembers}>
            {
              team.map((profile) => {
                return <Profile profile={profile} key={profile.id} /> 
              })
            }
          </div>
        </section>
        <section className={styles.faqsContainer}>
          <h3 className={styles.faqsContainerTitle}>faqs</h3>
          <div className={styles.faqsList}>
            {
              faqs.map((faq) => {
                return <Faq faq={faq} key={ faq.id }/>
              })
            }
          </div>
        </section>
        <section className={styles.waitingListContainer}>
          <div className={styles.waitingList}>
            <div className={styles.waitingListFormContainer}>
              <h2 className={styles.waitingListFormTitle}>Join our waiting list</h2>
              <p className={styles.waitingListFormSubtitle}>To stay updated on new information about the collection. Join our mailing list.</p>
              <form className={styles.waitingListForm}>
                <input type="text" name="waiting-list-input" placeholder='Your Email' className={styles.waitingListInput} required />
                <input type="submit" value="Submit" className={styles.waitingListFormSubmitBtn} />
              </form>
            </div>
            <div className={styles.waitingListImg}>
              <img src="/assets/pngs/beanie-jester.png" alt="Beanie Jester"/>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export const getStaticProps = async () => {
  return {
    props: {
      team: teamData,
      faqs: faqsData,
    }
  }
}