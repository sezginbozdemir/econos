import { Button, Group, Text } from "@mantine/core";
import styles from "./Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <Group justify="space-between">
      <h5>Econos</h5>
      <Group className={styles.menuLinks} justify="space-between">
        <Link href="/">
          <h6>Acasă</h6>
        </Link>
        <Link href="/">
          <h6>Despre Noi</h6>
        </Link>
        <Link href="/">
          <h6>Servicii</h6>
        </Link>
        <Link href="/">
          <h6>Contact</h6>
        </Link>
      </Group>
      <Button>Apelează la noi</Button>
    </Group>
  );
};
export default Header;
