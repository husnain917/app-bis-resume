import { Box, Text, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import ContactButton from "../src/components/contactUs/ContactButton";
import CustomInput from "../src/components/contactUs/CustomInput";
import { buttonData } from "../src/components/contactUs/buttonData";
import CancelSubscription from "../src/components/cancelSubscription";
import SideBar from "../src/components/sideBar/SideBar";
import { ToastContainer } from "react-toastify";
import { ToastError, ToastSuccess } from "../src/components/Toast";

export default function ContactUs() {
  const [active, setActive] = useState("");
  const [cancel, setCancel] = useState(1);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const validateEmail = (email) => {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-z  A-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };



  // console.log("NAME", name, "EMAIL", email, "Message", message);
  const onSubmitHandler = () => {
    if (!email || !name || !message) {
      ToastError("Please fill this Fields");
      return
    } else if (validateEmail(email) === false) {
      ToastError("This Email is not Valid")
    } else {
      setEmail("");
      setName("");
      setMessage("");
      ToastSuccess("Message successfully sent");
    }


  };
  const onFocunHandler = (index) => {
    setCancel(1);
    setActive(index);
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
        <Box
          w={["0%", "0%", "0%", "10%"]}
          display={['none', 'none', 'none', 'block']}
        >
          <Box
            marginTop={'8rem'}
          >
            <SideBar />
          </Box>
        </Box>
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
              {cancel === 2 ? (
                <Box mt={"2"}>
                  <CancelSubscription />
                </Box>
              ) : (
                <>
                  <Box w={["100%", "100%", "50%", "50%"]} mt="3%">
                    <CustomInput
                      title="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      height="50px"
                    />
                    <CustomInput
                      title="Name"
                      marginTop="5%"
                      height="50px"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Box>
                  <Box w={["100%", "100%", "50%", "50%"]} mt="3%">
                    <CustomInput
                      title="Message"
                      height="150px"
                      paddingBottom="100px"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </Box>{" "}
                </>
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
                height={"35px"}
                onClick={onSubmitHandler}
                bg={'#2CACD5'}
                color={'white'}
                padding="20px"
                borderRadius={'50px'}
                _hover={{
                  bg: '#2CACD5',
                  color: 'white',
                  transition: "0.5s",
                  boxShadow: "-1px -2px 4px 5px #8fd1e7",
                  borderRadius: "8px",
                }}
                mt={'15px'}
              >
                Send Message
                <ToastContainer />
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
