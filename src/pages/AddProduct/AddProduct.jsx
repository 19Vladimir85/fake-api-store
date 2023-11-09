import React from "react";
import style from "./AddProduct.module.css";
import Form from "../../components/Form/Form";

function AddProduct() {
  return (
    <>
      <h2 className={style.text}>Add product:</h2>
      <Form />
    </>
  );
}
export default AddProduct;
