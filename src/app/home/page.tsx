import Navbar from "@/components/common/navbar/navbar";
import HeroSection from "@/components/herosection/herosection";
import OfficialPartners from "@/components/official partners/officialpartners";
import AboutUs from "@/components/about us/aboutus";
import OurServices from "@/components/our services/ourservices";
import CaseStudies from "@/components/case studies/casestudies";
import Contact from "@/components/common/contact/contact";
import Footer from "@/components/common/footer/footer";
import Client from "@/components/client/client";
export default function Homepage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <OfficialPartners />
      <AboutUs />
      <OurServices />
      <CaseStudies />
      <Client />
      <Contact />
      <Footer />
    </div>
  );
}
