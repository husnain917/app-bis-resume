import React from "react";
import { Input, Text, Box } from "@chakra-ui/react";
export default function CustomInput({ title, paddingBottom, marginTop,height }) {
  return (
    <>
      <Box mt={marginTop}>
        <Text color="grey" m="5px" fontSize="0.9rem">
          {title}
        </Text>
        <Input
          variant="flushed"
          w={["100%","100%","90%"]}
          bgColor="#EFF2F9"
          pb={paddingBottom}
          h={height}
        />
      </Box>
    </>
  );
}
