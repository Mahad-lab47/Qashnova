import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/svg/transparent bg 2.svg";
import Menu from "@/assets/svg/jam_menu.svg";
export default function Navbar() {
  return (
    <div className={styles.navbarheight}>
      <div className={styles.navbar}>
        <Link href="/">
          <Image src={Logo} alt="Logo" width={184} height={35} />
        </Link>
        <div className={styles.buttonflex}>
          <Link href="/home" className={styles.button}>
            Home
          </Link>
          <Link href="/about-us" className={styles.button}>
            About us
          </Link>
          <a href="/websites" className={styles.button}>
            websites
          </a>
          <Link href="/branding" className={styles.button}>
            Branding
          </Link>
          <Link href="/case-study" className={styles.button}>
            Case Study
          </Link>
          <a href="" className={styles.button}>
            Plans
          </a>
        </div>
        <div>
          <button className={styles.contactbutton}>Contact Us</button>
          <Image src={Menu} alt="menu" className={styles.mobilemenu} />
        </div>
      </div>
    </div>
  );
}
