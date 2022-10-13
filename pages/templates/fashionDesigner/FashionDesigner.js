import React from "react";
import { Box, Image, Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Row } from "antd";
import styles from "../../../styles/templates/Fashion.module.css";
import { Text } from "../../../src/components/template1";
import { FaGrav, FaPhone } from "react-icons/fa";
import Contact from "../../../src/components/fashionDesigner/Contact";
import Education from "../../../src/components/fashionDesigner/Education";
import Languages from "../../../src/components/fashionDesigner/Languages";
export default function FashionDesigner() {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  let updater = useSelector((state) => state.editorReducer.updater);
  let color = useSelector((state) => state.editorReducer.color);
  console.log(resumeData);
  return (
    <>
      <Box
        display="flex"
        flexDir="row"
        w="100%"
        bgColor="#E6D5C2"
        h="300vh"
        overflow="auto"
        maxW="2950px"
        minW="1300px"
      >
        <Box w="60%" mt="8%" ml="5%">
          <Row>
            <Text
              value={resumeData?.profile?.firstName}
              placeholder="OLIVIA"
              customclass={styles.fullName}
              path={"profile.firstName"}
              fontSize="5rem"
            />
            &nbsp;
            <Text
              value={resumeData?.profile?.lastName}
              placeholder="WILSON"
              customclass={styles.fullName}
              path={"profile.lastName"}
              fontSize="5rem"
            />
          </Row>
          <Box bgColor="#1B4245" w="40%" h="10px" mt="2%"></Box>
          <Text
            value={resumeData?.objective?.title}
            placeholder="Fashion Designer"
            //   customclass={styles.fullName}
            path={"profile.objective.heading"}
            fontSize="2.6rem"
            marginTop="2%"
          />
          <Flex alignItems="center" mt="5%">
            <FaGrav color="#1B4245" size="40px" />
            <p className={styles.heading}>About Me</p>
          </Flex>
          <Text
            value={resumeData?.objective?.body}
            placeholder="
              Let me introduce myself, I am a fashion designer
              who has 7 years of experience in this job. I am
              very experienced in various fashion styles for all
              seasons and I have made various models for
              men and women for a world famous brand.
              "
            customclass={styles.aboutMe}
            path={"objective.body"}
          />
        </Box>
        {/* Right Section Code  */}

        <Box w="40%" bgColor="#1B4245" h="100%">
          <Image
            src="/fashionGirl.png"
            customClass={styles.girlImg}
            mt="8%"
            ml="6%"
            w="90%"
          />
          <Box ml="15%">
            <Flex alignItems="center" mt="10%">
              <FaPhone color="white" size="40px" />

              <p className={styles.rightHeading}>Contact</p>
            </Flex>
            <Contact />
          </Box>
          <Box ml="15%">
            <Flex alignItems="center" mt="15%">
              <FaPhone color="white" size="40px" />
              <p className={styles.rightHeading}>Education</p>
            </Flex>
            <Education
              data={
                resumeData?.languages?.items?.length
                  ? [...resumeData?.education?.items]
                  : [...sampleData?.data?.education?.items]
              }
              color={color}
              updater={updater}
            />
            <Flex alignItems="center" mt="15%">
              <FaPhone color="white" size="40px" />
              <p className={styles.rightHeading}>Languages</p>
            </Flex>
             <Languages
              data={
                resumeData?.languages?.items?.length
                  ? [...resumeData?.languages?.items]
                  : [...sampleData?.data?.languages?.items]
              }
              color={color}
              updater={updater}
            />
          </Box>
         
        </Box>
      </Box>
    </>
  );
}
