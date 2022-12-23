import {
  Box,
  Circle,
  HStack,
  Stack,
  Text as ChakraText,
} from "@chakra-ui/react";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { HiPhone } from "react-icons/hi";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { useSelector } from "react-redux";
import Text from "./Text";

const Contact = (props) => {
  const {
    emailPlaceholder,
    phonePlaceholder,
    websitePlaceholder,
    locationPlaceholder,
    linkedInPlaceholder,
    email,
    phone,
    website,
    location,
    linkedinURL,
    heading,
    style,
    headingStyle,
    circleSize,
    circleBg,
    circleBorderW,
    circleBorderColor,
    iconColor,
    iconSize,
    circleIcon,
    parentDirection,
    direction,
    justifyContent,
    alignItem,
    margin,
    parentStyle,
  } = props;
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const CircleDesign = ({ icon }) => (
    <>
      {circleIcon && (
        <Circle
          size={circleSize ? circleSize : "none"}
          bg={circleBg ? circleBg : "none"}
          borderWidth={circleBorderW ? circleBorderW : "0px"}
          borderColor={circleBorderColor ? circleBorderColor : "none"}
        >
          {React.createElement(icon)}
        </Circle>
      )}
    </>
  );
  const Heading = ({ text }) => (
    <>
      {heading && (
        <ChakraText className={`${headingStyle}`}>{text} :</ChakraText>
      )}
    </>
  );
  return (
    <Box
      display={"flex"}
      flexDir={parentDirection ? parentDirection : "column"}
      justifyContent={justifyContent ? justifyContent : "normal"}
      alignItems={alignItem ? alignItem : "normal"}
      className={`${parentStyle ? parentStyle : ""}`}
    >
      {phone && (
        <>
          <Stack
            direction={direction ? direction : "row"}
            justifyContent={"flex-start"}
            alignItems={direction === "column" && "flex-start"}
            m={margin ? margin : ""}
          >
            <Heading text={"Phone"} />
            <CircleDesign
              icon={(props) => (
                <HiPhone
                  {...props}
                  size={iconSize ? iconSize : "16px"}
                  color={iconColor ? iconColor : "#000"}
                />
              )}
            />

            <Text
              placeholder={phonePlaceholder ? phonePlaceholder : "Phone"}
              customClass={`${style}`}
              value={resumeData?.profile?.phone}
              path={"profile.phone"}
            />
          </Stack>
        </>
      )}
      {email && (
        <>
          <Stack
            direction={direction ? direction : "row"}
            justifyContent={"flex-start"}
            alignItems={direction === "column" && "flex-start"}
            m={margin ? margin : ""}
          >
            <Heading text={"E-mail"} />
            <CircleDesign
              icon={(props) => (
                <MdEmail
                  {...props}
                  size={iconSize ? iconSize : "16px"}
                  color={iconColor ? iconColor : "#000"}
                />
              )}
            />

            <Text
              placeholder={emailPlaceholder ? emailPlaceholder : "E-mail"}
              customClass={`${style}`}
              value={resumeData?.profile?.email}
              path={"profile.email"}
            />
          </Stack>
        </>
      )}
      {website && (
        <>
          <Stack
            direction={direction ? direction : "row"}
            justifyContent="flex-start"
            alignItems={direction === "column" && "flex-start"}
            m={margin ? margin : ""}
          >
            <Heading text={"Website"} />
            <CircleDesign
              icon={(props) => (
                <TbWorld
                  {...props}
                  size={iconSize ? iconSize : "16px"}
                  color={iconColor ? iconColor : "#000"}
                />
              )}
            />
            <Text
              placeholder={websitePlaceholder ? websitePlaceholder : "Website"}
              customClass={`${style}`}
              value={resumeData?.profile?.website}
              path={"profile.website"}
            />
          </Stack>
        </>
      )}
      {location && (
        <>
          <Stack
            direction={direction ? direction : "row"}
            justifyContent="flex-start"
            alignItems={direction === "column" && "flex-start"}
            m={margin ? margin : ""}
          >
            <Heading text={"Location"} />
            <CircleDesign
              icon={(props) => (
                <MdLocationOn
                  {...props}
                  size={iconSize ? iconSize : "16px"}
                  color={iconColor ? iconColor : "#000"}
                />
              )}
            />
            <Text
              placeholder={
                locationPlaceholder ? locationPlaceholder : "location"
              }
              customClass={`${style}`}
              value={resumeData?.profile?.address?.city}
              path={"profile.address.city"}
            />
          </Stack>
        </>
      )}
      {linkedinURL && (
        <>
          <Stack
            direction={direction ? direction : "row"}
            justifyContent="flex-start"
            alignItems={direction === "column" && "flex-start"}
            m={margin ? margin : ""}
          >
            <CircleDesign
              icon={(props) => (
                <FaLinkedinIn
                  {...props}
                  size={iconSize ? iconSize : "16px"}
                  color={iconColor ? iconColor : "#000"}
                />
              )}
            />
            <Heading text={"Linkedin"} />
            <Text
              placeholder={
                linkedInPlaceholder ? linkedInPlaceholder : "LinkedIn"
              }
              customClass={`${style}`}
              value={resumeData?.profile?.linkedinURL}
              path={"profile.linkedinURL"}
            />
          </Stack>
        </>
      )}
    </Box>
  );
};

export default Contact;
