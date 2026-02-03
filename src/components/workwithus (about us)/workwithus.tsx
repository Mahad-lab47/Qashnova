import styles from "@/components/workwithus (about us)/workwithus.module.css";
import WorkWithUsCard from "./workwithuscard";
export default function WorkWithUs() {
  return (
    <div className={styles.sectioncolour}>
      <div className={styles.sectionwidth}></div>
      <div className={styles.headingflex}>
        <h1 className={styles.heading}>Why Work With Us</h1>
        <div className={styles.boxesflex}>
          <div>
            <WorkWithUsCard
              button="Experience"
              heading="Expertise You Can Trust"
              paragraph="With years of experience in web design, we combine creativity and technical excellence to craft stunning, high-performing websites tailored to your needs."
            />
          </div>
          <div>
            <WorkWithUsCard
              button="Apporch"
              heading="Client-Centric Approach"
              paragraph="Your vision is our priority. We work closely with you to deliver personalized designs that reflect your brand and exceed your expectations."
            />
          </div>
          <div>
            <WorkWithUsCard
              button="Results"
              heading="Results-Driven Design Solutions"
              paragraph="Your vision is our priority. We work closely with you to deliver personalized designs that reflect your brand and exceed your expectations."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
