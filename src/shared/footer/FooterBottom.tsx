"use client";
import { Box, Group, Stack, Text } from "@mantine/core";
import Link from "next/link";
import styles from "./Footer.module.css";
import Image from "next/image";
import { useMediaQuery } from "@mantine/hooks";

const FooterBottom = () => {
  const matches = useMediaQuery("(max-width: 875px)");
  return (
    <Stack gap={30}>
      <Group align="start" justify="space-between">
        <Stack gap={30} w={matches ? `90%` : `40%`}>
          <h3>Econos</h3>
          <Text className="details-text">
            Partenerul tău de încredere în consultanță financiară și
            contabilitate. Oferim soluții personalizate pentru dezvoltarea
            afacerii tale, accesând fonduri europene, optimizând procesele
            financiare și asigurându-ne că afacerea ta evoluează sustenabil.
          </Text>
          <Group>
            <Image
              src="/icons/facebook.png"
              width={25}
              height={25}
              alt="econos"
            />
            <Image
              src="/icons/instagram.png"
              width={25}
              height={25}
              alt="econos"
            />
            <Image
              src="/icons/whatsapp.png"
              width={25}
              height={25}
              alt="econos"
            />
          </Group>
        </Stack>
        <Group gap={25} align="start">
          <Stack gap={30}>
            <h4>Linkuri Utile</h4>
            <Stack gap={10}>
              <Link href="/" className={styles.link}>
                <Text className="details-text opacity">Acasă</Text>
              </Link>
              <Link href="/about-us" className={styles.link}>
                <Text className="details-text opacity">Despre noi</Text>
              </Link>
              <Link href="/services" className={styles.link}>
                <Text className="details-text opacity">Servicii</Text>
              </Link>
              <Link href="/contact" className={styles.link}>
                <Text className="details-text opacity">Contact</Text>
              </Link>
            </Stack>
          </Stack>
          <Stack gap={30}>
            <h4>Informații legale</h4>
            <Stack gap={10}>
              <Link href="/terms-conditions" className={styles.link}>
                <Text className="details-text opacity">
                  Termeni și condiții
                </Text>
              </Link>
              <Link href="/cookie-policy" className={styles.link}>
                <Text className="details-text opacity">
                  Politica de cookie-uri
                </Text>
              </Link>
              <Link href="/" className={styles.link}>
                <Text className="details-text opacity">GDPR</Text>
              </Link>
              <Link href="/" className={styles.link}>
                <Text className="details-text opacity">ANPC</Text>
              </Link>
            </Stack>
          </Stack>
          <Stack gap={30}>
            <h4>Contact</h4>
            <Stack gap={10}>
              <Text className="details-text opacity">
                Str Franyo Zoltan, nr. x, Cluj Napoca
              </Text>
              <Text className="details-text opacity">+0123 456 789</Text>
              <Text className="details-text opacity">abcd@gmail.com</Text>
            </Stack>
          </Stack>
        </Group>
      </Group>
      <Stack mb={20} align="center" gap={10}>
        <Box className={styles.lineBox}></Box>
        <Text className="details-text opacity">
          Copyright NUME FIRMA.© 2024. Toate drepturile sunt rezervate.
        </Text>
      </Stack>
    </Stack>
  );
};

export default FooterBottom;
