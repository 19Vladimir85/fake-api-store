import style from "./CartItem.module.css";
import CartButton from "../CartButton/CartButton";
import Button from "../Button/Button";
import React from "react";
import { deleteProduct } from "../../store/actions/cartActions";
import { useDispatch } from "react-redux";

function CartItem({ image, title, price, id, count }) {
  const dispatch = useDispatch();
  function handleDeleteProduct() {
    dispatch(deleteProduct(id));
  }

  return (
    <div className={style.card}>
      <img src={image} alt="img" className={style.image}></img>
      <div className={style.aboutProduct}>
        <p>
          <b>Title:</b> {title}
        </p>
        <p>
          <b>Price:</b> {price}$
        </p>
        <div className={style.buttons}>
          <CartButton startCount={count} id={id} />
          <Button className={style.dlt_btn} onClick={handleDeleteProduct}>
            Delete product
          </Button>
        </div>
      </div>
    </div>
  );
}
export default CartItem;
