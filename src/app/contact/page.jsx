import React from "react";
import styles from "./page.module.css";
import { data } from "./data";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>We will Love to hear from you</h1>
      <p className={styles.subtitle}>
        Whether you are looking to buy a house or rent one, buy land or carry
        out any business in this neighborhood - we are ready to answer any and
        all questions
      </p>
      <div className={styles.cards}>
        {data.map((d) => {
          return (
            <div key={d.id} className={styles.card}>
              <h4>{d.title} </h4>
              <p className={styles.small}>{d.body}</p>
              <div className={styles.gocorner} href="#">
                <div className={styles.goarrow}>→</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
