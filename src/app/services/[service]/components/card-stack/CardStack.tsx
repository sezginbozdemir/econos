import { useState, useEffect, useRef } from "react";
import styles from "./CardStack.module.css";
import { Box, Card, Group, Stack } from "@mantine/core";
import Image from "next/image";

interface Category {
  title: string;
  description: string;
  img: string;
}

interface CardStackProps {
  categories: Category[];
}

const CardStack = ({ categories }: CardStackProps) => {
  const [activeCards, setActiveCards] = useState<number[]>([]);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const elementHeight = rect.height;
    const viewportHeight = window.innerHeight;

    const startPoint = viewportHeight;
    const endPoint = -elementHeight;

    const currentPosition = rect.top;

    const totalDistance = startPoint - endPoint;
    const distanceTraveled = startPoint - currentPosition;
    const scrollProgress = Math.min(
      Math.max(0, distanceTraveled / totalDistance),
      1
    );

    console.log(scrollProgress);

    let cardsToShow = 0;
    if (scrollProgress >= 0.7) {
      cardsToShow = categories.length;
    } else if (scrollProgress >= 0.5) {
      cardsToShow = Math.ceil(categories.length * 0.75);
    } else if (scrollProgress >= 0.3) {
      cardsToShow = Math.ceil(categories.length * 0.5);
    } else if (scrollProgress >= 0.1) {
      cardsToShow = Math.ceil(categories.length * 0.25);
    }

    const newActiveCards = Array.from(
      { length: Math.min(cardsToShow, categories.length) },
      (_, i) => i
    );

    if (JSON.stringify(newActiveCards) !== JSON.stringify(activeCards)) {
      setActiveCards(newActiveCards);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeCards.length]);

  return (
    <div className={styles.cardStackOuter} ref={containerRef}>
      <Stack className={styles.cardStack}>
        <Box className={styles.cardWrapper}>
          {categories.map((category, index) => (
            <Card
              key={index}
              className={`${styles.card} ${
                activeCards.includes(index) ? styles.visible : styles.hidden
              }`}
              style={{
                transform: `translateY(${
                  activeCards.includes(index) ? index * 30 : 200
                }px)`,
                zIndex: index,
              }}
            >
              <Stack gap={50} align="center">
                <h3>{category.title}</h3>
                <Group className={styles.group} align="start">
                  <Box className={styles.imageBox}>
                    <Image
                      className={styles.img}
                      src={category.img}
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
        </Box>
      </Stack>
    </div>
  );
};

export default CardStack;
