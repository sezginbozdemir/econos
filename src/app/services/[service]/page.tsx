"use client";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import services from "@/home-components/services/services.json";
import { Box, Container, Stack } from "@mantine/core";
import Intro from "./components/intro/Intro";
import ServiceCard from "../components/all-services/ServiceCard";
import CardGrid from "./components/grid/CardGrid";
import LogoSlider from "@/home-components/logo-slider/LogoSlider";
import styles from "./page.module.css";
import CardStack from "./components/card-stack/CardStack";
import Questions from "./components/questions/Questions";

const ServicePage = () => {
  const { service } = useParams();

  const serviceData = services.find((s) => s.service === service);

  if (!serviceData) {
    notFound();
  }

  return (
    <>
      <Box className={styles.bg} mt={50}>
        <Container w="100%" size={1200}>
          <Stack align="center">
            <Intro service={serviceData} />
            <ServiceCard service={serviceData} />
            <CardGrid />
            <CardStack categories={serviceData.categories} />
          </Stack>
        </Container>
        <LogoSlider />
      </Box>
      <Container mb={50} w="100%" size={1200}>
        <Questions questions={serviceData.questions} />
      </Container>
    </>
  );
};

export default ServicePage;
