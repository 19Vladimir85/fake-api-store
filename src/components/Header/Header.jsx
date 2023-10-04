import Menu from "./Menu/Menu";
import Icons from "./Icons/Icons";
import styles from "./Header.module.css";
import { Switch } from "antd";
import { themeContext } from "../../context/ThemeContext";
import { useContext } from "react";
import Button from "../Button/Button";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import { api } from "../../utils/api";
import { putLSItem } from "../../utils/localStorage";
import { UserContext } from "../../context/UserContext";
import { deleteLSItem } from "../../utils/localStorage";

function Header() {
  const { theme, onChangeTheme } = useContext(themeContext);
  const { token, onChangeLogin } = useContext(UserContext);
  const [open, setOpen] = useState(false);

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
    onChangeTheme(checked ? "white" : "black");
  };

  const onSubmit = (data) => {
    api.userLogin(data).then((res) => {
      putLSItem("token", res.token);
      onChangeLogin(res.token);
    });
    setOpen(false);
  };

  return (
    <>
      {open && (
        <Modal className={styles.modalWindow} onClose={setOpen}>
          <LoginForm onSubmit={onSubmit} />
        </Modal>
      )}
      <div className={styles.header}>
        <Menu />
        <div className={styles.controlItems}>
          {token ? (
            <Button
              className={styles.buttonLogout}
              onClick={() => {
                deleteLSItem("token");
                onChangeLogin();
              }}
            >
              Выйти
            </Button>
          ) : (
            <Button className={styles.buttonLogin} onClick={setOpen}>
              Войти
            </Button>
          )}

          <Switch checked={theme === "white"} onChange={onChange} />

          <Icons />
        </div>
      </div>
    </>
  );
}

export default Header;
