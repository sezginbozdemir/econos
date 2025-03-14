import AboutUsHome from "@/home-components/about-us/AboutUsHome";
import CardStack from "@/home-components/card-stack/CardStack";
import Info from "@/home-components/info/Info";
import Intro from "@/home-components/intro/Intro";
import LogoSlider from "@/home-components/logo-slider/LogoSlider";
import ServicesHome from "@/home-components/services/ServicesHome";
export default function Home() {
  return (
    <>
      <Intro />
      <LogoSlider />
      <AboutUsHome />
      <Info />
      <ServicesHome />
      <CardStack />
    </>
  );
}
