import { useCallback, useEffect } from "react";
import style from "./Jewelery.module.css";
import { api } from "../../utils/api";
import Card from "../../components/Card/Card";
import useApi from "../../hooks/useApi";

function Jewelery() {
  const getJeweleryProducts = useCallback(() => api.getJeweleryProducts(), []);
  const { data: products } = useApi(getJeweleryProducts);
  console.log("Render jewelery");

  return (
    <>
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
export default Jewelery;
