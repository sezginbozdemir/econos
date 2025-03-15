import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionControl,
  AccordionPanel,
  Text,
  Box,
} from "@mantine/core";
import { IconPlus, IconMinus } from "@tabler/icons-react";
import styles from "./Questions.module.css";

interface Question {
  title: string;
  answer: string;
}

interface QuestionsProps {
  questions: Question[];
}

const Questions = ({ questions }: QuestionsProps) => {
  const [active, setActive] = useState<string | null>(
    questions.length > 0 ? questions[0].title : null
  );

  return (
    <Accordion
      disableChevronRotation
      className={styles.accordion}
      value={active}
      onChange={setActive}
    >
      {questions.map(({ title, answer }) => (
        <AccordionItem className={styles.item} key={title} value={title}>
          <AccordionControl
            className={styles.accordionControl}
            chevron={
              active === title ? (
                <Box className={styles.iconBox}>
                  <IconMinus size={20} />
                </Box>
              ) : (
                <Box className={styles.iconBox}>
                  <IconPlus size={20} />
                </Box>
              )
            }
          >
            <h4>{title}</h4>
          </AccordionControl>
          <AccordionPanel className={styles.accordionPanel}>
            <Text className="body-text opacity">{answer}</Text>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Questions;
