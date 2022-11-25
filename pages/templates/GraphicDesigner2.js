import React from "react";
import { Box, Tooltip, Image } from "@chakra-ui/react";
import styles from "../../styles/templates/Graphic2.module.css";
import { Row } from "antd";
import Link from "next/link";
import { useSelector } from "react-redux";
import Text from "../../src/components/GraphicDesigner2/Text";
import Heading from "../../src/components/GraphicDesigner2/Heading";
import Contact from "../../src/components/GraphicDesigner2/Contact";
import Education from "../../src/components/GraphicDesigner2/Education";
import WorkExperience from "../../src/components/GraphicDesigner2/WorkExperience";
import Skills from "../../src/components/GraphicDesigner2/Skills";
import Interest from "../../src/components/GraphicDesigner2/Interest";
import Language from "../../src/components/GraphicDesigner2/Language";
import { sampleData } from "../../constants/sampleData";
export default function GraphicDesigner2() {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  let updater = useSelector((state) => state.editorReducer.updater);
  let color = useSelector((state) => state.editorReducer.color);
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

      <Box w="100%" mt="5%" overflow="auto" ml={["", , , "7%", "13%","26%"]} h="auto">
        <Box
          w="100%"
          h="auto"
          display="flex"
          flexDir="row"
          maxW="950px"
          minW="950px"
        >
          <Box w="30%" h="auto" bgColor="#161619" pb="150px">
            <Image
              src="/graphicMan.jpg"
              w="200px"
              h="200px"
              m="40px"
              mt="100px"
            />
            <Box ml="30px" mt="30%">
              <Heading
                title="CONTACT"
                color="white"
                barColor="white"
                barWidth="25%"
              />
              <Contact />
              <Heading
                title="SKILL"
                color="white"
                barColor="white"
                barWidth="25%"
                marginTop="4%"
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
              <Heading
                title="INTEREST"
                color="white"
                barColor="white"
                barWidth="25%"
                marginTop="5%"
              />
              <Interest
                data={
                  resumeData?.hobbies?.items?.length
                    ? [...resumeData?.hobbies?.items]
                    : [...sampleData?.data?.hobbies?.items]
                }
                color={color}
                updater={updater}
              />
              <Heading
                title="LANGUAGE"
                color="white"
                barColor="white"
                barWidth="25%"
                marginTop="5%"
              />
              <Language
                data={
                  resumeData?.certifications?.items?.length
                    ? [...resumeData?.certifications?.items]
                    : [...sampleData?.data?.certifications?.items]
                }
                color={color}
                updater={updater}
              />
            </Box>
          </Box>
          <Box w="70%">
            <Box bgColor="#E4E4E4" h="auto" pt="5%" pl="10%" pb="100px">
              <Row>
                <Text
                  value={resumeData?.profile?.firstName}
                  placeholder="YOUR NAME"
                  path={"profile.firstName"}
                  fontSize="3rem"
                  fontWeight="bold"
                  color="#161619"
                  textAlign="left"
                  textTransform="uppercase"
                />
              </Row>
              <Text
                value={resumeData?.objective?.title}
                placeholder="Profession"
                path={"profile.objective.heading"}
                fontSize="2rem"
                color="#161619"
                marginTop="2%"
                textAlign="left"
                fontWeight="400"
                lineHeight="0px"
              />
              <Box bgColor="#161619" w="21%" h="4px" mt="5%"></Box>
              <Text
                value={resumeData?.objective?.body}
                placeholder="Short and engaging pitch about yourself.
                "
                path={"profile.objective.body"}
                fontSize="1.2rem"
                color="#161619"
                marginTop="4%"
                textAlign="left"
                fontWeight="400"
                marginRight="50px"
              />
            </Box>
            <Box ml="10%" mr="8%">
              <Heading
                title="EDUCATION"
                color="#161619"
                barColor="#161619"
                marginTop="10%"
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
                title="EXPERIENCE"
                color="#161619"
                barColor="#161619"
                marginTop="5%"
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
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
