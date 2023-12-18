import React from "react";
import styles from "../styles/cartEmpty.module.scss";
import Link from "next/link";

function CartEmpty() {
  return (
    <div className={styles.wrapper}>
      <p>Your shopping basket is empty...</p>
      <Link href={"/products"}>SHOP NOW</Link>
    </div>
  );
}

export default CartEmpty;
