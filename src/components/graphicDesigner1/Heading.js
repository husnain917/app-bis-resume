import { Text } from "@chakra-ui/react";
import React from "react";

export default function Heading({
  text,
  textColor,
  textAlign,
  padding,
  marginTop,
}) {
  return (
    <div>
      <Text
        fontSize="2.3rem"
        fontWeight="bold"
        color={textColor}
        textAlign={textAlign}
        borderBottom="3px"
        borderStyle="dashed"
        borderColor="#93CEE8"
        pr={padding}
        mt={marginTop}
      >
        {text}
      </Text>
    </div>
  );
}
