import { Box, Text, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import ContactButton from "../src/components/contactUs/ContactButton";
import CustomInput from "../src/components/contactUs/CustomInput";
import { buttonData } from "../src/components/contactUs/buttonData";
import Link from "next/link";

export default function ContactUs() {
  const [active, setActive] = useState("");
  const onFocunHandler = (index) => {
    setActive(index);
    console.log("This is Index", index);
    // if (index === 4) {
    //   return (
    //     <Box className="cursor">
    //       <Link href="/templates/templateCEO">
    //         <img
    //           src="Chief_Exclusive_Office.jpg"
    //           alt="Chief_Exclusive_Office"
    //           height="200px"
    //           width="250px"
    //         />
    //       </Link>
    //     </Box>
    //   );
    // }
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
          <Text fontSize="3rem" fontWeight="750" color="#1B6672" pl="10%">
            Contact Us
          </Text>
          <Text
            color="black"
            fontWeight="450"
            fontSize={["1rem", "1rem", "1rem", "1rem", "1.2rem", "1.2rem"]}
            pl="10%"
            pr="10%"
          >
            Have comments, questions, or feedback to share? Our team would love
            to hear from you. Give us a call or submit a message below.
          </Text>
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
            <Text fontSize="1.5rem" pt="5%">
              Select a topic
            </Text>
            <Box overflow="auto">
              <Box
                display="flex"
                flexDir={"row"}
                justifyContent="centers"
                mt="2%"
              >
                {buttonData.map((button, index) => {
                  return (
                    <div key={index}>
                      <ContactButton
                        button={button}
                        index={index}
                        bgColor={active === index ? "#1B6672" : "none"}
                        color={active === index ? "white" : "grey"}
                        onFocunHandler={onFocunHandler}
                        // onClick={button.link}
                      />
                    </div>
                  );
                })}
              </Box>
            </Box>

            <Box
              w="100%"
              display="flex"
              flexDir={["column", "column", "row", "row"]}
              alignItems="center"
            >
              {false ? (
                <>
                  <Box w={["100%", "100%", "50%", "50%"]} mt="3%">
                    <CustomInput title="Email" height="50px" />
                    <CustomInput title="Name" marginTop="5%" height="50px" />
                  </Box>
                  <Box w={["100%", "100%", "50%", "50%"]} mt="3%">
                    <CustomInput
                      title="Message"
                      height="150px"
                      paddingBottom="100px"
                    />
                  </Box>{" "}
                </>
              ) : (
                <h1>Hellow World</h1>
              )}
            </Box>

            <Box
              mt="5%"
              display="flex"
              flexDir={["column", "column", "row", "row"]}
              alignItems="center"
              pr="5%"
            >
              <Text
                fontSize={["0.9rem", "1.2rem", "1rem", "1rem"]}
                pr={["0px", "0px", "20px", "20px"]}
                align={["center", "center", "left"]}
                mt={["5%", , , "0px"]}
              >
                This site is protected by reCAPTCHA and the Google Privacy
                Policy and Terms of Service apply.
              </Text>
              <Button
                p="25px"
                borderRadius="5px"
                fontSize="1rem"
                color="white"
                bgColor="#1B6672"
                pl="35px"
                pr="35px"
                mt={["5%", "5%", "5%", "0%"]}
                _hover={{ bg: "#1B6672", color: " white" }}
              >
                Send Message
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
