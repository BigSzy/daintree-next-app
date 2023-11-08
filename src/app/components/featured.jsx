"use client";

import React, { useState, useEffect } from "react";
import styles from "../styles/product.module.scss";
import Link from "next/link";
import { useBasket } from "../components/shoppingBasket";

function Featured() {
  const { addItem } = useBasket();

  const [products, setProducts] = useState([]);
  const NUMBER_OF_PRODUCTS = 20;
  const NO_FEATURED_PRODUCTS = 6;

  const featuredProductIds = new Set();

  while(featuredProductIds.size < NO_FEATURED_PRODUCTS){
    featuredProductIds.add(Math.floor(Math.random() * NUMBER_OF_PRODUCTS) + 1)
  }

  console.log(featuredProductIds);

  useEffect(() => {
    const fetchProducts = async () => {

      const responce = await fetch("https://fakestoreapi.com/products");
      const products = await responce.json();
      setProducts(
        products.filter((p) => featuredProductIds.has(p.id))
      );
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <div className={styles.productGrid}>
      {products.map((product) => (
        <div className={styles.product} key={product.id}>
          <div className={styles.productImage}>
            <Link href={`/product/${product.id}`}>
              <img src={product.image} alt="product image" />
            </Link>
          </div>

          <h3 className={styles.title}>{product.title}</h3>
          <p className={styles.category}>{product.category}</p>
          <p className={styles.price}>£{product.price}</p>
          <button
            className={styles.addToCart}
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
