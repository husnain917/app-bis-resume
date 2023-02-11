import React from "react";
import styles from "../../../styles/resumeFormats.module.css";
import { Box, Image, Link, Text } from "@chakra-ui/react";
import { FaGreaterThan } from "react-icons/fa";

export default function ResumeFormats() {
  return (
    <>
      <Box className={styles.ctaContainer}>
        <Box className={styles.ctaLeftSec}>
          {/* links */}
          <Box className={styles.blogLinksDiv}>
            
       
          </Box>
          <Text
            className={styles.ctaHeading}
            fontFamily={`'EuclidCircularB', sans-serif`}
          >
            {"The 3 Best Resume Formats to Use in 2023 (Examples)"}
          </Text>
          {/* about */}
          <Box className={styles.avatarDiv}>
                      </Box>
        </Box>
        <Box className={styles.ctaRightSec} marginTop={"30px"}>
          <Image
            // height={"500px"}
            // width={"730px"}
            // src="https://mobirise.com/extensions/techm4/assets/images/background10.jpg"
            w="100%"
            h="98%"
            src="/hero.png"
            alt="will show soon"
          />
        </Box>
      </Box>
    </>
  );
}
