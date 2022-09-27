import React from "react";
import { Input, Image, Box, Text } from "@chakra-ui/react";
import List from "./List";
import HeadingText from "./HeadingText";
import ContactFeild from "./ContactFeild";
import SEText from "./SEText";

export default function SoftEngineer() {
  return (
    <>
      <Box overflow="auto" maxW="2050px">
        <Box
          w="100%"
          display="flex"
          flexDir="row"
          justifyContent="space-between"
          pl="10%"
          pr="10%"
          bgColor="#FFFFF"
          minW="1300px"
        >
          {/* Left Section  */}
          <Box w="50%" mt="10%">
            <Text
              color="#7C898B"
              fontSize="5.3rem"
              fontWeight="790"
              lineHeight="100px"
            >
              R I C H A R D S A N C H E Z
            </Text>
            <HeadingText
              heading=" SOFTWARE ENGINEER"
              marginTop="3%"
              textSize="2.1rem"
              wordSpacing="6px"
            />
            <Text fontSize="1.3rem" textAlign="justify" pt="5%">
              Problem solver and fast learner <br />
              with strong communication <br />
              skills. I am motivated to upgrade <br />
              and expand my skill set through <br />
              mentorship and challenging <br />
              projects. I enjoy working <br />
              collaboratively but can also run <br />
              with projects independently. I am <br />
              excited about the prospect of <br />
              joining a Ingoude company.
            </Text>
            <HeadingText
              heading="CONTACT US"
              marginTop="10%"
              width="75%"
              textSize="1.8rem"
            />
            <ContactFeild
              text="+123-456-7890"
              margintop="5%"
              lineHeight="60px"
              icon="PhoneIcon"
              isPhon={true}
            />
            <ContactFeild
              text="hello@reallygreatsite.com 
www.reallygreatsite.com"
              lineHeight="30px"
            />
            <HeadingText
              heading="EDUCATIONS"
              width="75%"
              marginTop="8%"
              textSize="1.8rem"
            />
            <SEText
              title="  International University 
Bachelor of Science"
              desc="C O M P U T E R S C I E N C E 
"
              date="`A U G 2 0 1 6 - A U G 2 0 2 0`"
              marginTop="5%"
              textColor="#423E3A"
            />
          </Box>
          {/* Right Section  */}
          <Box w="50%">
            <Image src="/SeTemplate.jpg" w="90%" borderRadius="100%" ml="18%" />
            <HeadingText
              heading="PROGRAMMING LANGUAGE"
              marginTop="3%"
              textSize="1.8rem"
              width="60%"
            />
            <List text="Programming Language" marginTop="3%" />
            <List text="Programming Language" />
            <List text="Programming Language" />
            <List text="Programming Language" />
            <HeadingText
              heading="EXPERIENCE"
              marginTop="10%"
              width="60%"
              textSize="1.8rem"
            />

            <SEText
              title="Software Engineer"
              desc="W A R D I E R E I N C ."
              date="`N O V 2 0 2 0 – D E S 2 0 2 1`"
              textColor="black"
            />

            <List
              text="Developed technologies and assist fortune
500 companies with scaling content
distribution by 60% and increasing their
productivity by 80%"
            />
            <List
              text="Built and maintain websites that scaled to 1M
daily users"
            />
            <List
              text="Focused in front-end development, providing
a good quality website for the company"
            />
          </Box>
        </Box>
        <Box>
          <Image src="/SeBottom.png" w="100%" overflowX="auto" minW="1300px" />
        </Box>
      </Box>
    </>
  );
}
