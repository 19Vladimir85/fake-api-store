import { Menu as MenuAntd } from "antd";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../../src/context/UserContext";

const itemsLogout = [
  {
    label: "Main",
    key: "/main",
  },
  {
    label: "Сatalog",
    key: "/allproducts",
  },
  {
    label: "Shipping and payment",
    key: "/conditions",
    children: [
      {
        label: "Delivery",
        key: "/delivery",
      },
      {
        label: "Payment",
        key: "/payment",
      },
    ],
  },
  {
    label: "Contacts",
    key: "/contacts",
  },
];

const itemsLogin = [
  ...itemsLogout,
  {
    label: "Add product",
    key: "/addproduct",
  },
];

function Menu() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState("mainpage");
  const { token } = useContext(UserContext);
  const onClick = (e) => {
    setCurrent(e.key);
    navigate(e.key);
  };

  return (
    <MenuAntd
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={token ? itemsLogin : itemsLogout}
      style={{ minWidth: "575px" }}
    />
  );
}

export default Menu;
