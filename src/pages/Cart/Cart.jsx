import React, { useEffect, useState } from "react";
import style from "./Cart.module.css";
import CartItem from "../../components/CartItem/CartItem";
import CartBanner from "../../components/CartBanner/CartBanner";
import { useSelector } from "react-redux";

function Cart() {
  // я иду в стор, беру кусочек cartReducer и из него беру массив карточек
  const products = useSelector((state) => state.cartReducer.cart);
  const [amount, setAmount] = useState(
    products.reduce((a, b) => a + b.price, 0)
  );

  useEffect(() => {
    setAmount(products.reduce((a, b) => a + b.price * b.count, 0));
  }, [products]);

  return (
    <>
      <h2 className={style.text}>Cart:</h2>
      <div className={style.cart}>
        <div className={style.itemList}>
          {products.length === 0 ? (
            <>
              <img
                src="images/emptyCart.svg"
                alt="emptyCart"
                className={style.image}
              />
              <h2 className={style.textInCart}>Yours cart is empty :( </h2>{" "}
            </>
          ) : (
            products?.map((el) => (
              <div key={el.title} className={style.cartItem}>
                <CartItem {...el}></CartItem>
              </div>
            ))
          )}
        </div>
        {products.length !== 0 && (
          <div>
            <CartBanner>{amount.toFixed(2)}$</CartBanner>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
