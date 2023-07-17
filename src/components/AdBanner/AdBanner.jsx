import styles from "./AdBanner.module.css";
import { RightCircleOutlined } from "@ant-design/icons";
import classNames from "classnames";

function AdBanner({ className, children }) {
  return (
    <div className={classNames(styles.adBanner, className)}>
      <div className={styles.description}>{children}</div>
      <RightCircleOutlined className={styles.iconRight} />
    </div>
  );
}

export default AdBanner;
