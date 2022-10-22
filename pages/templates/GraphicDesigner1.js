import React from "react";
import styles from "../../styles/templates/Graphic.module.css";
import { Box, Image, Tooltip } from "@chakra-ui/react";
import Link from "next/link";
import Text from "../../src/components/graphicDesigner1/Text";
import { useSelector } from "react-redux";
import { Row } from "antd";
import Contact from "../../src/components/graphicDesigner1/Contact";
import Education from "../../src/components/graphicDesigner1/Education";
import { sampleData } from "../../constants/sampleData";
import Heading from "../../src/components/graphicDesigner1/Heading";
import WorkExperience from "../../src/components/graphicDesigner1/WorkExperience";
import Skills from "../../src/components/graphicDesigner1/Skills";
export default function GraphicDesigner1() {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  let updater = useSelector((state) => state.editorReducer.updater);
  let color = useSelector((state) => state.editorReducer.color);
  console.log(resumeData);
  return (
    <div className={styles.main}>
      <Link href={"/templates"}>
        <div className={styles.swapCont}>
          <Tooltip title="Change Template" arrow distance={20}>
            <div className={styles.swap}>
              <img src="/icons/swap.png" />
            </div>
          </Tooltip>
        </div>
      </Link>

      <Box w="100%" mt="5%" overflow="auto" ml={["", , , "5%", "13%"]}>
        <Box
          w="100%"
          display="flex"
          maxW="950px"
          minW="950px"
          className={styles.bgContainer}
        >
          <Box w="35%" bgColor="#365B6D" h="auto" m="15px" mt="30px" mb="60px">
            <Contact />
            <Heading
              text="EDUCATION"
              textColor="white"
              textAlign="right"
              padding="15px"
              marginTop="24%"
              marginLeft="75%"
            />

            <Education
              data={
                resumeData?.education?.items?.length
                  ? [...resumeData?.education?.items]
                  : [...sampleData?.data?.education?.items]
              }
              color={color}
              updater={updater}
            />
            <Heading
              text="SKILLS"
              textColor="white"
              textAlign="right"
              padding="15px"
              marginTop="15%"
              marginLeft="75%"
            />
            <Skills
              data={
                resumeData?.skills?.items?.length
                  ? [...resumeData?.skills?.items]
                  : [...sampleData?.data?.skills?.items]
              }
              color={color}
              updater={updater}
            />
          </Box>

          <Box w="65%" h="auto" m="30px" ml="10px" mr="25px">
            <Box
              bgColor="#F2F1EC"
              display="flex"
              flexDir="column"
              alignItems="center"
              p="25px"
              pb="65px"
            >
              <Row>
                <Text
                  value={resumeData?.profile?.firstName}
                  placeholder="FirstName"
                  customclass={styles.fullName}
                  path={"profile.firstName"}
                  fontSize="2rem"
                  fontWeight="bold"
                  color="#365B6D"
                  textAlign="left"
                />
                &nbsp;
                <Text
                  value={resumeData?.profile?.lastName}
                  placeholder="LastName"
                  customclass={styles.fullName}
                  path={"profile.lastName"}
                  fontSize="2rem"
                  fontWeight="bold"
                  color="#365B6D"
                  textAlign="left"
                />
              </Row>
              <Text
                value={resumeData?.objective?.title}
                placeholder="Profession"
                path={"profile.objective.heading"}
                fontSize="2.5rem"
                color="#365B6D"
                marginTop="2%"
                textAlign="left"
                fontWeight="400"
                lineHeight="10px"
              />
            </Box>

            <Heading text="ABOUT ME" textColor="#365B6D" marginTop="7%" />
            <Text
              value={resumeData?.objective?.body}
              placeholder="Short and engaging pitch about yourself.
                "
              path={"profile.objective.body"}
              fontSize="1.27rem"
              color="#365B6D"
              marginTop="4%"
              textAlign="left"
              fontWeight="400"
            />

            <Heading
              text="EXPERIENCE"
              textColor="#365B6D"
              marginTop="5%"
              borderAlign="right"
            />
            <WorkExperience
              data={
                resumeData?.work?.items?.length
                  ? [...resumeData?.work?.items]
                  : [...sampleData?.data?.work?.items]
              }
              color={color}
              updater={updater}
            />
            <Image src="/gdImage.png" w="100%" />
          </Box>
        </Box>
      </Box>
    </div>
  );
}
