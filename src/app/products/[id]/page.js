import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import React from "react";
import styles from "@/app/styles/productPage.module.scss";
import AddToCartButton from "@/app/components/addToCartButton";

export async function generateStaticParams() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();

  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

async function getProduct(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await res.json();
  return data;
}

export default async function ProductPage({ params }) {
  const product = await getProduct(params.id);
  return (
    <main className="container">
      <Header />
      <div className={styles.productWrapper}>
        <div className={styles.productImage}>
          <img src={product.image} />
        </div>
        <div className={styles.productInfo}>
          <h3>{product.title}</h3>
          <p>{product.category}</p>
          <p>£{product.price}</p>
          <AddToCartButton product={product} className={styles.addToCart}/>
        </div>
      </div>
      <div className={styles.productDesc}>
        <h3>DESCRIPTION</h3>
        <p>{product.description}</p>
      </div>
      <Footer />
    </main>
  );
}
