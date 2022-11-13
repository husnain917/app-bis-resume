import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import SearchBar from "../src/components/resumeExampleData/searchBar/SearchBar";
import MostPopular from "../src/components/resumeExampleData/mostPopular/MostPopular";
import CommonComponent from "../src/components/resumeExampleData/commonComponent/commonComponent";
import WritingGuides from "../src/components/resumeExampleData/writingGuides/WritingGuides";
import { data } from "../src/components/resumeExampleData/resumeExampleData";
const ResumeExamples = () => {
  console.log("DATAAAAAAAAAAAAAAA", data);
  return (
    <Box>
      <Box bg="lightcyan" height={"auto"} width={"100wv"}>
        <WritingGuides />
      </Box>
      <Box paddingTop={"80px"} padding={"80px 44px"}>
        <Box maxWidth={"1120px"} display={"flex"} margin={"0 auto"}>
          <Box width={"100%"} flexGrow={"1"}>
            <SearchBar />
            <MostPopular />
            {data.map((data) => {
              console.log(data);
            })}
            <CommonComponent label={"Component"} data={""} />
            <CommonComponent header={"Component"} data={""} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ResumeExamples;
