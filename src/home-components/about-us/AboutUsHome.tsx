import { Box, Stack } from "@mantine/core";
import styles from "./AboutUs.module.css";
import PrimaryButton from "@/shared/buttons/PrimaryButton";
import AboutUsGrid from "./AboutUsGrid";

const AboutUsHome = () => {
  return (
    <Box className={styles.background}>
      <Stack align="center" justify="center" pt={100} mb={100} gap="xl">
        <h2>Afla mai multe despre noi</h2>
        <PrimaryButton>Citește cine suntem</PrimaryButton>
      </Stack>
      <AboutUsGrid />
    </Box>
  );
};
export default AboutUsHome;
