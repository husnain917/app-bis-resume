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
      justifyContent={["space-between", "space-between", "space-between"]}
      mt="2.5%"
      mr="15%"
      ml={[isRight?"5%":"5%",isRight?"5%":"5%",isRight?"5%":"5%",isRight ? "5%" : "0.3%"]}
      w="90%"
      bgColor={["#F5F5F5", "#F5F5F5", "#FFFFF", "white"]}
      borderRadius="20px"
    >
      <Box
        w={["100%", "100%", isRight ? "40%" : "50%"]}
        ml={["5", "0%", "0%", isRight ? "15%" : "10px"]}
        mr={isRight ? "0%" : "5%"}
        mb="5%"
      >
        <Text
          display={["none", "none", "none", "block"]}
          w={isRight ? "25%" : "25%"}
          fontWeight="bold"
          fontSize={isRight ? "4rem" : "4rem"}
          color="white"
          bgColor={isRight ? "#51E2C2" : "#4BCBED"}
          align="center"
          pt="5px"
          pb="5px"
          borderRadius="20px"
          mb="20px"
          ml={isRight ? "73%" : "0%"}
        >
          {number}
        </Text>
        <Box
          bgColor={["none", "none", "none", "#F5F5F5"]}
          borderRadius="20px"
          mr="10px"
          p={["10px", "20px", "30px", "30px"]}
        >
          <Text
            fontSize={["1.2rem", "2rem"]}
            fontWeight="bold"
            color=" #313B47"
            pt="10px"
            textAlign="left"
          >
            {message}
          </Text>
          <Text
            fontSize={["1rem", "1rem"]}
            color=" #313B47"
            mt={[,,"0px","10px"]}
            fontWeight="500"
            
          >
            {description}
          </Text>
        </Box>
      </Box>
      <Box
        w={["100%", "100%", "50%"]}
        ml={["0%", "15%", isRight ? "0%" : "0%", isRight ? "0%" : "21.5%"]}
      >
        <Image src={imgSrc} width={450} height={400} />
      </Box>
    </Box>
  );
}
