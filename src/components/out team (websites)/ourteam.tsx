import styles from "@/components/out team (websites)/ourteam.module.css";
import Image from "next/image";
import Beared from "@/assets/svg/Bill 1.svg";
import Women from "@/assets/svg/Beverly 1.svg";
import Girl from "@/assets/svg/Claudia 1.svg";
import Logo from "@/assets/svg/Avatar 1.svg";
import OurTeamCard from "@/components/out team (websites)/ourteamcard";

export default function OurTeam() {
  return (
    <div className={styles.ourteamcolour}>
      <div className={styles.ourteamwidth}>
        <div className={styles.headingflex}>
          <h1 className={styles.heading}>Our Team</h1>
          <div className={styles.boxesflex}>
            <OurTeamCard img={Beared} heading="John Peter" paragraph="COO" />
            <OurTeamCard img={Women} heading="John Peter" paragraph="COO" />
            <OurTeamCard img={Girl} heading="John Peter" paragraph="COO" />
            <OurTeamCard img={Logo} heading="John Peter" paragraph="COO" />
          </div>
        </div>
      </div>
    </div>
  );
}
