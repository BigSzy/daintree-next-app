import React from 'react'
import styles from '../styles/orderSummery.module.scss'
import { useBasket } from '../components/shoppingBasket'
import Link from 'next/link'
import CheckoutButton from './checkoutButton'

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
       
       <CheckoutButton/>
    </section>
  )
}

export default OrderSummary