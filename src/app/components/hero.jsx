import React from 'react'
import styles from '../styles/hero.module.scss'
import Link from 'next/link'

function Hero() {
  return (
    <section className={styles.hero}>
      <h1>All your shopping needs covered</h1>
      <Link href={'/products'}>SHOP NOW</Link>
    </section>
  )
}

export default Hero