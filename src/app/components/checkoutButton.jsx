import { loadStripe } from "@stripe/stripe-js";
import { redirect } from "next/dist/server/api-utils";
import React from "react";

function CheckoutButton() {
  const redirectToCheckout = async () => {
    try {
      const checkoutResponse = await fetch("/api/checkout/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: "{}",
      });

      const url = await checkoutResponse.json();
      
      window.open(url)


    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={() => redirectToCheckout()}>Checkout Securely</button>
  );
}

export default CheckoutButton;
