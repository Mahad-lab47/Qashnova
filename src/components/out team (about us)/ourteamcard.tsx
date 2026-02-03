import Image from "next/image";
import styles from "@/components/out team (about us)/ourteam.module.css";
export default function OurTeamCard({
  img,
  heading,
  paragraph,
}: {
  img: any;
  heading: string;
  paragraph: string;
}) {
  return (
    <div className={styles.box}>
      <Image src={img} alt="beared" />
      <p className={styles.boxheading}>John peter</p>
      <p className={styles.boxline}>COO</p>
    </div>
  );
}
