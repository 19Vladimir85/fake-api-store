import styles from "./Banner.module.css";
import Button from "../Button/Button";
import AdBanner from "../AdBanner/AdBanner";

function Banner({ img, title, description }) {
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.aboutProduct}>
          <p className={styles.title}>{title}</p>
          <p className={styles.description}>{description}</p>
          <div className={styles.buttons}>
            <Button theme="light">Купить сейчас</Button>
            <Button theme="dark">Узнать больше</Button>
          </div>
        </div>
        <div className={styles.images}>
          <AdBanner className={styles.adbanner}>
            Больше 15 моделей разных цветов и размеров
          </AdBanner>
          <img src={img} alt="washingmachine" className={styles.image} />
        </div>
      </div>
    </>
  );
}

export default Banner;
