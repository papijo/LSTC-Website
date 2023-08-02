import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const Rent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imagecontainer}>
          <Image
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="house"
            className={styles.image}
            fill
            style={{ borderRadius: "5px" }}
          />
        </div>
        <div className={styles.info}>
          <h4 className={styles.infoname}>Size: 3 Bedroom</h4>
          <h5 className={styles.infolocation}>Location: Rayfield, Jos</h5>
        </div>
      </div>
    </div>
  );
};

export default Rent;
