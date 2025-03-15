"use client";
import styles from "./Intro.module.css";
import { Box, Group, Stack, Text } from "@mantine/core";
import { useRouter } from "next/navigation";

interface IntroProps {
  service: {
    title: string;
    description: string;
  };
}

const Intro = ({ service }: IntroProps) => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <Group mb={20} align="start" justify="space-between">
      <Box onClick={handleBackClick} className={styles.backButton}>
        <h6>Înapoi</h6>
      </Box>
      <Stack className={styles.firstText}>
        <h2>{service.title}</h2>
        <Text className="body-text opacity">{service.description}</Text>
      </Stack>
      <Box className={styles.empty} />
    </Group>
  );
};

export default Intro;
