import styles from "@/components/pro drive (websites)/prodrive.module.css";
import Image from "next/image";
import ProDriveAca from "@/assets/png/Group 1335 (3).png";
import Link from "next/link";
export default function ProDrive() {
  return (
    <div className={styles.sabirscolour}>
      <div className={styles.sabirswidth}>
        <div className={styles.mainflex}>
          <div className={styles.textflex}>
            <div className={styles.flex}>
              <div className={styles.aboutusstyling}>Pro Drive Academy</div>
              <h1 className={styles.heading}>Driving Success Digitally </h1>
            </div>

            <p className={styles.paragraph}>
              Pro Drive Academy needed a fresh and inviting site that appeals to
              both new learners and experienced drivers. Our design emphasizes
              usability and clarity, making it easy for users to book lessons
              and explore services.
              <br /> We integrated local SEO strategies and mobile
              responsiveness to drive traffic and boost conversions. The result
              is a modern platform that aligns with the academy’s reputation for
              excellence and reliability.
            </p>
            <Link href="https://prodriveacademy.co.uk/">
              <button className={styles.button}>Gp To Website</button>
            </Link>
          </div>
          <Image
            src={ProDriveAca}
            alt="pro drive academy"
            className={styles.mainsectionimg}
          />
        </div>
      </div>
    </div>
  );
}
