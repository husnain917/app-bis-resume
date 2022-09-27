import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
export default function Hint({
    message,
    description,
    number,
    imgSrc,
    isRight,
}) {
    return (
        <>
            <Box
                w="100%"
                display="flex"
                flexDir={[
                    "column",
                    "column",
                    "column",
                    isRight ? "row" : "row-reverse",
                ]}
                alignItems="center"
                justifyContent="center"
                pl="10%"
                pr="10%"
                mt="50px"
            >
                <Box
                    w={["100%", "100%", "100%", "50%"]}
                    display="flex"
                    flexDir="column"
                    alignSelf="start"
                    mt="1.3%"
                    ml={isRight ? "0" : "10px"}
                >
                    <Text
                        display={["none", "none", "none", "block"]}
                        w="25%"
                        fontWeight="bold"
                        fontSize={[
                            isRight ? "4rem" : "4rem",
                            "4rem",
                            "6rem",
                            "4rem",
                            "4rem",
                            "6rem",
                        ]}
                        color="white"
                        bgColor={isRight ? "#51E2C2" : "#4BCBED"}
                        align="center"
                        pt={["5px"]}
                        pb="5px"
                        borderRadius="20px"
                        ml={isRight ? "74%" : "0%"}
                    >
                        {number}
                    </Text>
                    <Box
                        bgColor={["none", "none", "none", "#F5F5F5"]}
                        borderRadius="20px"
                        mr="10px"
                        p={["10px", "20px", "30px", "30px"]}
                        mt={[, , , "5%", , ,]}
                    >
                        <Text
                            fontSize={["1.2rem", "2rem", "2.5rem", "2rem", "", "3rem"]}
                            fontWeight="bold"
                            color=" #313B47"
                            pt="10px"
                            textAlign="left"
                        >
                            {message}
                        </Text>
                        <Text
                            fontSize={["1rem", "1.4rem", "1.7rem", "1.3rem", "", "2rem"]}
                            color=" #313B47"
                            mt={[, , "0px", "10px"]}
                            fontWeight="500"
                            textAlign="justify"
                        >
                            {description}
                        </Text>
                    </Box>
                </Box>
                <Box w={["100%", "100%", "100%", "50%"]}>
                    <Image src={imgSrc} w="100%" h="auto" />
                </Box>
            </Box>
        </>
    );

}
