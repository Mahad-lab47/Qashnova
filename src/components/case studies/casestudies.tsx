import styles from "@/components/case studies/casestudies.module.css";
import Image from "next/image";
import Perfume from "@/assets/png/aydin-ghadakchi-lamor-5_52VhWWFa4-unsplash.png";
import GameController from "@/assets/png/mike-meyers-v8XaVfyo41Q-unsplash.png";
import Coke from "@/assets/png/anastasiya-badun-g5rnOVpNSaM-unsplash.png";
import HomeFlair from "@/assets/png/Frame 1000002462.png";
import Saifs from "@/assets/png/Frame 1000002462 (1).png";
import Sabirs from "@/assets/png/Frame 1000002462 (2).png";
import BrightEco from "@/assets/png/Frame 1000002462 (3).png";
import CaseStudyCard from "./casestudycard";
import CaseStudyText from "./casestudytext";
import Shoes from "@/assets/png/paul-gaudriault-a-QH9MAAVNI-unsplash.png";
import Child from "./casestudytext";

export default function CaseStudies() {
  return (
    <div className={styles.casestudywidth}>
      <div className={styles.headingparagraphflex}>
        <div className={styles.headingflex}>
          <p className={styles.casestudystyling}>CASE STUDIES</p>
          <h1 className={styles.heading}>
            Proven <span className={styles.expertisestyling}>Expertise.</span>
            <br />
            Proven Results<span className={styles.fullstop}>.</span>
          </h1>
        </div>
        <div className={styles.paragraphflex}>
          <p className={styles.paragraph}>
            Our data-driven approach and innovative strategies have helped
            countless businesses achieve their goals. We're dedicated to
            delivering measurable results
          </p>
          <button className={styles.button}>Explore All Project</button>
        </div>
      </div>
      <div className={styles.mobilesection}>
        <div className={styles.homeflaircolour}>
          <div className={styles.homeflairsection}>
            <Image
              className={styles.mobileimg}
              src={HomeFlair}
              alt="homeflair"
            />
            <h3 className={styles.mobileheading}>HOMEFLAIR</h3>
            <p className={styles.mobileparagraph}>
              Homeflair is a premium furniture retailer offering stylish and
              high-quality sofas, beds, dining sets, and home décor. With a
              focus on comfort and affordability, Homeflair provides a wide
              range of modern and classic designs to suit every home. Shop
              online for exclusive deals and nationwide delivery.
            </p>
          </div>
        </div>
        <div className={styles.homeflaircolour}>
          <div className={styles.homeflairsection}>
            <Image
              className={styles.mobileimg}
              src={Saifs}
              alt="saifs boxing"
            />
            <h3 className={styles.mobileheading}>SAIF'S BOXING AND FITNESS</h3>
            <p className={styles.mobileparagraph}>
              Saif's Boxing & Fitness offers expert boxing training and fitness
              programs for all skill levels. Whether you're looking to improve
              your technique, boost endurance, or stay in shape, our dedicated
              trainers provide personalized coaching in a motivating
              environment. Join us to train like a champion!
            </p>
          </div>
        </div>
        <div className={styles.homeflaircolour}>
          <div className={styles.homeflairsection}>
            <Image
              className={styles.mobileimg}
              src={Sabirs}
              alt="sabirs food"
            />
            <h3 className={styles.mobileheading}>SABIR’S</h3>
            <p className={styles.mobileparagraph}>
              Sabir’s is a premium South Asian restaurant in the UK, offering a
              rich selection of authentic Indian and Pakistani cuisine. With a
              focus on fresh ingredients, bold flavors, and exceptional service,
              Sabir’s creates a memorable dining experience for food lovers.
            </p>
          </div>
        </div>
        <div className={styles.homeflaircolour}>
          <div className={styles.homeflairsection}>
            <Image
              className={styles.mobileimg}
              src={BrightEco}
              alt="bright eco"
            />
            <h3 className={styles.mobileheading}>BRIGHT ECO FUTURE</h3>
            <p className={styles.mobileparagraph}>
              Bright Eco Future is a certified energy company dedicated to
              enhancing home energy efficiency through government-backed ECO 4
              grants. They assist homeowners and tenants in determining
              eligibility and facilitate the installation of free
              energy-efficient upgrades
            </p>
          </div>
        </div>
      </div>
      <div className={styles.gridsection}>
        <CaseStudyCard img={Shoes} />
        <CaseStudyText
          heading="High-Performance Sneaker Brand."
          paragraph=" A sneaker brand focused on high-performance shoes for athletes was
          struggling to differentiate its products in a saturated market and
          boost sales among competitive runners."
        />
        <CaseStudyCard img={Perfume} />
        <CaseStudyText
          heading="Luxury Perfume Brand."
          paragraph="A luxury perfume brand wanted to increase its online presence and attract younger, affluent customers while maintaining its exclusivity and heritage appeal.

"
        />
        <CaseStudyText
          heading="Game Console Brand."
          paragraph="A new game console brand wanted to generate buzz and excitement ahead of its product launch, targeting both casual gamers and hardcore gaming communities.
"
        />
        <CaseStudyCard img={GameController} />
        <CaseStudyText
          heading="Canned Tomato Soup Brand."
          paragraph="A well-known canned soup brand wanted to revitalize its image and appeal to health-conscious millennials while staying true to its classic, comforting roots
"
        />
        <CaseStudyCard img={Coke} />
      </div>
    </div>
  );
}
