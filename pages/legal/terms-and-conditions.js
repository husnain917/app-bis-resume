import {
  Box,
  Container,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  PREMIUM_ACCOUNT_DATA,
  PREMIUM_ACCOUNT_DATA_LINKS,
  CONTACT_US_DATA,
  TERMS_DATA,
} from "../../src/components/legal/CustomData";
import Underline from "../../src/components/aaronGraphicTemp/Underline";
import TableOfContent from "../../src/components/legal/TableOfContent";
import SideBarSection from "../../src/components/aboutUs/SideBarSection/SideBarSection";
import styles from "../../styles/resumeFormats.module.css";
import SideBar from "../../src/components/sideBar/SideBar";

export default function Terms_And_Conditions() {
  // sidebar state

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
              {TERMS_DATA?.AcceptableUse?.data?.map((item, index) => (
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
              {TERMS_DATA?.LinksToOtherSoftware?.data?.map((item, index) => (
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

              <UnorderedList>
                {PREMIUM_ACCOUNT_DATA?.map((item) => (
                  <>
                    <ListItem lineHeight={"1.5"} fontSize={"1.1em"}>
                      {item?.label}
                    </ListItem>
                  </>
                ))}
              </UnorderedList>

              {TERMS_DATA?.WarrantyAndPremiumAccount?.paragraphs?.map(
                (item, index) => (
                  <>
                    <Text
                      fontSize={"1rem"}
                      lineHeight={"1.5"}
                      margin={"1rem 0rem"}
                      key={index}
                    >
                      {item?.text}
                    </Text>
                  </>
                )
              )}

              <Text fontSize={"1rem"} lineHeight={"1.5"} marginBottom={"1rem"}>
                If you would like to cancel your purchase, we advise that you do
                so by sending us an email at <br />
                <Link
                  href={"https://gmail.com/"}
                  color={"#2679C7"}
                  lineHeight={"1.5"}
                  fontSize={"1rem"}
                >
                  contact@bisResume.com
                </Link>
                , informing us that you would like to cancel your purchase.
                Please include the below form:
              </Text>
              <Text fontSize={"1rem"} lineHeight={"1.5"} marginBottom={"1rem"}>
                {TERMS_DATA?.WarrantyAndPremiumAccount?.startLinkHeading}
              </Text>

              <Box>
                {PREMIUM_ACCOUNT_DATA_LINKS.map((item) => (
                  <>
                    <Text
                      fontSize={"1rem"}
                      lineHeight={"1.5"}
                      marginBottom={"1rem"}
                      display={"inline-block"}
                    >
                      {item?.label}
                    </Text>
                    &nbsp;
                    <Text
                      fontSize={"1rem"}
                      lineHeight={"1.5"}
                      fontWeight={"bold"}
                      display={"inline-block"}
                    >
                      {item?.link}
                    </Text>
                    <br />
                  </>
                ))}
              </Box>

              <Text fontSize={"1rem"} lineHeight={"1.5"} marginBottom={"1rem"}>
                {TERMS_DATA?.WarrantyAndPremiumAccount?.ReasonForCanceling}
              </Text>

              <Box margin={"50px 0px 0px 0px"}>
                <Text
                  fontSize={"1rem"}
                  lineHeight={"1.5"}
                  marginBottom={"1rem"}
                >
                  After purchasing a premium account, the receipt will be sent
                  to the email address provided when you set up your account,
                  within 48 hours of making the purchase. If you have not
                  received your receipt within 48 hours of booking, please check
                  your spam or junk email folder or filter and then contact us.
                  It is your responsibility to ensure that your email is set up
                  to allow you to receive your bill, and we cannot accept any
                  liability for any consequences of your not doing so. However,
                  sometimes technical problems may occur from our side, and in
                  this case, you can request your receipt by sending us an email
                  at &nbsp;
                  <Link
                    href={"https://gmail.com/"}
                    color={"#2679C7"}
                    lineHeight={"1.5"}
                    fontSize={"1rem"}
                  >
                    contact@bisResume.com
                  </Link>
                  .
                </Text>
                <Text
                  fontSize={"1rem"}
                  lineHeight={"1.5"}
                  marginBottom={"1rem"}
                >
                  In the unfortunate event of the software, apps, applications
                  or servers crashing or having technical problems during your
                  purchase which will result in your premium account not being
                  activated, please email us at &nbsp;
                  <Link
                    href={"https://gmail.com/"}
                    color={"#2679C7"}
                    lineHeight={"1.5"}
                    fontSize={"1rem"}
                  >
                    contact@bisResume.com
                  </Link>
                  , and the problem will be investigated. This will result in
                  different compensations or refunds in the case we find the
                  problem was caused by our part.
                </Text>

                {TERMS_DATA?.WarrantyAndPremiumAccount?.data?.map(
                  (item, index) => (
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
              <Text fontSize={"1rem"} lineHeight={"1.5"} marginBottom={"1rem"}>
                {TERMS_DATA?.ContactUs?.subHeading}
              </Text>

              <Box>
                <UnorderedList>
                  {CONTACT_US_DATA?.map((item) =>
                    item?.label === "istLink" ? (
                      <>
                        <ListItem lineHeight={"1.5"} fontSize={"1.1em"}>
                          {item?.description}
                        </ListItem>
                      </>
                    ) : item?.label === "secondLink" ? (
                      <>
                        <ListItem lineHeight={"1.5"} fontSize={"1.1em"}>
                          {item?.description}
                          <Link
                            href={"https://gmail.com/"}
                            color={"#2679C7"}
                            lineHeight={"1.5"}
                            fontSize={"1rem"}
                          >
                            {item?.mail}
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
    </>
  );
}
