import { Text, Box } from "@chakra-ui/react";
import React from "react";
import Image from 'next/image'
import { Button, Container, OrderedList, ListItem, UnorderedList } from '@chakra-ui/react'
import { TfiBook } from "react-icons/tfi";
import { RiQuestionAnswerLine } from "react-icons/ri";

import Link from "next/link";
import FaqsSection from "../../src/components/faqsComponent/FaqsSection";


export default function HelpCenter() {

    return (
        <>

            <>
                <Box bgColor={"#f2f4f6"} h={["100%", "100%"]} display={"flex"}  >

                    <Container
                        maxW={['100%', '100%', '100%', '70%', '70%']}
                    >
                        <Link href="/help/Faq">
                            <Box height="160px" width={["100%"]}
                                bgColor="white"
                                border="3px" mt="10%" display="flex" justifyContent="row" cursor="pointer">


                                <Box width="20%" bgColor="white" display={"flex"} flexDirection="row" justifyContent={"center"} >
                                    <Box mt="20%">
                                        <RiQuestionAnswerLine size={60} color="#979FA9" />
                                    </Box>
                                </Box>


                                <Box width="60%" marginLeft="3%" mt="1%" mb="3%">
                                    <Text fontSize="18px" color="#2A6672" fontWeight={"bold"} mt={2} >FAQs</Text>
                                    <Text fontSize="16" color="black" mt={2} >Tutorials, FAQs and best practices with BisResume  </Text>

                                </Box>
                            </Box>
                        </Link>


                        <Link href="/write-resume">
                            <Box height="160px" width={["100%"]}

                                bgColor="white"
                                border="3px" mt="5%" display="flex" justifyContent="row" mb="10%" cursor="pointer">

                                <Box width="20%" bgColor="white" display={"flex"} flexDirection="row" justifyContent={"center"} >
                                    <Box mt="20%">
                                        <TfiBook size={60} color="#979FA9" />
                                    </Box>
                                </Box>
                                <Box width="60%" marginLeft="3%" mt="1%" mb="3%">
                                    <Text fontSize="18px" color="#2A6672" fontWeight={"bold"} mt={2} >Resume Editor Help</Text>
                                    <Text fontSize="16" color="black" mt={2} >Discover how you use the editor at its maximum capacity and use all the features!</Text>

                                </Box>
                            </Box>
                        </Link>

                    </Container>

                </Box>
            </>

        </>
    );
}