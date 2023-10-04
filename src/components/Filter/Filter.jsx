import styles from "./Filter.module.css";
import cn from "classnames";

export function Filter({ tabs, activTab, onChange }) {
  console.log(activTab);
  return (
    <div className={styles.filter}>
      {tabs.map((item) => {
        return (
          <div
            className={cn(styles.tab, {
              [styles.active]: activTab === item.id,
            })}
            onClick={() => onChange(item.id)}
            key={item.id}
          >
            {item.title}
          </div>
        );
      })}
    </div>
  );
}
