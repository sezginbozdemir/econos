import { Box, Group, Stack, Text } from "@mantine/core";
import styles from "./Intro.module.css";
import Image from "next/image";

const List = () => {
  return (
    <Stack>
      <Group className={styles.first}>
        <Box className={styles.circle}>
          <Image
            src="/icons/wallet.svg"
            width={31}
            height={31}
            alt="econos"
            className={styles.wallet}
          />
        </Box>
        <Text className="body-text opacity">
          Consultanță financiară la distanță
        </Text>
      </Group>
      <Group className={styles.second} mt={-30}>
        <Box className={styles.circle}>
          <Image
            src="/icons/wallet.svg"
            width={31}
            height={31}
            alt="econos"
            className={styles.wallet}
          />
        </Box>
        <Text className="body-text opacity">
          Expertiză contabilă de încredere
        </Text>
      </Group>
      <Group className={styles.third} mt={-30}>
        <Box className={styles.circle}>
          <Image src="/icons/wallet.svg" width={31} height={31} alt="econos" />
        </Box>
        <Text className="body-text opacity">
          Soluții rapide, rezultate sigure
        </Text>
      </Group>
    </Stack>
  );
};

export default List;
