import React from "react";
import {
  InputRightElement,
  Box,
  Text,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { PhoneIcon, SearchIcon } from "@chakra-ui/icons";

const SearchBar = () => {
  return (
    <Box
      position={"sticky"}
      top={"0px"}
      margin={"0 0 68px"}
      padding={"0"}
      borderRadius={"4px"}
      zIndex={100}
    >
      <InputGroup borderWidth={1} borderRadius={"4px"} borderColor={"blue.600"}>
        <InputLeftElement
          pointerEvents="none"
          color="gray.300"
          fontSize="1.2em"
          borderRadius={"4px"}
          // children={<SearchIcon color="gray.500" />}
        />
        <Input placeholder="Enter amount" borderRadius={"4px"} bg={"white"} />
      </InputGroup>
    </Box>
  );
};

export default SearchBar;
