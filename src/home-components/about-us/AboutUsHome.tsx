"use client";
import { Box, Stack } from "@mantine/core";
import styles from "./AboutUs.module.css";
import PrimaryButton from "@/shared/buttons/PrimaryButton";
import AboutUsGrid from "./AboutUsGrid";
import { useRouter } from "next/navigation";

const AboutUsHome = () => {
  const router = useRouter();
  return (
    <Box className={styles.background}>
      <Stack align="center" justify="center" pt={100} mb={100} gap="xl">
        <h2>Afla mai multe despre noi</h2>
        <PrimaryButton onClick={() => router.push("/about-us")}>
          Citește cine suntem
        </PrimaryButton>
      </Stack>
      <AboutUsGrid />
    </Box>
  );
};
export default AboutUsHome;
