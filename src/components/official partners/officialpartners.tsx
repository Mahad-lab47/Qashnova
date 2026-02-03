import styles from "@/components/official partners/officialpartners.module.css";
import Image from "next/image";
import Skooda from "@/assets/svg/logos.svg";
import S from "@/assets//svg/logos (1).svg";
import Kia from "@/assets/svg/logos (2).svg";
import Nokia from "@/assets/svg/logos (3).svg";
import Intel from "@/assets/svg/logos (4).svg";
import Mahindra from "@/assets/svg/logos (5).svg";
import Oppo from "@/assets/svg/logos (6).svg";
import Fila from "@/assets/svg/logos (7).svg";
export default function OfficialPartners() {
  return (
    <div className={styles.officialwidth}>
      <div>
        <div className={styles.headingflex}>
          <p className={styles.client}>CLIENT</p>
          <h1 className={styles.heading}>
            Official Partners<span className={styles.fullstop}>.</span>
          </h1>
        </div>
        <div className={styles.logoflex}>
          <Image src={Skooda} alt="skooda" />
          <Image src={S} alt="S" />
          <Image src={Kia} alt="kia" />
          <Image src={Nokia} alt="nokia" />
          <Image src={Intel} alt="intel" />
          <Image src={Mahindra} alt="mahindra" />
          <Image src={Oppo} alt="oppo" />
          <Image src={Fila} alt="fila" />
        </div>
      </div>
    </div>
  );
}
