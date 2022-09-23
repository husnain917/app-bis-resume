import React, { useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";
import styles from "../../../styles/Index.module.css";
import { Line, Circle } from "rc-progress";
export default function Adv({
  title,
  advNum,
  advDesc,
  tabHandler,
  Display,
  width,
  toastWidth,
  isTabActive,
  index,
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
          color="#002D6B"
          fontSize={["0.5rem", "0.8rem", "1.2rem"]}
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
        w={width}
        h="auto"
        bgColor="white"
        borderBottomRightRadius="12px"
        borderBottomLeftRadius="12px"
      >
        <Text
          bgColor="white"
          textAlign="center"
          fontSize={["0.5rem", "0.8rem", "0.8rem"]}
          pl="5%"
          pr="5%"
        >
          {advDesc}
        </Text>
        <Box mt="3%">
          <Line percent={toastWidth} strokeWidth={1} strokeColor="#FF8873"  />
        </Box>
      </Box>
    </div>
  );
}
