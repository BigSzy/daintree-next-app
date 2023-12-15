import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import Products from "@/app/components/products";
import React from "react";

export async function generateStaticParams() {
  const response = await fetch("https://fakestoreapi.com/products/categories");
  const categories = await response.json();

  return categories;
}

async function getProducts(category) {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  );
  const data = await res.json();
  return data;
}

export default async function CategoryPage({ params }) {
  const products = await getProducts(params.category);

  return (
    <main className="container">
      <Header />
      <Products products={products} />
      <Footer />
    </main>
  );
}
