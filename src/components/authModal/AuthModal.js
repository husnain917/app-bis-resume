import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  Button,
  Text,
  Box,
  Image,
  Input,
  Checkbox,
} from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";
import AuthButton from "./AuthButton";
import CustomBtn from "./CustomBtn";
export default function AuthModal({ isModalOpen, setIsModalOpen }) {
  const [isRegister, setIsRegister] = useState(true);

  const ctaRegisterHandler = () => {
    setIsRegister(true);
  };

  const ctaLoginHandler = () => {
    setIsRegister(false);
  };

  return (
    <>
      <Modal isOpen={isModalOpen} size={"ful"} borderRadius="10px">
        <ModalOverlay />
        <ModalContent w="800px" h="500px">
          {/* <ModalCloseButton /> */}
          <Box w="900px" display="flex" h="100%">
            <Box w="400px" bgColor="black" h="100%">
              {isRegister ? (
                <Image src="/signup.png" w="400px" h="100%" />
              ) : (
                <Image src="/signin.png" w="400px" h="100%" />
              )}
            </Box>
            <Box w="400px" h="500px">
              <AuthButton
                ctaLoginHandler={ctaLoginHandler}
                ctaRegisterHandler={ctaRegisterHandler}
                setIsModalOpen={setIsModalOpen}
              />
              <Box ml="7%" mr="7%" mt="6%">
                {isRegister ? (
                  <>
                    <Box display="flex">
                      <Input
                        variant="outline"
                        placeholder="First Name"
                        bgColor="#E1E1E1"
                        m="2%"
                        h="50px"
                        pt="10px"
                        pb="10px"
                      />
                      <Input
                        variant="outline"
                        placeholder="Last Name"
                        bgColor="#E1E1E1"
                        m="2%"
                        h="50px"
                        pt="10px"
                        pb="10px"
                      />
                    </Box>

                    <Input
                      variant="outline"
                      placeholder="Email"
                      bgColor="#E1E1E1"
                      w="100%"
                      h="50px"
                      pt="10px"
                      pb="10px"
                      mt="1%"
                    />
                    <Checkbox
                      size="lg"
                      colorScheme="#00C8AA"
                      defaultChecked
                      mt="10%"
                    >
                      I Consent to the terms & Privacy Policy
                    </Checkbox>
                  </>
                ) : (
                  <>
                    <Input
                      variant="outline"
                      placeholder="Email"
                      bgColor="#E1E1E1"
                      w="100%"
                      h="50px"
                      pt="10px"
                      pb="10px"
                      mt="1%"
                    />
                  </>
                )}
              </Box>
              {/* Next Buttons */}
              <Box mt="5%">
                {isRegister ? (
                  <>
                    <CustomBtn
                      title="Register Now"
                      bgColor="#00C8AA"
                      color="white"
                    />
                  </>
                ) : (
                  <>
                    <Text align="center" fontSize="14px" mt="9%" p="5px">
                      We will send you a one-time sign in link.
                    </Text>
                    <CustomBtn
                      title="SignIn With Magic Link"
                      bgColor="#00C8AA"
                      color="white"
                    />
                    <CustomBtn
                      title="Switch to password"
                      bgColor="#E1E1E1"
                      color="grey"
                      mt="3%"
                    />
                  </>
                )}
                {isRegister ? (
                  <>
                    <Text fontSize="16px" align="center" mt="5%">
                      Or Sign Up With:
                    </Text>
                    {/* <Text align="center">
                      A password can be set after you sign up if you prefer.
                      Meanwhile, your information is secure and private
                    </Text> */}
                  </>
                ) : (
                  <>
                    <Text fontSize="16px" align="center" mt="5%">
                      Or Sign In With:
                    </Text>
                  </>
                )}
                <Button
                  leftIcon={<FaGoogle />}
                  variant="solid"
                  bgColor="#E1E1E1"
                  color="black"
                  w="85%"
                  ml="8%"
                  borderRadius="100px"
                  fontSize="16px"
                  mt="3%"
                >
                  Google
                </Button>
                {isRegister ? (
                  <>
                    <Text align="center" lineHeight="15px" mt="3%">
                      A password can be set after you sign up if you prefer.
                      Meanwhile, your information is secure and private
                    </Text>
                  </>
                ) : null}
              </Box>
            </Box>
          </Box>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
