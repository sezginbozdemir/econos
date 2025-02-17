import { Box, Card, Group, Stack, Text } from "@mantine/core";
import styles from "./Intro.module.css";
import Image from "next/image";

const Intro = () => {
  return (
    <Stack align="center">
      <Box mr="5rem">
        <h1>
          CONSULTANȚĂ <br /> FINANCIARĂ ȘI <br /> CONTABILITATE
        </h1>
      </Box>
      <Group mt={-80} justify="space-around">
        <Stack align="end">
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
        </Stack>
        <Image src="/images/hero.png" width={460} height={500} alt="econos" />
        <Stack>
          <Group>
            <Box className={styles.circle}>
              <Image
                src="/icons/wallet.svg"
                width={35}
                height={35}
                alt="econos"
                className={styles.wallet}
              />
            </Box>
            <Text className="body-text opacity">
              Consultanță financiară la distanță
            </Text>
          </Group>
          <Group mt={-30}>
            <Box className={styles.circle}>
              <Image
                src="/icons/wallet.svg"
                width={35}
                height={35}
                alt="econos"
                className={styles.wallet}
              />
            </Box>
            <Text className="body-text opacity">
              Expertiză contabilă de încredere
            </Text>
          </Group>
          <Group mt={-30}>
            <Box className={styles.circle}>
              <Image
                src="/icons/wallet.svg"
                width={35}
                height={35}
                alt="econos"
              />
            </Box>
            <Text className="body-text opacity">
              Soluții rapide, rezultate sigure
            </Text>
          </Group>
        </Stack>
      </Group>
    </Stack>
  );
};

export default Intro;
