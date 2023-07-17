import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Space } from "antd";
import styles from "./Icons.module.css";

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
            <ShoppingCartOutlined
              className={styles.cart}
              style={{
                color: cartActive ? "#1677ff" : "",
                borderRadius: 5,
              }}
              onClick={cartClick}
            />
            <UserOutlined
              className={styles.privetArea}
              style={{
                color: privetAreaActive ? "#1677ff" : "",
                borderRadius: 5,
              }}
              onClick={privetAreaClick}
            />
          </Space>
        </div>
      </div>
    </>
  );
}

export default Icons;
