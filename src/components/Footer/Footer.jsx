import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contacts}>
        <div className={styles.adress}>Москва, Красная площадь, д.1</div>
        <div>Тел. +7(999)999-99-99</div>
        <div className={styles.footerNetWorks}>
          Мы в соц. сетях
          <a href="https://www.instagram.com/">
            <img className={styles.logoVk} src="./images/insta.png" alt="img" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
