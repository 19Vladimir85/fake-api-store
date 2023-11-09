import styles from "./Banner.module.css";
import Button from "../Button/Button";
import InfoBlock from "../InfoBlock/InfoBlock";
import React from "react";

function Banner({ img, title, description, onClick }) {
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.aboutProduct}>
          <p className={styles.title}>{title}</p>
          <p className={styles.description}>{description}</p>
          <div className={styles.buttons}>
            <Button theme="light">Buy now</Button>
            <Button onClick={() => onClick(true)} theme="dark">
              Learn more
            </Button>
          </div>
        </div>
        <div className={styles.images}>
          <InfoBlock className={styles.adbanner}>
            More than 15 models of different colors and sizes
          </InfoBlock>
          <img src={img} alt="washingmachine" className={styles.image} />
        </div>
      </div>
    </>
  );
}

export default Banner;
