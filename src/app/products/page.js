import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Heading from "../components/heading";
import AllProducts from "../components/allProducts";

export default function Products() {
  return (
    <main className="container">
      <Header />
      <Heading title="All Our Products" />
      <AllProducts />
      <Footer />
    </main>
  );
}
