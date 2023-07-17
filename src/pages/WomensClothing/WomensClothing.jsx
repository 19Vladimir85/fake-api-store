import { useEffect, useState } from "react";
import style from "./WomensClothing.module.css";
import { api } from "../../utils/api";
import Card from "../../components/Card/Card";

function WomensClothing() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.getWomensClothingProducts().then((res) => setProducts(res));
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
export default WomensClothing;
