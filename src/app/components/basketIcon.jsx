"use client"

import React from "react";
import Link from "next/link";
import styles from "../styles/header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { useBasket } from "./shoppingBasket";

function BasketIcon() {

    const { totalPrice } = useBasket()
  return (
    <div className={styles.icon}>
      <Link href={"/cart"}>
        <FontAwesomeIcon icon={faBasketShopping} size="xl" fixedWidth />
      </Link>
      <p>£ {totalPrice()}</p>
    </div>
  );
}

export default BasketIcon;
