import { Box, Group, Stack, Text } from "@mantine/core";
import styles from "./History.module.css";
import Image from "next/image";

const History = () => {
  return (
    <Stack gap={50} mt={80} align="center">
      <h2>Istoricul nostru</h2>
      <Group className={styles.group}>
        <Stack className={styles.left} gap={50}>
          <Stack className={styles.historyItem}>
            <Stack gap={0}>
              <Text className={`details-text opacity ${styles.year}`}>
                2018
              </Text>
              <Group>
                <Box className={styles.circle}></Box>
                <h3>Fondarea și Primii Pași</h3>
              </Group>
            </Stack>
            <Text className="body-text opacity">
              Econos a fost fondată pentru a oferi soluții financiare și
              contabile accesibile și de încredere. Ne-am concentrat pe
              construirea unor relații solide cu clienții și pe oferirea de
              servicii de înaltă calitate.
            </Text>
          </Stack>

          <Stack className={styles.historyItem}>
            <Stack gap={0}>
              <Text className={`details-text opacity ${styles.year}`}>
                2020
              </Text>
              <Group>
                <Box className={styles.circle}></Box>
                <h3>Adaptarea la Noua Eră</h3>
              </Group>
            </Stack>
            <Text className="body-text opacity">
              Am integrat tehnologii moderne pentru a oferi servicii eficiente
              și accesibile de la distanță, răspunzând astfel cerințelor unei
              lumi dinamică și conectată.
            </Text>
          </Stack>
        </Stack>

        <Box className={styles.line}>
          <Image
            className="opacity"
            src="/images/line-cut.png"
            width={1}
            height={550}
            alt="econos"
          />
        </Box>
        <Stack className={styles.right} gap={50}>
          <Stack className={styles.historyItem}>
            <Stack gap={0}>
              <Text className={`details-text opacity ${styles.year}`}>
                2022
              </Text>
              <Group>
                <Box className={styles.circle}></Box>
                <h3>Extinderea Serviciilor</h3>
              </Group>
            </Stack>
            <Text className="body-text opacity">
              Pe măsură ce am crescut, am extins serviciile pentru a răspunde
              nevoilor diverse ale clienților, incluzând consultanță financiară,
              optimizare a costurilor și externalizare salarială.
            </Text>
          </Stack>

          <Stack className={styles.historyItem}>
            <Stack gap={0}>
              <Text className={`details-text opacity ${styles.year}`}>
                2024
              </Text>
              <Group>
                <Box className={styles.circle}></Box>
                <h3>Astăzi și Viitorul </h3>
              </Group>
            </Stack>
            <Text className="body-text opacity">
              Astăzi, Econos este un lider în consultanță financiară,
              concentrându-se pe soluții inovative și digitale pentru a sprijini
              creșterea afacerilor. Privim spre viitor cu încredere, continuând
              să ne adaptăm la schimbările pieței.
            </Text>
          </Stack>
        </Stack>
      </Group>
    </Stack>
  );
};

export default History;
