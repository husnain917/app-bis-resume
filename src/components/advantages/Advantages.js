import { Box, Button, Image, Text, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Adv from "./Adv";
import { data } from "./Constant";
import styles from "../../../styles/Index.module.css"
export default function Advantages() {
  const [isTabActive, setIsTabActive] = useState(0);
  const [width, setWidth] = useState("500");
  const [Display, setDisplay] = useState("none");
  const [toastWidth, setToastWidth] = useState(0);

  const tabHandler = (index) => {
    setWidth("100%");
    setDisplay("block");
    setIsTabActive(index);
  };

  useEffect(() => {
    const progressBar = setInterval(() => {
      setToastWidth((prev) => prev + 24);
    }, 2000);
    const interval = setInterval(() => {
      setIsTabActive((prevTab) => {
        if (prevTab === 5) return 0;

        return (prevTab += 1);
      });
    }, 7000);
  }, []);

  return (
    <>
      <Box bgColor="#F6F5F0">
        <Text
          fontSize={["2rem", , "2.5rem", "2.5rem", "3rem", "4rem"]}
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
          <Box w={["100%", "100%", "100%", "50%"]} mt="2.5%">
            {data?.map((tab, index) => {
              return (
                <Adv
                  key={index}
                  advNum={tab.advNum}
                  title={tab.title}
                  advDesc={tab.advDesc}
                  tabHandler={() => tabHandler(index)}
                  width={width}
                  Display={Display}
                  toastWidth={toastWidth}
                  isTabActive={isTabActive}
                  index={index}
                />
              );
            })}
          </Box>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-around">
          <Button
          colorScheme="#027C87"
            bgColor="#027C87"
            color="white"
            borderRadius="50px"
            fontSize={["1rem", "1rem", "1.2rem", "1.2rem", "1.2rem", "1.2rem"]}
            fontWeight="bold"
            textAlign="center"
            mb="5%"
            p={["15px",, "25px"]}
            pl="40px"
            pr="40px"
            className={styles.benefitBtn}
          >
            Build my resume
          </Button>
        </Box>
      </Box>
    </>
  );
}
