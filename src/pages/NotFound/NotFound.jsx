import styles from "./NotFound.module.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div className={styles.error}>
        <img className={styles.img} src="images/404.png" alt="404"></img>
        <h1 className={styles.text}>Страница не найдена...</h1>
        <Link to="/">
          <button className={styles.button}>Вернуться на главную</button>
        </Link>
      </div>
    </>
  );
}
export default NotFound;
