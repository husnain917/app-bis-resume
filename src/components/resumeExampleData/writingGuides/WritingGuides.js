import React from "react";
import { Box, Text, Button, Image, Link } from "@chakra-ui/react";
import CommonButton from "../../commonButton/CommonButton";
const WritingGuides = () => {
  return (
    <Box
      backgroundColor={"#EFF2F9"}
      padding={["0 20px", "0 20px", "0 24px", "0 24px", "0 24px"]}
    >
      <Box
        paddingTop={["32px", "64px", "64px", "0px", "0px"]}
        maxWidth={"1320px"}
        margin={"0 auto"}
        display={"flex"}
        flexDirection={["column", "column", "column", "column", "row"]}
      >
        <Box
          flexGrow={1}
          marginBottom={["58px", "64px", "64px"]}
          marginTop={["0px", "0px", "0px", "30px", "30px"]}
        >
          {" "}
          <Box
            fontSize={["24px", "24px", "34px", "34px", "34px"]}
            lineHeight={["34px", "34px", "54px", "40px", "40px"]}
            marginBottom={"12px"}
            maxW={["100%", "100%", "95%", "80%", "100%"]}
            className={["sub-heading"]}
            textAlign={["center", "center", "center", "start", "start"]}
          >
            Unlock the full potential of your job search with our vast
            collection of over 350 professionally written resume examples
          </Box>
          <Box
            fontSize={["16px", "16px", "20px", "20px", "20px"]}
            mt={4}
            lineHeight={"24px"}
            margin={[
              "24px 0px",
              "24px 0px",
              "24px 0px",
              "24px 0px",
              "24px 0px",
            ]}
            maxW={["100%", "100%", "95%", "90%", "90%"]}
            className={"medium-text"}
            textAlign={["center", "center", "center", "start", "start"]}
          >
            With a wide range of industries and job titles, our expertly curated
            resume samples provide the guidance and inspiration you need to
            create a winning resume. From entry-level to executive, our
            user-friendly resume builder and comprehensive writing guides make
            it easy to build a resume that stands out. Take the first step
            towards your dream job today with our free resume examples and
            templates.
          </Box>
          <Box textAlign={["center", "center", "center", "start", "start"]}>
            <Link
              href="/templates"
              _hover={{
                textDecoration: "none",
              }}
            >
              <CommonButton
                backgroundColor={"#2CACD5"}
                color={"whitesmoke"}
                borderRadius={"none"}
                height={"40px"}
                width={"180px"}
                title={"Check My Resume"}
              />
            </Link>
          </Box>
        </Box>
        <Box
          position={"relative"}
          flexShrink={"0"}
          alignSelf={["flex-end", "flex-end", "flex-end", "flex-end"]}
          marginLeft={"128px"}
          // maxW={["544px", "544px", "380px", "390px", "544px"]}
          // w={["344px", "444px", "544px", "544px", "544px", "544px"]}
          display={"flex"}
          marginTop={["0px", "0px", "50px", "70px", "70px"]}
        >
          <Box right={"0"} position={"absolute"} marginTop={"-5%"}>
            <Image
              src="./top1.png"
              w={["150px", "150px", "200px", "200px", "200px"]}
              alignSelf={[
                "center",
                "flex-end",
                "flex-end",
                "flex-end",
                "flex-end",
                "flex-end",
              ]}
              marginLeft={["-60px", "-60px", "-60px", "-60px", "-60px"]}
              marginTop={["-26px", "-26px", "-36px", "-36px", "-36px"]}
              alt="will load soon"
              left={"20%"}
            />
          </Box>
          <Box
            overflow={"hidden"}
            borderRadius={"4px 4px 0 0"}
            // height={"480px"}
            w={["250px", "250px", "550px", "550px", "550px"]}
            display={"flex"}
            alignItems={"center"}
          >
            <Image src="./new-york-resume.jpg" alt="will load soon" />
          </Box>{" "}
          <Box
            bottom={"20px"}
            right={"100%"}
            marginRight={"-16px"}
            width={"227px"}
            position={"absolute"}
            display={["none", "none", "block", "block", "block"]}
          >
            <Image src="./top2.png" marginTop={"-59px"} alt="will load soon" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WritingGuides;
