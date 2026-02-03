import styles from "@/components/saif boxing (websites)/saifboxing.module.css";
import Image from "next/image";
import SaifBoxingFit from "@/assets/png/Group 1336.png";
import Link from "next/link";
export default function SaifBoxing() {
  return (
    <div className={styles.sabirscolour}>
      <div className={styles.sabirswidth}>
        <div className={styles.mainflex}>
          <Image
            src={SaifBoxingFit}
            alt="saif boxing"
            className={styles.mainsectionimg}
          />
          <div className={styles.textflex}>
            <div className={styles.flex}>
              <div className={styles.aboutusstyling}>
                Saif’s Boxing & Fitness
              </div>
              <h1 className={styles.heading}>A Knockout Digital Presence </h1>
            </div>

            <p className={styles.paragraph}>
              Saif’s Boxing needed a bold and gritty online identity that
              reflects the energy of the gym and its community. We crafted a
              high-impact design that showcases training programs, client
              transformations, and class schedules with clarity and strength.
              The website is mobile-responsive and optimized for local search,
              helping potential clients discover Saif’s and sign up with ease.
              The visual style evokes power and discipline, matching the spirit
              of the gym itself.
            </p>
            <Link href="https://www.saifsboxing.com/">
              {" "}
              <button className={styles.button}>Go to Website</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
