import styles from "@/components/case studies/casestudies.module.css";
import Image from "next/image";

export default function CaseStudyCard({ img }: any) {
  return (
    <div>
      <div className={styles.flex}>
        <Image className={styles.gridimg} src={img} alt="shoes" />
      </div>
    </div>
  );
}
