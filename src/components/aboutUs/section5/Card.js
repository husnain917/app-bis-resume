import React, { useState, useRef } from "react";
import {
  Box,
  Image,
  Badge,
  Button,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import { cardData } from "./cardData";
import Item from "antd/lib/list/Item";

const Card = () => {
  return (
    <SimpleGrid columns={[1, 1, 2, 3, 3]} spacing={[5, 5, 10, 10, 10, 10]}>
      {cardData.map((card, index) => {
        return (
          <>
            <Box
              bg="#f6f5f0"
              marginRight={"1.95%"}
              borderRadius={"8px"}
              padding={"25px"}
              display={"flex"}
              alignItems={"center"}
              flexDirection={"column"}
            >
              <Box
                width={"140px"}
                height={"140px"}
                margin={"0 auto 20px"}
                // display={"flex"}
                // alignItems={"center"}
              >
                <Image
                  src={card.image}
                  alt="nothing"
                  w={"120px"}
                  h={"120px"}
                  borderRadius={"50%"}
                />
              </Box>
              <Text
                fontSize={["18px", "1px", "18px", "18px", "18px"]}
                fontWeight={"bold"}
                className={"sub-heading"}
                lineHeight={"10px"}
              >
                {card.name}
              </Text>
              <Text
                fontSize={"18px"}
                fontWeight={"bold"}
                className={"sub-heading"}
              >
                {card.position}
              </Text>
              <Text
                my={["15px", "15px", "20px", "20px", "20px"]}
                fontSize={"14px"}
                className={"small-text"}
                textAlign={["center", "center", "start", "start", "start"]}
              >
                {card.bio}
              </Text>
            </Box>
          </>
        );
      })}
    </SimpleGrid>
  );
};

export default Card;
