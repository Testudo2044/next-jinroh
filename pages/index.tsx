import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="bg-yellow-300">
      <h1 className="text-3xl">
        Read{' '}
        <Link href="/posts/post">
          <a className="text-blue-500 text-3xl">this page!</a>
        </Link>
      </h1>
    </div>
  )
}

export default Home
