import { Menu as MenuAntd } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../../src/context/UserContext";

const itemsLogin = [
  {
    label: "Главная",
    key: "/main",
  },
  {
    label: "Каталог",
    key: "/allproducts",
  },
  {
    label: "Доставка и оплата",
    key: "/conditions",
    children: [
      {
        label: "Условия доставки",
        key: "/delivery",
      },
      {
        label: "Условия оплаты",
        key: "/payment",
      },
    ],
  },
  {
    label: "Контакты",
    key: "/contacts",
  },
  {
    label: "Администрирование",
    key: "/administration",
    children: [
      {
        label: "Добавление товара",
        key: "/addproduct",
      },
    ],
  },
];

const itemsLogout = [
  {
    label: "Главная",
    key: "/main",
  },
  {
    label: "Каталог",
    key: "/allproducts",
  },
  {
    label: "Доставка и оплата",
    key: "/conditions",
    children: [
      {
        label: "Условия доставки",
        key: "/delivery",
      },
      {
        label: "Условия оплаты",
        key: "/payment",
      },
    ],
  },
  {
    label: "Контакты",
    key: "/contacts",
  },
];

function Menu() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState("mainpage");
  const { token } = useContext(UserContext);
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
    navigate(e.key);
  };

  return (
    <>
      {token ? (
        <MenuAntd
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={itemsLogin}
          style={{ minWidth: "575px" }}
        />
      ) : (
        <MenuAntd
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={itemsLogout}
          style={{ minWidth: "575px" }}
        />
      )}
    </>
  );
}

export default Menu;
