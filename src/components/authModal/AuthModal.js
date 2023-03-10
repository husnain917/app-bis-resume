import React, { useEffect, useState } from "react";
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
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";
import styles from "../../../styles/Auth.module.css";
import AuthButton from "./AuthButton";
import CustomBtn from "./CustomBtn";
import { data } from "./data";
import { CloseIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import {
  doGoogleLogin,
  doLogin,
  doSignUp,
  loginMagicUser,
  modalClose,
  passwordReset,
} from "../../../store/actions/AuthAction";
// import { ToastContainer } from "react-toastify";
import { ToastSuccess } from "../Toast";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../loader/Loader";

const inCorrect = {
  fontSize: "0.7rem",
  color: "crimson",
  marginTop: "0px",
  textAlign: "left",
};

export default function AuthModal({
  isModalOpen,
  // setIsModalOpen,
  handle,
}) {
  const [fieldActive, setFieldActive] = useState(false);
  const [isRegister, setIsRegister] = useState(true);
  const [fName, setFName] = useState("");
  const router = useRouter();
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [terms, setTerms] = useState(false);
  const [password, setPassword] = useState("");
  const [resetPass, setResetPass] = useState(false);
  const [loadingLogin, setLoadingLogin] = useState(false);
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [loadingsignup, setLoadingsignup] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);
  const [err, setErr] = useState({ inputId: 0, inputField: "", fieldErr: "" });
  const [show, setShow] = React.useState(true);
  const handleClick = () => setShow(!show);
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const ismodalClose = async () => {
    dispatch(modalClose());
  };
  let active = +localStorage.getItem("active");
  const magicLogin = async () => {
    if (email !== "") {
      dispatch(loginMagicUser(email, setUser, setLoading));
    } else {
      setErr({ inputField: "This field is required", inputId: 2 });
    }
  };

  const validateEmail = (email) => {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-z  A-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const onChangeHandler = (index) => {
    setFieldActive(false);
    localStorage.setItem("active", index);
    if (isRegister) {
      return setIsRegister(false);
    } else {
      return setIsRegister(true);
    }
  };

  const signUp = () => {
    if (fName === "") {
      setErr({ inputField: "This field is required", inputId: 5 });
    } else if (lName === "") {
      setErr({ inputField: "This field is required", inputId: 6 });
    } else if (email === "") {
      setErr({ inputField: "This field is required", inputId: 7 });
    } else if (validateEmail(email) === false) {
      setErr({ inputField: "This email is not valid", inputId: 8 });
    } else if (password === "") {
      setErr({ inputField: "This field is required", inputId: 9 });
    } else if (password.length < 8) {
      setErr({
        inputField: "The password should have at least 8 characters",
        inputId: 10,
      });
    } else if (!terms) {
      setErr({
        inputField: "Accept the terms and policies before use",
        inputId: 11,
      });
    } else {
      const data = {
        firstName: fName,
        lastName: lName,
        email: email,
        password: password,
        terms: terms,
      };

      dispatch(doSignUp(data, setErr, setLoadingsignup, err.inputId));

      setErr({ inputField: "", inputId: 0 });
      router.push("/");
      // dispatch(modalClose());
    }
  };

  const login = () => {
    if (email === "") {
      setErr({ inputField: "This field is required", inputId: 1 });
    } else if (validateEmail(email) === false) {
      setErr({ inputField: "This email is not valid", inputId: 2 });
    } else if (password === "") {
      setErr({ inputField: "This field is required", inputId: 3 });
    } else if (password.length < 8) {
      setErr({
        inputField: "The password should have at least 8 characters",
        inputId: 4,
      });
    } else {
      const data = {
        email: email,
        password: password,
      };
      dispatch(doLogin(data, setLoadingLogin, setErr));
      setErr({ inputField: "", inputId: 0 });
    }
  };
  const loginWithGoogle = () => {
    // if (!terms) {
    //   setErr({ inputField: 'Accept the terms and policies before use', inputId: 11 })
    // } else {
    dispatch(doGoogleLogin(terms, setLoadingGoogle, setErr));
    // }
  };

  const resetPassword = () => {
    if (email === "") {
      setErr({ inputField: "This field is required", inputId: 12 });
    } else if (validateEmail(email) === false) {
      setErr({ inputField: "This email is not valid", inputId: 12 });
    } else {
      dispatch(passwordReset(setLoading, setErr, email));
      setResetLoading(true);
      setTimeout(() => {
        setResetLoading(false);
        ToastSuccess("Mail sent successfully");
      }, 3000);
    }
  };

  return (
    <>
      {/* <ToastContainer /> */}
      <Modal
        isOpen={isModalOpen}
        onClose={ismodalClose}
        size={"ful"}
        isCentered
      >
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(2px)"
        />
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
            <Box w={[0, 0, 0, "50%"]} h="100%" overflow="hidden">
              {active === 0 ? (
                <Image
                  src="/signup.png"
                  w="100%"
                  h="100%"
                  alt="will load soon"
                  transform="scale(1.4,1.1)"
                />
              ) : (
                <Image
                  src="/signin.png"
                  w="100%"
                  h="100%"
                  alt="will load soon"
                  transform="scale(1.4,1.1)"
                />
              )}
            </Box>

            <Box w={["100%", "100%", "100%", "50%"]} h="auto">
              <CloseIcon
                w={8}
                h={8}
                position="absolute"
                right="10px"
                top="10px"
                color="white"
                bgColor="#E1E1E1"
                cursor='pointer'
                p="5px"
                ml="7%"
                borderRadius="100px"
                _hover={{ color: " white", borderRadius: "5px" }}
                onClick={() => {
                  ismodalClose();
                  setFieldActive(false);
                  setErr({ inputField: "", inputId: 0 }), setResetPass(false);
                }}
                className={styles.modalBtn}
              />
              <Box
                display="flex"
                justifyContent={resetPass ? "space-between" : "center"}
                alignItems="center"
                mt="16%"
                pl={"7%"}
                pr={"7%"}
              >
                {resetPass ? (
                  <Text
                    onClick={() => setResetPass(false)}
                    color="#2a69cb"
                    fontSize={16}
                    fontWeight={500}
                    cursor="pointer"
                    mt={2}
                    _hover={{
                      textDecoration: "underline",
                    }}
                  >
                    {" "}
                    {"< Back to Sign in"}
                  </Text>
                ) : (
                  <Box
                    display="flex"
                    // w={[,,,"70%"]}
                    // bgColor="#E1E1E1"
                    borderRadius="15px"
                  >
                    {data?.map((btn, index) => {
                      return (
                        <div key={index}>
                          <AuthButton
                            btn={btn}
                            onChangeHandler={() => onChangeHandler(btn.id)}
                            bgColor={+active === btn.id ? "#00C8AA" : "#E1E1E1"}
                            color={+active === btn.id ? "white" : "black"}
                            margin={
                              btn.btnName === "Register" ? "0px" : "0px 5px"
                            }
                          />
                        </div>
                      );
                    })}
                  </Box>
                )}
              </Box>

              <Box ml="7%" mr="7%" mt={err.fieldErr !== "" ? "3%" : "9%"}>
                {err.fieldErr !== "" && (
                  <p
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: "bold",
                      color: "crimson",
                      textAlign: "center",
                      marginBottom: "3%",
                    }}
                  >
                    {err.fieldErr}
                  </p>
                )}
                {active === 0 ? (
                  <>
                    <Stack direction="row">
                      <div>
                        <Input
                          variant="outline"
                          placeholder="First Name"
                          bgColor="#E1E1E1"
                          focusBorderColor="#00C8AA"
                          h="50px"
                          pt="10px"
                          pb="10px"
                          value={fName}
                          onChange={(e) => setFName(e.target.value)}
                        />
                        {err.inputField !== "" && err.inputId === 5 && (
                          <span style={inCorrect}>{err.inputField}</span>
                        )}
                      </div>
                      <div>
                        <Input
                          variant="outline"
                          placeholder="Last Name"
                          focusBorderColor="#00C8AA"
                          bgColor="#E1E1E1"
                          h="50px"
                          pt="10px"
                          pb="10px"
                          value={lName}
                          onChange={(e) => setLName(e.target.value)}
                        />
                        {err.inputField !== "" && err.inputId === 6 && (
                          <span style={inCorrect}>{err.inputField}</span>
                        )}
                      </div>
                    </Stack>
                    <Input
                      variant="outline"
                      placeholder="Email"
                      focusBorderColor="#00C8AA"
                      borderColor={
                        err.inputId === 7 || err.inputId === 8
                          ? "red"
                          : "#E1E1E1"
                      }
                      bgColor="#E1E1E1"
                      w="100%"
                      h="50px"
                      pt="10px"
                      pb="10px"
                      mt="3%"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {((err.inputField !== "" && err.inputId === 7) ||
                      (err.inputField !== "" && err.inputId === 8)) && (
                        <span style={inCorrect}>{err.inputField}</span>
                      )}
                    <InputGroup>
                      <Input
                        variant="outline"
                        focusBorderColor="#00C8AA"
                        borderColor={
                          err.inputId === 9 || err.inputId === 10
                            ? "red"
                            : "#E1E1E1"
                        }
                        placeholder="Password"
                        bgColor="#E1E1E1"
                        type={!show ? "text" : "password"}
                        w="100%"
                        mt="10px"
                        h="50px"
                        pt="10px"
                        pb="10px"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <InputRightElement
                        style={{ marginTop: 15, cursor: "pointer" }}
                      >
                        {show ? (
                          <ViewIcon color="gray" onClick={handleClick} />
                        ) : (
                          <ViewOffIcon color="gray" onClick={handleClick} />
                        )}
                      </InputRightElement>
                    </InputGroup>

                    {((err.inputField !== "" && err.inputId === 9) ||
                      (err.inputField !== "" && err.inputId === 10)) && (
                        <span style={inCorrect}>{err.inputField}</span>
                      )}
                    <Checkbox
                      size="lg"
                      mt="5%"
                      colorScheme="MediumSpringGreen"
                      iconColor="MediumSpringGreen"
                      value={terms}
                      onChange={(e) => setTerms(e.target.checked)}
                    >
                      I Consent to the terms & Privacy Policy
                    </Checkbox>
                    {err.inputId === 11 && (
                      <span style={inCorrect}>{err.inputField}</span>
                    )}
                  </>
                ) : resetPass ? (
                  <>
                    <Input
                      variant="outline"
                      focusBorderColor="#00C8AA"
                      borderColor={err.inputId === 12 ? "red" : "#E1E1E1"}
                      placeholder="Email"
                      bgColor="#E1E1E1"
                      mt={"100px"}
                      w="100%"
                      h="50px"
                      pt="10px"
                      pb="10px"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {err.inputField !== "" && err.inputId === 12 && (
                      <span style={inCorrect}>{err.inputField}</span>
                    )}
                  </>
                ) : (
                  <>
                    <Input
                      variant="outline"
                      focusBorderColor="#00C8AA"
                      borderColor={
                        err.inputId === 1 || err.inputId === 2
                          ? "red"
                          : "#E1E1E1"
                      }
                      placeholder="Email"
                      bgColor="#E1E1E1"
                      w="100%"
                      h="50px"
                      pt="10px"
                      pb="10px"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {((err.inputField !== "" && err.inputId === 1) ||
                      (err.inputField !== "" && err.inputId === 2)) && (
                        <span style={inCorrect}>{err.inputField}</span>
                      )}
                    {!fieldActive && (
                      <>
                        <InputGroup>
                          <Input
                            variant="outline"
                            focusBorderColor="#00C8AA"
                            borderColor={
                              err.inputId === 3 || err.inputId === 4
                                ? "red"
                                : "#E1E1E1"
                            }
                            placeholder="Password"
                            bgColor="#E1E1E1"
                            type={!show ? "text" : "password"}
                            w="100%"
                            mt="10px"
                            h="50px"
                            pt="10px"
                            pb="10px"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <InputRightElement
                            style={{ marginTop: 15, cursor: "pointer" }}
                          >
                            {show ? (
                              <ViewIcon color="gray" onClick={handleClick} />
                            ) : (
                              <ViewOffIcon color="gray" onClick={handleClick} />
                            )}
                          </InputRightElement>
                        </InputGroup>
                        {((err.inputField !== "" && err.inputId === 3) ||
                          (err.inputField !== "" && err.inputId === 4)) && (
                            <span style={inCorrect}>{err.inputField}</span>
                          )}
                        <Text
                          onClick={() => setResetPass(true)}
                          color="#2a69cb"
                          fontSize={16}
                          fontWeight={500}
                          cursor="pointer"
                          mt={2}
                          _hover={{
                            textDecoration: "underline",
                          }}
                        >
                          Request password change
                        </Text>
                      </>
                    )}
                    <Box>
                      <Checkbox
                        size="lg"
                        mt="5%"
                        colorScheme="MediumSpringGreen"
                        iconColor="MediumSpringGreen"
                        value={terms}
                        onChange={(e) => setTerms(e.target.checked)}
                      >
                        Remember me
                      </Checkbox>
                    </Box>
                  </>
                )}
              </Box>
              {/* Next Buttons */}
              <Box mt="3%">
                {active === 0 ? (
                  <>
                    <CustomBtn
                      clr="green"
                      title={loadingsignup ? <Loader size={150} color='white' /> : "Register Now"}
                      bgColor="#00C8AA"
                      color="white"
                      hoverColor="#00e2c0"
                      blue={true}
                      onClickHandler={signUp}
                    />
                    <ToastContainer />
                  </>
                ) : resetPass ? (
                  <CustomBtn
                    clr="green"
                    title={
                      resetLoading ? <Loader size={150} color='white' /> : "Request Password Change"
                    }
                    bgColor="#00C8AA"
                    color="white"
                    blue={true}
                    mt="5%"
                    onClickHandler={resetPassword}
                  />
                ) : (
                  <>
                    {/* <Text align="center" fontSize="14px" mt="4%" p="5px">
                      We will send you a one-time sign in link.
                    </Text> */}
                    {!fieldActive && (
                      <CustomBtn
                        clr="green"
                        title={loadingLogin ? <Loader size={150} color='white' /> : "Sign In"}
                        bgColor="#00C8AA"
                        color="white"
                        blue={true}
                        mt="5%"
                        onClickHandler={login}
                      />
                    )}
                    {/* <CustomBtn
                      clr="green"
                      title={loading ? "loading..." : "Sign In With Magic Link"}
                      bgColor={fieldActive ? "#E1E1E1" : "#00C8AA"}
                      color="white"
                      blue={true}
                      onClickHandler={magicLogin}
                      mt="5%"
                    /> */}
                    {/* {!fieldActive && (
                      <CustomBtn
                        clr="green"
                        title="Switch to password"
                        bgColor="#E1E1E1"
                        color="grey"
                        mt="5%"
                        onClickHandler={() => setFieldActive(true)}
                      />
                    )} */}
                  </>
                )}
                {isRegister ? (
                  <>
                    {!fieldActive && (
                      <Text fontSize="16px" align="center" mt="3%">
                        Or Sign Up With:
                      </Text>
                    )}
                  </>
                ) : (
                  <>
                    <Text fontSize="16px" align="center" mt="3%">
                      Or Sign In With:
                    </Text>
                  </>
                )}
                {!fieldActive && (
                  <Button
                    // leftIcon={<FaGoogle />}
                    variant="solid"
                    bgColor="#E1E1E1"
                    color="grey"
                    w="85%"
                    ml="8%"
                    borderRadius="100px"
                    fontSize="16px"
                    mt="3%"
                    className="buttonClass"
                    // className={styles.modalBtn}
                    onClick={() => loginWithGoogle()}
                  >
                    {
                      loadingGoogle ?
                        <Loader size={150} color='green' />
                        :
                        <Image src="/googleIcon.png" height={"25px"} alt={""} />
                    }

                  </Button>
                )}
              </Box>
            </Box>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
}
