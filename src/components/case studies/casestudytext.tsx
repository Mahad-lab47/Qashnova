import styles from "@/components/case studies/casestudies.module.css";

export default function Child({
  heading,
  paragraph,
}: {
  heading: string;
  paragraph: string;
}) {
  return (
    <div>
      <div className={styles.boxes}>
        <h1 className={styles.gridheading}>{heading}</h1>
        <p className={styles.gridparagraph}>{paragraph}</p>
      </div>
    </div>
  );
}
