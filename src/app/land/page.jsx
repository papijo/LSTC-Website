import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const Land = () => {
  return (
    <div>
      <h1 className={styles.title}>Available Land for Sale</h1>
      <div className={styles.innercontainer}>
        <div className={styles.wrapper}>
          <div className={styles.imginfo}>
            <img
              src="https://images.unsplash.com/photo-1503453363464-743ee9ce1584?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt="Land"
              className={styles.image}
            />
          </div>

          <div className={styles.landinfo}>
            <h3 className={styles.landinfotitle}>Land Information</h3>
            <div className={styles.landinnerinfo}>
              <p className={styles.paragraph}>
                {" "}
                <b>Owner:</b> Ebhota Jonathan
              </p>
              <p className={styles.paragraph}>
                {" "}
                <b>Plots:</b> 4
              </p>
              <p className={styles.paragraph}>
                {" "}
                <b>Location:</b> Shinco Junction
              </p>
              <p className={styles.paragraph}>
                {" "}
                <b>Description:</b> Square Land at 2 miles off the main road
              </p>
              <p className={styles.paragraph}>
                {" "}
                <b>C of O:</b> Yes
              </p>
              <p className={styles.paragraph}>
                {" "}
                <b>R of O:</b> Yes
              </p>
              <p className={styles.paragraph}>
                {" "}
                <b>Price:</b> N45,000,000.00
              </p>
              <p className={styles.paragraph}>
                {" "}
                <b>Negotiable:</b> Yes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Land;
