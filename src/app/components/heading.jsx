import React from 'react'
import styles from '../styles/hero.module.scss'
import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

function Heading({title}) {
  return (
    <div className={styles.heading}>
        <h2 className={playfairDisplay.className}>{title}</h2>
    </div>
  )
}

export default Heading