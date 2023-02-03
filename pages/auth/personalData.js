import React from "react";
import {
  HStack,
  VStack,
  Box,
  Image,
  Text,
  Button,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import CommonButton from "../../src/components/commonButton/CommonButton";

const PersonalData = () => {
  const userData = useSelector((store) => store.AuthReducer.user);
  console.log(userData);
  return (
    <>
      <Box bg={"#1F262E"}>
        <Box id={"topArea"} margin={"0 auto"}>
          <VStack w={"full"} p={"20px 0px"} justifyContent="stretch">
            <Heading color={"white"} fontSize={"48px"}>
              {" "}
              Profile
            </Heading>
            <Heading color={"white"} fontSize={"36px"}>
              {" "}
              {userData?.displayName}
            </Heading>
            <Box marginTop={"20px"} marginBottom={"20px"}>
              <Image
                alt=""
                src={userData?.photoURL}
                height={"260px"}
                width={"260px"}
                borderRadius={"50%"}
              />
            </Box>
            <Button marginTop={"20px !important"}>Dowanload Image</Button>
            <Flex marginTop={"20px !important"}>
              <Box>
                <Text
                  color={"#9B9B9B"}
                  textAlign="right"
                  fontSize={{ base: "12px", md: "14px" }}
                  m={"3px 3px"}
                >
                  Account Type
                </Text>
                <Text
                  color={"white"}
                  fontSize={{ base: "10px", md: "12px" }}
                  fontWeight={"700"}
                  textAlign="right"
                  m={"3px 3px"}
                >
                  Basic
                </Text>
              </Box>
              <Box
                w={"0.5px"}
                bg={"#9B9B9B"}
                h="40px"
                margin={"0px 4px 0px 4px"}
              ></Box>
              <Box>
                <Text
                  color={"#9B9B9B"}
                  textAlign="left"
                  fontSize={{ base: "12px", md: "14px" }}
                  m={"3px 3px"}
                >
                  Valid until
                </Text>
                <Text
                  color={"white"}
                  fontSize={{ base: "10px", md: "12px" }}
                  fontWeight={"700"}
                  textAlign="left"
                  m={"3px 3px"}
                >
                  Unlimited
                </Text>
              </Box>
            </Flex>
            <Flex
              marginTop={"20px !important"}
              flexDirection={["column", "row"]}
            >
              <Box
                borderRadius={"5px"}
                width={"300px"}
                bg={"#425061"}
                color={"white"}
                padding={"10px"}
                fontSize={"16px"}
                lineHeight={"36px"}
              >
                <Text fontWeight={"bold"}> Account </Text>
                <Text> Account Email </Text>
                <Text> {userData?.email}</Text>
                <Text> Birthday </Text>
                <Text> Not Given </Text>
              </Box>
              <Box
                width={"300px"}
                color={"white"}
                borderRadius={"5px"}
                bg={"#425061"}
                padding={"10px"}
                fontSize={"16px"}
                lineHeight={"36px"}
                height={"200px"}
                marginLeft={["0px", "10px"]}
                marginTop={["10px", "0px"]}
              >
                <Text fontWeight={"bold"}> Export </Text>
                <Text>
                  {" "}
                  Here you can download your data from your resumes & cover
                  letters.{" "}
                </Text>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <CommonButton
                    title={"Dowanload as JSON"}
                    margin={"25px 0 0 0"}
                    backgroundColor={"#00C8AA"}
                  />
                </Box>
              </Box>
            </Flex>
          </VStack>
        </Box>
      </Box>
    </>
  );
};

export default PersonalData;
