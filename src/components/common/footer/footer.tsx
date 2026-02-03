import styles from "@/components/common/footer/footer.module.css";
import Logo from "@/assets/svg/transparent bg 2 (1).svg";
import Image from "next/image";
import Location from "@/assets/svg/mi_location.svg";
import Phone from "@/assets/svg/mi_call.svg";
import Email from "@/assets/svg/fluent_mail-24-regular.svg";
import Arrow from "@/assets/svg/Up arrow.svg";
import Facebook from "@/assets/svg/Group 142.svg";
import Twitter from "@/assets/svg/Group 143.svg";
import Instagram from "@/assets/svg/Group 144.svg";
export default function Footer() {
  return (
    <div className={styles.footerwidth}>
      <div className={styles.footerflex}>
        <Image src={Logo} alt="qashnova" />
        <div className={styles.addressflex}>
          <p className={styles.address}>
            1234 Market St, Suite 500,
            <br /> San Francisco, CA
          </p>
          <div className={styles.conatctitemsflex}>
            <div className={styles.contactflex}>
              <Image src={Location} alt="location" />
              <p className={styles.contactfont}>545 abcd, 012458</p>
            </div>
            <div className={styles.contactflex}>
              <Image src={Phone} alt="phone" />
              <p className={styles.contactfont}>+2034 4040 3030</p>
            </div>
            <div className={styles.contactflex}>
              <Image src={Email} alt="email" />
              <p className={styles.contactfont}>hello@gmail.com</p>
            </div>
          </div>
        </div>
        <div className={styles.paragraphflex}>
          <div className={styles.aboutusflex}>
            <p className={styles.aboutusstyling}>About Us</p>
            <p className={styles.aboutusstyling}>Our Services</p>
            <p className={styles.aboutusstyling}>Case Studies</p>
            <p className={styles.aboutusstyling}>Patners</p>
          </div>
          <p className={styles.paragraph}>
            © 2024 Sunstream. All rights reserved.
          </p>
        </div>
        <div className={styles.aboutusflex}>
          <p className={styles.aboutusstyling}>About Us</p>
          <p className={styles.aboutusstyling}>Our Services</p>
          <p className={styles.aboutusstyling}>Case Studies</p>
          <p className={styles.aboutusstyling}>Patners</p>
        </div>
        <Image src={Arrow} alt="arrow" />
      </div>
      <div className={styles.mobilesection}>
        <div className={styles.mobilesectionflex}>
          <h3 className={styles.quicklinks}>Quick Links</h3>
          <div className={styles.homeflex}>
            <p className={styles.home}>Home</p>
            <p className={styles.home}>About</p>
            <p className={styles.home}>Contact</p>
          </div>
          <h3 className={styles.quicklinks}>Contact Us</h3>
          <div className={styles.logoflex}>
            <Image src={Facebook} alt="facebook" />
            <Image src={Twitter} alt="twitter" />
            <Image src={Instagram} alt="instagram" />
          </div>
          <p className={styles.copyright}>
            PulseTechnologySolutions © Copyright 2020, Inc. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}
