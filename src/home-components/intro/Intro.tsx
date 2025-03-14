"use client";
import { Box, Card, Group, Stack, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import styles from "./Intro.module.css";
import Image from "next/image";
import List from "./List";

const Intro = () => {
  const matches = useMediaQuery("(min-width: 1024px)");
  const mobile = useMediaQuery("(max-width: 704px)");
  return (
    <Stack className={styles.bg} align="center">
      <Box className={styles.animate}>
        <h1>
          CONSULTANȚĂ <br /> FINANCIARĂ ȘI <br /> CONTABILITATE
        </h1>
      </Box>
      <Group
        mt={mobile ? 0 : -80}
        justify={matches ? `space-between` : `center`}
        w="100%"
      >
        <Stack mt={!matches ? 50 : 0} align="end">
          <Card className={styles.card}>
            <Stack>
              <h4>Servicii de incredere</h4>
              <Stack gap={5}>
                <Text className="body-text opacity">
                  Consultanta financiara
                </Text>
                <Text className="body-text opacity">
                  Consultanta de contabilitate
                </Text>
              </Stack>
            </Stack>
          </Card>
          <Group className={styles.subcard}>
            <h3 className={styles.blackFont}>+50</h3>
            <h4>clienti fericiti</h4>
          </Group>
          <Box style={{ display: !matches ? "block" : "none" }}>
            <List />
          </Box>
        </Stack>
        <Image
          className={styles.hero}
          src="/images/hero.png"
          width={375}
          height={400}
          alt="econos"
        />
        <Box style={{ display: matches ? "block" : "none" }}>
          <List />
        </Box>
      </Group>
    </Stack>
  );
};

export default Intro;
