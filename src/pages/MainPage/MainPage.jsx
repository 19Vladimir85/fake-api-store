import styles from "./MainPage.module.css";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import { banner } from "../../utils/consts";
// import { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import { api } from "../../utils/api";
import { useCallback, useState } from "react";
import Modal from "../../components/Modal/Modal";

function MainPage(onClick) {
  const getLimitProducts = useCallback(() => api.getLimitProducts(), []);
  const { data: products } = useApi(getLimitProducts);
  const [open, setOpen] = useState(false);
  console.log("Render jewelery");

  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const getProduct = async () => {
  //     const response = await fetch("https://fakestoreapi.com/products?limit=3");
  //     const data = await response.json();
  //     setProducts(data);
  //   };
  //   getProduct();
  // }, []);
  return (
    <>
      {open && (
        <Modal className={styles.modalWindow} onClose={setOpen}>
          Рекламная акция
        </Modal>
      )}
      <div className={styles.MainPage}>
        <div className={styles.body}>
          <div className={styles.bodyBanner}>
            <Banner onClick={setOpen} {...banner} />
          </div>
          <div className={styles.bodyCards}>
            {products?.map((el) => (
              <Card key={el.title} {...el}></Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
