import styles from "./CartButton.module.css";
import { useState } from "react";

function CartButton() {
  const [count, setCount] = useState(1);

  function handleDec() {
    if (count > 1) setCount(count - 1);
  }
  function handleInc() {
    setCount(count + 1);
  }

  return (
    <>
      <div className={styles.cartButton}>
        <button onClick={handleDec} className={styles.button}>
          -
        </button>
        <div>{count}</div>
        <button onClick={handleInc} className={styles.button}>
          +
        </button>
      </div>
    </>
  );
}

export default CartButton;
