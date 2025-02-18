import { Button, ButtonProps } from "@mantine/core";
import styles from "./Button.module.css";

interface PrimaryButtonProps extends ButtonProps {}

export function PrimaryButton({ children, ...props }: PrimaryButtonProps) {
  return (
    <Button {...props} className={styles.primaryButton}>
      <h5> {children}</h5>
    </Button>
  );
}

export default PrimaryButton;
