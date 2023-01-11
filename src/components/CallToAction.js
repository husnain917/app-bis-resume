import React from "react";
import styles from "../../styles/Index.module.css";
import { Image, Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import CommonButton from "./commonButton/CommonButton";
import { FaArrowRight } from "react-icons/fa";

export default function CallToAction() {
  return (
    <div className={styles.ctaContainer}>
      <div className={styles.ctaLeftSec}>
        <Text
          className={"main-heading"}
          color={"white"}
          fontSize={["1.9rem", "1.9rem", "2.2rem", "2.7rem", "2.7rem"]}
          lineHeight={["30px", "30px", "36px", "50px", "50px"]}
          textAlign={["center", "center", "center", "start", "start"]}
        >
          Get hired faster with our resume builder!
        </Text>
        <Box
          mt={"30px"}
          display={["flex", "flex", "flex", "block", "block"]}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Link href="/templates">
            <CommonButton
              className={'buttonClass'}
              title="Build My Resume"
              hoverCursor={"pointer"}
              backgroundColor={"#2CACD5"}
              color={"whitesmoke"}
              rightIcon={<FaArrowRight color="white" fontWeight="bold" />}
              fontSize={[
                "0.9rem",
                "0.9rem",
                "1.1rem",
                "1.1rem",
                "1.1rem",
                "1.5rem",
              ]}
            // hoverBackgroundColor={"red"}
            // className={"hoverEffects"}
            />
          </Link>
        </Box>
        <Box
          className={styles.ctaText}
          fontSize={["1rem", "1rem", "1.1rem", "1.1rem", "1.1rem", "1.5rem"]}
          marginTop={["8%", "8%", "5%", "10%", "10%"]}
        >
          Some of Our Customers have been hired by:
        </Box>
        <div className={styles.heroIconImgs}>
          <Image src="/amazon.png" w="25%" h="auto" mt="5px" />
          <Image src="/qatar.png" w="25%" h="auto" />
          <Image src="/netflix.png" w="25%" h="auto" />
        </div>
      </div>
      <div className={styles.ctaRightSec}>
        <Image src="/hero.png" w="100%" h="98%" />
      </div>
    </div>
  );
}
