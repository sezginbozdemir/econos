"use client";
import { Container, Group, Stack } from "@mantine/core";
import PrimaryButton from "../buttons/PrimaryButton";
import Links from "./Links";
import { useMediaQuery } from "@mantine/hooks";
import { useRouter } from "next/navigation";

const Header = () => {
  const matches = useMediaQuery("(min-width: 1024px)");
  const mobile = useMediaQuery("(min-width: 768px)");
  const router = useRouter();

  return (
    <Container size={1200} w="100%">
      <Stack mb={!matches ? 30 : 0}>
        <Group
          mt={matches ? 40 : 20}
          mb={matches ? 50 : 10}
          justify={mobile ? `space-around` : `start`}
        >
          <h5>Econos</h5>
          {matches && <Links />}
          {mobile && (
            <PrimaryButton onClick={() => router.push("/contact")}>
              Apelează la noi
            </PrimaryButton>
          )}
        </Group>
        {!matches && <Links />}
      </Stack>
    </Container>
  );
};

export default Header;
