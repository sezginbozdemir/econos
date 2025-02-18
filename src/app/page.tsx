"use client";
import AboutUsHome from "@/shared/home-components/about-us/AboutUsHome";
import Intro from "@/shared/home-components/intro/Intro";
import LogoSlider from "@/shared/home-components/logo-slider/LogoSlider";
export default function Home() {
  return (
    <>
      <Intro />
      <LogoSlider />
      <AboutUsHome />
    </>
  );
}
