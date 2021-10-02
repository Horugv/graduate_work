import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import Home from '@/containers/Home'

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Map</title>
        <meta name="description" content="Graduate work on NEXT.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  )
}

export default HomePage
