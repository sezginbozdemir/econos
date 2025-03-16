import AboutUsHome from "@/home-components/about-us/AboutUsHome";
import CardStack from "@/home-components/card-stack/CardStack";
import Info from "@/home-components/info/Info";
import Intro from "@/home-components/intro/Intro";
import LogoSlider from "@/home-components/logo-slider/LogoSlider";
import ServicesHome from "@/home-components/services/ServicesHome";
import { Box, Container } from "@mantine/core";
import styles from "./page.module.css";
import Cookie from "@/home-components/cookie/Cookie";
export default function Home() {
  return (
    <>
      <Cookie />
      <Container className={styles.bg} size={1200} w="100%">
        <Intro />
      </Container>
      <Box className={styles.bg}>
        <LogoSlider />
        <Container size={1200} w="100%">
          <AboutUsHome />
          <Info />
          <ServicesHome />
          <CardStack />
        </Container>
      </Box>
    </>
  );
}
