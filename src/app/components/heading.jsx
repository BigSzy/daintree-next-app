import React from 'react'
import styles from '../styles/hero.module.scss'


function Heading({title}) {
  return (
    <div className={styles.heading}>
        <h2>{title}</h2>
    </div>
  )
}

export default Heading