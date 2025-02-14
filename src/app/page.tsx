import Header from "@/shared/header/Header";
import styles from "./page.module.css";
import { Container } from "@mantine/core";

export default function Home() {
  return (
    <Container className={styles.Container} w="100%" h="100%">
      <Header />
    </Container>
  );
}
