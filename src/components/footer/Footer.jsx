import Link from "next/link";
import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Lo-Kwu Shehe Topp Community. All Rights Reserved.</div>
      <div>
        Designed with{" "}
        <Link href="https://ebhota.github.io">Love by Papijo</Link> &{" "}
        <Link href="https://www.cvspan.com/">CV Span</Link>{" "}
      </div>
      <div>
        <div className={styles.social}>
          <Image
            src="/1.png"
            width={25}
            height={25}
            className={styles.icon}
            alt="LSTC"
          />
          <Image
            src="/2.png"
            width={25}
            height={25}
            className={styles.icon}
            alt="LSTC"
          />
          <Image
            src="/3.png"
            width={25}
            height={25}
            className={styles.icon}
            alt="LSTC"
          />
          <Image
            src="/4.png"
            width={25}
            height={25}
            className={styles.icon}
            alt="LSTC"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
