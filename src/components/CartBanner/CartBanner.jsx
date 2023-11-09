import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import styles from "./CartBanner.module.css";
import React from "react";
import { clearCart } from "../../store/actions/cartActions";

function CartBanner({ children }) {
  const dispatch = useDispatch();
  function hendleClearCart() {
    dispatch(clearCart());
  }
  return (
    <div className={styles.orderModule}>
      <div className={styles.price}>{children}</div>
      <button className={styles.orderBtn}>Сheckout</button>
      <Button className={styles.dlt_btn} onClick={hendleClearCart}>
        Remove all
      </Button>
    </div>
  );
}

export default CartBanner;
