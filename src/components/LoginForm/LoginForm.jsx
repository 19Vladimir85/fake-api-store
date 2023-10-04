import styles from "./LoginForm.module.css";
import { useForm } from "react-hook-form";

function LoginForm({ onSubmit }) {
  const { register, handleSubmit } = useForm();

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        {...register("login", { required: true })}
        className={styles.input}
        placeholder="Логин"
      ></input>
      <input
        type="password"
        {...register("password", { required: true })}
        className={styles.input}
        placeholder="Пароль"
      ></input>
      <button className={styles.formButton} type="submit" onClick={onSubmit}>
        Авторизоваться
      </button>
    </form>
  );
}

export default LoginForm;
