import style from "./Catalog.module.css";
import { api } from "../../utils/api";
import Card from "../../components/Card/Card";
import useApi from "../../hooks/useApi";
import { useCallback, useState } from "react";
import { Filter } from "../../components/Filter/Filter";
import { tabs } from "../../utils/consts";

function Catalog() {
  const [currentTab, setCurrentTab] = useState("all");
  const getAllProducts = useCallback(() => api.getAllProducts(), []);
  const {
    data: products,
    loading,
    setData: setProducts,
  } = useApi(getAllProducts);

  function onChange(activTab) {
    setCurrentTab(activTab);
    if (activTab === "all") {
      api.getAllProducts().then((res) => setProducts(res));
    } else {
      api.getCategoryProducts(activTab).then((res) => setProducts(res));
    }
  }

  return (
    <div className={style.catalog}>
      <div className={style.filter}>
        <Filter tabs={tabs} onChange={onChange} activTab={currentTab} />
      </div>
      <div className={style.catalogCards}>
        {products
          ? products.map((el) => (
              <Card
                key={el.id}
                isFavorite={false}
                {...el}
                loading={loading}
              ></Card>
            ))
          : Array(10)
              .fill(1)
              .map((el) => (
                <Card
                  key={el.id}
                  isFavorite={false}
                  {...el}
                  loading={loading}
                ></Card>
              ))}
      </div>
    </div>
  );
}
export default Catalog;
