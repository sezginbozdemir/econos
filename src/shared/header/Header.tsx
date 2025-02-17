"use client";
import { Box, Group } from "@mantine/core";
import styles from "./Header.module.css";
import Link from "next/link";
import PrimaryButton from "../buttons/PrimaryButton";
import { usePathname } from "next/navigation"; // Import usePathname

const Header = () => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;
  return (
    <Group mt={40} mb={50} justify="space-between">
      <h5>Econos</h5>
      <Group
        gap={50}
        px={50}
        className={styles.menuLinks}
        justify="space-around"
      >
        <Link
          href="/"
          className={`${styles.menuLink} ${
            isActive("/") ? styles.activeLink : ""
          }`}
        >
          <h6>Acasă</h6>
        </Link>
        <Link
          href="/about-us"
          className={`${styles.menuLink} ${
            isActive("/about-us") ? styles.activeLink : ""
          }`}
        >
          <h6>Despre Noi</h6>
        </Link>
        <Link
          href="/services"
          className={`${styles.menuLink} ${
            isActive("/services") ? styles.activeLink : ""
          }`}
        >
          <h6>Servicii</h6>
        </Link>
        <Link
          href="/contact"
          className={`${styles.menuLink} ${
            isActive("/contact") ? styles.activeLink : ""
          }`}
        >
          <h6>Contact</h6>
        </Link>
      </Group>
      <PrimaryButton>
        <h5>Apelează la noi</h5>
      </PrimaryButton>
    </Group>
  );
};

export default Header;
