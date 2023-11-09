import React from 'react'
import styles from '../styles/footer.module.scss'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFacebook, faInstagram, faInstagramSquare, faPinterest, faPinterestP, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.social}>
            <div className={styles.icon}>
                <Link href={'/'} ><FontAwesomeIcon icon={faFacebook} /></Link>
            </div>
            <div className={styles.icon}>
                <Link href={'/'} ><FontAwesomeIcon icon={faXTwitter} /></Link>
            </div>
            <div className={`${styles.icon} ${styles.youtube}`}>
                <Link href={'/'} ><FontAwesomeIcon icon={faYoutube} /></Link>
            </div>
            <div className={styles.icon}>
                <Link href={'/'} ><FontAwesomeIcon icon={faPinterest} /></Link>
            </div>
            <div className={styles.icon}>
                <Link href={'/'} ><FontAwesomeIcon icon={faInstagram} /></Link>
            </div>
        </div>

        <div className={styles.copyright}>
            <p>&copy; 2023 Daintree Limited | All Rights Reserved</p> 
        </div>
    </footer>
  )
}

export default Footer