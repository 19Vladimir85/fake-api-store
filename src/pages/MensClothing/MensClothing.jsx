import { useCallback, useEffect } from "react";
import style from "./MensClothing.module.css";
import { api } from "../../utils/api";
import Card from "../../components/Card/Card";
import useApi from "../../hooks/useApi";

function MensClothing() {
  const getMensClothingProducts = useCallback(
    () => api.getMensClothingProducts(),
    []
  );
  const { data: products } = useApi(getMensClothingProducts);
  console.log("Render mensClothing");

  useEffect(() => {
    console.log("Call useEffect");
    getMensClothingProducts();
  }, [getMensClothingProducts]);

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
export default MensClothing;
