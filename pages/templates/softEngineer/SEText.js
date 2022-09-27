import React from "react";
import { Input, Image, Box, Text } from "@chakra-ui/react";

export default function SEText({ title, desc, marginTop, textColor,date }) {
  return (
    <div>
      <Text
        fontWeight="bold"
        fontSize="1.5rem"
        pt="3%"
        mt={marginTop}
        color={textColor}
        w="50%"
      >
        {title}
      </Text>
      <Text fontSize="0.9rem" pb="3%"  lineHeight="0px" mt="4%" >
        {desc}
      </Text>
      <Text fontSize="0.9rem" pb="3%"  lineHeight="0px" mt="1.5%" >
        {date}
      </Text>
    </div>
  );
}
