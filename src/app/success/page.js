"use client";

import React from "react";
import Header from "../components/header";
import SuccessPaymentBanner from "../components/successPaymentBanner";
import { useBasket } from "../components/shoppingBasket";

function Success() {
  const { clearBasket } = useBasket();

  clearBasket();

  return (
    <main className="container">
      <Header />
      <SuccessPaymentBanner />
    </main>
  );
}

export default Success;
