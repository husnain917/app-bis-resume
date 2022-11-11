import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import ResumeExampleData from "../src/components/resumeExampleData/resumeExampleData";
import SearchBar from "../src/components/resumeExampleData/searchBar/SearchBar";
import MostPopular from "../src/components/resumeExampleData/mostPopular/MostPopular";
import CommonComponent from "../src/components/resumeExampleData/commonComponent/commonComponent";

const ResumeExamples = () => {
  return (
    <Box>
      <ResumeExampleData />
      <Box paddingTop={"80px"} padding={"80px 44px"}>
        <Box maxWidth={"1120px"} display={"flex"} margin={"0 auto"}>
          <Box width={"100%"} flexGrow={"1"}>
            <SearchBar />
            <MostPopular />
            <CommonComponent />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ResumeExamples;
