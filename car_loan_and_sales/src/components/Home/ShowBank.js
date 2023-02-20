import React from "react";
import styles from "./css/Third.module.css"
const ShowBank = (props) => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center pb-4">
        <div className={styles.button}>
          <img src={props.image} className={styles.image} alt="bankImage" />
        </div>
        <h5 className="text-white mt-4">{props.name}</h5>
      </div>
    </>
  );
};

export default ShowBank;
