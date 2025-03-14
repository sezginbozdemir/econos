"use client";
import { Grid, Box, Card, Stack } from "@mantine/core";
import styles from "./ServicesHome.module.css";
import services from "./services.json";
import Image from "next/image";
import SecondaryButton from "@/shared/buttons/SecondaryButton";

const ServicesHome = () => {
  return (
    <Box mt={50} className={styles.servicesContainer}>
      <Box mt={50} mb={50}>
        <h2>Servicii top de consultanta</h2>
      </Box>
      <Grid align="center" justify="center">
        {services.map((service, index) => (
          <Grid.Col
            key={index}
            span={{ base: 12, sm: index === 0 ? 12 : 6, md: index < 2 ? 5 : 4 }}
            className={`${styles.col} ${index === 0 ? styles.marginLeft : ""} ${
              index === 1 ? styles.marginRight : ""
            }`}
          >
            <Card ta="center" className={styles.serviceCard}>
              <Stack align="center" mt={50}>
                <Image
                  src="/icons/star.png"
                  width={50}
                  height={50}
                  alt="econos"
                />
                <h4 className={styles.serviceTitle}>{service.title}</h4>
              </Stack>
              <SecondaryButton>Despre</SecondaryButton>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesHome;
