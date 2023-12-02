import React from 'react'
import styles from "../styles/successPaymentBanner.module.scss"
import Link from 'next/link'

function CancelPaymentBanner() {
  return (
    <div className={styles.wrapper}>
        <div className={styles.title}>
            <h3>Your order has been Cancelled!</h3>
        </div>
        <div className={styles.message}>
            <p>Your payment was unsuccessful.</p>
            <p>Please try again making sure all the details are correct.</p>
        </div>
        <div className={styles.link}>
            <Link href={"/"}>Return Home</Link>
        </div>
    </div>
  )
}

export default CancelPaymentBanner