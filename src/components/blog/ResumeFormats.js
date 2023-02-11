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
            {/* blogs */}
            {/* <Box display={"flex"} alignItems={"center"}>
              <Link
                href="/blog"
                color={"#fff"}
                fontSize={["1.2em", "1.2em", "1.2em", "1.2em"]}
                _hover={{
                  color: "#63B3ED",
                  textDecoration: "underline",
                }}
                fontFamily={`'EuclidCircularB', sans-serif`}
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
            {/* <Box display={"flex"} alignItems={"center"}>
              <Link
                href="/help/resume-help"
                color={"#fff"}
                fontSize={["1.2em", "1.2em", "1.2em", "1.2em"]}
                _hover={{
                  color: "#63B3ED",
                  textDecoration: "underline",
                }}
                fontFamily={`'EuclidCircularB', sans-serif`}
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
            {/* <Box>
              <Link href="/templates" color={"#fff"}>
                <Text
                  color={"#fff"}
                  fontSize={["1.2em", "1.2em", "1.2em", "1.2em"]}
                  lineHeight={10}
                  fontFamily={`'EuclidCircularB', sans-serif`}
                >
                  The 3 Best Resume Formats to...
                </Text>
              </Link>
            </Box> */}
          </Box>
          <Text
            className={styles.ctaHeading}
            fontFamily={`'EuclidCircularB', sans-serif`}
          >
            {"The 3 Best Resume Formats to Use in 2023 (Examples)"}
          </Text>
          {/* about */}
          <Box className={styles.avatarDiv}>
            {/* <Box>
              <Image
                src="/formatAvatar.png"
                boxSize="110px"
                alt="Avatar Not Found"
                borderRadius={"100% 100%"}
              />
            </Box>
            <Box margin={"0px 0px 0px 20px"}>
              <Text
                color={"#fff"}
                fontSize={"16px"}
                fontFamily={`'EuclidCircularB', sans-serif`}
              >
                Michael Tomaszewski, CPRW
              </Text>
              <Text
                fontSize={"15px"}
                color={"#CCC"}
                fontFamily={`'EuclidCircularB', sans-serif`}
              >
                Career Expert
              </Text>
            </Box> */}
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
