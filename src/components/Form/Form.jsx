import styles from "./Form.module.css";
import { useForm } from "react-hook-form";
import { api } from "../../utils/api";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    api.addNewProduct(data);
  };

  console.log(errors);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("image", { required: true })}
        className={styles.input}
        placeholder="Изображение"
      ></input>
      {errors.image && <p className={styles.error}>Поле не заполнено</p>}
      <input
        {...register("title", { required: true })}
        className={styles.input}
        placeholder="Название"
      ></input>
      {errors.title && <p className={styles.error}>Поле не заполнено</p>}
      <input
        {...register("description", { required: true })}
        className={styles.input}
        placeholder="Описание"
      ></input>
      {errors.description && <p className={styles.error}>Поле не заполнено</p>}
      <select
        {...register("category", { required: true })}
        className={styles.input}
        placeholder="Категория"
      >
        <option value="">Бижутерия</option>
        <option value="">Электроника</option>
        <option value="">Женская одежда</option>
        <option value="">Мужская одежда</option>
      </select>
      {errors.category && <p className={styles.error}>Поле не заполнено</p>}
      <input
        {...register("price", { required: true })}
        className={styles.input}
        placeholder="Цена"
      ></input>
      {errors.price && <p className={styles.error}>Поле не заполнено</p>}
      <button className={styles.button} type="submit">
        Добавить
      </button>
    </form>
  );
}

export default Form;
