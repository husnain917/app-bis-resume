import { Box, Button, Image, Text, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Adv from "./Adv";
import { data } from "./Constant";
import styles from "../../../styles/Index.module.css";
import CardSliderFunc from "../compProfessionalResume/compComponents/CardSlider";
import { useWindowSizing } from "../../../customHooks/useWindowSizing";
import AdvSlider from "./AdvSlider";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import CommonButton from "../commonButton/CommonButton";

export default function Advantages() {
  const [isTabActive, setIsTabActive] = useState(0);
  const [Width, setWidth] = useState("500");
  const [Display, setDisplay] = useState("none");
  const [toastWidth, setToastWidth] = useState(0);

  const size = useWindowSizing();
  const width = size.width;

  const tabHandler = (index) => {
    setToastWidth(0);
    setWidth("100%");
    setDisplay("block");
    setIsTabActive(index);
  };

  useEffect(() => {
    const progressBar = setInterval(() => {
      setToastWidth((prev) => (prev - 25) % 100);
    }, 2000);

    const interval = setInterval(() => {
      setIsTabActive((prev) => (prev + 1) % data.length);
    }, 8000);
  }, []);

  return (
    <>
      <Box bgColor="#F6F5F0">
        <Text
          fontSize={["1.5rem", , "2.5rem", "2.5rem", "3rem", "4rem"]}
          align="center"
          fontWeight="600"
          color="#002D6B"
          mt="5%"
          pt="2%"
          p="10px"
          className={"sub-heading"}
        >
          Advantages of Using My BisResume
        </Text>
        {width > 767 ? (
          <Box
            w="100%"
            h="auto"
            display="flex"
            flexDir={["column", "column", "row", "row"]}
            justifyContent="center"
            mt={["10%", "2%"]}
            pl="10%"
            pr="10%"
            pb="5%"
          >
            <Box
              w={["100%", "100%", "100%", "50%"]}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              padding={"0px 20px"}
            >
              <Image
                src={data[isTabActive].imgSrc}
                w="100%"
                h={["90vh", "90vh", "auto", "auto", "auto"]}
                alt="will show soon"
              />
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
                    Width={Width}
                    Display={Display}
                    toastWidth={toastWidth}
                    isTabActive={isTabActive}
                    index={index}
                  />
                );
              })}
            </Box>
          </Box>
        ) : (
          <AdvSlider />
        )}
        <Box display="flex" alignItems="center" justifyContent="space-around">
          <Box className="cursor">
            <Link href="/templates">
              <CommonButton
                width={"270px"}
                height={"45px"}
                borderRadius="50px"
                padding={"10px"}
                fontSize={[
                  "1rem",
                  "1rem",
                  "1.1rem",
                  "1.1rem",
                  "1.1rem",
                  "1.5rem",
                ]}
                textAlign="center"
                color={"whitesmoke"}
                mb="5%"
                p={["0px", , "25px", "25px", "25px", "30px"]}
                pl="40px"
                pr="40px"
                mt={["10%", "10%", "0%"]}
                backgroundColor={"#2CACD5"}
                title={"Build My Resume"}
                rightIcon={<FaArrowRight color="white" fontWeight="bold" />}
              />
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
}
