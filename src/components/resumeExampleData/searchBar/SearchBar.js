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
      top={"16px"}
      margin={"0 0 68px"}
      padding={"0"}
      borderRadius={"4px"}
    >
      <InputGroup borderWidth={1} borderColor={"blue.600"}>
        <InputLeftElement
          pointerEvents="none"
          color="gray.300"
          fontSize="1.2em"
          children={<SearchIcon color="gray.500" />}
        />
        <Input placeholder="Enter amount" />
      </InputGroup>
    </Box>
  );
};

export default SearchBar;
