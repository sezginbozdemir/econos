"use client";
import { useRef, useState, useEffect } from "react";
import { Group, Card, Box, Text, Stack } from "@mantine/core";
import styles from "./CardStack.module.css";
import data from "./data.json";
import Image from "next/image";

interface CardItem {
  title: string;
  subject: string;
  description: string;
  optional?: string;
  certs?: string[];
}

const CardStack = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleCard = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(progress);
    };

    scrollRef.current?.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => scrollRef.current?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box className={styles.outerBox}>
      <Stack w="100%" mt={100} align="start">
        <Group w="100%" align="end" justify="space-between">
          <h2>De ce sa ne alegi pe noi?</h2>
          <Box className={styles.progressBar}>
            <Box
              className={styles.progress}
              style={{ width: `${scrollProgress}%` }}
            ></Box>
          </Box>
        </Group>
        <Box className={styles.scrollContainer} ref={scrollRef}>
          <Group className={styles.cardGroup} wrap="nowrap">
            {(data as CardItem[]).map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <Card
                  key={index}
                  className={`${styles.card} ${
                    isOpen ? styles.openCard : styles.closedCard
                  }`}
                  onClick={() => toggleCard(index)}
                >
                  <Group
                    className={`${
                      !isOpen ? styles.closedInnerGroup : styles.innerGroup
                    }`}
                  >
                    <Box
                      className={`${styles.roundedNumber} ${
                        isOpen ? styles.openRoundedNumber : ""
                      }`}
                    >
                      <h6>{index + 1}</h6>
                    </Box>
                    <h3
                      className={`${styles.title} ${
                        !isOpen ? styles.closedTitle : styles.openTitle
                      }`}
                    >
                      {item.title}
                    </h3>
                  </Group>
                  {isOpen && (
                    <Stack className={styles.cardContent}>
                      <h4 className={styles.subject}>{item.subject}</h4>
                      <Text
                        mb={20}
                        className={`${styles.description} body-text opacity`}
                      >
                        {item.description}
                      </Text>
                      {item.optional && (
                        <Stack className={styles.optionalSection}>
                          <h4>{item.optional}</h4>
                          {item.certs && item.certs.length > 0 && (
                            <Box>
                              {item.certs.map((cert, i) => (
                                <Text className="body-text opacity" key={i}>
                                  {cert}
                                </Text>
                              ))}
                            </Box>
                          )}
                        </Stack>
                      )}
                      <Box className={styles.imageBox}>
                        <Image
                          src="/images/services-bg.jpeg"
                          alt="econos"
                          objectFit="cover"
                          fill
                        />
                      </Box>
                    </Stack>
                  )}
                </Card>
              );
            })}
          </Group>
        </Box>
      </Stack>
    </Box>
  );
};

export default CardStack;
