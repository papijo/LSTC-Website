import React from "react";
import styles from "./page.module.css";
import data from "./data";
import Rent from "../../components/Application/Rent/Rent";

const page = () => {
  console.log(data);
  return (
    <>
      <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
        Available Houses for Rent
      </h1>
      <div className={styles.container}>
        {/* Create a Rent Component */}

        {/* Render a List */}

        {/* Create a filtered list */}
        {data.map((d) => (
          <Rent />
        ))}
      </div>
    </>
  );
};

export default page;
