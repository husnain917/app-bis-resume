import React from "react";
import { Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Text } from "../template1";
import styles from "../../../styles/templates/Fashion.module.css";
import { FaGlobe, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
export default function Contact() {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  let updater = useSelector((state) => state.editorReducer.updater);
  let color = useSelector((state) => state.editorReducer.color);
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
        <Text
          value={resumeData?.profile?.phone}
          placeholder="+123-456-7890"
          path={"contact.phone"}
          customClass={styles.contactFeild}
          color="white"
          fontSize="1.5rem"
          paddingLeft="20px"
        />
      </Flex>
      <Flex alignItems="center">
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
          fontSize="1.5rem"
          paddingLeft="20px"
        />
      </Flex>
      <Flex alignItems="center">
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
          fontSize="1.5rem"
          paddingLeft="20px"
        />
      </Flex>
      <Flex alignItems="center">
        <FaMapMarkerAlt
          color="#1B4245"
          size="35px"
          style={{

            backgroundColor: "white",
            padding: "5px",
            borderRadius: "90px",
            display:'flex',
            alignSelf:'start',
            marginTop:"10px"
          }}
        />
        <Text
          value={resumeData?.profile?.location}
          placeholder="123 Anywhere St., Any City,
          ST 12345"
          path={"contact.phone"}
          customClass={styles.contactFeild}
          color="white"
          fontSize="1.5rem"
          paddingLeft="20px"
          
        />
      </Flex>
    </>
  );
}
