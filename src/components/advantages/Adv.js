import React, { useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";
import styles from "../../../styles/Index.module.css";
import { Line, Circle } from "rc-progress";
import ProgressBar from "@ramonak/react-progress-bar";
export default function Adv({
  title,
  advNum,
  advDesc,
  tabHandler,
  Display,
  Width,
  toastWidth,
  isTabActive,
  index,
  isSlider,
}) {
  return (
    <div>
      <Box
        w="100%"
        display="flex"
        flexDir="row"
        alignItems="center"
        bgColor="white"
        p={["10px", "20px"]}
        pr="3rem"
        borderRadius="12px"
        boxShadow="sm"
        mt="2%"
        cursor="pointer"
        onClick={tabHandler}
      >
        <Text
          color="#002D6B"
          bgColor="#EFC778"
          fontSize="1rem"
          fontWeight="bold"
          pr="8px"
          pl="8px"
          borderRadius="100%"
        >
          {advNum}
        </Text>
        <Text
          className="sub-heading"
          color="#002D6B"
          fontSize={["0.5rem", "0.8rem", "1rem", "1.4rem", "1.4rem"]}
          lineHeight={"20px"}
          fontWeight="bold"
          pl="10px"
        >
          {title}
        </Text>
      </Box>
      <Box
        position="relative"
        bottom="10px"
        display={index === isTabActive ? "block" : "none"}
        w={Width}
        h="auto"
        bgColor="white"
        borderBottomRightRadius="12px"
        borderBottomLeftRadius="12px"
      >
        <Text
          borderBottomRightRadius="12px"
          borderBottomLeftRadius="12px"
          bgColor="white"
          textAlign="left"
          className={"small-text"}
          fontSize={["0.5rem", "0.8rem", "0.9em", "1.1em", "1.1em"]}
          pl="5%"
          pr="5%"
          pb="3%"
          pt="2%"
          lineHeight={["14px", "18px", "18px", "22px", "22px"]}
        >
          {advDesc}
        </Text>
        <Box mt="3%">
          <Line
            percent={toastWidth}
            strokeWidth={1}
            strokeColor="#FF8873"
            className={styles.toastLine}
          />
          {/* <ProgressBar completed={toastWidth} bgColor="#FF8873" height="5px"  /> */}
        </Box>
      </Box>
    </div>
  );
}
