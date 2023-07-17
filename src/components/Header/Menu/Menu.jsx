import { Menu as MenuAntd } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const items = [
  {
    label: "Главная",
    key: "/main",
  },
  {
    label: "Каталог",
    key: "/catalog",
    children: [
      {
        label: "Все товары",
        key: "/allproducts",
      },
      {
        label: "Электроника",
        key: "/electronics",
      },
      {
        label: "Украшения",
        key: "/jewelery",
      },
      {
        label: "Мужская одежда",
        key: "/mensclothing",
      },
      {
        label: "Женская одежда",
        key: "/womensclothing",
      },
    ],
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

function Menu() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState("mainpage");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
    navigate(e.key);
  };

  return (
    <MenuAntd
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
}

export default Menu;
