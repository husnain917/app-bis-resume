import { Image, Box, Text } from "@chakra-ui/react";
import React from "react";
import { Line, Circle } from "rc-progress";

export default function MobileAdv({ advNum, title, advDesc, imgSrc }) {
  return (
    <Box
      w="100%"
      display="flex"
      flexDir="column"
      alignItems="center"
      pl="10%"
      pr="10%"
      borderRadius="12px"
      boxShadow="sm"
      mt="2%"
    >
      <Box w={["100%", "100%", "100%"]}>
        <Image
          src={imgSrc}
          w="100%"
          h={["50vh", "65vh"]}
          alt="will show soon"
        />
      </Box>
      <Box
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="space-around"
        bgColor="white"
        pt="20px"
        pb="20px"
        borderRadius="10px"
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
          fontSize={["0.8rem", "0.8rem", "1.2rem", "1.2rem", "1.2rem"]}
          fontWeight="bold"
          pl="10px"
          className="sub-heading"
        >
          {title}
        </Text>
        <Text
          bgColor="white"
          textAlign="center"
          fontSize={["0.5rem", "0.8rem", "2rem"]}
          pl="5%"
          pr="5%"
        >
          {advDesc}
        </Text>
        {/* <Box mt="3%">
          <Line
            percent={1}
            strokeWidth={1}
            strokeColor="#FF8873"
            // className={styles.toastLine}
          />
        </Box> */}
      </Box>
    </Box>
  );
}
