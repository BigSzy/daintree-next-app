"use client";

import React from "react";
import styles from "../styles/addToCart.module.scss";
import { useBasket } from "./shoppingBasket";

function AddToCartButton({ product }) {
  const { addItem } = useBasket();

  return (
    <button
      className={styles.addToCart}
      onClick={() => {
        addItem(product);
      }}
    >
      Add to Cart
    </button>
  );
}

export default AddToCartButton;
