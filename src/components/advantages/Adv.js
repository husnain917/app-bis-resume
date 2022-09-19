import React from "react";
import { Box, Text } from "@chakra-ui/react";

export default function Adv({title,advNum}) {
  return (
    <div>
      <Box display="flex" flexDir="row" alignItems="center" bgColor="white" p="15px" pr="5rem" borderRadius="7px" boxShadow='md' mt="15px">
        <Text  color="#002D6B"  bgColor="#EFC778" fontSize="1rem" fontWeight="bold" pr="8px" pl="8px" borderRadius="100%">
       {advNum}
        </Text>
        <Text  color="#002D6B"  fontSize="1rem" fontWeight="bold" pl="10px">{title}</Text>
      </Box>
    </div>
  );
}
