import React from "react";
import styles from "../styles/checkoutbutton.module.scss";
import { useBasket } from "./shoppingBasket";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

function CheckoutButton() {
  const { items } = useBasket();

  const redirectToCheckout = async () => {
    try {
      const data = items.map((p) => {
        return {
          id: p.id,
          qty: p.qty,
        };
      });

      const checkoutResponse = await fetch("/api/checkout/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const url = await checkoutResponse.json();

      window.open(url);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button className={`${styles.button} ${montserrat.className}`} onClick={() => redirectToCheckout()}>
      CHECKOUT SERCURELY
    </button>
  );
}

export default CheckoutButton;
