import styles from "@/components/what we do (about us)/whatwedo.module.css";
import Image from "next/image";
import MainPic from "@/assets/png/Rectangle 25.png";
export default function WhatWeDo() {
  return (
    <div className={styles.whatwedowidth}>
      <div className={styles.mainflex}>
        <Image src={MainPic} alt="mainpic" className={styles.mainimg} />
        <div className={styles.paragraphflex}>
          <div className={styles.headingflex}>
            <p className={styles.whatwedostyling}>What We Do</p>
            <h1 className={styles.heading}>
              Designing Websites That Make an
              <br /> Impact
            </h1>
          </div>

          <p className={styles.paragraph}>
            We specialize in creating beautiful, functional, and responsive
            websites tailored to your unique needs. At [Your Agency Name], we
            combine creativity with cutting-edge technology to deliver designs
            that captivate and connect with your audience. Whether it’s crafting
            a brand-new site or enhancing an existing one, we’re here to turn
            your digital dreams into reality.
          </p>
        </div>
      </div>
    </div>
  );
}
