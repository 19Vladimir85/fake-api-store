import styles from "./NotFound.module.css";
import { Link } from "react-router-dom";
import React from "react";

function NotFound() {
  return (
    <div className={styles.error}>
      <img className={styles.img} src="images/404.png" alt="404"></img>
      <h1 className={styles.text}>Page not found...</h1>
      <Link to="/">
        <button className={styles.button}>Back to the main</button>
      </Link>
    </div>
  );
}
export default NotFound;
