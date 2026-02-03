import styles from "@/components/our work (websites)/ourwork.module.css";
import HeroSectionImg from "@/assets/png/image 1.png";
import Image from "next/image";

export default function OurWork() {
  return (
    <div className={styles.aboutuswidth}>
      <div className={styles.mainflex}>
        <div className={styles.textflex}>
          <div className={styles.flex}>
            <div className={styles.aboutusstyling}>OUR WORK</div>
            <h1 className={styles.heading}>
              Look At Our Finest
              <span className={styles.digitalstyling}>Creations</span>
            </h1>
          </div>

          <p className={styles.paragraph}>
            Explore the pinnacle of creativity with our standout projects that
            blend strategy, design, and innovation. Each campaign is a testament
            to our passion for delivering results that captivate and convert.
          </p>
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
