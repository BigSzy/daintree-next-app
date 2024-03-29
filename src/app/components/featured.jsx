"use client";

import React, { useState, useEffect } from "react";
import styles from "../styles/product.module.scss";
import Link from "next/link";
import { useBasket } from "../components/shoppingBasket";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

function Featured() {
  const { addItem } = useBasket();
  const [products, setProducts] = useState([]);
  const NUMBER_OF_PRODUCTS = 20;
  const NO_FEATURED_PRODUCTS = 6;
  const featuredProductIds = new Set();

  while (featuredProductIds.size < NO_FEATURED_PRODUCTS) {
    featuredProductIds.add(Math.floor(Math.random() * NUMBER_OF_PRODUCTS) + 1);
  }

  useEffect(() => {
    const fetchProducts = async () => {
      const responce = await fetch("https://fakestoreapi.com/products");
      const products = await responce.json();
      setProducts(products.filter((p) => featuredProductIds.has(p.id)));
    };
    fetchProducts();
  }, []);

  return (
    <div className={styles.productGrid}>
      {products.map((product) => (
        <div className={styles.product} key={product.id}>
          <div className={styles.productImage}>
            <Link href={`/products/${product.id}`}>
              <img src={product.image} alt="product image" />
            </Link>
          </div>

          <h3 className={styles.title}>{product.title}</h3>
          <p className={styles.price}>£{product.price}</p>
          <button
            className={`${styles.addToCart} ${montserrat.className}`}
            onClick={() => {
              addItem(product);
            }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Featured;
