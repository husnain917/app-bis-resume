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
  ModalBody,
} from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";
import styles from "../../../styles/Auth.module.css";
import AuthButton from "./AuthButton";
import CustomBtn from "./CustomBtn";
import { data } from "./data";
import { CloseIcon } from "@chakra-ui/icons";
export default function AuthModal({ isModalOpen, setIsModalOpen }) {
  const [isRegister, setIsRegister] = useState(true);
  const [active, setIsActive] = useState("");
  const onChangeHandler = (index) => {
    setIsActive(index);
    if (isRegister) {
      return setIsRegister(false);
    } else {
      return setIsRegister(true);
    }
  };

  return (
    <>
      <Modal isOpen={isModalOpen} size={"ful"}>
        <ModalOverlay />
        <ModalContent
          w={["100%", "100%", "100%", "70%", "60%"]}
          borderRadius="10px"
          h={["90%", "100%", "90%", "90%", "80vh"]}
          minH={["90%", "650px", "700px", "78%"]}
        >
          <Box
            w="100%"
            display="flex"
            h={["70%", "85%", "100%", "100%", "100%"]}
          >
            <Box w={[0, 0, 0, "50%"]} h="100%">
              {isRegister ? (
                <Image src="/signup.png" w="100%" h="100%" />
              ) : (
                <Image src="/signin.png" w="100%" h="100%" />
              )}
            </Box>

            <Box w={["100%", "100%", "100%", "50%"]} h="auto">
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                mt="7%"
              >
                <Box
                  display="flex"
                  // w={[,,,"70%"]}
                  bgColor="#E1E1E1"
                  borderRadius="15px"
                >
                  {data?.map((btn, index) => {
                    return (
                      <div key={index}>
                        <AuthButton
                          btn={btn}
                          index={index}
                          onChangeHandler={onChangeHandler}
                          bgColor={active === index ? "#00C8AA" : "#E1E1E1"}
                          color={active === index ? "white" : "black"}
                        />
                      </div>
                    );
                  })}
                </Box>
                <CloseIcon
                  w={8}
                  h={8}
                  color="white"
                  bgColor="#E1E1E1"
                  p="5px"
                  ml="7%"
                  borderRadius="100px"
                  _hover={{ color: " white", borderRadius: "5px" }}
                  onClick={() => setIsModalOpen(false)}
                  className={styles.modalBtn}
                />
              </Box>

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
                    <Input
                      variant="outline"
                      focusBorderColor="#00C8AA"
                      placeholder="Password"
                      bgColor="#E1E1E1"
                      type={'password'}
                      w="100%"
                      mt="10px"
                      h="50px"
                      pt="10px"
                      pb="10px"
                      _hover={{
                        color: "black",
                        fontSize: "18px",
                      }}
                    />
                    <Checkbox
                      size="lg"
                      mt="10%"
                      colorScheme="MediumSpringGreen"
                      iconColor="MediumSpringGreen"
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
                    <Input
                      variant="outline"
                      placeholder="Password"
                      bgColor="#E1E1E1"
                      type={'password'}
                      w="100%"
                      mt="10px"
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
               
              </Box>
            </Box>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
}
