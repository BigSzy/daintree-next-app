import React from 'react'
import styles from '../styles/orderSummery.module.scss'
import { useBasket } from '../components/shoppingBasket'
import Link from 'next/link'

function OrderSummary() {

  const { totalPrice } = useBasket()

  return (
    <section className={styles.orderSummaryWrapper}>
        <div className={styles.title}>
          <h3>ORDER SUMMARY</h3>
        </div>
        <div className={styles.totalPrice}>
          <p>TOTAL : &nbsp;  £{totalPrice()}</p>
        </div>
        <div className={styles.promo}>
          <h3>APPLY PROMO CODE</h3>
          <input type="text" />
          <button>APPLY</button>
        </div>
        <div className={styles.checkout}>
          <Link href={'/'}>Checkout Securely</Link>
        </div>
    </section>
  )
}

export default OrderSummary