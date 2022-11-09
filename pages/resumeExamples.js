import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import ResumeExampleData from "../src/components/resumeExampleData/resumeExampleData";

const ResumeExamples = () => {
  return (
    <Box>
      <ResumeExampleData />
      <Box paddingTop={"80px"} padding={"80px 44px"}>
        <Box maxWidth={"1120px"} display={"flex"} margin={"0 auto"}></Box>
      </Box>
    </Box>
  );
};

export default ResumeExamples;
