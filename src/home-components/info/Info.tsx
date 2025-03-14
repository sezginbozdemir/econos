"use client";
import { Group, Stack, Box, Text } from "@mantine/core";
import styles from "./Info.module.css";
import Image from "next/image";
import { useState } from "react";

const Info = () => {
  const [firstBubble, setFirstBubble] = useState(false);
  const [secondBubble, setSecondBubble] = useState(false);

  return (
    <Stack gap={0} mt={100}>
      <Group className={styles.outerGroup}>
        <Stack ta="center" className={styles.firstStack}>
          <h2>Partenerul tau de incredere in a-ti dezvolta afacerea</h2>
          <Text className="body-text opacity">
            Partenerul tău de încredere, dedicat să-ți susțină afacerea prin
            soluții financiare și contabile eficiente. Îți oferim expertiza
            necesară pentru a lua decizii informate și a-ți crește afacerea în
            mod sustenabil.
          </Text>
        </Stack>
        <Stack align="center" ta="center" className={styles.secondStack}>
          <Text
            className={`body-text opacity ${styles.roundedText} ${
              firstBubble ? styles.visibleText : styles.hiddenText
            }`}
          >
            Fiecare decizie financiară contează. Cu soluțiile noastre
            personalizate, te ajutăm să navighezi provocările afacerii tale și
            să o dezvolți sustenabil.
          </Text>
          <Box
            onClick={() => setFirstBubble(true)}
            className={styles.halfCircle}
          >
            <Image
              src="/icons/arrow.png"
              className={styles.arrow}
              height={50}
              width={50}
              alt="econos"
            />
          </Box>
        </Stack>
      </Group>

      <Box className={styles.imageBox}>
        <Image src="/images/info-01.png" alt="Econos" objectFit="cover" fill />
        <Text
          className={`body-text ${styles.innerText2} ${
            secondBubble ? styles.visibleText : styles.hiddenText
          }`}
        >
          Indiferent de locația ta, îți oferim soluții financiare adaptate și
          accesibile, pentru a-ți susține afacerea în mod eficient și flexibil.
        </Text>
        <Text
          className={`body-text ${styles.innerText} ${
            firstBubble ? styles.visibleText : styles.hiddenText
          }`}
        >
          Fiecare decizie financiară contează. Cu soluțiile noastre
          personalizate, te ajutăm să navighezi provocările afacerii tale și să
          o dezvolți sustenabil.
        </Text>
      </Box>
      <Group className={styles.outerGroup}>
        <Stack align="center" ta="center" className={styles.secondStack}>
          <Box
            onClick={() => setSecondBubble(true)}
            className={styles.halfCircleBot}
          >
            <Image
              src="/icons/arrow.png"
              className={styles.reversedArrow}
              height={50}
              width={50}
              alt="econos"
            />
          </Box>
          <Text
            className={`body-text opacity ${styles.roundedText} ${
              secondBubble ? styles.visibleText : styles.hiddenText
            }`}
          >
            Indiferent de locația ta, îți oferim soluții financiare adaptate și
            accesibile, pentru a-ți susține afacerea în mod eficient și
            flexibil.
          </Text>
        </Stack>
        <Stack ta="center" className={styles.firstStack}>
          <h2>Servicii de calitate de la distanta</h2>
          <Text className="body-text opacity">
            Oferim servicii de calitate superioară, complet la distanță, pentru
            a-ți sprijini afacerea indiferent de locație. Beneficiezi de
            consultanță financiară și contabilă rapidă, eficientă și accesibilă,
            adaptată nevoilor tale specifice.
          </Text>
        </Stack>
      </Group>
    </Stack>
  );
};

export default Info;
