import React from "react";
import { Input, Image, Box, Text } from "@chakra-ui/react";

export default function HeadingText({ heading, marginTop, width,textSize,wordSpacing }) {
  return (
    <Box mt={marginTop}>
      <Box bgColor="black" w={width} h="2px"></Box>
      <Text fontWeight="780" fontSize={textSize} lineHeight="70px" letterSpacing={wordSpacing}>
        {heading}
      </Text>
      <Box bgColor="black" w={width} h="2px"></Box>
    </Box>
  );
}
