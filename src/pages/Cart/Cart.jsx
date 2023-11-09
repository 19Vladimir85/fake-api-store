import React from "react";
import style from "./Cart.module.css";
import CartItem from "../../components/CartItem/CartItem";
import CartBanner from "../../components/CartBanner/CartBanner";
import { useSelector } from "react-redux";

function Cart() {
  // я иду в стор, беру кусочек cartReducer и из него беру массив карточек
  const products = useSelector((state) => state.cartReducer.cart);
  const cart = useSelector((state) => state.cartReducer.cart);
  return (
    // <>
    //   {cart.length === 0 ? (
    //     <h2 className={style.text}>Cart: is empty</h2>
    //   ) : (
    //     <h2 className={style.text}>Cart:</h2>
    //   )}
    //   {/* <h2 className={style.text}>Cart:</h2> */}
    //   <div className={style.cart}>
    //     <div className={style.itemList}>
    //       {products?.map((el) => (
    //         <CartItem key={el.title} {...el}></CartItem>
    //       ))}
    //     </div>
    //     <div>
    //       <CartBanner className={style.banner}>1294.67$</CartBanner>
    //     </div>
    //   </div>
    // </>
    <>
      <h2 className={style.text}>Cart:</h2>
      {cart.length === 0 ? (
        <div className={style.cart}>
          <div className={style.itemList}>
            <img
              src="images/emptyCart.svg"
              alt="emptyCart"
              className={style.image}
            />
            <h2 className={style.text}>Yours cart is empty :(</h2>
          </div>
        </div>
      ) : (
        <div className={style.cart}>
          <div className={style.itemList}>
            {products?.map((el) => (
              <div className={style.cartItem}>
                <CartItem key={el.title} {...el}></CartItem>
              </div>
            ))}
          </div>
          <div>
            <CartBanner>1294.67$</CartBanner>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
