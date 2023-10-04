import style from "./CartItem.module.css";
import CartButton from "../CartButton/CartButton";

function CartItem({ image, title, price }) {
  return (
    <div className={style.card}>
      <img src={image} alt="img" className={style.image}></img>
      <div className={style.aboutProduct}>
        <p className={style.title}>
          <b>Название:</b> {title}
        </p>
        <p className={style.price}>
          <b>Цена:</b> {price}$
        </p>
        <CartButton />
      </div>
    </div>
  );
}
export default CartItem;
