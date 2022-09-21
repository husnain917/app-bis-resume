import { Box, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Adv from "./Adv";
import TabOne from "../../../public/tabone.jpg";
import TabTwo from "../../../public/tabtwo.jpg";
import TabThree from "../../../public/tabthree.jpg";
import TabFour from "../../../public/tabfour.jpg";
import TabFive from "../../../public/tabfive.jpg";
import TabSix from "../../../public/tabsix.jpg";
import { data } from "./Constant";
export default function Advantages({tabHandler}) {
  console.log("data from constant", data);
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
          mt="2%"
        >
          <Box>
            <Image src="/tabone.jpg" w="100%" h="auto" />
          </Box>
          <Box>
            {data?.map((tab) => {
              return (
                <Adv
                  advNum={tab.advNum}
                  title={tab.title}
                  advDesc={tab.advDesc}
                  tabHandler={tabHandler}
                />
              );
            })}
          </Box>
        </Box>
      </Box>
    </>
  );
}
