import React from "react";
import { Flex, Icon, Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import styles from "../../../styles/templates/Graphic2.module.css";
import Text from "./Text";
export default function Contact() {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  return (
    <>
      <Box mr="5px" p="10px">
        <Text
          value={resumeData?.profile?.phone}
          placeholder="123-456-7890"
          path={"contact.phone"}
          customClass={styles.contactFeild}
          color="white"
          fontSize="1rem"
          marginRight="10px"
          lineHeight="15px"
        />

        <Text
          value={resumeData?.profile?.linkedinURL}
          placeholder="reallygreatsite.com"
          path={"contact.phone"}
          customClass={styles.contactFeild}
          color="white"
          fontSize="1rem"
          marginRight="10px"
          lineHeight="15px"
        />

        <Text
          value={resumeData?.profile?.email}
          placeholder="hello@reallygreatsite.com"
          path={"contact.email"}
          customClass={styles.contactFeild}
          color="white"
          fontSize="1rem"
          marginRight="10px"
          lineHeight="15px"
        />
      </Box>
    </>
  );
}
