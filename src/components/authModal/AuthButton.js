import { Box, Button, Stack } from "@chakra-ui/react";
import React from "react";
import { PhoneIcon, CloseIcon, WarningIcon } from "@chakra-ui/icons";

export default function AuthButton({
  isModalOpen,
  setIsModalOpen,
  ctaRegisterHandler,
  ctaLoginHandler,
}) {
  return (
    <Box display="flex" alignItems="center" mt="7%">
      <Stack
        w="70%"
        direction="row"
        // display="flex"
        bgColor="#E1E1E1"
        ml="10%"
        mr="10%"
        borderRadius="15px"
      >
        <Button
          w="50%"
          bgColor="#E1E1E1"
          borderRadius="15px"
          _hover={{ bg: "#00C8AA", color: " white", borderRadius: "20px" }}
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
        borderRadius="100px"
        _hover={{ color: " white", borderRadius: "5px" }}
        _focus={{ bg: "#00C8AA", color: " white", borderRadius: "20px" }}
        onClick={() => setIsModalOpen(false)}
      />
    </Box>
  );
}
