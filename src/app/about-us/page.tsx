import Navbar from "@/components/common/navbar/navbar";
import AboutUsHero from "@/components/about us herosection/aboutus";
import WorkWithUs from "@/components/workwithus (about us)/workwithus";
import WhatWeDo from "@/components/what we do (about us)/whatwedo";
import OurTeam from "@/components/out team (about us)/ourteam";
import Contact from "@/components/common/contact/contact";
import Footer from "@/components/common/footer/footer";
export default function AboutUs() {
  return (
    <div>
      <Navbar />
      <AboutUsHero />
      <WorkWithUs />
      <WhatWeDo />
      <OurTeam />
      <Contact />
      <Footer />
    </div>
  );
}
