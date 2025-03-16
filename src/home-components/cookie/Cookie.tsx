"use client";
import { useState, useEffect } from "react";
import { Modal, Button, Text, Group, Stack } from "@mantine/core";
import { useRouter } from "next/navigation";
import styles from "./Cookie.module.css";
import Image from "next/image";

const Cookie = () => {
  const [opened, setOpened] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const hasAccepted = localStorage.getItem("cookiesAccepted");
    if (!hasAccepted) {
      setOpened(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setOpened(false);
  };

  return (
    <Modal
      opened={opened}
      onClose={acceptCookies}
      centered
      withCloseButton={false}
      overlayProps={{
        backgroundOpacity: 0.5,
        blur: 3,
      }}
      classNames={{ content: styles.cookieModal, body: styles.modalBody }}
    >
      <Stack h="100%" justify="space-between">
        <Stack mt={40} gap={50} align="center" justify="center">
          <Image src="/icons/cookie.png" width={90} height={90} alt="cookie" />
          <Stack className={styles.textStack}>
            <h3>Websitul utilizează Cookies</h3>
            <Text c="#010612BF" className="body-text">
              Utilizăm cookies pentru a îmbunătăți experiența ta pe site-ul
              nostru și de a-ți oferi o navigare mai eficientă. Prin continuarea
              navigării, ești de acord cu utilizarea cookie-urilor.
            </Text>
          </Stack>
        </Stack>
        <Group className={styles.buttons}>
          <Button
            className={styles.firstButton}
            onClick={() => router.push("/cookie-policy")}
          >
            Politica de cookie-uri
          </Button>
          <Button className={styles.secondButton} onClick={acceptCookies}>
            OK
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
};

export default Cookie;
