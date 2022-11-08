import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";

const WritingGuides = () => {
  return (
    <Box padding={"0 44px"}>
      <Box
        paddingTop={["32px", "64px", "64px", "80px", "80px"]}
        maxWidth={"1120px"}
        margin={"0 auto"}
        display={"flex"}
        flexDirection={["column", "column", "row", "row", "row"]}
      >
        <Box flexGrow={1} marginBottom={["58px", "64px", "64px"]}>
          {" "}
          <Box
            fontSize={["27px", "38px"]}
            lineHeight={["34px", "40px"]}
            marginBottom={"12px"}
            maxW="none"
            fontWeight={["700"]}
          >
            350+ Professional <br></br> Resume Examples <br></br>(+Writing
            Guides)
          </Box>
          <Box fontSize={"19px"} lineHeight={"24px"} marginBottom={"24px"}>
            Check out our free resume samples for inspiration. Use the expert
            guides and our resume builder to create a beautiful resume in
            minutes. We also provide a library of resume templates.
          </Box>
          <Box>Check my Resume</Box>
        </Box>
        <Box> Picture</Box>
      </Box>
    </Box>
  );
};

export default WritingGuides;
