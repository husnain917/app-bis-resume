import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";
import Adv from "./Adv";
import TabOne from "../../../public/tabone.jpg";
import TabTwo from "../../../public/tabtwo.jpg";
import TabThree from "../../../public/tabthree.jpg";
import TabFour from "../../../public/tabfour.jpg";
import TabFive from "../../../public/tabfive.jpg";
import TabSix from "../../../public/tabsix.jpg";
export default function Advantages() {
  const [index, setIndex] = useState("");
  const imageArray = [TabOne, TabTwo, TabThree, TabFour, TabFive, TabSix];
  return (
    <>
      <Box bgColor="#F6F5F0">
        <Text
          fontSize="2rem"
          align="center"
          fontWeight="600"
          color="#002D6B"
          mt="5%"
          pt="5%"
        >
          Advantages of Using My Perfect BisResume
        </Text>
        <Box
          w="100%"
          h="100vh"
          display="flex"
          flexDir="row"
          justifyContent="center"
        >
          <Box>
            <img
              src={imageArray[index]}
              // style={{ width: 400, height: "auto" }}
              width={400}
              height={400}
            />
          </Box>
          <Box>
            <Adv
              advNum="1"
              title="Professional, customizable templates"
              advDesc="Stand out with My Perfect Resumes eye-catching templates! Building an impressive resume has never been easier or faster."
              onClick={() => setIndex(0)}
            />
            <Adv
              advNum="2"
              title="Expertly crafted phrases"
              advDesc="Dont get stuck writing about your work experience. Our Resume Builder has pre-written, industry-specific bullet points to create an impressive resume."
              onClick={() => setIndex(1)}
            />
            <Adv
              advNum="3"
              title="Popular format downloads"
              advDesc="Need your resume in PDF, word, or an image file? You are in control with multiple export and download options."
            />
            <Adv
              advNum="4"
              title="Optimize your resume"
              advDesc="With resume score and resume check, we will rate the strength of your resume and guide you through actionable steps to create a resume that showcases your best professional self!"
            />
            <Adv
              advNum="5"
              title="Customize your resume to the job"
              advDesc="Copy and paste a job description from any listing and get a job-specific resume match score. We will guide you through tailoring your resume for the job!"
            />
            <Adv
              advNum="6"
              title="Up your application game"
              advDesc="With Smart Apply, we will help you find an opportunity, customize your resume, create a matching cover letter, and download your documents.
               We will even send you to the web page where you can apply!"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
