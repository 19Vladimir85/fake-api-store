import styles from "./Card.module.css";
import React, { useState } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "../../utils/Skeleton";
import StarRating from "../StarRating/StarRating";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/actions/cartActions";

function Card({
  loading,
  id,
  isFavorite,
  image,
  title,
  description,
  category,
  price,
  product,
  rate,
}) {
  const [isLiked, setIsLiked] = useState(isFavorite);

  const dispatch = useDispatch();

  function handleAddProduct() {
    dispatch(addProduct({ id, ...product, count: 1 }));
  }
  return loading ? (
    <Skeleton count={5} />
  ) : (
    <div className={styles.card}>
      <img
        alt="heartImg"
        onClick={() => {
          setIsLiked(!isLiked);
        }}
        className={styles.isLiked}
        src={isLiked ? "images/blueHeart.png" : "images/whiteHeart.png"}
      ></img>
      <div className={styles.cardimg}>
        <Link className={styles.imagi} to={`/product/${id}`}>
          <img src={image} alt="img" className={styles.image}></img>
        </Link>
      </div>
      <div className={styles.aboutProduct}>
        <p className={styles.title}>Title: {title}</p>
        <p className={styles.description}>Description: {description}</p>
        <p className={styles.category}>Category: {category}</p>
        <p className={styles.price}>Price: {price}$</p>
        <StarRating rate={rate} />
      </div>
      <ShoppingCartOutlined
        className={styles.iconCart}
        onClick={handleAddProduct}
      />
    </div>
  );
}

export default Card;
