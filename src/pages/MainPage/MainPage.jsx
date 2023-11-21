import styles from "./MainPage.module.css";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import { banner } from "../../utils/consts";
import useApi from "../../hooks/useApi";
import { api } from "../../utils/api";
import React, { useCallback, useState } from "react";
import Modal from "../../components/Modal/Modal";

function MainPage() {
  const getLimitProducts = useCallback(() => api.getLimitProducts(), []);
  const { data: products } = useApi(getLimitProducts);
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <Modal className={styles.modalWindow} onClose={setOpen}>
          Advertising campaign
        </Modal>
      )}
      <div className={styles.MainPage}>
        <div className={styles.body}>
          <div className={styles.bodyBanner}>
            <Banner onClick={setOpen} {...banner} />
          </div>
          <div className={styles.bodyCards}>
            {products?.map((el) => (
              <Card product={el} key={el.title} {...el}></Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
