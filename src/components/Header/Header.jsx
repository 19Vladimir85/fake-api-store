import Menu from "./Menu/Menu";
import Icons from "./Icons/Icons";
import styles from "./Header.module.css";
import { Switch } from "antd";
import { themeContext } from "../../context/ThemeContext";
import React, { useContext } from "react";
import Button from "../Button/Button";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import { api } from "../../utils/api";
import { putLSItem, deleteLSItem } from "../../utils/localStorage";
import { UserContext } from "../../context/UserContext";
import { darkTheme, liteTheme, access } from "../../utils/consts";

function Header() {
  const { theme, onChangeTheme } = useContext(themeContext);
  const { token, onChangeLogin } = useContext(UserContext);
  const [open, setOpen] = useState(false);

  const onChange = (checked) => {
    onChangeTheme(checked ? liteTheme : darkTheme);
  };

  const onSubmit = (data) => {
    api.userLogin(data).then((res) => {
      putLSItem(access, res.token);
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
                deleteLSItem(access);
                onChangeLogin();
              }}
            >
              Sing out
            </Button>
          ) : (
            <Button className={styles.buttonLogin} onClick={setOpen}>
              Sing in
            </Button>
          )}

          <Switch checked={theme === liteTheme} onChange={onChange} />

          <Icons />
        </div>
      </div>
    </>
  );
}

export default Header;
