import {
  Box,
  Container,
  Heading,
  ChakraProvider,
  Link,
  ListItem,
  Text,
  UnorderedList,
  OrderedList,
} from "@chakra-ui/react";
import React from "react";
import {
  PREMIUM_ACCOUNT_DATA,
  PREMIUM_ACCOUNT_DATA_LINKS,
  CONTACT_US_DATA,
  TERMS_DATA,
} from "./data";
import Underline from "../aaronGraphicTemp/Underline";
import TableOfContent from "../legal/TableOfContent";
import { TABLE_CONTENT_DATA } from "./data";
import { extendTheme } from "@chakra-ui/react";
import fonts from "./fonts";
// const theme = extendTheme({
//   fonts: {
//     heading: "Open Sans",
//     body: "Raleway",
//   },
// })

const PrivacyPage = () => {
  return (
    <>
      <ChakraProvider
      // theme={theme}
      >
        <Container maxW={["100%", "100%", "100%", "80%", "50%"]}>
          <Box>
            {/* main title */}
            <Box padding={"40px 0px"} marginBottom={10}>
              {TERMS_DATA?.TermsOfUse?.heading?.map((item, index) => (
                <>
                  <Text
                    key={index}
                    textAlign={"center"}
                    fontSize={["2em", "3em", "3em", "3em"]}
                    fontWeight={"bold"}
                    color={"#313B47"}
                  >
                    {item?.title}
                  </Text>
                </>
              ))}
            </Box>

            {/* description */}
            <Box>
              {TERMS_DATA?.TermsOfUse?.data?.map((item, index) => (
                <>
                  <Text
                    key={index}
                    fontSize={"1.1rem"}
                    fontWeight={500}
                    lineHeight={"1.5"}
                    marginBottom={"1rem"}
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
              >
                {TERMS_DATA?.TermsOfUse?.description}
              </Text>
            </Box>

            {/* Table of Contents */}
            <Box margin={"40px 0px"}>
              <Text
                fontSize={["2em", "2.4em", "2.4em", "2.4em"]}
                fontWeight={"bold"}
                color={"#313B47"}
              >
                {TERMS_DATA?.TableOfContents?.heading}
              </Text>

              {/* description */}
              <Box margin={"10px 0px 40px 0px"}>
                <OrderedList>
                  {TABLE_CONTENT_DATA?.map((item, index) => (
                    <>
                      <ListItem key={index}>
                        <Link
                          color="#2679C7"
                          textDecor={"none"}
                          fontSize={"1.1em"}
                          lineHeight={"1.5"}
                          to={item.href}
                          smooth={true}
                          duration={800}
                          fontWeight={500}
                          offset={0}
                          _hover={{
                            color: "40a9ff",
                            textDecoration: "underline",
                          }}
                        >
                          {item?.label}
                        </Link>
                      </ListItem>
                    </>
                  ))}
                </OrderedList>
              </Box>
            </Box>

            {/* 1. The Novorésumé Content */}
            <Box margin={"40px 0px"} id={"a1"}>
              <Text
                fontSize={["2em", "2.4em", "2.4em", "2.4em"]}
                fontWeight={"bold"}
                color={"#313B47"}
              >
                {TERMS_DATA?.TheNovoresumeContent?.heading}
              </Text>

              {/* description */}
              <Box margin={"10px 0px 40px 0px"}>
                {TERMS_DATA?.TheNovoresumeContent?.data?.map((item, index) => (
                  <>
                    <Text
                      key={index}
                      fontSize={"1rem"}
                      lineHeight={"1.5"}
                      marginBottom={"1rem"}
                    >
                      {item?.text}
                    </Text>
                  </>
                ))}
              </Box>
            </Box>

            {/* 2. Acceptable Use */}
            <Box margin={"40px 0px"} id={"a2"}>
              <Text
                fontSize={["2em", "2.4em", "2.4em", "2.4em"]}
                fontWeight={"bold"}
                color={"#313B47"}
              >
                {TERMS_DATA?.AcceptableUse?.heading}
              </Text>

              {/* description */}
              <Box margin={"10px 0px 40px 0px"}>
                <Text
                  fontSize={["1.1em", "1.1em", "1.3em", "1.3em"]}
                  fontWeight={"500"}
                  color={"#313B47"}
                  marginBottom={4}
                >
                  {TERMS_DATA?.AcceptableUse?.description}
                </Text>
                <UnorderedList mb={6} ml={7}>
                  {TERMS_DATA?.AcceptableUse?.data?.map((item, index) => {
                    return (
                      <>
                        <ListItem lineHeight={"1.5"} fontSize={"1.1em"}>
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
                >
                  {TERMS_DATA?.AcceptableUse?.description2}
                </Text>
                <Text
                  fontSize={["1.1em", "1.1em", "1.3em", "1.3em"]}
                  fontWeight={"500"}
                  color={"#313B47"}
                  marginBottom={4}
                >
                  {TERMS_DATA?.AcceptableUse?.description3}
                </Text>
                <Text
                  fontSize={["1.1em", "1.1em", "1.3em", "1.3em"]}
                  fontWeight={"500"}
                  color={"#313B47"}
                  marginBottom={4}
                >
                  {TERMS_DATA?.AcceptableUse?.description4}
                </Text>
                <Text
                  fontSize={["1.1em", "1.1em", "1.3em", "1.3em"]}
                  fontWeight={"500"}
                  color={"#313B47"}
                  marginBottom={4}
                >
                  {TERMS_DATA?.AcceptableUse?.description5}
                </Text>
                <Text
                  fontSize={["1.1em", "1.1em", "1.3em", "1.3em"]}
                  fontWeight={"500"}
                  color={"#313B47"}
                  marginBottom={4}
                >
                  {TERMS_DATA?.AcceptableUse?.description6}
                </Text>
              </Box>
            </Box>

            {/* 3. Security */}
            <Box margin={"40px 0px"} id={"a3"}>
              <Text
                fontSize={["2em", "2.4em", "2.4em", "2.4em"]}
                fontWeight={"bold"}
                color={"#313B47"}
              >
                {TERMS_DATA?.Security?.heading}
              </Text>

              {/* description */}
              <Box margin={"10px 0px 40px 0px"}>
                <Text
                  fontSize={"1.2rem"}
                  lineHeight={"1.5"}
                  marginBottom={"1rem"}
                >
                  {TERMS_DATA?.Security?.data}
                </Text>
              </Box>
            </Box>

            {/* 4. Links To Other Software/Websites/Services */}
            <Box margin={"40px 0px"} id={"a4"}>
              <Text
                fontSize={["2em", "2.4em", "2.4em", "2.4em"]}
                fontWeight={"bold"}
                color={"#313B47"}
              >
                {TERMS_DATA?.LinksToOtherSoftware?.heading}
              </Text>

              {/* description */}
              <Box margin={"10px 0px 40px 0px"}>
                <Text
                  fontSize={["1.4em", "1.6em", "1.6em", "1.6em"]}
                  fontWeight={"500"}
                  color={"#313B47"}
                >
                  {TERMS_DATA?.LinksToOtherSoftware?.subHeading}
                </Text>
                {TERMS_DATA?.LinksToOtherSoftware?.data?.map((item, index) => (
                  <>
                    <Text fontSize={"1.3rem"} fontWeight={700} my={"5"}>
                      {item.heading}
                    </Text>
                    <Text
                      fontSize={"1.2rem"}
                      lineHeight={"1.5"}
                      marginBottom={"1rem"}
                    >
                      {item.description}
                      <Link
                        href={"#"}
                        color={"#2679C7"}
                        lineHeight={"1.5"}
                        fontSize={"1.2rem"}
                      >
                        {item?.link1}
                      </Link>
                    </Text>
                    <UnorderedList mb={6}>
                      {item?.data?.map((item, index) => {
                        return (
                          <>
                            <ListItem lineHeight={"1.5"} fontSize={"1.1em"}>
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
                    >
                      {item?.description2}
                      <Link
                        href={"#"}
                        color={"#2679C7"}
                        lineHeight={"1.5"}
                        fontSize={"1.2rem"}
                      >
                        {item?.link1}
                      </Link>
                    </Text>
                  </>
                ))}
              </Box>
            </Box>

            {/* 5. Warranty and Premium Account */}
            <Box margin={"40px 0px"} id={"a5"}>
              <Text
                fontSize={["2em", "2.4em", "2.4em", "2.4em"]}
                fontWeight={"bold"}
                color={"#313B47"}
              >
                {TERMS_DATA?.WarrantyAndPremiumAccount?.heading}
              </Text>

              {/* description */}
              <Box margin={"10px 0px 40px 0px"}>
                <Box>
                  {TERMS_DATA?.WarrantyAndPremiumAccount?.data?.map(
                    (item, index) => (
                      <>
                        <Text fontSize={"1.3rem"} fontWeight={700} my={"6"}>
                          {item.heading}
                        </Text>
                        <Text
                          fontSize={"1.2rem"}
                          lineHeight={"1.5"}
                          marginBottom={"1rem"}
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
              >
                {TERMS_DATA?.GoverningLaw?.heading}
              </Text>

              {/* description */}
              <Box margin={"10px 0px 40px 0px"}>
                <Text
                  fontSize={"1.2rem"}
                  lineHeight={"1.5"}
                  marginBottom={"1rem"}
                >
                  {TERMS_DATA?.GoverningLaw?.data}
                </Text>
              </Box>
            </Box>

            {/* 7. Changes */}
            <Box margin={"40px 0px"} id={"a7"}>
              <Text
                fontSize={["2em", "2.4em", "2.4em", "2.4em"]}
                fontWeight={"bold"}
                color={"#313B47"}
              >
                {TERMS_DATA?.Changes?.heading}
              </Text>

              {/* description */}

              {TERMS_DATA?.Changes?.data.map((item, index) => {
                return (
                  <>
                    <Box margin={"10px 0px 40px 0px"}>
                      <Text
                        fontSize={"1.2rem"}
                        lineHeight={"1.5"}
                        marginBottom={"1rem"}
                      >
                        {item.text}
                        <Link
                          href={"#"}
                          color={"#2679C7"}
                          lineHeight={"1.5"}
                          fontSize={"1.2rem"}
                        >
                          {item?.link}
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
              >
                {TERMS_DATA?.BreachesOfTheseTermsOfUse?.heading}
              </Text>

              {/* description */}
              <Box margin={"10px 0px 40px 0px"}>
                <Text
                  fontSize={"1rem"}
                  lineHeight={"1.5"}
                  marginBottom={"1rem"}
                >
                  {TERMS_DATA?.BreachesOfTheseTermsOfUse?.data}
                </Text>
                {TERMS_DATA?.BreachesOfTheseTermsOfUse?.subData.map(
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
                        >
                          {item.description}
                          <Link
                            href={"#"}
                            color={"#2679C7"}
                            lineHeight={"1.5"}
                            fontSize={"1.2rem"}
                          >
                            {item?.link1}
                          </Link>
                        </Text>

                        <Text
                          fontSize={"1.2rem"}
                          lineHeight={"1.5"}
                          marginBottom={"1rem"}
                        >
                          {item.description2 || ""}
                        </Text>
                        <Text
                          fontSize={"1.2rem"}
                          lineHeight={"1.5"}
                          marginBottom={"1rem"}
                        >
                          {item?.description3p1}
                          <Link
                            href={"#"}
                            color={"#2679C7"}
                            lineHeight={"1.5"}
                            fontSize={"1.2rem"}
                          >
                            {item?.link2}
                          </Link>
                          {item?.description3p2}
                        </Text>
                        <Text
                          fontSize={"1.2rem"}
                          lineHeight={"1.5"}
                          marginBottom={"1rem"}
                        >
                          {item.description4 || ""}
                        </Text>
                        <Text
                          fontSize={"1.2rem"}
                          lineHeight={"1.5"}
                          marginBottom={"1rem"}
                        >
                          {item.description5 || ""}
                        </Text>
                      </>
                    );
                  }
                )}
              </Box>
            </Box>

            {/* 9. Termination */}
            <Box margin={"40px 0px"} id={"a9"}>
              <Text
                fontSize={["2em", "2.4em", "2.4em", "2.4em"]}
                fontWeight={"bold"}
                color={"#313B47"}
              >
                {TERMS_DATA?.Termination?.heading}
              </Text>

              {/* description */}
              <Box margin={"10px 0px 40px 0px"}>
                {TERMS_DATA?.Termination?.data?.map((item, index) => (
                  <>
                    <Text
                      key={index}
                      fontSize={"1rem"}
                      lineHeight={"1.5"}
                      marginBottom={"1rem"}
                    >
                      {item?.text}
                    </Text>
                  </>
                ))}
              </Box>
            </Box>

            {/* underline */}
            <Underline height="0.1em" width="100%" bgColor="#000" />

            {/* Contact Us */}
            <Box margin={"30px 0px"}>
              <Text
                fontSize={["2em", "2.4em", "2.4em", "2.4em"]}
                fontWeight={"bold"}
                color={"#313B47"}
              >
                {TERMS_DATA?.ContactUs?.heading}
              </Text>

              {/* description */}
              <Box margin={"10px 0px 40px 0px"}>
                <Text
                  fontSize={"1rem"}
                  lineHeight={"1.5"}
                  marginBottom={"1rem"}
                >
                  {TERMS_DATA?.ContactUs?.subHeading}
                </Text>

                <Box>
                  <UnorderedList>
                    {CONTACT_US_DATA?.map((item) =>
                      item?.label === "istLink" ? (
                        item.description.map((item, index) => {
                          return (
                            <>
                              <ListItem lineHeight={"1.5"} fontSize={"1.1em"}>
                                {item?.item}
                              </ListItem>
                            </>
                          );
                        })
                      ) : item?.label === "secondLink" ? (
                        <>
                          <ListItem lineHeight={"1.5"} fontSize={"1.1em"}>
                            {item?.description}
                            <Link
                              href={"#"}
                              color={"#2679C7"}
                              lineHeight={"1.5"}
                              fontSize={"1rem"}
                            >
                              {item?.mail}
                            </Link>
                            {item?.description2}
                            <Link
                              href={"#"}
                              color={"#2679C7"}
                              lineHeight={"1.5"}
                              fontSize={"1rem"}
                            >
                              {item?.mail2}
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
        </Container>
      </ChakraProvider>
    </>
  );
};

export default PrivacyPage;
