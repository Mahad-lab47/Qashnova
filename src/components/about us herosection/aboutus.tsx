import styles from "@/components/about us herosection/aboutus.module.css";
import Image from "next/image";
import HeroSectionImg from "@/assets/png/Rectangle 6.png";
export default function AboutUsHero() {
  return (
    <div className={styles.aboutuswidth}>
      <div className={styles.mainflex}>
        <div className={styles.textflex}>
          <div className={styles.flex}>
            <div className={styles.aboutusstyling}>ABOUT US</div>
            <h1 className={styles.heading}>
              Designing <span className={styles.digitalstyling}>Digital</span>
              <br />
              Experiences That Inspire<span className={styles.fullstop}>.</span>
            </h1>
            <p className={styles.paragraph}>
              we specialize in creating stunning, user-friendly websites that
              bring your vision to life.
            </p>
          </div>
          <button className={styles.button}>Get Started</button>
        </div>
        <Image
          src={HeroSectionImg}
          alt="herosectionimg"
          className={styles.mainsectionimg}
        />
      </div>
    </div>
  );
}
