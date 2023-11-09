import styles from "./InfoBlock.module.css";
import { RightCircleOutlined } from "@ant-design/icons";
import classNames from "classnames";
import React from "react";

function InfoBlock({ className, children }) {
  return (
    <div className={classNames(styles.infoBlock, className)}>
      <div className={styles.description}>{children}</div>
      <RightCircleOutlined className={styles.iconRight} />
    </div>
  );
}

export default InfoBlock;
