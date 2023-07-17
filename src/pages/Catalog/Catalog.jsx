import { useEffect, useState } from "react";
import style from "./Catalog.module.css";
import { api } from "../../utils/api";
import Card from "../../components/Card/Card";

function Catalog() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.getAllProducts().then((res) => setProducts(res));
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
export default Catalog;
