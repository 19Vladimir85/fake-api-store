import style from "./AddProduct.module.css";
import Form from "../../components/Form/Form";

function AddProduct() {
  return (
    <>
      <h2 className={style.text}>Добавить товар:</h2>
      <Form></Form>
    </>
  );
}
export default AddProduct;
