import styles from "@/components/our services/ourservices.module.css";
import Image from "next/image";
import WebDevelopment from "@/assets/svg/8541628_database_data_storage_icon 1.svg";
import WebDesigning from "@/assets/svg/8541628_database_data_storage_icon 1 (1).svg";
import SeoSem from "@/assets/svg/8541628_database_data_storage_icon 1 (2).svg";
import SocialMediaManagment from "@/assets/svg/8541628_database_data_storage_icon 1 (3).svg";
import CreativeBranding from "@/assets/svg/8541628_database_data_storage_icon 1 (4).svg";
import MobileImg from "@/assets/png/Frame 14.png";
import OurServicesCard from "./ourservicescard";
export default function OurSection() {
  return (
    <div className={styles.oursection}>
      <div className={styles.width}>
        <div className={styles.mainflex}>
          <div className={styles.ourservicesflex}>
            <div className={styles.oursectionstyling}>OUR SERVICES</div>
            <h1 className={styles.heading}>
              Web Services for Growth<span className={styles.fullstop}>.</span>
            </h1>
          </div>
          <p className={styles.paragraph}>
            At Sunstream Digital, we harness innovative strategies tailored to
            your unique needs. Our targeted marketing solutions ensure that your
            message reaches the right audience effectively.
          </p>
        </div>
        <div className={styles.sectionflex}>
          <OurServicesCard
            img={WebDevelopment}
            heading="Web Development"
            paragraph="Using the power of analytics and AI, we tailor websites that deliver measurable results and reach your target audience effectively."
          />
          <OurServicesCard
            img={WebDesigning}
            heading="Creative Web Designing"
            paragraph="From responsive design to compelling web structure, our creative team ensures that your brand message resonates across all platforms."
          />
          <OurServicesCard
            img={SeoSem}
            heading="SEO & SEM Optimization"
            paragraph="Boost your visibility with search engine strategies that put your business in front of the right people, at the right time."
          />
          <OurServicesCard
            img={SocialMediaManagment}
            heading="Social Media Management"
            paragraph="Engage your audience with targeted social media campaigns designed to grow your brand’s community and influence."
          />
          <OurServicesCard
            img={CreativeBranding}
            heading="Creative Branding"
            paragraph="Our branding process is rooted in strategy, driven by creativity, and tailored to reflect your business’s core values and vision."
          />
        </div>
        <Image className={styles.mobileimg} src={MobileImg} alt="mobile img" />
      </div>
    </div>
  );
}
