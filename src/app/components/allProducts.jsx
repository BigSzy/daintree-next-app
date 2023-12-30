"use client";

import React, { useState, useEffect } from "react";
import styles from "../styles/product.module.scss";
import Link from "next/link";
import { useBasket } from "../components/shoppingBasket";

function AllProducts() {
  const { addItem } = useBasket();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const responce = await fetch("https://fakestoreapi.com/products");
      const data = await responce.json();
      setProducts(data);
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

          <div className={styles.title}>
            <h4>{product.title}</h4>
          </div>
          
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

export default AllProducts;
