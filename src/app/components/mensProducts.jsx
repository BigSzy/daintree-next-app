"use client"

import React, { useState, useEffect } from 'react'
import styles from '../styles/product.module.scss'
import { useBasket } from "../components/shoppingBasket";
import Link from 'next/link';

function MensProducts() {

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

  const filteredProducts = products.filter((item) => {
    return item.category === "men's clothing";
  });

  return (
    <div className={styles.productGrid}>
    {filteredProducts.map((product) => (
      <div className={styles.product} key={product.id}>
        <div className={styles.productImage}>
          <Link href={`/products/${product.id}`}>
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
  )
}

export default MensProducts