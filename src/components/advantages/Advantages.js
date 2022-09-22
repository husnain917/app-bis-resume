import { Box, Button, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Adv from "./Adv";
import { data } from "./Constant";
export default function Advantages() {
  const [isTabActive, setIsTabActive] = useState(0);
  const [width, setWidth] = useState("500");
  const [Display, setDisplay] = useState("none");
  const [toastWidth, setToastWidth] = useState(0);
  const [currentActiveTab, setCurrentActiveTab] = useState(0);

  const tabHandler = (index) => {
    const length = data.length;
    console.log(length);
    setWidth("100%");
    setDisplay("block");
    setIsTabActive(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isTabActive < 5) {
        setIsTabActive((prevTab) => {
          if (prevTab === 5) return 0;
          console.log("done");
          return (prevTab += 1);
        });
      }
    }, 5000);
  }, []);

  return (
    <>
      <Box bgColor="#F6F5F0">
        <Text
          fontSize="2rem"
          align="center"
          fontWeight="600"
          color="#002D6B"
          mt="5%"
          pt="2%"
        >
          Advantages of Using My Perfect BisResume
        </Text>
        <Box
          w="100%"
          h="auto"
          display="flex"
          flexDir={["column", "column", "column", "row"]}
          justifyContent="center"
          mt={["10%", , , "2%"]}
          pl="10%"
          pr="10%"
          pb="5%"
        >
          <Box w={["100%", "100%", "100%", "50%"]}>
            <Image src={data[isTabActive].imgSrc} w="100%" h="auto" />
          </Box>
          <Box w={["100%", "100%", "100%", "50%"]} mt="2%">
            {data?.map((tab, index) => {
              return (
                <Adv
                  advNum={tab.advNum}
                  title={tab.title}
                  advDesc={tab.advDesc}
                  tabHandler={() => tabHandler(index)}
                  width={width}
                  Display={Display}
                  toastWidth={toastWidth}
                  isTabActive={isTabActive}
                  currentActiveTab={currentActiveTab}
                  index={index}
                />
              );
            })}
          </Box>
        </Box>
        <Button
          bgColor="#027C87"
          color="white"
          borderRadius="50px"
          fontSize="1.2rem"
          fontWeight="bold"
          textAlign="center"
          ml={["20%", "30%", "35%", "37%", "43%"]}
          mb="5%"
          p="25px"
          pl="50px"
          pr="50px"
        >
          Build my resume
        </Button>
      </Box>
    </>
  );
}
