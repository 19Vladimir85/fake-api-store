import styles from "./Button.module.css";
import classNames from "classnames";
import { useContext } from "react";
import { themeContext } from "../../context/ThemeContext";

function Button({ className, children, onClick }) {
  const { theme } = useContext(themeContext);

  return (
    <div
      className={classNames(
        styles.btn,
        className,
        { [styles.light]: theme === "white" },
        { [styles.dark]: theme === "black" }
      )}
      onClick={onClick}
    >
      <div className={styles.title}>{children}</div>
    </div>
  );
}

export default Button;
