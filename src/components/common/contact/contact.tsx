import styles from "@/components/common/contact/contact.module.css";
import Image from "next/image";
import ContactUs from "@/assets/png/Contact us-amico 1.png";
import Location from "@/assets/svg/mi_location.svg";
import Phone from "@/assets/svg/mi_call.svg";
import Email from "@/assets/svg/fluent_mail-24-regular.svg";

export default function Contact() {
  return (
    <div className={styles.contactwidth}>
      <div className={styles.contactusflex}>
        <div className={styles.leftsectionflex}>
          <div className={styles.headingflex}>
            <div className={styles.flex}>
              <p className={styles.contactstyling}>CONTACT</p>
              <h1 className={styles.heading}>
                Get In Touch<span className={styles.fullstop}>.</span>
              </h1>
            </div>
            <p className={styles.paragraph}>
              We are here for you! How can we help?
            </p>
          </div>
          <div className={styles.fieldsflex}>
            <div className={styles.namefieldflex}>
              <p className={styles.inputfieldstext}>Name</p>
              <input type="name" className={styles.namefield} />
            </div>
            <div className={styles.namefieldflex}>
              <p className={styles.inputfieldstext}>Email</p>
              <input type="email" className={styles.namefield} />
            </div>
            <div className={styles.namefieldflex}>
              <p className={styles.inputfieldstext}>Message</p>
              <input type="message" className={styles.messagefield} />
            </div>
          </div>
          <div>
            <button className={styles.submitbutton}>Submit</button>
          </div>
        </div>
        <div className={styles.mainflex}>
          <Image
            src={ContactUs}
            alt="contact us"
            className={styles.mainsectionimg}
          />
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
      </div>
    </div>
  );
}
