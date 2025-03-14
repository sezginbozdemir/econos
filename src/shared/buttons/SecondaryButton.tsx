import { Button, ButtonProps } from "@mantine/core";
import styles from "./Button.module.css";

interface PrimaryButtonProps extends ButtonProps {}

export function SecondaryButton({ children, ...props }: PrimaryButtonProps) {
  return (
    <Button {...props} className={styles.secondaryButton}>
      <h5>{children}</h5>
    </Button>
  );
}

export default SecondaryButton;
