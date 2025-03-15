"use client";
import { Stack } from "@mantine/core";
import styles from "./AllServices.module.css";
import services from "@/home-components/services/services.json";
import ServiceCard from "./ServiceCard";

const AllServices = () => {
  return (
    <Stack mt={50} className={styles.servicesStack}>
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </Stack>
  );
};

export default AllServices;
