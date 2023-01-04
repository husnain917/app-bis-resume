import { Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import ContactButton from "../src/components/contactUs/ContactButton";
import CustomInput from "../src/components/contactUs/CustomInput";
import { buttonData } from "../src/components/contactUs/buttonData";
import CancelSubscription from "../src/components/cancelSubscription";
import CommonButton from "../src/components/commonButton/CommonButton";

export default function ContactUs() {
  const [active, setActive] = useState("");
  const [cancel, setCancel] = useState(1);
  const onFocunHandler = (index) => {
    setCancel(1);
    setActive(index);
    console.log("This is Index", index);
    if (index === 4) {
      setCancel(2);
    }
  };
  return (
    <>
      {/* main div  */}

      <Box
        w="100%"
        h="auto"
        bgColor="#EFF2F9"
        display="flex"
        justifyContent="center"
        pb="150px"
      >
        {/* inner main div  */}
        <Box w={["100%", "100%", "98%", "70%"]} h="auto" mt="5%">
          <Box paddingX={"10%"}>
            <Text
              fontSize={["2.6em"]}
              fontWeight="600"
              color="#000000"
              className="medium-heading"
            >
              Contact Us
            </Text>
            <Text
              color="black"
              fontWeight="400"
              fontSize={["1rem", "1rem", "1rem", "1rem", "1.1rem", "1.1rem"]}
              className="medium-text"
              lineHeight={"26px"}
              mt={3}
            >
              Have comments, questions, or feedback to share? Our team would
              love to hear from you. Give us a call or submit a message below.
            </Text>
          </Box>
          {/* white container  */}

          <Box
            w="100%"
            bgColor="white"
            h="auto"
            pb="60px"
            mt="5%"
            pl={["5%", , , "9%"]}
            pr={["5% ", , "5%"]}
          >
            <Text pt="5%" className="small-heading">
              Select a topic
            </Text>
            <Box display="flex" flexWrap={"wrap"} mt="2%">
              {buttonData.map((button, index) => {
                return (
                  <Box key={index}>
                    <ContactButton
                      button={button}
                      index={index}
                      bgColor={active === index ? "#2CACD5" : "none"}
                      color={active === index ? "white" : "grey"}
                      onFocunHandler={onFocunHandler}
                      className={"small-text"}
                      // onClick={button.link}
                    />
                  </Box>
                );
              })}
            </Box>

            <Box
              w="100%"
              display="flex"
              flexDir={["column", "column", "row", "row"]}
              alignItems="center"
            >
              {cancel === 2 ? (
                <Box mt={"2"}>
                  <CancelSubscription />
                </Box>
              ) : (
                <>
                  <Box w={["100%", "100%", "50%", "50%"]} mt="3%">
                    <CustomInput
                      title="Email"
                      height="50px"
                      className={"small-text"}
                    />
                    <CustomInput
                      title="Name"
                      marginTop="5%"
                      height="50px"
                      className={"small-text"}
                    />
                  </Box>
                  <Box w={["100%", "100%", "50%", "50%"]} mt="3%">
                    <CustomInput
                      className={"small-text"}
                      title="Message"
                      height="150px"
                      paddingBottom="100px"
                    />
                  </Box>{" "}
                </>
              )}
            </Box>

            <Box
              mt="5%"
              display="flex"
              flexDir={["column", "column", "row", "row"]}
              alignItems={"center"}
              pr="5%"
            >
              <Box padding={"0px 10px 0px 0px"}>
                <Text
                  fontSize={["1rem", "1rem", "1rem", "1rem"]}
                  textAlign={["center", "center", "left", "left"]}
                  className={"medium-text"}
                >
                  This site is protected by reCAPTCHA and the Google Privacy
                  Policy and Terms of Service apply.
                </Text>
              </Box>

              <Box>
                <CommonButton
                  height={"40px"}
                  title={"Send Message"}
                  hoverCursor={"pointer"}
                  backgroundColor={"#2CACD5"}
                  color={"white"}
                  hoverColor={"white"}
                  hoverBackgroundColor={"#2CACD5"}
                  margin={["5%", "5%", "5%", "0%"]}
                  padding="15px 20px 15px 20px"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
