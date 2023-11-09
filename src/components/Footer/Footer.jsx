import styles from "./Footer.module.css";
import React from "react";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contacts}>
        <div className={styles.footerItem}>Moscow, Red Square, 1</div>
        <div>Phone. +7(999)999-99-99</div>
        <div className={styles.footerItem}>
          We are on social media networks
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={styles.logoVk} src="./images/insta.png" alt="img" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
