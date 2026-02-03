import styles from "@/components/sabir's grill (websites)/sabirs.module.css";
import Image from "next/image";
import SabirsImg from "@/assets/png/Group 1335.png";
import Link from "next/link";
export default function Sabirs() {
  return (
    <div className={styles.sabirscolour}>
      <div className={styles.sabirswidth}>
        <div className={styles.mainflex}>
          <div className={styles.textflex}>
            <div className={styles.flex}>
              <div className={styles.aboutusstyling}>Sabir's Grill</div>
              <h1 className={styles.heading}>
                A Taste of Tradition with Modern Touch{" "}
              </h1>
            </div>

            <p className={styles.paragraph}>
              We brought the essence of Sabir’s Grill to life online by blending
              cultural richness with a sleek, modern interface. Our focus was on
              creating a seamless browsing experience that highlights their
              diverse food offerings and rich heritage. From mobile optimization
              to intuitive navigation, every design choice was made to enhance
              user engagement and drive online reservations. The result is a
              flavorful digital experience that mirrors the quality and warmth
              of their cuisine.
            </p>
            <Link href="https://www.sabirs.co.uk/home">
              <button className={styles.button}>Go To Website</button>
            </Link>
          </div>
          <Image
            src={SabirsImg}
            alt="sabirs"
            className={styles.mainsectionimg}
          />
        </div>
      </div>
    </div>
  );
}
