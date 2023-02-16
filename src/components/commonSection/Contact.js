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
import { BiWorld } from "react-icons/bi";
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
    maxWidth,
    minWidth,
    maxChr,
    textColor,
  } = props;
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const { font } = useSelector((state) => state.fontReducer.font);
  const CircleDesign = ({ icon }) => (
    <>
      {circleIcon && (
        <Circle
          size={circleSize ? circleSize : "32px"}
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
        <ChakraText className={`${headingStyle}`} fontFamily={font}>
          {text} :
        </ChakraText>
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
            // alignItems={direction === "column" && "flex-start"}
            alignItems={props.cAlignItems || "flex-start"}
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
              placeholder={
                resumeData?.profile?.phone
                  ? resumeData?.profile?.phone
                  : "Phone"
              }
              customClass={`${style}`}
              value={resumeData?.profile?.phone}
              path={"profile.phone"}
              maxWidth={maxWidth}
              minWidth={minWidth}
              maxChr={maxChr}
              color={textColor}
            />
          </Stack>
        </>
      )}
      {email && (
        <>
          <Stack
            direction={direction ? direction : "row"}
            justifyContent={"flex-start"}
            // alignItems={direction === "column" && "flex-start"}
            alignItems={props.cAlignItems || "flex-start"}
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
              maxWidth={maxWidth}
              color={textColor}
              minWidth={minWidth}
            />
          </Stack>
        </>
      )}
      {website && (
        <>
          <Stack
            direction={direction ? direction : "row"}
            justifyContent="flex-start"
            // alignItems={direction === "column" && "flex-start"}
            alignItems={props.cAlignItems || "flex-start"}
            m={margin ? margin : ""}
          >
            <Heading text={"Website"} />
            <CircleDesign
              icon={(props) => (
                <BiWorld
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
              maxWidth={maxWidth}
              color={textColor}
              minWidth={minWidth}
            />
          </Stack>
        </>
      )}
      {location && (
        <>
          <Stack
            direction={direction ? direction : "row"}
            justifyContent="flex-start"
            // alignItems={direction === "column" && "flex-start"}
            alignItems={props.cAlignItems || "flex-start"}
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
              maxWidth={maxWidth}
              color={textColor}
              minWidth={minWidth}
            />
          </Stack>
        </>
      )}
      {linkedinURL && (
        <>
          <Stack
            direction={direction ? direction : "row"}
            justifyContent="flex-start"
            // alignItems={direction === "column" && "flex-start"}
            alignItems={props.cAlignItems || "flex-start"}
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
                resumeData?.profile?.linkedinURL
                  ? resumeData?.profile?.linkedinURL
                  : "LinkedIn"
              }
              customClass={`${style}`}
              value={resumeData?.profile?.linkedinURL}
              path={"profile.linkedinURL"}
              maxWidth={maxWidth}
              color={textColor}
              minWidth={minWidth}
            />
          </Stack>
        </>
      )}
    </Box>
  );
};

export default Contact;
