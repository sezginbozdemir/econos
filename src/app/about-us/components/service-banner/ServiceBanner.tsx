import { Box, Group, List, ListItem, Stack, Text } from "@mantine/core";
import styles from "./ServiceBanner.module.css";
import Image from "next/image";

const ServiceBanner = () => {
  return (
    <Stack gap={60} mt={80} align="center">
      <Box className={styles.textBox}>
        <h2>
          Cel mai important - Servicii de calitate chiar și{" "}
          <span className={styles.span}>de la distantă</span>
        </h2>
      </Box>
      <Group className={styles.group} justify="center">
        <Box className={styles.imgBox}>
          <Box className={styles.online}>
            <Image
              src="/icons/online.png"
              width={120}
              height={90}
              alt="econos"
            />
          </Box>
          <Image
            src="/icons/star.png"
            width={70}
            height={70}
            alt="econos"
            className={styles.star}
          />
          <Image
            src="/images/despre-noi-01.png"
            objectFit="cover"
            alt="econos"
            fill
          />
        </Box>
        <List
          className={styles.list}
          spacing={30}
          center
          icon={
            <Image src="/icons/check.png" width={20} height={20} alt="econos" />
          }
        >
          <ListItem className={styles.listItem}>
            <Text className="body-text opacity">
              Acces la serviciile contabile și financiare de oriunde, fără a fi
              nevoie să vă deplasați la birou.
            </Text>
          </ListItem>
          <ListItem className={styles.listItem}>
            <Text className="body-text opacity">
              Platformele online de contabilitate oferă actualizări în timp
              real, ceea ce permite o mai bună gestionare a fluxului de numerar
            </Text>
          </ListItem>
          <ListItem className={styles.listItem}>
            <Text className="body-text opacity">
              Comunicarea prin platforme digitale permite un timp de răspuns
              rapid și o colaborare mai eficientă, astfel încât orice problemă
              poate fi soluționată imediat.
            </Text>
          </ListItem>
          <ListItem className={styles.listItem}>
            <Text className="body-text opacity">
              Serviciile de la distanță vă permit să colaborați cu experți de
              oriunde din țară sau din lume, oferindu-vă acces la cei mai buni
              specialiști
            </Text>
          </ListItem>
        </List>
      </Group>
    </Stack>
  );
};

export default ServiceBanner;
