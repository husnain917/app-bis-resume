import React from "react";
import { Box, Text, Button, Image } from "@chakra-ui/react";

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
        <Box
          flexGrow={1}
          marginBottom={["58px", "64px", "64px"]}
          marginTop={"30px"}
        >
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
        <Box
          position={"relative"}
          flexShrink={"0"}
          alignSelf={"flex-end"}
          marginLeft={"128px"}
          w={"544px"}
          display={"flex"}
        >
          <Box right={"0"} position={"absolute"} marginTop={"-5%"}>
            <Image src="./top1.png" w={"14"} alignSelf={"flex-end"} />
          </Box>
          <Box
            overflow={"hidden"}
            borderRadius={"4px 4px 0 0"}
            height={"480px"}
            w={["550px", "550px", "550px", "550px", "550px"]}
          >
            <Image src="./new-york-resume.jpg" />
          </Box>{" "}
          <Box
            bottom={"20px"}
            right={"100%"}
            marginRight={"-16px"}
            width={"227px"}
            position={"absolute"}
          >
            <Image src="./top2.png" marginTop={"-59px"} bg={"transparent"} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WritingGuides;
