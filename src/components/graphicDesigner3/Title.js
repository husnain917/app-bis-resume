import React from "react";
import { Text } from "@chakra-ui/react";

export default function Title({ text, color, marginLeft,letterSpacing }) {
  return (
    <div>
      <Text color={color} fontSize="1.3rem" fontWeight="bold" ml={marginLeft} letterSpacing={letterSpacing}>
        {text}
      </Text>
    </div>
  );
}
