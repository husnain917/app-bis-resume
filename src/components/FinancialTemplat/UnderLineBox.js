import { Box } from "@chakra-ui/react";
import React from "react";

const UnderLineBox = (props) => {
  return (
    <Box width={props.width || "140px"} height="1" backgroundColor="red"></Box>
  );
};

export default UnderLineBox;
