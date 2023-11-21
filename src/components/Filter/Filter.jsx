import styles from "./Filter.module.css";
import cn from "classnames";
import React from "react";

export function Filter({ activTab, onChange, elements }) {
  return (
    <div className={styles.filter}>
      {elements.map((item) => {
        return (
          <div
            className={cn(styles.tab, {
              [styles.active]: activTab === item,
            })}
            onClick={() => onChange(item)}
            key={item}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}
