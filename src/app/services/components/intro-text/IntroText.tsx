import { Box, Stack, Text } from "@mantine/core";
import styles from "./IntroText.module.css";

const IntroText = () => {
  return (
    <Stack ta="center" align="center">
      <Box className={styles.box}>
        <h2>Serviciile noastre pentru afacerea ta</h2>
      </Box>
      <Text className={`body-text opacity ${styles.text}`}>
        Oferim soluții financiare și contabile personalizate, create pentru a
        sprijini creșterea afacerii tale. De la consultanță strategică la
        optimizare de costuri și externalizare, suntem aici pentru a-ți
        simplifica gestionarea financiară.
      </Text>
    </Stack>
  );
};

export default IntroText;
