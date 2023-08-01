import React from "react";
import styles from "./page.module.css"; // Import other styles if needed
import Image from "next/image";
import data from "./data";
import "./page.module.css"; // Import the separate CSS file

const Land = () => {
  console.log(data);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Available Land for Sale</h1>
      <div className={styles.wrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Owner</th>
              <th>Plots</th>
              <th>Location</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr key={d.id}>
                <td>{d.id}</td>
                <td>{d.owner}</td>
                <td>{d.plots}</td>
                <td>{d.location}</td>
                <td>
                  <button className={styles.button}>View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Land;
