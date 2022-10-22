import React from "react";
import { useSelector } from "react-redux";
import { Row } from "antd";
import { Box } from "@chakra-ui/react";
import Text from "./Text";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
export default function Profile() {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  let updater = useSelector((state) => state.editorReducer.updater);
  let color = useSelector((state) => state.editorReducer.color);
  return (
    <>
      <Box>
        <Row>
          <Text
            value={resumeData?.profile?.firstName}
            placeholder="First Name"
            path={"profile.firstName"}
            fontSize="2rem"
            color="#313C4E"
            textAlign="left"
            fontWeight="bold"
          />
          &nbsp;
          <Text
            value={resumeData?.profile?.lastName}
            placeholder="Last Name"
            path={"profile.lastName"}
            fontSize="2rem"
            color="#313C4E"
            textAlign="left"
            fontWeight="bold"
          />
        </Row>
        <Text
          value={resumeData?.objective?.title}
          placeholder="Profession Title"
          path={"profile.objective.heading"}
          fontSize="1.3rem"
          color="#69ADD0"
          textAlign="left"
          fontWeight="400"
          lineHeight="0px"
        />
        <Text
          value={resumeData?.objective?.body}
          placeholder="Short and engaging pitch about yourself."
          path={"profile.objective.body"}
          fontSize="1.1rem"
          color="#161619"
          marginTop="2%"
          textAlign="left"
          fontWeight="400"
          marginRight="50px"
        />
        <Box
          display="flex"
          flexDir="row"
          justifyContent="space-around"
          alignItems="center"
          bgColor="#313C4E"
          h="50px"
          borderRadius="10px"
          mt="5%"
          pl="10%"
          mr="10%"
          pr="10%"
        >
          <Box display="flex" alignItems="center">
            <EmailIcon w={5} h={5} color="white" />
            <Text
              value={resumeData?.profile?.email}
              placeholder="hello@reallygreatsite.com"
              path={"contact.email"}
              color="white"
              fontSize="1rem"
              lineHeight="10px"
            />
          </Box>
          <Box display="flex" alignItems="center">
            <PhoneIcon w={5} h={5} color="white" />
            <Text
              value={resumeData?.profile?.phone}
              placeholder="Phone Number"
              path={"contact.phone"}
              color="white"
              fontSize="1rem"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
