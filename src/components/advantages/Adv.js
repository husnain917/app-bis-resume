import React from "react";
import { Box, Text } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

export default function Adv({ title, advNum, advDesc }) {
  return (
    <div>
      <Accordion allowToggle >
        <AccordionItem >
          <AccordionButton >
            <Box
              w="100%"
              display="flex"
              flexDir="row"
              alignItems="center"
              bgColor="white"
              p="15px"
              pr="5rem"
              borderRadius="7px"
              boxShadow="md"
            >
              <Text
                color="#002D6B"
                bgColor="#EFC778"
                fontSize="1rem"
                fontWeight="bold"
                pr="8px"
                pl="8px"
                borderRadius="100%"
              >
                {advNum}
              </Text>
              <Text color="#002D6B" fontSize="1rem" fontWeight="bold" pl="10px">
                {title}
              </Text>
            </Box>
          </AccordionButton>

          <AccordionPanel >
            <Text bgColor="white" textAlign="center" fontSize="12px">{advDesc}</Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
