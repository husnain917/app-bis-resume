import { Text, Box, Container } from "@chakra-ui/react";
import React from "react";
import styles from "../../styles/pricing.module.css";
import basic from "../../public/basic.png";
import Image from "next/image";
import SliderComponent from "../../src/components/sliderComponent/SliderComponent";
import { AiOutlineQuestionCircle, AiOutlineMail } from "react-icons/ai";
import bottomprice from "../../public/bottomPrice.png";
import Sidebar from "../../src/components/blog/Sidebar";
import FaqsSection from "../../src/components/faqsComponent/FaqsSection";
import Link from "next/link";
import SideBar from "../../src/components/sideBar/SideBar";
import style from "../../styles/sideBarSection.module.css";
import SideBarSection from "../../src/components/aboutUs/SideBarSection/SideBarSection";

export default function Pricing() {
  return (
    <>
      <Box
        maxW={["100%", "100%", "100%", "100%"]}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Box
          maxW={["0%", "0%", "0%", "5%"]}
          padding={"30px  0px"}
          mb={["", "", "3%", "3%", "", ""]}
          ml={"5%"}
        >
          <Box>
            <SideBar />
          </Box>
        </Box>
        <Box maxW={["100%", "100%", "100%", "100%", "100%"]}>
          <div style={{ marginTop: "5%" }}>
            <Box
              w={["100%", "100%", "80%"]}
              display="flex"
              flexDirection={["column", "column", "row"]}
              m={["2%", "auto", "auto"]}
            >
              <Box
                w={["80%", "80%", "30%"]}
                m={["auto", "auto", "auto"]}
                mb={["5%", "5%", "5%"]}
                className={styles.firstBox}
              >
                <h2 className={styles.basicHeading}>Basic</h2>
                <Box style={{ textAlign: "center", marginTop: "20%" }}>
                  <Image
                    src={basic}
                    height="150px"
                    width="200px"
                    style={{ alignSelf: "center", flexDirection: "row" }}
                    alt="will load soon"
                  />
                  <Text
                    style={{
                      fontSize: "30px",
                      marginTop: "20%",
                      fontWeight: "bold",
                      color: "white",
                    }}
                    className="only-font-family"
                    fontSize={["1em", "1em", "1em", "1.1em", "1.1em", "1.3em"]}
                  >
                    Free
                  </Text>
                  <h3
                    style={{
                      fontSize: "16px",
                      marginTop: "20%",
                      color: "white",
                    }}
                    className="only-font-family"
                    fontSize={["1em", "1em", "1em", "1.1em", "1.1em", "1.3em"]}
                  >
                    One Page Resume
                  </h3>
                  <h3
                    style={{
                      fontSize: "16px",
                      marginTop: "5%",
                      color: "white",
                    }}
                    className="only-font-family"
                    fontSize={["1em", "1em", "1em", "1.1em", "1.1em", "1.3em"]}
                  >
                    Predefined Layouts
                  </h3>
                  <h3
                    style={{
                      fontSize: "16px",
                      marginTop: "5%",
                      color: "white",
                    }}
                    className="only-font-family"
                    fontSize={["1em", "1em", "1em", "1.1em", "1.1em", "1.3em"]}
                  >
                    One Resume
                  </h3>
                  {/*  */}
                </Box>
              </Box>
            </Box>
          </div>
          <FaqsSection />
        </Box>
      </Box>

      <Box
        backgroundColor="#E8E8E8"
        mt={["8%", "8%", "8%"]}
        display="flex"
        flexDirection={["column", "row", "row"]}
        p={["8%", "0%", "0%"]}
      >
        <Box ml={["3%", "3%", "15%"]} w={["100%", "50%", "50%"]}>
          <Text
            fontSize={["26px", "40px", "40px"]}
            pt={["5%", "5%", "10%"]}
            fontWeight={["bold", "bold", "bold"]}
            className="sub-heading"
          >
            Have a particular question?
          </Text>
          <Text
            marginTop={["5%", "5%", "8%"]}
            className="only-font-family"
            fontSize={["1em", "1em", "1em", "1.1em", "1.1em", "1.3em"]}
          >
            {`Don't hesitate to reach out to us for any assistance with our 
            Free account or services. We are here to help you get the most out of ElitePro.`}


          </Text>
          <Box
            display="flex"
            flexDirection="row"
            mt={["5%", "5%", "8%"]}
            mb={["5%"]}
          >
            <Text marginRight="5px">
              {" "}
              <AiOutlineMail size={20} color="red" />{" "}
            </Text>
            <Text>
              <Link
                color={"#2679C7"}
                lineHeight={"1.5"}
                marginLeft={"2"}
                className="only-font-family"
                fontSize={["1em", "1em", "1em", "1.1em", "1.1em", "1.3em"]}
                href="https://gmail.com/"
              >
                contact@bisresume.com
              </Link>
            </Text>
          </Box>
        </Box>
        <Box
          ml={["2px", "2px", "15%"]}
          w={["100%", "50%", "70%"]}
          mt={["8%", "8%", "8%"]}
        >
          <Box>
            <Image
              src={bottomprice}
              height="250px"
              width="400px"
              alt="will load soon"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
