"use client";
import { Grid, Stack, Text } from "@mantine/core";
import styles from "./AboutUs.module.css";
import Image from "next/image";
import { useState } from "react";
import { useMediaQuery } from "@mantine/hooks";

const AboutUsGrid = () => {
  const [hovered, setHovered] = useState(false);
  const [hoveredSec, setHoveredSec] = useState(false);
  const [hoveredThird, setHoveredThird] = useState(false);
  const isBetween = useMediaQuery("(min-width: 480px) and (max-width: 768px)");

  return (
    <Grid px={isBetween ? 80 : 0} justify="center" align="center">
      <Grid.Col
        onMouseEnter={() => setHovered(true)}
        className={`${styles.smallerCol} ${styles.animateCol} ${
          hovered ? styles.animateHover : ""
        }`}
        span={{ base: 12, sm: 3, md: 3 }}
        order={{ base: 1, sm: 1, md: 1 }}
      >
        <Image
          className={`${styles.refresh} ${hovered ? styles.noDisplay : ""}`}
          src="/icons/refresh.png"
          width={19}
          height={19}
          alt="econos"
        />

        <Stack justify="center" align="center" ta="center">
          <h2
            className={`${styles.number} ${!hovered ? styles.numberHover : ""}`}
          >
            {hovered ? "10+" : "ECONOS"}
          </h2>
          {hovered && (
            <Text className={`opacity body-text ${styles.hoveredText}`}>
              ani de experiență în consultanță financiară, Econos a devenit un
              partener de încredere pentru antreprenori și companii din diverse
              domenii
            </Text>
          )}
        </Stack>
      </Grid.Col>
      <Grid.Col
        className={styles.biggerCol}
        span={{ base: 12, sm: 5, md: 5 }}
        order={{ base: 2, sm: 2, md: 2 }}
      >
        <Image
          className={styles.img}
          src="/images/about-us-01.png"
          alt="econos"
          fill
        />
      </Grid.Col>
      <Grid.Col
        onMouseEnter={() => setHoveredSec(true)}
        className={`${styles.marginLeft} ${styles.smallerCol} ${
          styles.animateCol
        } ${hoveredSec ? styles.animateHover : ""}`}
        span={{ base: 12, sm: 4, md: 3 }}
        order={{ base: 3, sm: 4, md: 3 }}
      >
        <Image
          className={`${styles.refresh} ${hoveredSec ? styles.noDisplay : ""}`}
          src="/icons/refresh.png"
          width={19}
          height={19}
          alt="econos"
        />

        <Stack justify="center" align="center" ta="center">
          <h2
            className={`${styles.number} ${
              !hoveredSec ? styles.numberHover : ""
            }`}
          >
            {hoveredSec ? "50+" : "ECONOS"}
          </h2>
          {hoveredSec && (
            <Text className="body-text opacity">
              companii din diverse industrii au apelat la Econos pentru
              optimizarea resurselor financiare, reducerea costurilor și
              creșterea profitabilității
            </Text>
          )}
        </Stack>
      </Grid.Col>
      <Grid.Col
        className={styles.smallerCol}
        span={{ base: 12, sm: 4, md: 3 }}
        order={{ base: 4, sm: 3, md: 4 }}
      >
        <Image
          className={styles.img}
          src="/images/about-us-02.png"
          alt="econos"
          fill
        />
      </Grid.Col>
      <Grid.Col
        onMouseEnter={() => setHoveredThird(true)}
        className={`${styles.biggerCol} ${styles.animateCol} ${
          hoveredThird ? styles.animateHover : ""
        }`}
        span={{ base: 12, sm: 5, md: 5 }}
        order={{ base: 5, sm: 5, md: 5 }}
      >
        <Image
          className={`${styles.refresh} ${
            hoveredThird ? styles.noDisplay : ""
          }`}
          src="/icons/refresh.png"
          width={19}
          height={19}
          alt="econos"
        />
        <Stack justify="center" align="center" ta="center">
          <h2
            className={`${styles.number} ${
              !hoveredThird ? styles.numberHover : ""
            }`}
          >
            {hoveredThird ? "400+" : "ECONOS"}
          </h2>
          {hoveredThird && (
            <Text className="body-text opacity">
              de ore economisite lunar de clienții noștri datorită serviciilor
              noastre de externalizare și consultanță la distanță, accesibile
              oriunde te-ai afla
            </Text>
          )}
        </Stack>
      </Grid.Col>
      <Grid.Col
        className={styles.smallerCol}
        span={{ base: 12, sm: 3, md: 3 }}
        order={{ base: 6, sm: 6, md: 6 }}
      >
        <Image
          className={styles.img}
          src="/images/about-us-03.png"
          alt="econos"
          fill
        />
      </Grid.Col>
    </Grid>
  );
};

export default AboutUsGrid;
