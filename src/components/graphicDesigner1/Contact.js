import React from "react";
import { Flex, Icon, Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import styles from "../../../styles/templates/Graphic.module.css";
import { FaGlobe } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import Text from "./Text";
export default function Contact() {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  return (
    <>
      <Box mr="5px" p="10px">
        <Flex alignItems="center" flexDir="row-reverse" mt="5%">
          <PhoneIcon
            w={8}
            h={8}
            color="#1B4245"
            bgColor="white"
            p="5px"
            borderRadius="100px"
          />
          <Text
            value={resumeData?.profile?.phone}
            placeholder="123-456-7890"
            path={"contact.phone"}
            customClass={styles.contactFeild}
            color="white"
            fontSize="1rem"
            marginRight="10px"
            fontWeight="bold"

          />
        </Flex>
        <Flex alignItems="center" flexDir="row-reverse" mt="3%">
          <FaGlobe
            color="#1B4245"
            size="33px"
            style={{
              backgroundColor: "white",
              padding: "5px",
              borderRadius: "90px",
            }}
          />
          <Text
            value={resumeData?.profile?.linkedinURL}
            placeholder="www.reallygreatsite.com"
            path={"contact.phone"}
            customClass={styles.contactFeild}
            color="white"
            fontSize="1rem"
            marginRight="10px"
            fontWeight="bold"
          />
        </Flex>
        <Flex alignItems="center" flexDir="row-reverse" mt="3%">
          <EmailIcon
            w={8}
            h={8}
            color="#1B4245"
            bgColor="white"
            p="5px"
            borderRadius="100px"
          />
          <Text
            value={resumeData?.profile?.email}
            placeholder="hello@reallygreatsite.com"
            path={"contact.email"}
            customClass={styles.contactFeild}
            color="white"
            fontSize="1rem"
            marginRight="10px"
            fontWeight="bold"

          />
        </Flex>

        <Flex alignItems="center" flexDir="row-reverse" mt="3%">
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
          <Text
            value={resumeData?.profile?.location}
            placeholder="123 Anywhere St., Any City"
            path={"contact.phone"}
            customClass={styles.contactFeild}
            color="white"
            fontSize="1rem"
            paddingRight="100px"
            marginRight="10px"
            fontWeight="bold"

          />
        </Flex>
      </Box>
    </>
  );
}
