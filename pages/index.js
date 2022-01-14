import Head from 'next/head'
import Header from '@components/Header'
import styles from '@styles/index.module.scss'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Home | Beanies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header title="Welcome to my app!" />
        <p className={styles.description}>
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>
    </div>
  )
}
