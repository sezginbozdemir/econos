import { Stack, Text } from "@mantine/core";
import styles from "./IntroText.module.css";
const IntroText = () => {
  return (
    <Stack mb={50} mt={30} align="center">
      <Stack className={styles.stack} gap={30} ta="center">
        <h2>Cine suntem și Cum vă putem sprijini cu serviciile noastre </h2>
        <Text className="body-text opacity">
          Suntem o echipă de profesioniști dedicați să îți oferim soluții
          financiare și contabile personalizate. Cu o experiență vastă în
          domeniu, ne angajăm să te ghidăm prin fiecare etapă a dezvoltării
          afacerii tale, asigurându-ne că iei cele mai bune decizii pentru
          viitorul tău financiar.
        </Text>
      </Stack>
    </Stack>
  );
};

export default IntroText;
