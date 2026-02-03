import styles from "@/components/our services/ourservices.module.css";
import WebDevelopment from "@/assets/svg/8541628_database_data_storage_icon 1.svg";
import Image from "next/image";
export default function OurServicesCard({
  img,
  heading,
  paragraph,
}: {
  img: any;
  heading: string;
  paragraph: string;
}) {
  return (
    <div>
      <div className={styles.boxes}>
        <div className={styles.boxheadingflex}>
          <Image className={styles.logo} src={img} alt="web development" />
          <p className={styles.boxheading}>{heading} </p>
        </div>
        <p className={styles.boxparagraph}>{paragraph}</p>
      </div>
    </div>
  );
}
