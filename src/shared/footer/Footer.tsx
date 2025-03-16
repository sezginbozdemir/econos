import { Box, Container } from "@mantine/core";
import FooterBanner from "./FooterBanner";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <Container size={1200} w="100%">
      <FooterBanner />
      <FooterBottom />
    </Container>
  );
};
export default Footer;
