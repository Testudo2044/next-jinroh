import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'
import Header from '../components/Header'

export default function FirstPost() {
  return (
    <>
      
      <h1 className="text-3xl">First Post</h1>
      <h2 className="text-2xl">
        <Link href="/">
          <a className="text-blue-500">Back to home</a>
        </Link>
      </h2>
    </>
  )
}
