import AboutUs from "../AboutUs";
import ContactUs from "../JoinUs";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import Events from "../Events";

export default function Home() {
  
  return (
    <>
      <div className="theme-change2">
      <HeroSection />
      <AboutUs />
      <ContactUs />
      <Events />
      <Footer />
      </div>
    </>
  );
}