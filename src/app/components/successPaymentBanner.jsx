"use client";

import React from "react";
import styles from "../styles/successPaymentBanner.module.scss";
import Link from "next/link";

function SuccessPaymentBanner() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h3>Thank you for your order!</h3>
      </div>
      <div className={styles.message}>
        <p>Your payment was successful.</p>
        <p>We'll send a confirmation email out to you shortly.</p>
        <p>Thank you for your order we really appreciate it!</p>
      </div>
      <div className={styles.link}>
        <Link href={"/"}>Return Home</Link>
      </div>
    </div>
  );
}

export default SuccessPaymentBanner;
