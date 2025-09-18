import Navbar from "../components/Navbar";
import RandomImage from "../pages/RandomImage";
import HeaderSection from "../components/HeaderSection";
import SliderSection from "../components/SliderSection";
import BodySection from "../components/BodySection";
import BannerImage from "../components/BannerImage";
import BenefitSection from "../components/BenefitSection";
import ProfileDetailSection from "../components/ProfileDetailSection";
import DataSection from "../components/DataSection";
import AchievementSection from "../components/AchievementSection";
import Footer from "../components/Footer";

import FAQsSection from "../components/FAQsSection";
export default function Home() {
  return (
    <>
      <Navbar />
      <HeaderSection />
      <SliderSection />
      <BodySection />
      <BannerImage />
      <BenefitSection />
      <div className="">
        <img
          src="bannermain.jpg"
          alt=""
          className="h-[972px] object-cover w-full"
        />
      </div>
      <ProfileDetailSection />
      <DataSection />
      <AchievementSection />
      <FAQsSection />
      <Footer />
    </>
  );
}
