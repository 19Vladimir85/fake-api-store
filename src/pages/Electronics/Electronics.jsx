import { useCallback, useEffect } from "react";
import style from "./Electronics.module.css";
import { api } from "../../utils/api";
import Card from "../../components/Card/Card";
import useApi from "../../hooks/useApi";

function Electronics() {
  const getElectronicsProducts = useCallback(
    () => api.getElectronicsProducts(),
    []
  );
  const { data: products } = useApi(getElectronicsProducts);
  console.log("Render electronics");

  useEffect(() => {
    console.log("Call useEffect");
    getElectronicsProducts();
  }, [getElectronicsProducts]);

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
export default Electronics;
