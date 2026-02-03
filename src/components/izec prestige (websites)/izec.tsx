import styles from "@/components/izec prestige (websites)/izec.module.css";
import Image from "next/image";
import Izec from "@/assets/png/Group 1335 (2).png";
import Link from "next/link";
export default function IzecPrestiage() {
  return (
    <div className={styles.sabirscolour}>
      <div className={styles.sabirswidth}>
        <div className={styles.mainflex}>
          <Image
            src={Izec}
            alt="izec prestiage"
            className={styles.mainsectionimg}
          />
          <div className={styles.textflex}>
            <div className={styles.flex}>
              <div className={styles.aboutusstyling}>IZEC Prestige</div>
              <h1 className={styles.heading}>Luxury on Display </h1>
            </div>

            <p className={styles.paragraph}>
              We redefined the digital face of Izec Prestige with an elegant,
              responsive design that captures the essence of premium chauffeur
              services. Every section is crafted to convey exclusivity, trust,
              and sophistication. Real imagery, luxurious fonts, and seamless
              transitions give users a first-class experience from start to
              finish. The site is structured to boost inquiries and establish
              Izec Prestige as a top-tier transport provider.
            </p>
            <Link href="https://www.izecprestige.co.uk/">
              <button className={styles.button}>Go to Website</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
