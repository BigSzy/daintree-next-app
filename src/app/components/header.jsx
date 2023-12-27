import React from "react";
import Link from "next/link";
import styles from "../styles/header.module.scss";
import { Playfair_Display } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import BasketIcon from "./basketIcon";

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerRow}>
        <div className={styles.headerCol}>
          <div className={styles.logo}>
            <Link href={"/"} className={playfairDisplay.className}>
              Daintree
            </Link>
          </div>
        </div>

        <div className={styles.headerCol}>
          <div className={styles.shoppingLinks}>
            <BasketIcon />
          </div>
        </div>
      </div>

      <div className={styles.headerRow2}>
        <Link href={"/categories/men's clothing"}>Men's</Link>
        <Link href={"/categories/women's clothing"}>Women's</Link>
        <Link href={"/categories/jewelery"}>Jewelery</Link>
        <Link href={"/categories/electronics"}>Technology</Link>
      </div>
    </header>
  );
}

export default Header;
