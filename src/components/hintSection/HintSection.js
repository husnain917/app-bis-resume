import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
export default function HintSection({
  message,
  description,
  number,
  imgSrc,
  isRight,
}) {
  return (
    <Box
      display="flex"
      flexDir={["column", "column", isRight ? "row" : "row-reverse"]}
      alignItems="center"
      justifyContent="space-between"
      mt="5%"
      ml="5%"
      w="90%"
      bgColor={["#F5F5F5", "#F5F5F5", "#FFFFF", "white"]}
      borderRadius="20px"
    >
      <Box w={["100%", "100%", "50%"]} ml={["5", "0%", "0%"]}>
        <Text
          display={["none", "none", "none", "block"]}
          w="28%"
          fontWeight="bold"
          fontSize="7rem"
          color="white"
          bgColor={isRight ? "#51E2C2" : "#4BCBED"}
          align="center"
          pt="5px"
          pb="5px"
          borderRadius="20px"
          mb="20px"
          ml={isRight ? "67%" : "1%"}
        >
          {number}
        </Text>
        <Box
          bgColor={["none", "none", "none", "#F5F5F5"]}
          borderRadius="20px"
          mr="10px"
          p={["10px", "20px", "40px", "60px"]}
        >
          <Text
            fontSize={["1.2rem", "2rem"]}
            fontWeight="bold"
            color=" #313B47"
            pt="20px"
          >
            {message}
          </Text>
          <Text
            fontSize={["1rem", "1.3rem"]}
            color=" #313B47"
            mt="10px"
            fontWeight="500"
          >
            {description}
          </Text>
        </Box>
      </Box>
      <Box
        w={["100%", "100%", "50%"]}
        ml={["0%", "0%", isRight ? "0%" : "0%", isRight ? "0%" : "8%"]}
      >
        <Image src={imgSrc} width={550} height={530} />
      </Box>
    </Box>
  );
}
