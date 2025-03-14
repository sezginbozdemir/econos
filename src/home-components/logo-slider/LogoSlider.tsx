"use client";
import { Box } from "@mantine/core";
import classes from "./LogoSlider.module.css";
import logos from "./data";
import Image from "next/image";

const LogoSlider = () => {
  return (
    <Box className={classes.container}>
      <Box className={classes.slider}>
        {logos.map((logo, index) => (
          <Box key={`first-${index}`} className={classes.slide}>
            <Image
              src={logo.url}
              alt={logo.alt}
              width={100}
              height={100}
              className={classes.image}
            />
          </Box>
        ))}
        {logos.map((logo, index) => (
          <Box key={`second-${index}`} className={classes.slide}>
            <Image
              src={logo.url}
              alt={logo.alt}
              width={100}
              height={100}
              className={classes.image}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default LogoSlider;
