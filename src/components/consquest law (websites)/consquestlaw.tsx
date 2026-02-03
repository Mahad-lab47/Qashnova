import styles from "@/components/consquest law (websites)/consquestlaw.module.css";
import Image from "next/image";
import Conquest from "@/assets/png/Group 1335 (1).png";
import Link from "next/link";
export default function ConquestLaw() {
  return (
    <div className={styles.sabirscolour}>
      <div className={styles.sabirswidth}>
        <div className={styles.mainflex}>
          <div className={styles.textflex}>
            <div className={styles.flex}>
              <div className={styles.aboutusstyling}>Conquest Law</div>
              <h1 className={styles.heading}>Professionalism with Purpose</h1>
            </div>

            <p className={styles.paragraph}>
              For Conquest Law, we delivered a clean and authoritative web
              presence that instills trust and professionalism. The site layout
              is minimal yet impactful, highlighting their services and
              expertise with confidence.
              <br /> We ensured the site is both easy to navigate and optimized
              for accessibility, making it client-friendly and compliant. The
              overall design positions Conquest Law as a dependable partner for
              legal solutions.
            </p>
            <Link href="https://www.conquestlaw.co.uk/">
              <button className={styles.button}>Go To Website</button>
            </Link>
          </div>
          <Image
            src={Conquest}
            alt="conquest law"
            className={styles.mainsectionimg}
          />
        </div>
      </div>
    </div>
  );
}
