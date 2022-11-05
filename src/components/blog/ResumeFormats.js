import React from "react";
import styles from "../../../styles/resumeFormats.module.css";
import { Box, Image } from '@chakra-ui/react'


export default function ResumeFormats() {
  return (
    <>
    <Box className={styles.ctaContainer}>
      <Box className={styles.ctaLeftSec}>
        <h1 className={styles.ctaHeading}>
          The 3 Best Resume Formats to 
          <br />
          Use in 2022 (Examples)
        </h1>

      </Box>
      <Box className={styles.ctaRightSec}>
        <Image src="/hero.png" w="100%" h="98%" />
      </Box>
    </Box>
    </>
  );
}
