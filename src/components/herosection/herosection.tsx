import styles from "./herosection.module.css";
import Image from "next/image";
import HeroSectionImage from "@/assets/png/Group 3.png";
export default function HeroSection() {
  return (
    <div className={styles.herosectionwidth}>
      <div className={styles.herosectionflex}>
        <div className={styles.sectiononewidth}>
          <div className={styles.headingflex}>
            <h1 className={styles.headingwidth}>
              Brighten Your
              <span className={styles.brandstyling}> Brand</span>
              <br></br> with Pulse Technology
              <span className={styles.headingfullstop}>.</span>
            </h1>
            <p className={styles.paragraphwidth}>
              We specialize in creating innovative websites and marketing
              strategies that drive results. Let us help you shine brighter in
              the digital landscape.
            </p>
          </div>
          <div className={styles.buttonflex}>
            <button className={styles.startedbutton}>Get Started</button>
            <button className={styles.learnbutton}> Learn More</button>
          </div>
        </div>
        <Image
          className={styles.herosectionimage}
          src={HeroSectionImage}
          alt="herosectionimage"
          // width={392}
          // height={426}
        />
      </div>
    </div>
  );
}
