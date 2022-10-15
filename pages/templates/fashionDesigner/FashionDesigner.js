import React from "react";
import { Box, Image, Flex, Tooltip } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Row } from "antd";
import styles from "../../../styles/templates/Fashion.module.css";
import FdText from "../../../src/components/fashionDesigner/FdText";
import Contact from "../../../src/components/fashionDesigner/Contact";
import Education from "../../../src/components/fashionDesigner/Education";
import Languages from "../../../src/components/fashionDesigner/Languages";
import WorkExperience from "../../../src/components/fashionDesigner/WorkExperience";
import Link from "next/link";
import { Icon } from "@chakra-ui/react";
import {
  FaArchive,
  FaInfo,
  FaHeading,
  FaBuffer,
  FaSketch,
  FaCalculator,
} from "react-icons/fa";
import Interest from "../../../src/components/fashionDesigner/Interest";
export default function FashionDesigner() {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  let updater = useSelector((state) => state.editorReducer.updater);
  let color = useSelector((state) => state.editorReducer.color);
  console.log(resumeData);
  return (
    <>
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
        <Box
          display="flex"
          flexDir="row"
          w="70%"
          bgColor="#E6D5C2"
          h="auto"
          ml="15%"
          mt="5%"
        >
          <Box w="45%" mt="7%" ml="5%" pb="10%">
            <Row>
              <FdText
                value={resumeData?.profile?.firstName}
                placeholder="OLIVIA"
                customclass={styles.fullName}
                path={"profile.firstName"}
                fontSize="3rem"
              />
              &nbsp;
              <FdText
                value={resumeData?.profile?.lastName}
                placeholder="WILSON"
                customclass={styles.fullName}
                path={"profile.lastName"}
                fontSize="3rem"
              />
            </Row>
            <Box bgColor="#1B4245" w="40%" h="5px" mt="2%"></Box>
            <FdText
              value={resumeData?.objective?.title}
              placeholder="Fashion Designer"
              path={"profile.objective.heading"}
              fontSize="1.7rem"
              color="#1b4245"
              marginTop="2%"
            />
            <Flex alignItems="center" mt="10%">
              <Icon as={FaInfo} w={10} h={10} />
              <p className={styles.heading}>About Me</p>
            </Flex>
            <FdText
              value={resumeData?.objective?.body}
              placeholder="
              Let me introduce myself, I am a fashion designer
              who has 7 years of experience in this job. I am
              very experienced in various fashion styles for all
              seasons and I have made various models for
              men and women for a world famous brand.
              "
              customclass={styles.aboutMe}
              color="#1b4245"
              path={"objective.body"}
            />
            <Box>
              <Flex alignItems="center" mt="15%">
                {/* <Image src="/work.jpg" w="70px" h="60px" /> */}
                <Icon as={FaArchive} w={10} h={10} />
                <p className={styles.heading}>Work Experience</p>
              </Flex>
              <WorkExperience
                data={
                  resumeData?.work?.items?.length
                    ? [...resumeData?.work?.items]
                    : [...sampleData?.data?.work?.items]
                }
                color={color}
                updater={updater}
              />
              <Flex alignItems="center" mt="5%">
                <Icon as={FaInfo} w={10} h={10} color="#1b425" />

                <p className={styles.heading}>Interest</p>
              </Flex>
              <Interest
                data={
                  resumeData?.hobbies?.items?.length
                    ? [...resumeData?.hobbies?.items]
                    : [...sampleData?.data?.hobbies?.items]
                }
              />
            </Box>
          </Box>
          {/* Right Section Code  */}

          <Box w="45%" bgColor="#1B4245" h="auto" ml="5%" pb="10%">
            <Image
              src="/fashionGirl.png"
              customClass={styles.girlImg}
              mt="8%"
              ml="6%"
              w="90%"
            />
            <Box ml="15%">
              <Flex alignItems="center" mt="10%">
                <Icon as={FaCalculator} w={10} h={10} color="white" />
                <p className={styles.rightHeading}>Contact</p>
              </Flex>
              <Contact />
            </Box>
            <Box ml="15%">
              <Flex alignItems="center" mt="10%">
                <Icon as={FaBuffer} w={10} h={10} color="white" />

                <p className={styles.rightHeading}>Education</p>
              </Flex>
              <Education
                data={
                  resumeData?.education?.items?.length
                    ? [...resumeData?.education?.items]
                    : [...sampleData?.data?.education?.items]
                }
                color={color}
                updater={updater}
              />
              <Flex alignItems="center" mt="10%">
                <Icon as={FaSketch} w={10} h={10} color="white" />

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
      </div>
    </>
  );
}
