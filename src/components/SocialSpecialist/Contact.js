import React from "react";
import { Flex, Icon, Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import styles from "../../../styles/templates/Social.module.css";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import Text from "./Text";
export default function Contact() {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  return (
    <>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: "5%",
        }}
      >
        <PhoneIcon
          w={8}
          h={8}
          bgColor="black"
          p="7px"
          color="white"
          borderRadius="5px"
        />

        <Text
          value={resumeData?.contact?.phone}
          placeholder="+123-456-7890"
          path={"contact.phone"}
          fontSize="1.3rem"
          marginLeft="20px"
        />
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop:'3%'
        }}
      >
        <EmailIcon
          w={8}
          h={8}
          bgColor="black"
          p="7px"
          color="white"
          borderRadius="5px"
        />

        <Text
          value={resumeData?.contact?.email}
          placeholder="hello@reallygreatsite.com 
                www.reallygreatsite.com"
          path={"contact.email"}
          fontSize="1.3rem"
          marginLeft="20px"
          
        />
      </Box>
    </>
  );
}
