import React from "react";
import styles from "../styles/product.module.scss";
import { useBasket } from "./shoppingBasket";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

function CartProduct({ items }) {
  const { removeProduct, removeItem, addItem } = useBasket();

  return (
    <div className={styles.productGrid}>
      {items.map((item) => (
        <div className={styles.product} key={item.id}>
          <div className={styles.productImage}>
            <img src={item.image} alt="product image" />
          </div>

          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.price}>£{item.price}</p>
          <p className={styles.price}>{item.qty}</p>

          <div className={styles.qtyControl}>
            <button className={styles.add} onClick={() => addItem(item)}>
              +
            </button>
            <button className={styles.remove} onClick={() => removeItem(item)}>
              -
            </button>
          </div>
          <button
            className={`${styles.removeAll} ${montserrat.className}`}
            onClick={() => removeProduct(item)}
          >
            Remove From Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default CartProduct;
