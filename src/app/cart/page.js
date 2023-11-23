"use client";

import Header from "../components/header";
import Heading from "../components/heading";
import Featured from "../components/featured";
import Footer from "../components/footer";
import CartProduct from "../components/cartProduct";
import { useBasket } from "../components/shoppingBasket";
import CartEmpty from "../components/cartEmpty";
import OrderSummary from "../components/orderSummary";

export default function Cart() {
  const { items, totalPrice } = useBasket();

  if (items.length === 0) {
    return (
      <main className="container">
        <Header />
        <CartEmpty/>
        <Heading title="Items You May Like"/>
        <Featured />
        <Footer />
      </main>
    );
  } else {
    return (
      <main className="container">
        <Header />
        <Heading title="Your Shopping Basket" />
        <CartProduct items={items}/>
        <OrderSummary/>
        <Heading title="Items You May Like"/>
        <Featured />
        <Footer />
      </main>
    );
  }
}
