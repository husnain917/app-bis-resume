import { Box } from "@chakra-ui/react";
import React from "react";

const UnderLineBox = (props) => {
  return (
    <Box
      width={props.width || "40px"}
      height="1"
      backgroundColor="#077BBD"
      borderRadius={"15%"}
    ></Box>
  );
};

export default UnderLineBox;
