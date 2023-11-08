import React from 'react'
import styles from '../styles/hero.module.scss'


function HeroHeading() {
  return (
    <div className={styles.heroHeading}>
        <div className={styles.headingRow}>
          <p>20% OFF ALL ITEMS</p>
          <h3>All year sale!</h3>
          <p className={styles.code}>USE CODE : DT20</p>
        </div>

    </div>
  )
}

export default HeroHeading