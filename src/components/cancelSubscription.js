import React from "react";
import { Box, Image, Link, Text } from "@chakra-ui/react";
import { Icon, createIcon } from "@chakra-ui/react";
import { QuestionIcon } from "@chakra-ui/icons";
import SideBar from "../components/sideBar/SideBar";

export default function CancelSubscription() {
  return (
    <Box>
      <SideBar />
      <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
        <Box
          borderWidth={"thin"}
          minW="50%"
          display={"flex"}
          flexDirection={"row"}
        >
          <Box minW={"10%"} display="flex" justifyContent={"center"}>
            <Box
              background="blue.100"
              width="3em"
              height={"3em"}
              borderRadius={"50%"}
              display="flex"
              alignItems={"center"}
              justifyContent={"center"}
              mt={"4"}
            >
              <Box
                background={"whitesmoke"}
                width="2em"
                height={"2em"}
                borderRadius={"50%"}
                position="relative"
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Icon as={QuestionIcon} w={6} h={6} color="blue.500" />
              </Box>
            </Box>
          </Box>
          <Box w={"90%"}>
            <Box my={"4"}>
              <Text fontSize="1.4em">
                Want to instantaly cancel your subscription? Use this simple
                cancellation form and get it cancelled without waiting for our
                support.
                <br></br>
                <Box mt="3">
                  <Link href="">
                    <Text
                      color="blue.400"
                      fontSize={"0.9em"}
                      fontWeight={"500"}
                    >
                      Cancel your subscription &gt;
                    </Text>
                  </Link>
                </Box>
              </Text>
            </Box>
          </Box>
        </Box>
        <Box mt={"6"} minWidth={"50%"}>
          <Text fontSize={"18"}>
            If you experience any problems cancelling your subscription, or you
            have other questions related to the billing, please
            <br></br>
            <Link href="">
              <Text color={"blue.400"} fontSize={"0.8em"} fontWeight={"bold"}>
                Contact our support
              </Text>
            </Link>
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
