import styles from "./Registration.module.css";
import React from "react";
import RegForm from "../../components/RegForm/RegForm";

function Registration() {
  return (
    <>
      <h2 className={styles.text}>Registration:</h2>
      <RegForm />
    </>
  );
}

export default Registration;
