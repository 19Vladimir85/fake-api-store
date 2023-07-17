import { useEffect, useState } from "react";
import style from "./Electronics.module.css";
import { api } from "../../utils/api";
import Card from "../../components/Card/Card";

function Electronics() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.getElectronicsProducts().then((res) => setProducts(res));
  }, []);
  return (
    <>
      <div className={style.catalog}>
        {products.map((el) => (
          <Card key={el.id} isFavorite={false} {...el}></Card>
        ))}
      </div>
    </>
  );
}
export default Electronics;
