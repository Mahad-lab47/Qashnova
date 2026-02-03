import styles from "@/components/workwithus (about us)/workwithus.module.css";
export default function WorkWithUsCard({
  button,
  heading,
  paragraph,
}: {
  button: string;
  heading: string;
  paragraph: string;
}) {
  return (
    <div>
      <div className={styles.boxes}>
        <button className={styles.button}>{button}</button>
        <div className={styles.boxheading}>{heading}</div>
        <p className={styles.boxparagraph}>{paragraph}</p>
      </div>
    </div>
  );
}
