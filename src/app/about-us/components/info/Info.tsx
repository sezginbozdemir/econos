"use client";
import { Box, Group, Stack, Text } from "@mantine/core";
import styles from "./Info.module.css";
import Image from "next/image";
import { useState } from "react";

const Info = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <Stack align="center" mt={80}>
      <Group>
        <Box className={styles.firstText}>
          <h2>
            Cum îți transformăm afacerea prin soluții financiare inovative
          </h2>
        </Box>
        <Text className={`body-text opacity ${styles.secondText}`}>
          Parteneriatul nostru se bazează pe un angajament continuu de a adresa
          nevoile tale într-un mod eficient și adaptabil, ajutându-te să reduci
          costurile și să îți crești profitabilitatea
        </Text>
      </Group>
      <Box className={styles.imageBox}>
        <Image src="/images/info-02.png" alt="Econos" objectFit="cover" fill />
      </Box>
      <Group className={styles.circleGroup} justify="space-between">
        {[0, 1, 2].map((index) => (
          <Box
            key={index}
            className={`${styles.circle} ${
              activeIndex === index ? styles.active : ""
            }`}
            onClick={() => setActiveIndex(index)}
          ></Box>
        ))}
      </Group>
      <Group align="start">
        {[
          "Adoptăm tehnologii noi și soluții digitale care îți simplifică procesul financiar și îți oferă un avantaj competitiv",
          "Ne axăm pe identificarea celor mai bune strategii financiare, care susțin creșterea și succesul pe termen lung",
          "Fie că ai nevoie de consultanță financiară sau de servicii de contabilitate, suntem aici pentru a răspunde rapid nevoilor tale, indiferent de complexitatea acestora",
        ].map((text, index) => (
          <Text
            key={index}
            className={`${styles.flexText} body-text opacity ${
              activeIndex === index ? styles.activeText : ""
            }`}
          >
            {text}
          </Text>
        ))}
      </Group>
    </Stack>
  );
};

export default Info;
