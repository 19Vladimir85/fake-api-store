import style from "./Cart.module.css";
import CartItem from "../../components/CartItem/CartItem";
import CartOrderMod from "../../components/CartOrderMod/CartOrderMod";
import useApi from "../../hooks/useApi";
import { api } from "../../utils/api";
import { useCallback } from "react";

function Cart() {
  const getLimitProducts = useCallback(() => api.getLimitProducts(), []);
  const { data: products } = useApi(getLimitProducts);
  return (
    <>
      <h2 className={style.text}>Корзина:</h2>
      <div className={style.cart}>
        <div className={style.itemList}>
          {products?.map((el) => (
            <CartItem key={el.title} {...el}></CartItem>
          ))}
        </div>
        <div className={style.orderModule}>
          <CartOrderMod className={style.banner} children={"1294.67$"} />
        </div>
      </div>
    </>
  );
}

export default Cart;
