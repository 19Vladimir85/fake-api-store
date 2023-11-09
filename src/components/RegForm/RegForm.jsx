import styles from "./RegForm.module.css";
import { useForm } from "react-hook-form";
import React from "react";
import { api } from "../../utils/api";

function RegForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    api.regNewUser(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("email", { required: true })}
        className={styles.input}
        type="email"
        placeholder="Email"
      ></input>
      {errors.email && <p className={styles.error}>Field is not filled</p>}
      <input
        {...register("username", { required: true })}
        className={styles.input}
        type="text"
        placeholder="Login"
      ></input>
      {errors.username && <p className={styles.error}>Field is not filled</p>}
      <input
        {...register("password", { required: true })}
        className={styles.input}
        type="password"
        placeholder="Password"
      ></input>
      {errors.password && <p className={styles.error}>Field is not filled</p>}
      <input
        {...register("firstname", { required: true })}
        className={styles.input}
        type="text"
        placeholder="Name"
      ></input>
      {errors.firstname && <p className={styles.error}>Field is not filled</p>}
      <input
        {...register("lastname", { required: true })}
        className={styles.input}
        type="text"
        placeholder="Surname"
      ></input>
      {errors.lastname && <p className={styles.error}>Field is not filled</p>}
      <input
        {...register("city", { required: true })}
        className={styles.input}
        type="text"
        placeholder="City"
      ></input>
      {errors.city && <p className={styles.error}>Field is not filled</p>}
      <input
        {...register("street", { required: true })}
        className={styles.input}
        type="text"
        placeholder="Street"
      ></input>
      {errors.street && <p className={styles.error}>Field is not filled</p>}
      <input
        {...register("number", { required: true })}
        className={styles.input}
        type="text"
        placeholder="House number"
      ></input>
      {errors.number && <p className={styles.error}>Field is not filled</p>}
      <input
        {...register("zipcode", { required: true })}
        className={styles.input}
        type="text"
        placeholder="Zipcode"
      ></input>
      {errors.zipcode && <p className={styles.error}>Field is not filled</p>}
      <input
        {...register("phone", { required: true })}
        className={styles.input}
        type="text"
        placeholder="Phone number"
      ></input>
      {errors.phone && <p className={styles.error}>Field is not filled</p>}
      <button className={styles.button} type="submit">
        Login
      </button>
    </form>
  );
}

export default RegForm;
