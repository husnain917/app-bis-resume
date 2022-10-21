import React from "react";
import { Flex, Icon, Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import styles from "../../../styles/templates/Graphic3.module.css";
import Text from "./Text";
import {
  FaUniversity,
  FaPhoneVolume,
  FaRegEnvelopeOpen,
} from "react-icons/fa";
export default function Contact() {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  return (
    <>
      <Box mr="5px" p="10px" ml="10%">
        <Box display="flex" alignItems="center" mt="5%">
          <Icon as={FaPhoneVolume} w={6} h={6} color="white" />

          <Box ml="20px">
            <p className={styles.contactHeading}>Phone</p>
            <Text
              value={resumeData?.profile?.phone}
              placeholder="123-456-7890"
              path={"contact.phone"}
              customClass={styles.contactFeild}
              color="grey"
              fontSize="0.8rem"
              marginRight="10px"
              lineHeight="15px"
            />
          </Box>
        </Box>
        
        <Box display="flex" alignItems="center" mt="10%">
          <Icon as={FaRegEnvelopeOpen} w={6} h={5} color="white" />

          <Box ml="20px">
            <p className={styles.contactHeading}>Email</p>
            <Text
              value={resumeData?.profile?.email}
              placeholder="hello@reallygreatsite.com"
              path={"contact.email"}
              customClass={styles.contactFeild}
              color="grey"
              fontSize="0.8rem"
              marginRight="10px"
              lineHeight="10px"
            />
          </Box>
        </Box>
        <Box display="flex" alignItems="center" mt="10%">
          <Icon as={FaUniversity} w={6} h={6} color="white" />

          <Box ml="20px">
            <p className={styles.contactHeading}>Address</p>
            <Text
              value={resumeData?.profile?.linkedinURL}
              placeholder="123 Anywhere St., Any City"
              path={"contact.linkedinURL"}
              customClass={styles.contactFeild}
              color="grey"
              fontSize="0.8rem"
              marginRight="10px"
              lineHeight="17px"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
