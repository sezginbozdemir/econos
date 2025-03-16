"use client";
import { useState } from "react";
import { Box, Container, Group, Stack } from "@mantine/core";
import PrimaryButton from "../buttons/PrimaryButton";
import Links from "./Links";
import { useMediaQuery } from "@mantine/hooks";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./Header.module.css";
import MobileLinks from "./MobileLinks";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const matches = useMediaQuery("(min-width: 1024px)");
  const mobile = useMediaQuery("(min-width: 768px)");
  const router = useRouter();

  return (
    <Container size={1200} w="100%">
      <Stack mb={!matches ? 30 : 0}>
        <Group
          mt={matches ? 40 : 20}
          mb={matches ? 50 : 10}
          justify={mobile ? `space-around` : `space-between`}
        >
          <h5>Econos</h5>
          {matches && <Links />}
          {mobile && (
            <PrimaryButton onClick={() => router.push("/contact")}>
              Apelează la noi
            </PrimaryButton>
          )}
          {!mobile && (
            <Image
              onClick={() => setMenuOpen(!menuOpen)}
              className={styles.burger}
              src="/icons/burger.png"
              width={20}
              height={14}
              alt="econos"
            />
          )}
        </Group>
        {!matches && <Links />}
      </Stack>
      <Box className={`${styles.menu} ${menuOpen ? styles.open : ""}`}>
        <button
          className={styles.closeButton}
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>
        <MobileLinks setMenuOpen={setMenuOpen} />
      </Box>
    </Container>
  );
};

export default Header;
