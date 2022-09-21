import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";
export default function Adv({ title, advNum, advDesc }) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [Display, setDisplay] = useState("none");

  const tabHandler = () => {
    console.log("handler presses");
    setWidth(500);

    setDisplay("block");
  };
  return (
    <div>
      <Box
        w="500px"
        display="flex"
        flexDir="row"
        alignItems="center"
        bgColor="white"
        p="20px"
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
        <Text color="#002D6B" fontSize="1rem" fontWeight="bold" pl="10px">
          {title}
        </Text>
      </Box>
      <Box
        display={Display}
        w={width}
        h="auto"
        bgColor="white"
        borderBottomRightRadius="12px"
        borderBottomLeftRadius="12px"
      >
        <Text bgColor="white" textAlign="center" fontSize="12px" pl="5%" pr="5%">
          {advDesc}
        </Text>
      </Box>
    </div>
  );
}
