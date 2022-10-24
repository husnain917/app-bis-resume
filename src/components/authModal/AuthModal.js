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
  Stack,
} from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";
import styles from "../../../styles/Auth.module.css";
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
      <Modal isOpen={isModalOpen} size={"ful"}>
        <ModalOverlay />
        <ModalContent
          w={["100%", "100%", "80%", "60%"]}
          h="80vh"
          borderRadius="10px"
        >
          {/* <ModalCloseButton /> */}
          <Box w="100%" display="flex" h="100vh">
            <Box w={[0, 0, 0, "50%"]} h="100%">
              {isRegister ? (
                <Image src="/signup.png" w="100%" h="100%" />
              ) : (
                <Image src="/signin.png" w="100%" h="100%" />
              )}
            </Box>
            <Box w={["100%", "100%", "100%", "50%"]} h="auto">
              <AuthButton
                ctaLoginHandler={ctaLoginHandler}
                ctaRegisterHandler={ctaRegisterHandler}
                setIsModalOpen={setIsModalOpen}
                blue={true}
              />
              <Box ml="7%" mr="7%" mt="6%">
                {isRegister ? (
                  <>
                    <Stack direction="row">
                      <Input
                        variant="outline"
                        placeholder="First Name"
                        bgColor="#E1E1E1"
                        focusBorderColor="#00C8AA"
                        h="50px"
                        pt="10px"
                        pb="10px"
                        _hover={{
                          color: "black",
                          fontSize: "18px",
                        }}
                      />
                      <Input
                        variant="outline"
                        placeholder="Last Name"
                        focusBorderColor="#00C8AA"
                        bgColor="#E1E1E1"
                        h="50px"
                        pt="10px"
                        pb="10px"
                        _hover={{
                          color: "black",
                          fontSize: "18px",
                        }}
                      />
                    </Stack>

                    <Input
                      variant="outline"
                      placeholder="Email"
                      focusBorderColor="#00C8AA"
                      bgColor="#E1E1E1"
                      w="100%"
                      h="50px"
                      pt="10px"
                      pb="10px"
                      mt="3%"
                      _hover={{
                        color: "black",
                        fontSize: "18px",
                      }}
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
                      _hover={{
                        color: "black",
                        fontSize: "18px",
                      }}
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
                      hoverColor="#00e2c0"
                      blue={true}
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
                      blue={true}
                      mt="5%"
                    />
                    <CustomBtn
                      title="Switch to password"
                      bgColor="#E1E1E1"
                      color="grey"
                      mt="5%"
                    />
                  </>
                )}
                {isRegister ? (
                  <>
                    <Text fontSize="16px" align="center" mt="5%">
                      Or Sign Up With:
                    </Text>
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
                  color="grey"
                  w="85%"
                  ml="8%"
                  borderRadius="100px"
                  fontSize="16px"
                  mt="3%"
                  className={styles.modalBtn}
                >
                  Google
                </Button>
                {isRegister ? (
                  <>
                    <Text
                      align="center"
                      lineHeight="15px"
                      mt="3%"
                      pl="7%"
                      pr="7%"
                    >
                      A password can be set after you sign up if you prefer.
                      Meanwhile, your information is secure and private
                    </Text>
                  </>
                ) : null}
              </Box>
            </Box>
          </Box>

        
        </ModalContent>
      </Modal>
    </>
  );
}
