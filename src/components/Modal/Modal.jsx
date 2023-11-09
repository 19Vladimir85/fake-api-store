import styles from "./Modal.module.css";
import { CloseOutlined } from "@ant-design/icons";
import cn from "classnames";
import React from "react";

function Modal({ children, onClose, className }) {
  const handleClose = () => onClose(false);
  return (
    <div className={styles.wrapper} onClick={handleClose}>
      <div
        className={cn(styles.modal, className)}
        onClick={(event) => event.stopPropagation()}
      >
        <CloseOutlined className={styles.close} onClick={handleClose} />
        {children}
      </div>
    </div>
  );
}

export default Modal;
