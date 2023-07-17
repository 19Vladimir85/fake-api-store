import { useEffect, useState } from "react";
import style from "./MensClothing.module.css";
import { api } from "../../utils/api";
import Card from "../../components/Card/Card";

function MensClothing() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.getMensClothingProducts().then((res) => setProducts(res));
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
export default MensClothing;
