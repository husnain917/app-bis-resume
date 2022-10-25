import React from "react";
import { Box, Text } from "@chakra-ui/react";
export default function Heading({ title }) {
  return (
    <>
      <Box bgColor="black" w="70%" h="2px" mt="5%"></Box>
      <Text fontSize="1.5rem" color="#E07559" fontWeight="bold" mt="1%">
        {title}
      </Text>
      <Box bgColor="black" w="70%" h="2px" mt="2%"></Box>
    </>
  );
}
