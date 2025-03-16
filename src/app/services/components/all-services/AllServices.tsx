"use client";
import { Box, Stack } from "@mantine/core";
import styles from "./AllServices.module.css";
import services from "@/home-components/services/services.json";
import ServiceCard from "./ServiceCard";

const AllServices = () => {
  return (
    <Stack mt={50} className={styles.servicesStack}>
      {services.map((service, index) => (
        <Box key={index} className={styles.serviceWrap} w="100%">
          <ServiceCard service={service} />
        </Box>
      ))}
    </Stack>
  );
};

export default AllServices;
