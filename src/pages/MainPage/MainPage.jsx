import styles from "./MainPage.module.css";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import { banner } from "../../utils/consts";
import { useEffect, useState } from "react";

function MainPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch("https://fakestoreapi.com/products?limit=3");
      const data = await response.json();
      setProducts(data);
    };
    getProduct();
  }, []);
  return (
    <>
      <div className={styles.MainPage}>
        <div className={styles.body}>
          <div className={styles.bodyBanner}>
            <Banner {...banner} />;
          </div>
          <div className={styles.bodyCards}>
            {products.map((el) => (
              <Card key={el.title} {...el}></Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
