import React from "react";
import { Box, Text, Button, Image } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";

const SelectResume = () => {
  return (
    <Box
      position={"relative"}
      padding={["120px 44px 144px"]}
      backgroundColor={["#282b8f"]}
      overflow={["hidden"]}
    >
      <Box
        position={"relative"}
        maxW={["1120px"]}
        margin={["0 auto"]}
        display={["flex"]}
      >
        <Box
          transition={["none 0s ease 0s"]}
          transform={["translateX(0px)"]}
          opacity={["1"]}
          className={"resume-templates__content"}
        >
          <Box className={"resume-templates__slider-arrow-container"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="resume-templates__arrow"
            >
              <path d="M14.6 16.7l-1.4 1.5-5.9-5.5a1 1 0 010-1.4l6-5.5 1.3 1.5L9.5 12l5 4.7z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="resume-templates__arrow"
            >
              <path d="M14.6 16.7l-1.4 1.5-5.9-5.5a1 1 0 010-1.4l6-5.5 1.3 1.5L9.5 12l5 4.7z"></path>
            </svg>
          </Box>
          <Box className={"resume-templates__info"}>
            <Text
              fontSize={"46px"}
              fontWeight={"700"}
              lineHeight={"40px"}
              color={"white"}
              marginBottom={"24px"}
            >
              Beautiful ready-to-use resume templates
            </Text>
            <Box color={"white"} marginBottom={"24px"}>
              Win over employers and recruiters by using one of our 18 elegant,
              professionally-designed resume templates. Download to word or PDF.
            </Box>
            <Box marginBottom={"142px"}>
              <a className="button" href="/app/create-resume">
                Select Template
              </a>
            </Box>
          </Box>
          <Box>
            <Box className={"resume-templates__stars"}>
              <Box className={"resume-templates__star"}></Box>
              <Box className={"resume-templates__star"}></Box>
              <Box className={"resume-templates__star"}></Box>
              <Box className={"resume-templates__star"}></Box>
              <Box className={"resume-templates__star"}></Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SelectResume;
