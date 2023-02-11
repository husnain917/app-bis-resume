import { Box, Link, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";
import { TERMS_DATA } from "../../src/components/legal/CustomData";
import Underline from "../../src/components/aaronGraphicTemp/Underline";
import TableOfContent from "../../src/components/legal/TableOfContent";
import styles from "../../styles/resumeFormats.module.css";
import SideBar from "../../src/components/sideBar/SideBar";

export default function Terms_And_Conditions() {
  return (
    <>
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
          <Box
            className={styles.sideBarContainer}
            display={["none", "none", "block", "block", "block"]}
          >
            <SideBar />
          </Box>
        </Box>
        <Box maxW={["100%", "100%", "80%", "80%"]}>
          {/* main title */}
          <Box padding={"40px 0px"}>
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
                  fontSize={"1rem"}
                  lineHeight={"1.5"}
                  marginBottom={"5px"}
                >
                  {item?.text}
                </Text>
              </>
            ))}
            <Text
              fontSize={"0.90rem"}
              lineHeight={"1.5"}
              marginBottom={"0.80rem"}
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
            <Box margin={"10px 10px 40px 10px"}>
              <TableOfContent />
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
                    marginBottom={"5px"}
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
              <Text fontSize={"1rem"} lineHeight={"1.5"} marginBottom={"1rem"}>
                {TERMS_DATA?.AcceptableUse?.description}
              </Text>
              {/* Points */}
              <UnorderedList>
                {TERMS_DATA?.AcceptableUse?.data?.map((item, index) => (
                  <>
                    <ListItem
                      key={index}
                      fontSize={"1rem"}
                      lineHeight={"1.5"}
                      margin={"5px 10px 0px 10px"}
                    >
                      {item?.text}
                    </ListItem>
                  </>
                ))}
              </UnorderedList>
              <Text fontSize={"1rem"} lineHeight={"1.5"} marginTop={"1rem"}>
                {TERMS_DATA?.AcceptableUse?.lastDescription}
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
              <Text fontSize={"1rem"} lineHeight={"1.5"} marginBottom={"1rem"}>
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
              <Text fontSize={"1rem"} lineHeight={"1.5"} marginBottom={"1rem"}>
                {TERMS_DATA?.LinksToOtherSoftware?.description}
              </Text>
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
              <Text fontSize={"1rem"} lineHeight={"1.5"} marginBottom={"1rem"}>
                {TERMS_DATA?.WarrantyAndPremiumAccount?.description}
              </Text>
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
              <Text fontSize={"1rem"} lineHeight={"1.5"} marginBottom={"1rem"}>
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
            <Box margin={"10px 0px 40px 0px"}>
              <Text fontSize={"1rem"} lineHeight={"1.5"} marginBottom={"1rem"}>
                {TERMS_DATA?.Changes?.data}
                <Link
                  href={TERMS_DATA?.Changes?.href ?? "#"}
                  color={"#2679C7"}
                  fontSize={"1rem"}
                >
                  {TERMS_DATA?.Changes?.href}.
                </Link>
              </Text>
            </Box>
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
              <Text fontSize={"1rem"} lineHeight={"1.5"} marginBottom={"1rem"}>
                {TERMS_DATA?.BreachesOfTheseTermsOfUse?.data}
              </Text>
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
              <Text fontSize={"1rem"} lineHeight={"1.5"} marginBottom={"1rem"}>
                {TERMS_DATA?.Termination?.data}
              </Text>
            </Box>
          </Box>

          {/* underline */}
          {/* <Underline height="0.1em" width="100%" bgColor="#000" /> */}

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
              <Text fontSize={"1rem"} lineHeight={"1.5"} marginBottom={"1rem"}>
                {TERMS_DATA?.ContactUs?.desIst}
                <Link
                  href={TERMS_DATA?.ContactUs?.href ?? "#"}
                  color={"#2679C7"}
                  fontSize={"1rem"}
                >
                  {TERMS_DATA?.ContactUs?.href}
                </Link>
                {TERMS_DATA?.ContactUs?.desLast}
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
