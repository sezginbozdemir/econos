import { Group, Stack } from "@mantine/core";
import styles from "./Header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <Group gap={50} px={50} className={styles.menuLinks} justify="space-around">
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
  );
};

export default Links;
