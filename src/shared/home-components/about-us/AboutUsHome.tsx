import { Grid, Stack, Text } from "@mantine/core";
import styles from "./AboutUs.module.css";
import PrimaryButton from "@/shared/buttons/PrimaryButton";
import Image from "next/image";

const AboutUsHome = () => {
  return (
    <>
      <Stack align="center" justify="center" pt={100} mb={100} gap="xl">
        <h2>Afla mai multe despre noi</h2>
        <PrimaryButton>Citește cine suntem</PrimaryButton>
      </Stack>
      <Grid px={100} justify="center" align="center">
        <Grid.Col className={styles.smallerCol} span={3}>
          <Stack justify="center" align="center" ta="center">
            <h2 className={styles.number}>10+</h2>
            <Text className="body-text opacity">
              ani de experiență în consultanță financiară, Econos a devenit un
              partener de încredere pentru antreprenori și companii din diverse
              domenii
            </Text>
          </Stack>
        </Grid.Col>
        <Grid.Col className={styles.biggerCol} span={5}>
          <Image src="/images/about-us-01.png" alt="econos" fill />
        </Grid.Col>
        <Grid.Col className={styles.smallerCol} span={3}>
          <Stack justify="center" align="center" ta="center">
            <h2 className={styles.number}>50+</h2>
            <Text className="body-text opacity">
              companii din diverse industrii au apelat la Econos pentru
              optimizarea resurselor financiare, reducerea costurilor și
              creșterea profitabilității
            </Text>
          </Stack>
        </Grid.Col>
        <Grid.Col className={styles.smallerCol} span={3}>
          <Image src="/images/about-us-02.png" alt="econos" fill />
        </Grid.Col>
        <Grid.Col className={styles.biggerCol} span={5}>
          <Stack justify="center" align="center" ta="center">
            <h2 className={styles.number}>400+</h2>
            <Text className="body-text opacity">
              de ore economisite lunar de clienții noștri datorită serviciilor
              noastre de externalizare și consultanță la distanță, accesibile
              oriunde te-ai afla
            </Text>
          </Stack>
        </Grid.Col>
        <Grid.Col className={styles.smallerCol} span={3}>
          <Image src="/images/about-us-03.png" alt="econos" fill />
        </Grid.Col>
      </Grid>
    </>
  );
};
export default AboutUsHome;
