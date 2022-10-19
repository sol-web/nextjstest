import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href="about">About</Link>
        <Link href="profile">profile</Link>
        <Link href="docs">Docs</Link>
        <Link href="docs/bclee">Bclee</Link>
        <Link href="docs/bclee/aaa">Bclee/aaa</Link>
        <h1 className={styles.title}>hello world 안녕하세요</h1>
      </main>
    </div>
  )
}