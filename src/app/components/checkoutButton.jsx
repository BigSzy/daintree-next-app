import { loadStripe } from "@stripe/stripe-js";
import { redirect } from "next/dist/server/api-utils";
import { useBasket } from "./shoppingBasket";
import React from "react";
import styles from "../styles/checkoutbutton.module.scss"

function CheckoutButton() {

    const { items } = useBasket()



  const redirectToCheckout = async () => {
    try {

      const data = items.map(p => {return{
        id: p.id,
        qty: p.qty
      }})

      const checkoutResponse = await fetch("/api/checkout/", {
        method: "POST",
        // headers: {
        //   "Content-Type": "application/json",
        // },
        body:JSON.stringify(data),
      });

      const url = await checkoutResponse.json();
      
      window.open(url)

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button 
    className={styles.button}
    onClick={() => redirectToCheckout()}>
      CHECKOUT SERCURELY</button>
  );
}

export default CheckoutButton;
