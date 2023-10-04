import styles from "./Modal.module.css";
import { CloseOutlined } from "@ant-design/icons";
import cn from "classnames";

function Modal({ children, onClose, className }) {
  return (
    <div className={styles.wrapper} onClick={() => onClose(false)}>
      <div
        className={cn(styles.modal, className)}
        onClick={(event) => event.stopPropagation()}
      >
        <CloseOutlined
          className={styles.close}
          onClick={() => onClose(false)}
        />
        {children}
      </div>
    </div>
  );
}

export default Modal;
