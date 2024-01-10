"use client";

import styles from "../styles/product.module.scss";
import { useBasket } from "./shoppingBasket";
import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

function Products({ products }) {
  const { addItem } = useBasket();

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

export default Products;
