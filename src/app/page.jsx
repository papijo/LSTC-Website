import Image from "next/image";
import styles from "./page.module.css";
import Estate from "public/estate.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
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
        <div className={styles.imagewrapper}>
          <div className={styles.image}>
            <img
              src="https://images.unsplash.com/photo-1524813686514-a57563d77965?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZXN0YXRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
              alt="LSTC"
              className={styles.img}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
