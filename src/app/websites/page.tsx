import Navbar from "@/components/common/navbar/navbar";
import OurWork from "@/components/our work (websites)/ourwork";
import Sabirs from "@/components/sabir's grill (websites)/sabirs";
import SaifBoxing from "@/components/saif boxing (websites)/saifboxing";
import ConquestLaw from "@/components/consquest law (websites)/consquestlaw";
import IzecPrestiage from "@/components/izec prestige (websites)/izec";
import ProDrive from "@/components/pro drive (websites)/prodrive";
import Contact from "@/components/common/contact/contact";
import Footer from "@/components/common/footer/footer";
export default function Websites() {
  return (
    <div>
      <Navbar />
      <OurWork />
      <Sabirs />
      <SaifBoxing />
      <ConquestLaw />
      <IzecPrestiage />
      <ProDrive />
      <Contact />
      <Footer />
    </div>
  );
}
