import React from "react";
import { Box, Text, Button, Image, Link } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";
import CommonButton from "../../commonButton/CommonButton";

const TryResume = () => {
  return (
    <Grid
      py={["48px", "48px", "64px", "80px", "80px"]}
      overflow={"hidden"}
      bg={"#EFF2F9"}
      height={["50em", "50em", "40em", "40em", "40em"]}
      posiition={"relative"}
    >
      <Grid px={["0px", "0px", "32px", "44px", "44px"]} mx={"auto"}>
        <Box
          display={"flex"}
          flexDirection={["column", "column", "row", "row", "row"]}
          alignItems={["center", "center", "", "", ""]}
        >
          <Box
            width={["100%", "100%", "45%", "57%", "49%"]}
            marginBottom={["24px"]}
            position="relative"
            marginRight={["0", "0", "0", "16px", "32px"]}
            flexShrink={["0", "0", "", "", "0"]}
            minWidth={["50%", "", "", "0%", "0%"]}
            height={["420px"]}
          >
            <Image
              src="./sampleTemplate.png"
              className="image1"
              alt="not availabale"
            />
            <Image
              src="./sampleTemplate.png"
              className="image2"
              alt="not availabale"
            />
            <Image
              src="./sampleTemplate.png"
              className="image3"
              alt="not availabale"
            />
          </Box>
          <Box
            flexGrow={"1"}
            minWidth={"50%"}
            textAlign={["center", "center", "start", "start", "start"]}
          >
            <Text
              fontWeight={700}
              fontSize={["2em", "2.4em", "2.5em", "3.8em", "3.8em"]}
              lineHeight={["36px", "36px", "62px", "62px", "62px"]}
              marginBottom={["20px"]}
              maxWidth={["auto", "auto", "10em", "10em", "10em"]}
              className={"sub-heading"}
            >
              Create the perfect resume with our user-friendly resume builder
            </Text>
            <Box
              padding={[
                "20px 10px",
                "20px",
                "20px 0px",
                "20px 0px",
                "20px 0px",
              ]}
            >
              {" "}
              <Text
                className="small-text"
                fontSize={["16px", "16px", "16px", "16px", "16px"]}
                lineHeight={"24px"}
              >
                Say goodbye to writers block and formatting struggles. In just a
                few simple steps, you can have a polished, professional resume
                ready to impress employers. Upgrade your job search today with
                our powerful resume tool.
              </Text>{" "}
            </Box>
            <Box display={"flex"} alignItems={"center"}>
              <Box mx={2} >
                <Link
                  href="/templates"
                  _hover={{
                    textDecoration: "none",
                  }}
                >
                  <CommonButton
                    backgroundColor={"#2CACD5"}
                    color={"whitesmoke"}
                    fontSize={["14x", "14px", "16px", "16px", "16px"]}
                    height={"40px"}
                    width={"180px"}
                    padding={"20px"}
                    borderRadius={"5px"}
                    title={"Create My Resume"}
                  />
                </Link>
              </Box>

              <Button>
                <Link
                  href="/resume-examples"
                  textDecoration={"none"}
                  cursor="pointer"
                  color="black"
                  _hover={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                 <CommonButton
                    backgroundColor={"#2CACD5"}
                    color={"whitesmoke"}
                    fontSize={["14x", "14px", "16px", "16px", "16px"]}
                    height={"40px"}
                    width={"180px"}
                    padding={"20px"}
                    borderRadius={"5px"}
                    title={" Resume Examples"}
                  />
                </Link>
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default TryResume;
