import React, { useRef } from "react";
import { Box, Text, Button, Image } from "@chakra-ui/react";

import {
  PhoneIcon,
  SearchIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

const CommonComponent = () => {
  return (
    <Box overflow={["visible", "visible", "hidden"]}>
      <Box
        display={"flex"}
        flexDirection={["column", "column", "column", "row", "row"]}
        paddingBottom={"20px"}
        borderBottom={"1px solid whitesmoke"}
        marginBottom={"24px"}
        justifyContent={"space-between"}
      >
        <Box display={"flex"}>
          <Image src="./diamond.png" h="auto" />

          <Box
            ml="10px"
            fontSize="3em"
            lineHeight={"40px"}
            fontWeight={"400"}
            transition={"color .15s"}
          >
            Most Popular
          </Box>
        </Box>
        <Box display={["none", "none", "flex", "flex", "flex"]}>
          {" "}
          <Box
            borderRadius={"50%"}
            bg={"gray.300"}
            h={"12"}
            w={"12"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            mr={"10px"}
            _hover={{
              cursor: "pointer",
            }}
            onClick={() => swiperRef.current.slidePrev()}
          >
            <ChevronLeftIcon w={8} h={8} />
          </Box>
          <Box
            borderRadius={"50%"}
            bg={"gray.300"}
            h={"12"}
            w={"12"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            _hover={{
              cursor: "pointer",
            }}
            onClick={() => swiperRef.current.slideNext()}
          >
            <ChevronRightIcon w={8} h={8} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CommonComponent;
