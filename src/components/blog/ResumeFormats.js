import React from "react";
import styles from "../../../styles/resumeFormats.module.css";
import {
  Box,
  Image,
  Link,
  Text,
} from "@chakra-ui/react"
import { FaGreaterThan } from "react-icons/fa";

export default function ResumeFormats() {
  return (
    <>
      <Box className={styles.ctaContainer}>
        <Box className={styles.ctaLeftSec}>
          {/* links */}
          <Box
            className={styles.blogLinksDiv}
          >
            {/* blogs */}
            <Box
              display={"flex"}
              alignItems={"center"}
            >
              <Link
                href="#"
                color={"#fff"}
                fontSize={["1.2em", "1.2em", "1.2em", "1.2em",]}
                _hover={
                  {
                    color: "#63B3ED",
                    textDecoration: "underline"
                  }
                }
              >
                Blog
              </Link>
              <Text
                color={"#fff"}
                fontSize={"12px"}
                padding={"5px 20px 0px 20px"}
              >
                <FaGreaterThan />
              </Text>
            </Box>

            {/* Resume Help */}
            <Box
              display={"flex"}
              alignItems={"center"}
            >
              <Link
                href="#"
                color={"#fff"}
                fontSize={["1.2em", "1.2em", "1.2em", "1.2em",]}
                _hover={
                  {
                    color: "#63B3ED",
                    textDecoration: "underline"
                  }
                }
              >
                Resume Help
              </Link>
              <Text
                color={"#fff"}
                fontSize={"12px"}
                padding={"5px 20px 0px 20px"}
              >
                <FaGreaterThan />
              </Text>
            </Box>

            {/* The 3 Best Resume Formats to  */}
            <Box>
              <Text
                color={"#fff"}
                fontSize={["1.2em", "1.2em", "1.2em", "1.2em",]}
                lineHeight={10}
              >
                The 3 Best Resume Formats to...
              </Text>
            </Box>
          </Box>
          <Text className={styles.ctaHeading}>
            The 3 Best Resume Formats to
            <br />
            Use in 2022 (Examples)
          </Text>

          {/* about */}
          <Box
            className={styles.avatarDiv}
          >
            <Box>
              <Image
                src="/formatAvatar.png"
                boxSize="110px"
                alt="Avatar Not Found"
                borderRadius={"100% 100%"}
              />
            </Box>
            <Box
              margin={"0px 0px 0px 20px"}
            >
              <Text
                color={"#fff"}
                fontSize={"16px"}
              >
                Michael Tomaszewski, CPRW
              </Text>
              <Text
                fontSize={"15px"}
                color={"#CCC"}
              >
                Career Expert
              </Text>
              <Text
                fontSize={"15px"}
                color={"#63B3ED"}
              >
                Updated 09/08/2022
              </Text>
            </Box>
          </Box>
        </Box>
        <Box className={styles.ctaRightSec}>
          <Image src="/hero.png" w="100%" h="98%" />
        </Box>
      </Box>
    </>
  );
}
