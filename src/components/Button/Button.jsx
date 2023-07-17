import styles from "./Button.module.css";
import classNames from "classnames";

function Button({ theme, className, children }) {
  return (
    <div
      className={classNames(
        styles.btn,
        className,
        { [styles.light]: theme === "light" },
        { [styles.dark]: theme === "dark" }
      )}
    >
      <div className={styles.title}>{children}</div>
    </div>
  );
}

export default Button;
