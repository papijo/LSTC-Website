import React from "react";
import styles from "./page.module.css";
import { data } from "./data";
import Image from "next/image";

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
      <h3 className={styles.formheading}>
        Still want a Commnunity Official to get back to you. Fill the form on
        the right side
      </h3>
      <div className={styles.contactform}>
        <div className={styles.forminfo}>
          <div className={styles.imagecontainer}>
            <img
              className={styles.image}
              src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29udGFjdCUyMHVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
              alt="LSTC"
            />
          </div>
        </div>
        <form className={styles.form} action="">
          <div className={styles.inputwrapper}>
            <input
              type="text"
              className={styles.inputfield}
              placeholder="Enter Your Name"
            />
            <label className={styles.inputlabel}>Name</label>
          </div>
          <div className={styles.inputwrapper}>
            <input
              type="text"
              className={styles.inputfield}
              placeholder="Enter Your Email"
            />
            <label className={styles.inputlabel}>Email</label>
          </div>
          <div className={styles.inputwrapper}>
            <input
              type="text"
              className={styles.inputfield}
              placeholder="Enter Your Phone Number"
            />
            <label className={styles.inputlabel}>Phone Number</label>
          </div>

          <div className={styles.inputwrapper}>
            <textarea
              type="text"
              className={[styles.inputfield]}
              placeholder="Enter Your Enquiry"
              rows="4"
            />
            <label className={styles.inputlabel}>Enquiry</label>
          </div>
          <button className={styles.formbutton}>Submit Enquiry</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
