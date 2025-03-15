import { useState } from "react";
import styles from "./CardStack.module.css";
import { Box, Card, Group, Stack } from "@mantine/core";
import Image from "next/image";

interface Category {
  title: string;
  description: string;
}

interface CardStackProps {
  categories: Category[];
}

const CardStack = ({ categories }: CardStackProps) => {
  const [activeCards, setActiveCards] = useState([0]);

  const handleClick = () => {
    if (activeCards.length < categories.length) {
      setActiveCards([...activeCards, activeCards.length]);
    } else {
      setActiveCards([0]);
    }
  };

  return (
    <Stack className={styles.cardStack} onClick={handleClick}>
      {categories.map((category, index) => (
        <Card
          key={index}
          className={`${styles.card} ${
            activeCards.includes(index) ? styles.visible : styles.hidden
          }`}
          style={{
            transform: `translateY(${
              activeCards.includes(index) ? index * 20 : 100
            }px)`,
          }}
        >
          <Stack gap={50} align="center">
            <h3>{category.title}</h3>
            <Group className={styles.group} align="start">
              <Box className={styles.imageBox}>
                <Image
                  className={styles.img}
                  src="/images/info-01.png"
                  alt="econos"
                  fill
                />
              </Box>
              <Box
                className={styles.textBox}
                dangerouslySetInnerHTML={{ __html: category.description }}
              />
            </Group>
          </Stack>
        </Card>
      ))}
    </Stack>
  );
};

export default CardStack;
