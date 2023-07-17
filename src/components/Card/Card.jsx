import styles from "./Card.module.css";
import { useState } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Tooltip, Collapse } from "antd";
import cn from "classnames";
import { Link } from "react-router-dom";

function Card({ id, isFavorite, image, title, description, category, price }) {
  const [cardActive, setCardActive] = useState(false);
  const [isLiked, setIsLiked] = useState(isFavorite);

  const item = [
    {
      key: "1",
      label: "Описание:",
      children: <p>{description}</p>,
    },
  ];

  function cardClick() {
    setCardActive(!cardActive);
  }

  return (
    <>
      <div
        className={
          cardActive ? cn(styles.card, styles.opened) : cn(styles.card)
        }
        onClick={cardClick}
      >
        <img
          alt="heartImg"
          onClick={() => {
            isLiked ? setIsLiked(false) : setIsLiked(true);
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
          <Tooltip title={title}>
            <p className={styles.title}>Название: {title}</p>
          </Tooltip>
          <Collapse items={item}></Collapse>
          <p className={styles.category}>Категория: {category}</p>
          <p className={styles.price}>Цена: {price}$</p>
        </div>
        <div className={styles.iconConteiner}>
          <ShoppingCartOutlined className={styles.iconCart} />
        </div>
      </div>
    </>
  );
}

export default Card;
