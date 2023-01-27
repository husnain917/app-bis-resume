import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
const UseModal = ({ title, margin }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Text
        fontSize={"16px"}
        fontWeight="600"
        color={"#00c8aa"}
        _hover={{
          textDecoration: "underline",
          cursor: "pointer",
        }}
        onClick={onOpen}
        margin={margin}
      >
        {title}
      </Text>
      {title === "Edit" ? (
        <>
          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Change your account</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Enter your new Given Name</FormLabel>
                  <Input ref={initialRef} placeholder="" />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Enter your new Family Name </FormLabel>
                  <Input placeholder="Last name" />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Update Your Birthday Date </FormLabel>
                  <Input type={"date"} placeholder="Last name" />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3}>
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      ) : (
        <>
          {" "}
          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Create your account</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Enter your new email</FormLabel>
                  <Input ref={initialRef} placeholder="" />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Enter your current password</FormLabel>
                  <Input placeholder="Last name" />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3}>
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )}
    </>
  );
};

export default UseModal;
