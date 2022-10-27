import { Box, Text, Input } from "@chakra-ui/react";
import React from "react";
import ContactButton from "../src/components/contactUs/ContactButton";
import CustomInput from "../src/components/contactUs/CustomInput";
import { buttonData } from "../src/components/contactUs/buttonData";
export default function ContactUs() {
  return (
    <>
      {/* main div  */}
      <Box
        w="100%"
        h="100vh"
        bgColor="#EFF2F9"
        display="flex"
        justifyContent="center"
      >
        {/* inner main div  */}
        <Box w="70%" h="100vh">
          <Text fontSize="3rem" fontWeight="bold" color="#1A91F0" pl="10%">
            Contact Us
          </Text>
          <Text color="black" fontSize="1.3rem" pl="10%" pr="10%">
            Have comments, questions, or feedback to share? Our team would love
            to hear from you. Give us a call or submit a message below.
          </Text>
          <Box w="100%" bgColor="white" h="70vh" mt="5%" pl="9%" pr="5%">
            <Text fontSize="1.5rem">Select a topic</Text>
            <Box display="flex" justifyContent="space-between" pr="10%">
              {
                buttonData.map((button)=>{
                  return(
                    <div>
                      <ContactButton button={button} />
                    </div>
                  )
                })
              }
            </Box>

            <Box w="100%" display="flex" alignItems="center">
              <Box w="50%" mt="10%">
                <CustomInput title="Email" height="50px" />
                <CustomInput title="Name" marginTop="5%" height="50px" />
              </Box>
              <Box w="50%" mt="10%">
                <CustomInput title="Message" height="150px" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
