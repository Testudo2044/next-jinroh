import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
  <body>
    <header>
      <div>
        
      </div>
    </header>
    <main className="">
      <h1 className="text-3xl">
        Read{' '}
        <Link href="/posts/top">
          <a className="text-blue-500 text-3xl">this page!</a>
        </Link>
      </h1>
    </main>
    <footer>

    </footer>
  </body>
  )
}

export default Home
