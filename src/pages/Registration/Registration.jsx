import styles from "./Registration.module.css";
import { useForm } from "react-hook-form";
import { api } from "../../utils/api";

function Registration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    api.regNewUser(data);
  };

  console.log(errors);

  return (
    <>
      <h2 className={styles.text}>Регистрация:</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("email", { required: true })}
          className={styles.input}
          type="email"
          placeholder="Эл. почта"
        ></input>
        {errors.email && <p className={styles.error}>Поле не заполнено</p>}
        <input
          {...register("username", { required: true })}
          className={styles.input}
          type="text"
          placeholder="Логин"
        ></input>
        {errors.username && <p className={styles.error}>Поле не заполнено</p>}
        <input
          {...register("password", { required: true })}
          className={styles.input}
          type="password"
          placeholder="Пароль"
        ></input>
        {errors.password && <p className={styles.error}>Поле не заполнено</p>}
        <input
          {...register("firstname", { required: true })}
          className={styles.input}
          type="text"
          placeholder="Имя"
        ></input>
        {errors.firstname && <p className={styles.error}>Поле не заполнено</p>}
        <input
          {...register("lastname", { required: true })}
          className={styles.input}
          type="text"
          placeholder="Фамилия"
        ></input>
        {errors.lastname && <p className={styles.error}>Поле не заполнено</p>}
        <input
          {...register("city", { required: true })}
          className={styles.input}
          type="text"
          placeholder="Город"
        ></input>
        {errors.city && <p className={styles.error}>Поле не заполнено</p>}
        <input
          {...register("street", { required: true })}
          className={styles.input}
          type="text"
          placeholder="Улица"
        ></input>
        {errors.street && <p className={styles.error}>Поле не заполнено</p>}
        <input
          {...register("number", { required: true })}
          className={styles.input}
          type="text"
          placeholder="Дом"
        ></input>
        {errors.number && <p className={styles.error}>Поле не заполнено</p>}
        <input
          {...register("zipcode", { required: true })}
          className={styles.input}
          type="text"
          placeholder="Индекс"
        ></input>
        {errors.zipcode && <p className={styles.error}>Поле не заполнено</p>}
        <input
          {...register("phone", { required: true })}
          className={styles.input}
          type="text"
          placeholder="Телефон"
        ></input>
        {errors.phone && <p className={styles.error}>Поле не заполнено</p>}
        <button className={styles.button} type="submit">
          Зарегистрироваться
        </button>
      </form>
    </>
  );
}

export default Registration;
