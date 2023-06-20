import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmllbGR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
          fill
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Exquisite Residence</h1>
          <h2 className={styles.imgDesc}>
            Indulge in a tranquil and prestigious lifestyle
          </h2>
        </div>
        ;
      </div>
      ;
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Community Overview </h1>
          <p className={styles.desc}>
            Lo-Kwu Shehe Topp Community is a premier gated community nestled in
            the heart of a picturesque landscape in Rayfield. With its
            captivating natural surroundings and meticulously designed
            architecture, our community offers a truly exceptional living
            experience. Our vision is to create a vibrant and inclusive
            environment where residents can enjoy a luxurious lifestyle combined
            with a strong sense of community. We pride ourselves on our
            commitment to providing top-notch amenities, ensuring privacy and
            security, and fostering a warm and welcoming atmosphere for all who
            call Lo-Kwu Shehe Topp Community home.
          </p>
        </div>
        <div className={styles.item}>
          <h1>Benefits of living here</h1>
          <p className={styles.desc}>
            At Lo-Kwu Shehe Topp Community, residents have the opportunity to
            embrace an unparalleled range of amenities and recreational
            facilities. From the moment you step through our secure gates, you
            will be greeted by beautifully landscaped grounds, inviting parks,
            and serene walking trails that invite you to explore the natural
            beauty of our community. With a dedicated community management team
            in place, we strive to ensure that Lo-Kwu Shehe Topp Community
            remains a well-maintained and harmonious place to reside, fostering
            a true sense of belonging among our residents.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
