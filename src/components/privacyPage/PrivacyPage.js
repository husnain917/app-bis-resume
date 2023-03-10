import {
  Box,
  Container,
  Heading,
  ChakraProvider,
  ListItem,
  Text,
  UnorderedList,
  OrderedList,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useRef } from "react";
import { CONTACT_US_DATA, PRIVACY_DATA } from "./data";
import Underline from "../aaronGraphicTemp/Underline";
import { PRIVACY_PAGE_DATA } from "./data";
import { extendTheme } from "@chakra-ui/react";
import styles from "../../../styles/sideBarSection.module.css";
import SideBar from "../sideBar/SideBar";
import SideBarSection from "../aboutUs/SideBarSection/SideBarSection";

const PrivacyPage = () => {
  const scrollSecend = useRef();
  const scollToRef = useRef();
  return (
    <>
      <ChakraProvider>
        {/* <Container  */}

        <Box
          maxW={["100%", "100%", "92%", "92%"]}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Box
            padding={"40px 0px"}
            maxW={["0%", "0%", "0%", "10%"]}
            zIndex={"1049"}
            pl="5%"
          >
            <Box className={styles.sideBarContainer}>
              <SideBar />
            </Box>
          </Box>

          <Box maxW={["100%", "100%", "80%", "80%"]}>
            <Box>
              {/* main title */}
              <Box padding={"40px 0px"} marginBottom={10}>
                {PRIVACY_DATA?.TermsOfUse?.heading?.map((item, index) => (
                  <>
                    <Text
                      key={index}
                      textAlign={"center"}
                      fontSize={["2em", "3em", "3em", "3em"]}
                      fontWeight={"bold"}
                      color={"#313B47"}
                      className={"main-heading"}
                    >
                      {item?.title}
                    </Text>
                  </>
                ))}
              </Box>

              {/* description */}
              <Box>
                {PRIVACY_DATA?.TermsOfUse?.data?.map((item, index) => (
                  <>
                    <Text
                      key={index}
                      fontSize={"1.1rem"}
                      fontWeight={500}
                      lineHeight={"1.5"}
                      marginBottom={"1rem"}
                      className={"small-text"}
                    >
                      {item?.text}
                    </Text>
                  </>
                ))}
                <Text
                  fontSize={"0.80rem"}
                  lineHeight={"1.5"}
                  marginBottom={"1rem"}
                  color={"#757575"}
                  className={"xsmall-text"}
                >
                  {PRIVACY_DATA?.TermsOfUse?.description}
                </Text>
              </Box>

              {/* Table of Contents */}
              <Box margin={"40px 0px"}>
                <Text
                  fontSize={["2em", "2.4em", "2.4em", "2.4em"]}
                  fontWeight={"bold"}
                  color={"#313B47"}
                  className={"medium-heading1"}
                >
                  {PRIVACY_DATA?.TableOfContents?.heading}
                </Text>

                {/* description */}
                <Box margin={"10px 0px 40px 0px"}>
                  <OrderedList className={"xsmall-text"}>
                    {PRIVACY_PAGE_DATA?.map((item, index) => (
                      <>
                        <ListItem key={index}>
                          <Link href={`#${item.href}`}>
                            <Text
                              color="#2679C7"
                              textDecor={"none"}
                              fontSize={"1.1em"}
                              lineHeight={"1.5"}
                              smooth={true}
                              href={"#"}
                              duration={800}
                              fontWeight={500}
                              offset={0}
                              _hover={{
                                color: "40a9ff",
                                textDecoration: "underline",
                                cursor: "pointer",
                              }}
                              onClick={(e) => console.log(item.href)}
                            >
                              {item?.label}
                            </Text>
                          </Link>
                        </ListItem>
                      </>
                    ))}
                  </OrderedList>
                </Box>
              </Box>

              {/* 1. The BisResume Content */}
              <Box margin={"40px 0px"}>
                <Text
                  fontSize={["2em", "2.4em", "2.4em", "2.4em"]}
                  fontWeight={"bold"}
                  color={"#313B47"}
                  className={"medium-heading1"}
                  key={"a1"}
                  id={"a1"}
                >
                  {PRIVACY_DATA?.TheBisresumeContent?.heading}
                </Text>

                {/* description */}
                <Box margin={"10px 0px 40px 0px"}>
                  {PRIVACY_DATA?.TheBisresumeContent?.data?.map(
                    (item, index) => (
                      <>
                        <Text
                          key={index}
                          // key={"a1"}
                          // id={"a1"}
                          fontSize={"1rem"}
                          lineHeight={"1.5"}
                          marginBottom={"1rem"}
                          className={"small-text"}
                        >
                          {item?.text}
                        </Text>
                      </>
                    )
                  )}
                </Box>
              </Box>

              {/* 2. Acceptable Use */}
              <Box margin={"40px 0px"} id={"a2"}>
                <Text
                  fontSize={["2em", "2.4em", "2.4em", "2.4em"]}
                  fontWeight={"bold"}
                  color={"#313B47"}
                  className={"medium-heading1"}
                >
                  {PRIVACY_DATA?.AcceptableUse?.heading}
                </Text>

                {/* description */}
                <Box margin={"10px 0px 40px 0px"}>
                  <Text
                    fontSize={["1.1em", "1.1em", "1.3em", "1.3em"]}
                    fontWeight={"500"}
                    color={"#313B47"}
                    marginBottom={4}
                    className={"xsmall-text"}
                  >
                    {PRIVACY_DATA?.AcceptableUse?.description}
                  </Text>
                  <UnorderedList mb={6} ml={7}>
                    {PRIVACY_DATA?.AcceptableUse?.data?.map((item, index) => {
                      return (
                        <>
                          <ListItem
                            lineHeight={"1.5"}
                            fontSize={"1.1em"}
                            className={"small-text"}
                          >
                            {item?.text}
                          </ListItem>
                        </>
                      );
                    })}
                  </UnorderedList>
                  <Text
                    fontSize={["1.1em", "1.1em", "1.3em", "1.3em"]}
                    fontWeight={"500"}
                    color={"#313B47"}
                    marginBottom={4}
                    className={"small-text"}
                  >
                    {PRIVACY_DATA?.AcceptableUse?.description2}
                  </Text>
                  <Text
                    fontSize={["1.1em", "1.1em", "1.3em", "1.3em"]}
                    fontWeight={"500"}
                    color={"#313B47"}
                    marginBottom={4}
                    className={"small-text"}
                  >
                    {PRIVACY_DATA?.AcceptableUse?.description3}
                  </Text>
                  <Text
                    fontSize={["1.1em", "1.1em", "1.3em", "1.3em"]}
                    fontWeight={"500"}
                    color={"#313B47"}
                    marginBottom={4}
                    className={"small-text"}
                  >
                    {PRIVACY_DATA?.AcceptableUse?.description4}
                  </Text>
                  <Text
                    fontSize={["1.1em", "1.1em", "1.3em", "1.3em"]}
                    fontWeight={"500"}
                    color={"#313B47"}
                    marginBottom={4}
                    className={"small-text"}
                  >
                    {PRIVACY_DATA?.AcceptableUse?.description5}
                  </Text>
                  <Text
                    fontSize={["1.1em", "1.1em", "1.3em", "1.3em"]}
                    fontWeight={"500"}
                    color={"#313B47"}
                    marginBottom={4}
                    className={"small-text"}
                  >
                    {PRIVACY_DATA?.AcceptableUse?.description6}
                  </Text>
                </Box>
              </Box>

              {/* 3. Security */}
              <Box margin={"40px 0px"} id={"a3"}>
                <Text
                  fontSize={["2em", "2.4em", "2.4em", "2.4em"]}
                  fontWeight={"bold"}
                  color={"#313B47"}
                  className={"medium-heading1"}
                >
                  {PRIVACY_DATA?.Security?.heading}
                </Text>

                {/* description */}
                <Box margin={"10px 0px 40px 0px"}>
                  <Text
                    fontSize={"1.2rem"}
                    lineHeight={"1.5"}
                    marginBottom={"1rem"}
                    className={"small-text"}
                  >
                    {PRIVACY_DATA?.Security?.data}
                  </Text>
                </Box>
              </Box>

              {/* 4. Links To Other Software/Websites/Services */}
              <Box margin={"40px 0px"} id={"a4"}>
                <Text
                  fontSize={["2em", "2.4em", "2.4em", "2.4em"]}
                  fontWeight={"bold"}
                  color={"#313B47"}
                  className={"medium-heading1"}
                >
                  {PRIVACY_DATA?.LinksToOtherSoftware?.heading}
                </Text>

                {/* description */}
                <Box margin={"10px 0px 40px 0px"}>
                  <Text
                    fontSize={["1.4em", "1.6em", "1.6em", "1.6em"]}
                    fontWeight={"500"}
                    color={"#313B47"}
                  >
                    {PRIVACY_DATA?.LinksToOtherSoftware?.subHeading}
                  </Text>
                  {PRIVACY_DATA?.LinksToOtherSoftware?.data?.map(
                    (item, index) => (
                      <>
                        <Text
                          fontSize={"1.3rem"}
                          fontWeight={700}
                          my={"5"}
                          className={"xsmall-text"}
                        >
                          {item.heading}
                        </Text>
                        <Text
                          fontSize={"1.2rem"}
                          lineHeight={"1.5"}
                          marginBottom={"1rem"}
                          className={"small-text"}
                        >
                          {item.description}
                          <Link href={"#"}>
                            <Text
                              color={"#2679C7"}
                              lineHeight={"1.5"}
                              fontSize={"1.2rem"}
                              className={"small-text"}
                            >
                              {item?.link1}{" "}
                            </Text>
                          </Link>
                        </Text>
                        <UnorderedList mb={6}>
                          {item?.data?.map((item, index) => {
                            return (
                              <>
                                <ListItem
                                  lineHeight={"1.5"}
                                  fontSize={"1.1em"}
                                  className={"xsmall-text"}
                                >
                                  {item?.text}
                                </ListItem>
                              </>
                            );
                          })}
                        </UnorderedList>
                        <Text
                          fontSize={"1.2rem"}
                          lineHeight={"1.5"}
                          marginBottom={"1rem"}
                          className={"small-text"}
                        >
                          {item?.description2}
                          <Link href={"#"}>
                            <Text
                              color={"#2679C7"}
                              lineHeight={"1.5"}
                              fontSize={"1.2rem"}
                              className={"xsmall-text"}
                            >
                              {item?.link1}{" "}
                            </Text>
                          </Link>
                        </Text>
                      </>
                    )
                  )}
                </Box>
              </Box>

              {/* 5. Warranty and Premium Account */}
              <Box margin={"40px 0px"} id={"a5"}>
                <Text
                  fontSize={["2em", "2.4em", "2.4em", "2.4em"]}
                  fontWeight={"bold"}
                  color={"#313B47"}
                  className={"medium-heading1"}
                >
                  {PRIVACY_DATA?.WarrantyAndPremiumAccount?.heading}
                </Text>

                {/* description */}
                <Box margin={"10px 0px 40px 0px"}>
                  <Box>
                    {PRIVACY_DATA?.WarrantyAndPremiumAccount?.data?.map(
                      (item, index) => (
                        <>
                          <Text fontSize={"1.3rem"} fontWeight={700} my={"6"}>
                            {item.heading}
                          </Text>
                          <Text
                            fontSize={"1.2rem"}
                            lineHeight={"1.5"}
                            marginBottom={"1rem"}
                            className={"small-text"}
                          >
                            {item.description}
                          </Text>
                        </>
                      )
                    )}
                  </Box>
                </Box>
              </Box>

              {/* 6. Governing Law */}
              <Box margin={"40px 0px"} id={"a6"}>
                <Text
                  fontSize={["2em", "2.4em", "2.4em", "2.4em"]}
                  fontWeight={"bold"}
                  color={"#313B47"}
                  className={"medium-heading1"}
                >
                  {PRIVACY_DATA?.GoverningLaw?.heading}
                </Text>

                {/* description */}
                <Box margin={"10px 0px 40px 0px"}>
                  <Text
                    fontSize={"1.2rem"}
                    lineHeight={"1.5"}
                    marginBottom={"1rem"}
                    className={"small-text"}
                  >
                    {PRIVACY_DATA?.GoverningLaw?.data}
                  </Text>
                </Box>
              </Box>

              {/* 7. Changes */}
              <Box margin={"40px 0px"} id={"a7"}>
                <Text
                  fontSize={["2em", "2.4em", "2.4em", "2.4em"]}
                  fontWeight={"bold"}
                  color={"#313B47"}
                  className={"medium-heading1"}
                >
                  {PRIVACY_DATA?.Changes?.heading}
                </Text>

                {/* description */}

                {PRIVACY_DATA?.Changes?.data.map((item, index) => {
                  return (
                    <>
                      <Box margin={"10px 0px 40px 0px"}>
                        <Text
                          fontSize={"1.2rem"}
                          lineHeight={"1.5"}
                          marginBottom={"1rem"}
                          className={"small-text"}
                        >
                          {item.text}
                          <Link href={"https://gmail.com/"}>
                            <Text
                              color={"#2679C7"}
                              lineHeight={"1.5"}
                              fontSize={"1.2rem"}
                            >
                              {item?.link}{" "}
                            </Text>
                          </Link>
                        </Text>
                      </Box>
                    </>
                  );
                })}
              </Box>

              {/* 8. Breaches of these terms of use */}
              <Box margin={"40px 0px"} id={"a8"}>
                <Text
                  fontSize={["2em", "2.4em", "2.4em", "2.4em"]}
                  fontWeight={"bold"}
                  color={"#313B47"}
                  className={"medium-heading1"}
                >
                  {PRIVACY_DATA?.BreachesOfTheseTermsOfUse?.heading}
                </Text>

                {/* description */}
                <Box margin={"10px 0px 40px 0px"}>
                  <Text
                    fontSize={"1rem"}
                    lineHeight={"1.5"}
                    marginBottom={"1rem"}
                    className={"small-text"}
                  >
                    {PRIVACY_DATA?.BreachesOfTheseTermsOfUse?.data}
                  </Text>
                  {PRIVACY_DATA?.BreachesOfTheseTermsOfUse?.subData.map(
                    (item, index) => {
                      return (
                        <>
                          <Text fontSize={"1.3rem"} fontWeight={700} my={"10"}>
                            {item.heading}
                          </Text>
                          <Text
                            fontSize={"1.2rem"}
                            lineHeight={"1.5"}
                            marginBottom={"1rem"}
                            className={"small-text"}
                          >
                            {item.description}
                            <Link href={"/contact-us"}>
                              <Text
                                color={"#2679C7"}
                                lineHeight={"1.5"}
                                fontSize={"1.2rem"}
                              >
                                {" "}
                                {item?.link1}
                              </Text>
                            </Link>
                          </Text>

                          <Text
                            fontSize={"1.2rem"}
                            lineHeight={"1.5"}
                            marginBottom={"1rem"}
                            className={"small-text"}
                          >
                            {item.description2 || ""}
                          </Text>
                          <Text
                            fontSize={"1.2rem"}
                            lineHeight={"1.5"}
                            marginBottom={"1rem"}
                            className={"small-text"}
                          >
                            {item?.description3p1}
                            <Link href={"/contact-us"}>
                              <Text
                                color={"#2679C7"}
                                lineHeight={"1.5"}
                                fontSize={"1.2rem"}
                              >
                                {" "}
                                {item?.link2}{" "}
                              </Text>
                            </Link>
                            {item?.description3p2}
                          </Text>
                          <Text
                            fontSize={"1.2rem"}
                            lineHeight={"1.5"}
                            marginBottom={"1rem"}
                            className={"small-text"}
                          >
                            {item.description4 || ""}
                          </Text>
                          <Text
                            fontSize={"1.2rem"}
                            lineHeight={"1.5"}
                            marginBottom={"1rem"}
                            className={"small-text"}
                          >
                            {item.description5 || ""}
                          </Text>
                        </>
                      );
                    }
                  )}
                </Box>
              </Box>

              {/* 9. PrivacyPolicy */}
              <Box margin={"40px 0px"} id={"a9"}>
                <Text
                  fontSize={["2em", "2.4em", "2.4em", "2.4em"]}
                  fontWeight={"bold"}
                  color={"#313B47"}
                  className={"medium-heading1"}
                  id={PRIVACY_DATA?.PrivacyPolicy?.id}
                  key={PRIVACY_DATA?.PrivacyPolicy?.id}
                >
                  {PRIVACY_DATA?.PrivacyPolicy?.heading}
                </Text>

                {/* description */}
                <Box margin={"10px 0px 40px 0px"}>
                  {PRIVACY_DATA?.PrivacyPolicy?.data?.map((item, index) => (
                    <>
                      <Text
                        key={index}
                        fontSize={"1rem"}
                        lineHeight={"1.5"}
                        marginBottom={"1rem"}
                        className={"small-text"}
                      >
                        {item?.text}
                      </Text>
                    </>
                  ))}
                </Box>
              </Box>

              {/* underline */}
              {/*  */}

              {/* Contact Us */}
              <Box margin={"30px 0px"}>
                <Text
                  fontSize={["2em", "2.4em", "2.4em", "2.4em"]}
                  fontWeight={"bold"}
                  color={"#313B47"}
                  className={"medium-heading1"}
                >
                  {PRIVACY_DATA?.ContactUs?.heading}
                </Text>

                {/* description */}
                <Box margin={"10px 0px 40px 0px"}>
                  <Text
                    fontSize={"1rem"}
                    lineHeight={"1.5"}
                    marginBottom={"1rem"}
                  >
                    {PRIVACY_DATA?.ContactUs?.subHeading}
                  </Text>

                  <Box>
                    <UnorderedList>
                      {CONTACT_US_DATA?.map((item) =>
                        item?.label === "istLink" ? (
                          item.description.map((item, index) => {
                            return (
                              <>
                                <ListItem
                                  lineHeight={"1.5"}
                                  fontSize={"1.1em"}
                                  className={"xsmall-text"}
                                >
                                  {item?.item}
                                </ListItem>
                              </>
                            );
                          })
                        ) : item?.label === "secondLink" ? (
                          <>
                            <ListItem lineHeight={"1.5"} fontSize={"1.1em"}>
                              {item?.description}
                              <Link href={"https://gmail.com/"}>
                                <Text
                                  color={"#2679C7"}
                                  lineHeight={"1.5"}
                                  fontSize={"1rem"}
                                >
                                  {" "}
                                  {item?.mail}
                                </Text>
                              </Link>
                              {item?.description2}
                              <Link href={"https://gmail.com/"}>
                                <Text
                                  color={"#2679C7"}
                                  lineHeight={"1.5"}
                                  fontSize={"1rem"}
                                >
                                  {" "}
                                  {item?.mail2}{" "}
                                </Text>
                              </Link>
                            </ListItem>
                          </>
                        ) : item?.label === "thirdLink" ? (
                          <>
                            <ListItem lineHeight={"1.5"} fontSize={"1.1em"}>
                              {item?.description}
                            </ListItem>
                          </>
                        ) : (
                          <></>
                        )
                      )}
                    </UnorderedList>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </ChakraProvider>
    </>
  );
};

export default PrivacyPage;
