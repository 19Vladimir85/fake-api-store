import { useDispatch } from "react-redux";
import styles from "./CartButton.module.css";
import React, { useState } from "react";
import {
  decreaseProduct,
  increaseProduct,
} from "../../store/actions/cartActions";

function CartButton({ id, startCount }) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(startCount);

  function handleDec() {
    if (count > 1) setCount(count - 1);
    dispatch(decreaseProduct(id));
  }
  function handleInc() {
    setCount(count + 1);
    dispatch(increaseProduct(id));
  }

  return (
    <div className={styles.cartButton}>
      <button onClick={handleDec} className={styles.button}>
        -
      </button>
      <div>{count}</div>
      <button onClick={handleInc} className={styles.button}>
        +
      </button>
    </div>
  );
}

export default CartButton;
