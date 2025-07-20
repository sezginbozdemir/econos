"use client";
import {
  Box,
  Container,
  Group,
  Stack,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import styles from "./page.module.css";
import PrimaryButton from "@/shared/buttons/PrimaryButton";
import Image from "next/image";
import Questions from "../services/[service]/components/questions/Questions";
import questions from "./questions.json";

const Contact = () => {
  return (
    <Container className={styles.bg} w="100%" size={1200}>
      <Stack gap={80} align="center">
        <Stack gap={5} ta="center">
          <h2>Contactează-ne</h2>
          <h2>Suntem la un mesaj distanță!</h2>
        </Stack>
        <Stack gap={30} w="80%">
          <Group gap={30}>
            <Stack gap={30} className={styles.flexOne}>
              <TextInput
                classNames={{ input: styles.input }}
                placeholder="Nume complet"
              />
              <TextInput
                classNames={{ input: styles.input }}
                placeholder="Serviciu"
              />
            </Stack>
            <Stack gap={30} className={styles.flexOne}>
              <TextInput
                classNames={{ input: styles.input }}
                placeholder="Nume complet"
              />
              <TextInput
                classNames={{ input: styles.input }}
                placeholder="Serviciu"
              />
            </Stack>
          </Group>
          <Textarea classNames={{ input: styles.area }} placeholder="Mesaj" />
          <Box>
            <PrimaryButton>Trimite mesajul</PrimaryButton>
          </Box>
        </Stack>
        <Group align="center" w="100%">
          <Stack align="center" w="100%" className={styles.flexOne}>
            <Image
              src="/icons/location.png"
              width={45}
              height={45}
              alt="econos"
            />
            <h4>Adresă</h4>
            <Text className="body-text opacity">
              Nume adresa, nr. 000, Cluj Napoca
            </Text>
          </Stack>
          <Stack align="center" className={styles.flexOne}>
            <Image src="/icons/mail.png" width={45} height={45} alt="econos" />
            <h4>Email</h4>
            <Text className="body-text opacity">abcd@gmail.com</Text>
          </Stack>
          <Stack align="center" className={styles.flexOne}>
            <Image src="/icons/phone.png" width={45} height={45} alt="econos" />
            <h4>Telefon</h4>
            <Text className="body-text opacity">0123456789</Text>
          </Stack>
        </Group>
        <Stack w="100%" align="center">
          <h2>Suntem aici pentru orice întrebare</h2>
          <Questions questions={questions} />
        </Stack>
      </Stack>
    </Container>
  );
};
export default Contact;
