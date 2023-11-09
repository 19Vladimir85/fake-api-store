import React from "react";
import styles from "./CardProduct.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import CartButton from "../../components/CartButton/CartButton";
import Button from "../../components/Button/Button";
import StarRating from "../../components/StarRating/StarRating";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/actions/cartActions";

function CardProduct() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();

  function handleAddProduct() {
    dispatch(addProduct({ ...product, count: 1 }));
  }

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
        <StarRating />
        <p>
          <b>Title:</b> {product.title}
        </p>
        <p>
          <b>Description:</b> {product.description}
        </p>
        <p>
          <b>Category:</b> {product.category}
        </p>
        <p>
          <b>Price:</b> {product.price}$
        </p>
        <div className={styles.inCart}>
          <CartButton />
          <Button
            className={styles.inCart_btn}
            theme={"dark"}
            onClick={handleAddProduct}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
