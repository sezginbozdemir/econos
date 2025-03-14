"use client";
import { Group, Stack, Text } from "@mantine/core";
import styles from "./Footer.module.css";
import PrimaryButton from "../buttons/PrimaryButton";
import Image from "next/image";
import { useMediaQuery } from "@mantine/hooks";

const FooterBanner = () => {
  const matches = useMediaQuery("(max-width: 593px)");
  return (
    <Group align="center" justify="center" className={styles.outerGroup}>
      <Stack
        mt={matches ? 50 : 0}
        ta="center"
        align="center"
        w={matches ? `80%` : `35%`}
      >
        <h2>Ofera-ti suportul de care ai nevoie</h2>
        <Text ta="center" className="body-text opacity">
          Fă primul pas către succesul afacerii tale! Solicită acum o
          consultanță personalizată și află cum te putem sprijini în atingerea
          obiectivelor tale financiare.
        </Text>
        <PrimaryButton>Solicită o consultație</PrimaryButton>
      </Stack>
      <Group align="end" mb={-16} wrap="nowrap">
        <Image
          className={styles.firstImg}
          src="/images/hero-2.png"
          alt="econos"
          width={300}
          height={330}
        />
        <Image
          className={styles.secondImg}
          src="/images/hero.png"
          alt="econos"
          width={330}
          height={365}
        />
      </Group>
    </Group>
  );
};

export default FooterBanner;
