import AboutUsGrid from "@/home-components/about-us/AboutUsGrid";
import IntroText from "./components/intro-text/IntroText";
import LogoSlider from "@/home-components/logo-slider/LogoSlider";
import { Box, Container } from "@mantine/core";
import styles from "./components/intro-text/IntroText.module.css";
import History from "./components/history/History";
import ServiceBanner from "./components/service-banner/ServiceBanner";
import Info from "./components/info/Info";

const AboutUs = () => {
  return (
    <>
      <Container size={1200} w="100%">
        <IntroText />
      </Container>
      <Box className={styles.bg} pb={100}>
        <Container size={1200} w="100%">
          <AboutUsGrid />
        </Container>
      </Box>
      <LogoSlider />
      <Container size={1200} w="100%">
        <History />
        <ServiceBanner />
        <Info />
      </Container>
    </>
  );
};
export default AboutUs;
