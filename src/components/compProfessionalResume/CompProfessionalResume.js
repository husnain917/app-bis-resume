import React, { useState, useEffect } from "react";
import styles from "../../../styles/compProResume.module.css";
import Image from "next/image";
import { SimpleGrid, Box, Text } from "@chakra-ui/react";
import Circle from "./compComponents/Circle";
import RightCard from "./compComponents/RightCard";
import { circleData, cardData } from "./ConstantData";
import CardSliderFunc from "./compComponents/CardSlider";
import { useWindowSizing } from "../../../customHooks/useWindowSizing";

export default function CompProfessionalResume() {
  const size = useWindowSizing();

  const width = size.width;
  const carouselWidth = width - 50;

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      spacing={6}
      p={{ base: 5, sm: 8, md: 16 }}
      bg="#f6f5f0"
    >
      <Box>
        <Text
          fontSize={["2.0rem", "2.3rem", "2.3rem"]}
          textAlign={{ base: "center", sm: "left" }}
          fontWeight={["bold", "bold"]}
        >
          The components of a BisResume
        </Text>
        <div className={styles.resumeImgDiv}>
          <Image
            src="/lawyer-resume-example.svg"
            width={612}
            height={792}
            alt="Lawyer Resume Example"
          />
          {circleData.map((item, index) => {
            return <Circle data={item} key={index} />;
          })}
        </div>
      </Box>
      <Box
        pt={width >= 767 ? "8px" : "0px"}
        pb={width >= 767 ? "auto" : "20px"}
        display={width >= 767 ? "block" : "flex"}
        justifyContent={width >= 767 ? null : "center"}
      >
        {width >= 767 ? (
          cardData.map((item, index) => {
            return <RightCard cardData={item} key={index} />;
          })
        ) : (
          <CardSliderFunc cardWidth={carouselWidth} />
        )}
      </Box>
    </SimpleGrid>
  );
}
