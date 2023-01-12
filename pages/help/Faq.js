import { Text, Box } from "@chakra-ui/react";
import React from "react";
import Image from 'next/image'
import { Button, Container, OrderedList, ListItem, UnorderedList } from '@chakra-ui/react'
import { TfiBook } from "react-icons/tfi";
import Link from "next/link";
import FaqsSection from "../../src/components/faqsComponent/FaqsSection";


export default function Faq() {

    return (
        <>

            <>
                <Container  h={["100%", "100%"]} pt="5%" pb="5%" bgColor={"#f2f4f6"} display={"flex"} maxW={['100%', '100%', '100%', '100%', '100%']} flexDirection="row" justifyContent="center"   >
                    <FaqsSection />
                </Container>
            </>

        </>
    );
}