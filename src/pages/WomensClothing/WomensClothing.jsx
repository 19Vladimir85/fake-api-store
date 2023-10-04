import { useEffect, useCallback } from "react";
import style from "./WomensClothing.module.css";
import { api } from "../../utils/api";
import Card from "../../components/Card/Card";
import useApi from "../../hooks/useApi";

function WomensClothing() {
  const getWomensClothingProducts = useCallback(
    () => api.getWomensClothingProducts(),
    []
  );
  const { data: products } = useApi(getWomensClothingProducts);
  console.log("Render mensClothing");

  useEffect(() => {
    console.log("Call useEffect");
    getWomensClothingProducts();
  }, [getWomensClothingProducts]);

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
export default WomensClothing;
