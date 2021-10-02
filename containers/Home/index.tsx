import React from 'react'
import dynamic from 'next/dynamic'

import styles from './index.module.scss'

const Home = () => {
  const Map = dynamic(
    () => import('@/component/Map'),
    { loading: () => <p>A map is loading</p>, ssr: false } // This line is important. It's what prevents server-side render
  )
  return (
    <div className={styles.wrapper}>
      <Map />
    </div>
  )
}

export default Home
