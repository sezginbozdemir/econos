import type { Metadata } from "next";
import { Murecho, Open_Sans } from "next/font/google";
import "./globals.css";
import "./typography.css";
import "@mantine/core/styles.css";

import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
  createTheme,
  Box,
} from "@mantine/core";
import Header from "@/shared/header/Header";
import Footer from "@/shared/footer/Footer";

const murecho = Murecho({
  subsets: ["latin"],
  variable: "--font-murecho",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const openSans = Open_Sans({
  variable: "--font-openSans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Econos",
  description: "Econos",
};

const theme = createTheme({
  breakpoints: {
    xs: "30em",
    sm: "48em",
    md: "64em",
    lg: "74em",
    xl: "90em",
  },
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`${murecho.variable} ${openSans.variable}`}>
        <MantineProvider theme={theme} withGlobalClasses withCssVariables>
          <Header />
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
