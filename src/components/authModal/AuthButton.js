import { Box, Button, Stack } from "@chakra-ui/react";
import React from "react";
import { PhoneIcon, CloseIcon, WarningIcon } from "@chakra-ui/icons";
import styles from "../../../styles/Auth.module.css";
export default function AuthButton({
  isModalOpen,
  setIsModalOpen,
  ctaRegisterHandler,
  ctaLoginHandler,
  blue,
}) {
  return (
    <Box
      w="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      mt="7%"
    >
      <Stack w="70%" direction="row" bgColor="#E1E1E1" borderRadius="15px">
        <Button
          w="50%"
          bgColor="#E1E1E1"
          borderRadius="15px"
          _hover={{ bg: "#00C8AA", color: " white", borderRadius: "20px" }}
          _focus={{ bg: "#00C8AA", color: " white", borderRadius: "20px" }}
          onClick={ctaRegisterHandler}
        >
          Register
        </Button>
        <Button
          bgColor="#E1E1E1"
          borderRadius="15px"
          w="50%"
          _hover={{ bg: "#00C8AA", color: " white", borderRadius: "20px" }}
          _focus={{ bg: "#00C8AA", color: " white", borderRadius: "20px" }}
          onClick={ctaLoginHandler}
        >
          Sign In
        </Button>
      </Stack>
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
  );
}
