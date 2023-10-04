import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Space } from "antd";
import styles from "./Icons.module.css";
import { Link } from "react-router-dom";

function Icons() {
  const [cartActive, setCartActive] = useState(false);
  const [privetAreaActive, setPrivetAreaActive] = useState(false);
  function cartClick() {
    setCartActive(!cartActive);
    setPrivetAreaActive(false);
  }

  function privetAreaClick() {
    setPrivetAreaActive(!privetAreaActive);
    setCartActive(false);
  }
  return (
    <>
      <div className={styles.iconsConteiner}>
        <div className={styles.icons}>
          <Space>
            <Link className={styles.link} to="/cart">
              <ShoppingCartOutlined
                className={styles.cart}
                style={{
                  color: cartActive ? "#1677ff" : "",
                  borderRadius: 5,
                }}
                onClick={cartClick}
              />
            </Link>
            <Link className={styles.link} to="/registration">
              <UserOutlined
                className={styles.privetArea}
                style={{
                  color: privetAreaActive ? "#1677ff" : "",
                  borderRadius: 5,
                }}
                onClick={privetAreaClick}
              />
            </Link>
          </Space>
        </div>
      </div>
    </>
  );
}

export default Icons;
