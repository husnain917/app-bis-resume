import React from "react";
import { Flex, Icon } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import FdText from "./FdText";
import styles from "../../../styles/templates/Fashion.module.css";
import { FaGlobe } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
export default function Contact() {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  return (
    <>
      <Flex alignItems="center" mt="5%">
        <PhoneIcon
          w={8}
          h={8}
          color="#1B4245"
          bgColor="white"
          p="5px"
          borderRadius="100px"
        />
        <FdText
          value={resumeData?.profile?.phone}
          placeholder="+123-456-7890"
          path={"contact.phone"}
          customClass={styles.contactFeild}
          color="white"
          fontSize="1.2rem"
          marginLeft="20px"
        />
      </Flex>
      <Flex alignItems="center" mt="3%">
        <EmailIcon
          w={8}
          h={8}
          color="#1B4245"
          bgColor="white"
          p="5px"
          borderRadius="100px"
        />
        <FdText
          value={resumeData?.profile?.email}
          placeholder="hello@reallygreatsite.com"
          path={"contact.email"}
          customClass={styles.contactFeild}
          color="white"
          fontSize="1.2rem"
          marginLeft="20px"
        />
      </Flex>
      <Flex alignItems="center" mt="3%">
        <FaGlobe
          color="#1B4245"
          size="33px"
          style={{
            backgroundColor: "white",
            padding: "5px",
            borderRadius: "90px",
          }}
        />
        <FdText
          value={resumeData?.profile?.linkedinURL}
          placeholder="www.reallygreatsite.com"
          path={"contact.phone"}
          customClass={styles.contactFeild}
          color="white"
          fontSize="1.2rem"
          marginLeft="20px"
        />
      </Flex>
      <Flex alignItems="center" mt="3%">
        <Icon
          as={FaMapMarkerAlt}
          w={8}
          h={8}
          color="#1B4245"
          bgColor="white"
          p="5px"
          borderRadius="100px"
          display="flex"
          alignSelf="start"
          mt="5px"
        />
        <FdText
          value={resumeData?.profile?.location}
          placeholder="123 Anywhere St., Any City,
          ST 12345"
          path={"contact.phone"}
          customClass={styles.contactFeild}
          color="white"
          fontSize="1.2rem"
          marginLeft="20px"
          paddingRight="100px"
        />
      </Flex>
    </>
  );
}
