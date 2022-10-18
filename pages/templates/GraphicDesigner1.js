import React from "react";
import styles from "../../styles/templates/Graphic.module.css";
import { Box, Tooltip } from "@chakra-ui/react";
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
      {/* main div  */}
      <div className={styles.mainContainer} w="70%" h="100vh" mt="5%">
        {/* innermaindiv */}
        <Box w="100%" display="flex">
          <Box w="35%" bgColor="#365B6D" h="220vh" m="15px">
            <Contact />
            <Heading
              text="EDUCATION"
              textColor="white"
              textAlign="right"
              padding="15px"
              marginTop="24%"
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

          {/* Right section code  */}
          <Box w="65%" h="auto" m="15px" ml="10px" mr="25px">
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
                  placeholder="AARON"
                  customclass={styles.fullName}
                  path={"profile.firstName"}
                  fontSize="4.5rem"
                  fontWeight="bold"
                  color="#365B6D"
                  textAlign="left"
                />
                &nbsp;
                <Text
                  value={resumeData?.profile?.lastName}
                  placeholder="LOEB"
                  customclass={styles.fullName}
                  path={"profile.lastName"}
                  fontSize="4.5rem"
                  fontWeight="bold"
                  color="#365B6D"
                  textAlign="left"
                />
              </Row>
              <Text
                value={resumeData?.objective?.title}
                placeholder="Graphic Designer"
                path={"profile.objective.heading"}
                fontSize="2.7rem"
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
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                eget auctor enim. Integer nisi massa, tempor venenatis diam et,
                blandit volutpat ipsum. Suspendisse orci sem, blandit in magna
                at, ornare congue justo. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Duis
                commodo odio faucibus, pellentesque ipsum at, dapibus nunc.
                Pellentesque at enim nec leo eleifend bibendum at at metus.
                Nulla a eros nec eros accumsan fringilla.
                "
              path={"profile.objective.body"}
              fontSize="1.27rem"
              color="#365B6D"
              marginTop="4%"
              textAlign="left"
              fontWeight="400"
            />

            <Heading text="EXPERIENCE" textColor="#365B6D" marginTop="5%" />
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
      </div>
    </div>
  );
}
