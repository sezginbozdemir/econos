"use client";
import { Box, Group, Stack, Text } from "@mantine/core";
import styles from "./AllServices.module.css";
import Image from "next/image";
import SecondaryButton from "@/shared/buttons/SecondaryButton";
import { useRouter, usePathname } from "next/navigation";

interface ServiceCardProps {
  service: {
    title: string;
    service: string;
    categories?: { title: string; description: string }[];
  };
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Group
      justify={service.categories ? "space-around" : "center"}
      className={styles.serviceCard}
    >
      <Stack gap={80} align="center" justify="center" mt={50}>
        <Stack align="center">
          <Image src="/icons/star.png" width={50} height={50} alt="econos" />
          <h4 className={styles.serviceTitle}>{service.title}</h4>
        </Stack>
        {!pathname.startsWith("/services/") && (
          <Box className={styles.buttonBox}>
            <SecondaryButton
              onClick={() => router.push(`/services/${service.service}`)}
            >
              Despre
            </SecondaryButton>
          </Box>
        )}
      </Stack>
      {service.categories && (
        <Stack className={styles.categoryStack} gap={10}>
          {service.categories.map((category, i) => (
            <Box key={i} className={styles.categories}>
              <Text className="body-text">{category.title}</Text>
            </Box>
          ))}
        </Stack>
      )}
    </Group>
  );
};

export default ServiceCard;
