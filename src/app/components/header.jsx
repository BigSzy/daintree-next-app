import React from "react";
import Link from "next/link";
import styles from "../styles/header.module.scss";
import { Playfair_Display } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping, faHeart } from "@fortawesome/free-solid-svg-icons";

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerRow}>
        <div className={styles.headerCol}>
          <div className={styles.logo}>
            <h2 className={playfairDisplay.className}>Daintree</h2>
          </div>
        </div>

        <div className={styles.headerCol}>
          <div className={styles.shoppingLinks}>
            <div className={styles.icon}>
              <Link href={"/wishlist"}>
                <FontAwesomeIcon icon={faHeart} />
              </Link>
            </div>
            <div className={styles.icon}>
              <Link href={"/shoppingBasket"}>
                <FontAwesomeIcon icon={faBasketShopping} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.headerRow2}>
        <Link href={'/mens'}>Men's</Link>
        <Link href={'/womens'}>Women's</Link>
        <Link href={'/jewelery'}>Jewelery</Link>
        <Link href={'/tech'}>Technology</Link>
      </div>
    </header>
  );
}

export default Header;
