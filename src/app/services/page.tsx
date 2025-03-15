import { Container } from "@mantine/core";
import IntroText from "./components/intro-text/IntroText";
import AllServices from "./components/all-services/AllServices";

const Services = () => {
  return (
    <Container w="100%" size={1200}>
      <IntroText />
      <AllServices />
    </Container>
  );
};
export default Services;
