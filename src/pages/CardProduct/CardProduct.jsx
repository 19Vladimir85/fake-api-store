import styles from "./CardProduct.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

function CardProduct() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };
    getProduct();
  }, [id]);

  return (
    <div className={styles.cardProduct}>
      <div className={styles.cardimg}>
        <img src={product.image} alt="img" className={styles.image}></img>
      </div>
      <div className={styles.aboutProduct}>
        <p className={styles.title}>
          <b>Название:</b> {product.title}
        </p>
        <p className={styles.description}>
          <b>Описание:</b> {product.description}
        </p>
        <p className={styles.category}>
          <b>Категория:</b> {product.category}
        </p>
        <p className={styles.price}>
          <b>Цена:</b> {product.price}$
        </p>
      </div>
    </div>
  );
}

export default CardProduct;
