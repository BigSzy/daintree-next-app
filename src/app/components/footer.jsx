import React from "react";
import styles from "../styles/footer.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faInstagram,
  faPinterest,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.social}>
        <div className={styles.icon}>
          <Link href={"/"}>
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </Link>
        </div>
        <div className={styles.icon}>
          <Link href={"/"}>
            <FontAwesomeIcon icon={faXTwitter} size="2x" />
          </Link>
        </div>
        <div className={`${styles.icon} ${styles.youtube}`}>
          <Link href={"/"}>
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </Link>
        </div>
        <div className={styles.icon}>
          <Link href={"/"}>
            <FontAwesomeIcon icon={faPinterest} size="2x" />
          </Link>
        </div>
        <div className={styles.icon}>
          <Link href={"/"}>
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </Link>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>&copy; 2023 Daintree Limited | All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
