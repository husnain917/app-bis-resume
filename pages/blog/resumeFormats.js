import React, { useState } from "react"
import Navbar from "../../src/components/navbar/Navbar";
import ResumeFormats from "../../src/components/blog/ResumeFormats";
import {
  Box,
  Container,
  Link,
  Text,
  Image
} from "@chakra-ui/react";
import { RESUME_NOW } from "../../src/components/blog/CustomData";
import Sidebar from "../../src/components/blog/Sidebar";
import styles from "../../styles/resumeFormats.module.css";
import FormatsTables from "../../src/components/blog/FormatsTables";
import Footer from "../../src/components/footer/Footer";

export default function Resume_Formats() {
  // state
  const [over, setOver] = useState(false)

  return (
    <>
      <Navbar />
      <ResumeFormats />
      {/* content container */}
      <Container
        maxW={["100%", "100%", "80%", "80%"]}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Box
          maxW={["0%", "0%", "0%", "10%"]}
        >
          <Sidebar />
        </Box>
        <Box
          padding={"20px 0px 40px 0px"}
          maxW={["100%", "100%", "100%", "88%"]}
        >
          {
            RESUME_NOW.map((item, index) => (
              <>
                <Text
                  key={index}
                  fontSize={"17px"}
                  lineHeight={8}
                  marginBottom={"20px"}
                >
                  {item.text}
                </Text>
              </>
            ))
          }
          <Text
            fontSize={"17px"}
            lineHeight={8}
          >
            <span
              style={{
                fontWeight: "bold"
              }}
            >Want to save time and have your resume ready in 5 minutes? </span>
            <span>Try our resume builder. Its fast and easy to use. Plus, you ll get ready-made content to add with one click.</span>
            <Link
              color={"#3983fa"}
              href={'/templates'}
            >
              See 20+ resume templates and create your resume here.
            </Link>
          </Text>

          {/* button */}
          <Box
            display={"flex"}
            justifyContent={"center"}
            margin={"40px 0px 0px 0px"}
          >
            <Link
              href="/templates"
              height={["45px", "55px", "55px", "55px"]}
              backgroundColor={"#006772"}
              width={["100%", "100%", "50%", "45%", "45%"]}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              color={"#fff"}
              fontSize={["13px", "18px", "18px", "18px", "18px"]}
              borderRadius={"30px 30px"}
              textDecoration={"none"}
              _hover={{
                textDecoration: "none",
                color: "#fff",
                backgroundColor: 'red',
                transition: '0.5s'
              }}
            >
              CREATE YOUR RESUME NOW
            </Link>
          </Box>

          {/* resume templates container */}
          <Container
            maxW={"100%"}
            padding={"40px 0px 20px 0px"}
          >
            <Box
              position={"relative"}
              onMouseEnter={() => setOver(true)}
              onMouseLeave={() => setOver(false)}
            >
              <Image
                src="/resume_formats.jpg"
                alt="Image Not Found"
                onMouseEnter={() => setOver(true)}
                onMouseLeave={() => setOver(false)}
              />
              {
                over ?
                  <>
                    <Box
                      margin={"40px 0px 0px 0px"}
                      className={styles.resumeTemplateDiv}
                      width={["70%", "70%", "50%", "50%", "50%"]}
                      onMouseEnter={() => setOver(true)}
                      onMouseLeave={() => setOver(false)}
                    >
                      <Link
                        href="/templates"
                        height={["45px", "55px", "55px", "55px"]}
                        width={["100%", "100%", "90%", "90%", "70%"]}
                        backgroundColor={"#006772"}
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        color={"#fff"}
                        fontSize={["13px", "18px", "18px", "18px", "18px"]}
                        borderRadius={"30px 30px"}
                        textDecoration={"none"}
                        _hover={{
                          textDecoration: "none",
                          color: "#fff",
                          backgroundColor: 'red',
                          transition: '0.5s'
                        }}
                      >
                        USE THIS RESUME TEMPLATE
                      </Link>
                    </Box>
                  </>
                  :
                  <></>
              }
            </Box>
          </Container>
          {/* resume template container end */}


          {/* example container */}
          <Container
            maxW={"100%"}
            p={0}
          >
            <Box
              backgroundColor={"#838fa0"}
              background={"#f2f2f2"}
              border={"1px solid #000"}
              borderRadius={"4px 4px"}
              margin={"30px 0px"}
            >
              <Text
                padding={"20px 10px"}
                textAlign={"center"}
                fontSize={"16px"}
              >
                An example of a well-formatted resume made in our builder—
                <Link color={"#3983fa"}>See more resume examples here.</Link>
              </Text>
            </Box>

            <Box
              marginBottom={"30px"}
            >
              <Text
                fontSize={"16px"}
                fontWeight={"bold"}
              >
                One of our users, Nikos, had this to say:
              </Text>
            </Box>

            <Box
              backgroundColor={"#ff9"}
              marginBottom={"30px"}
            >
              <Text
                padding={"20px 10px"}
                textAlign={"center"}
                fontSize={"16px"}
              >
                [I used] a nice template I found on Zety. My resume is now one page long, not three. With the same stuff.
              </Text>
            </Box>
          </Container>
          {/* example container end */}


          {/* formats tables */}
          <FormatsTables />
          {/* formates tables end */}
        </Box>
      </Container>
      {/* content container end */}

      {/* Footer */}
      <Footer />
    </>
  )
}