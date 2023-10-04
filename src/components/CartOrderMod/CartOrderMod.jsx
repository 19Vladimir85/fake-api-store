import styles from "./CartOrderMod.module.css";

function CartOrderMod({ children }) {
  return (
    <div className={styles.orderModule}>
      <div className={styles.PriceBanner}>
        <div className={styles.price}>{children}</div>
      </div>
      <button className={styles.orderBtn}>К оформлению</button>
    </div>
  );
}

export default CartOrderMod;
