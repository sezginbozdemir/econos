import { Box, Grid, Stack, Text } from "@mantine/core";
import styles from "./CardGrid.module.css";
import Image from "next/image";

const CardGrid = () => {
  return (
    <Grid mt={70} mb={70} w="100%">
      <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
        <Box className={styles.imageBox}>
          <Image
            className={styles.img}
            src="/images/service-01.png"
            alt="econos"
            fill
          />
        </Box>
      </Grid.Col>
      <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
        <Stack className={styles.textStack}>
          <h2 className={styles.number}>100+</h2>
          <Text className="body-text opacity">
            soluții financiare dezvoltate pentru creșterea profitabilității
          </Text>
        </Stack>
      </Grid.Col>
      <Grid.Col span={{ base: 12, sm: 12, md: 4 }}>
        <Box className={styles.imageBox}>
          <Image
            className={styles.img}
            src="/images/service-02.png"
            alt="econos"
            fill
          />
        </Box>
      </Grid.Col>
    </Grid>
  );
};

export default CardGrid;
