import styles from "@/components/about us/aboutus.module.css";
import Image from "next/image";
import AboutUsImage from "@/assets/png/Group 4.png";
export default function AboutUs() {
  return (
    <div className={styles.aboutus}>
      <div className={styles.mainflex}>
        <div className={styles.headingflex}>
          <div className={styles.aboutusflex}>
            <div className={styles.aboutusstyling}>ABOUT US</div>
            <h1 className={styles.heading}>
              Who We Are<span className={styles.fullstop}>.</span>
            </h1>
          </div>
          <p className={styles.paragraph}>
            At Pulse Technology, we’re all about illuminating your brand with
            bold, innovative marketing strategies. Our team combines creativity
            with cutting-edge technology to craft digital campaigns that
            captivate and convert. Whether you’re looking to grow your online
            presence or launch a new product, we’re here to help you shine.
          </p>
          <p className={styles.paragraph}>
            Our success is defined by the results we deliver. From innovative
            campaigns to record-breaking growth, we’ve partnered with brands to
            help them reach new height
          </p>
        </div>
        <Image
          className={styles.aboutusimage}
          src={AboutUsImage}
          alt="aboutusimage"
        />
      </div>
    </div>
  );
}
