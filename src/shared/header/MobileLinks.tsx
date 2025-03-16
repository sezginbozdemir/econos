import { Stack } from "@mantine/core";
import styles from "./Header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import PrimaryButton from "../buttons/PrimaryButton";

interface MobileLinksProps {
  setMenuOpen: (open: boolean) => void;
}

const MobileLinks = ({ setMenuOpen }: MobileLinksProps) => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  const router = useRouter();

  return (
    <Stack align="center" gap={60} mt={100} justify="space-around">
      {[
        { href: "/", label: "Acasă" },
        { href: "/about-us", label: "Despre Noi" },
        { href: "/services", label: "Servicii" },
        { href: "/contact", label: "Contact" },
      ].map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`${styles.menuLink} ${
            isActive(href) ? styles.activeLink : ""
          }`}
          onClick={() => setMenuOpen(false)}
        >
          <h6>{label}</h6>
        </Link>
      ))}
      <PrimaryButton
        onClick={() => {
          setMenuOpen(false);
          router.push("/contact");
        }}
      >
        Apelează la noi
      </PrimaryButton>
    </Stack>
  );
};

export default MobileLinks;
