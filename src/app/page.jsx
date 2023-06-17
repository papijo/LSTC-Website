import Image from "next/image";
import styles from "./page.module.css";
import Estate from "public/estate.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Embrace Tranquil Living at our Lovely Community
        </h1>
        <p className={styles.desc}>
          Welcome to Lo-Kwu Shehe Topp Community, where luxury and exclusivity
          harmonize. Experience privacy, security, and a vibrant community
          spirit. Discover our unparalleled amenities and embrace a truly
          remarkable living experience.
        </p>
        {/* Add Button Here */}
      </div>
      <div className={styles.itemtwo}>
        <Image src={Estate} alt="LSTC" className={styles.img} />
      </div>
    </div>
  );
}
