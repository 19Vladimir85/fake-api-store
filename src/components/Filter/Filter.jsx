import styles from "./Filter.module.css";
import cn from "classnames";
import React, { useEffect, useState } from "react";
import { api } from "../../utils/api";

export function Filter({ activTab, onChange }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api.getAllCategories().then((res) => setCategories(res));
  }, []);

  return (
    <div className={styles.filter}>
      {categories.map((item) => {
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
