import React from "react";
import styles from "../../styles/Index.module.css";
import { Box, Image, Link, Text } from "@chakra-ui/react";
import { Typography } from "antd";
import { Icon, createIcon } from "@chakra-ui/react";
import {
  PhoneIcon,
  AddIcon,
  WarningIcon,
  QuestionIcon,
} from "@chakra-ui/icons";

export default function CancelSubscription() {
  return (
    <Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <Box
          borderWidth={"2"}
          // minWidth={"90%"}
          maxW="50%"
          minW="50%"
          w={1050}
          // background="black"
          style={{
            border: "2px solid black",
          }}
          display={"flex"}
          flexDirection={"row"}
        >
          <Box w={"10%"} display="flex" justifyContent={"center"}>
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
            <Box mt={"4"}>
              <Text fontSize="1.4em">
                Want to instantaly cancel your subscription? Use this simple
                cancellation form and get it cancelled without waiting for our
                support.
                <br></br>
                <Box mt="3">
                  <Link href="">
                    <Text color="blue.400">Cancel your subscription</Text>
                  </Link>
                </Box>
              </Text>
            </Box>
          </Box>
        </Box>
        <Box width={"50%"} height={"50px"} mt={"6"}>
          <Text fontSize={"18"}>
            If you experience any problems cancelling your subscription, or you
            have other questions related to the billing, please
            <br></br>
            <Link href="">
              <Text color={"blue.400"}>Contact our support</Text>
            </Link>
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
