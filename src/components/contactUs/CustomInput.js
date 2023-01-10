import React from "react";
import { Input, Text, Box } from "@chakra-ui/react";
export default function CustomInput({
  className,
  title,
  paddingBottom,
  marginTop,
  height,
}) {
  return (
    <>
      <Box mt={marginTop}>
        <Text className={className} color="grey" m="5px" fontSize="0.9rem">
          {title}
        </Text>
        <Input
          variant="flushed"
          w={["100%", "100%", "90%"]}
          bgColor="#EFF2F9"
          pb={paddingBottom}
          h={height}
          className={className}
        />
      </Box>
    </>
  );
}
