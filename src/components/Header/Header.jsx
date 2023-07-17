import Menu from "./Menu/Menu";
import Icons from "./Icons/Icons";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <Menu />
      <Icons />
    </div>
  );
}

export default Header;
