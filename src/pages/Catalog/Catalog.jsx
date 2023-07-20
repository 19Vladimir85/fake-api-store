// import { useEffect, useState } from "react";
import style from "./Catalog.module.css";
import { api } from "../../utils/api";
import Card from "../../components/Card/Card";
import useApi from "../../hooks/useApi";
import { Spin } from "antd";
import { useCallback } from "react";

function Catalog() {
  // const [products, setProducts] = useState([]);

  const getProducts = useCallback(() => api.getAllProducts(), []);
  const { data: products, error, loading } = useApi(getProducts);

  // useEffect(() => {
  //   api.getAllProducts().then((res) => setProducts(res));
  // }, []);
  return (
    <>
      {loading && <Spin />}
      {products && (
        <div className={style.catalog}>
          {products.map((el) => (
            <Card key={el.id} isFavorite={false} {...el}></Card>
          ))}
        </div>
      )}
    </>
  );
}
export default Catalog;
