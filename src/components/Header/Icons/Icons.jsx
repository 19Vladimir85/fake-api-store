import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import React from "react";
import { Space } from "antd";
import styles from "./Icons.module.css";
import { Link, useHref } from "react-router-dom";
import { useSelectProductCartCount } from "../../../store/selectors/cartSelectors";

function Icons() {
  const link = useHref();

  return (
    <>
      <div className={styles.iconsConteiner}>
        <div className={styles.icons}>
          <Space>
            <Link className={styles.link} to="/cart">
              <div className={styles.label}>{useSelectProductCartCount()}</div>

              <ShoppingCartOutlined
                className={styles.cart}
                style={{
                  color: link === "cart" ? "#1677ff" : "",
                  borderRadius: 5,
                }}
              />
            </Link>
            <Link className={styles.link} to="/registration">
              <UserOutlined
                className={styles.privetArea}
                style={{
                  color: link === "registration" ? "#1677ff" : "",
                  borderRadius: 5,
                }}
              />
            </Link>
          </Space>
        </div>
      </div>
    </>
  );
}

export default Icons;
