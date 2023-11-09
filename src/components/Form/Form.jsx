import styles from "./Form.module.css";
import { useForm } from "react-hook-form";
import { api } from "../../utils/api";
import React, { useEffect, useState } from "react";

function Form() {
  const [categories, setCategories] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    api.addNewProduct(data);
  };

  useEffect(() => {
    api.getAllCategories().then((res) => setCategories(res));
  }, []);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("image", { required: true })}
        className={styles.input}
        placeholder="Image"
      ></input>
      {errors.image && <p className={styles.error}>Field is not filled</p>}
      <input
        {...register("title", { required: true })}
        className={styles.input}
        placeholder="Title"
      ></input>
      {errors.title && <p className={styles.error}>Field is not filled</p>}
      <input
        {...register("description", { required: true })}
        className={styles.input}
        placeholder="Description"
      ></input>
      {errors.description && (
        <p className={styles.error}>Field is not filled</p>
      )}
      <select
        {...register("category", { required: true })}
        className={styles.input}
        placeholder="Category"
      >
        {categories.map((el) => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
      </select>
      {errors.category && <p className={styles.error}>Field is not filled</p>}
      <input
        {...register("price", { required: true })}
        className={styles.input}
        placeholder="Price"
      ></input>
      {errors.price && <p className={styles.error}>Field is not filled</p>}
      <button className={styles.button} type="submit">
        Add
      </button>
    </form>
  );
}

export default Form;
