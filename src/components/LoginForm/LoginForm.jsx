import styles from "./LoginForm.module.css";
import { useForm } from "react-hook-form";
import React from "react";

function LoginForm({ onSubmit }) {
  const { register, handleSubmit } = useForm();

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        {...register("login", { required: true })}
        className={styles.input}
        placeholder="Login"
      ></input>
      <input
        type="password"
        {...register("password", { required: true })}
        className={styles.input}
        placeholder="Password"
      ></input>
      <button className={styles.formButton} type="submit" onClick={onSubmit}>
        Sing in
      </button>
    </form>
  );
}

export default LoginForm;
