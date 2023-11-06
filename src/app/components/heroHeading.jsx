import React from 'react'
import styles from '../styles/hero.module.scss'
import Link from 'next/link'

function HeroHeading() {
  return (
    <div className={styles.heroHeading}>
        <h1>All Year Sale!</h1>
        <p>20% off all items</p>
        <p className={styles.code}>USE CODE : DT20</p>
        <Link href={'/products'}>SHOP NOW </Link>
    </div>
  )
}

export default HeroHeading