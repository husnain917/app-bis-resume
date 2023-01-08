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
        <Text className={"main-heading"} color={"white"}>
          Get hired faster with our resume builder!
        </Text>
        <Box mt={"30px"}>
          <Link href="/templates">
            <CommonButton
              className={'buttonClass'}
              title="Build My Resume"
              hoverCursor={"pointer"}
              backgroundColor={"#2CACD5"}
              color={"whitesmoke"}
              rightIcon={<FaArrowRight color="white" fontWeight="bold" />}
              fontSize={[
                "1rem",
                "1rem",
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
        <p className={styles.ctaText}>
          Some of Our Customers have been hired by:
        </p>
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
