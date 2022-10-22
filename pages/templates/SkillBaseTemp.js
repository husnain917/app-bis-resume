import React from "react";
import Link from "next/link";
import { Tooltip, Box, Image, Icon } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import styles from "../../styles/templates/SkillBase.module.css";
import Text from "../../src/components/skillBaseTemp/Text";
import Profile from "../../src/components/skillBaseTemp/Profile";
import Heading from "../../src/components/skillBaseTemp/Heading";
import {
  FaReadme,
  FaArchive,
  FaJediOrder,
  FaUbuntu,
  FaAddressBook,
  FaCampground,
  FaBuffer,
  FaBlackberry,
  FaEvernote,
  FaJoget,
} from "react-icons/fa";
import Education from "../../src/components/skillBaseTemp/Education";
import WorkExperience from "../../src/components/skillBaseTemp/WorkExperience";
import Organization from "../../src/components/skillBaseTemp/Organization";
import Project from "../../src/components/skillBaseTemp/Project";
import Certifications from "../../src/components/skillBaseTemp/Certifications";
import Achievement from "../../src/components/skillBaseTemp/Achievement";
import Skills from "../../src/components/skillBaseTemp/Skills";
import Interest from "../../src/components/skillBaseTemp/Interest";
import Languages from "../../src/components/skillBaseTemp/Languages";
export default function SkillBaseTemp() {
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
      <Box
        w={["", , , "88%", "70%", "70%"]}
        mt="5%"
        mb="5% "
        overflow="auto"
        ml={["", , , "5%", "13%"]}
        bgColor="#313C4E"
      >
        <Box
          w="100%"
          display="flex"
          h="auto"
          minW="920px"
          maxW="920px"
          bgColor="white"
          m="10px"
        >
          <Box
            w="30%"
            h="auto"
            bgColor="#313C4E"
            mt="10px"
            ml="10px"
            mb="10px"
            borderRight="2px"
            borderColor="cornflowerblue"
          >
            <Image
              src="/ProfilePic.jpg"
              w="70%"
              borderRadius="100px"
              mt="15%"
              ml="15%"
            />
            <Box pl="12%" mt="10%">
              <Box display="flex" alignItems="center" mt="5%">
                <Icon
                  as={FaBlackberry}
                  w={7}
                  h={7}
                  color="#313C4E"
                  bgColor="white"
                  borderRadius="100px"
                  p="5px"
                />
                <Heading title="Skills" color="white" />
              </Box>
              <Skills
                data={
                  resumeData?.skills?.items?.length
                    ? [...resumeData?.skills?.items]
                    : [...sampleData?.data?.skills?.items]
                }
                color={color}
                updater={updater}
              />
              <Box display="flex" alignItems="center" mt="5%">
                <Icon
                  as={FaEvernote}
                  w={7}
                  h={7}
                  color="#313C4E"
                  bgColor="white"
                  borderRadius="100px"
                  p="5px"
                />
                <Heading title="Languages" color="white" />
              </Box>
              <Languages
                data={
                  resumeData?.languages?.items?.length
                    ? [...resumeData?.languages?.items]
                    : [...sampleData?.data?.languages?.items]
                }
                color={color}
                updater={updater}
              />

              <Box display="flex" alignItems="center" mt="5%">
                <Icon
                  as={FaJoget}
                  w={7}
                  h={7}
                  color="#313C4E"
                  bgColor="white"
                  borderRadius="100px"
                  p="5px"
                />
                <Heading title="Interest" color="white" />
              </Box>
              <Interest
                data={
                  resumeData?.hobbies?.items?.length
                    ? [...resumeData?.hobbies?.items]
                    : [...sampleData?.data?.hobbies?.items]
                }
                color={color}
                updater={updater}
              />
            </Box>
          </Box>

          <Box w="70%" pl="5%" pt="4%" mb="10%">
            <Profile />
            <Box display="flex" alignItems="center" mt="5%">
              <Icon
                as={FaReadme}
                w={8}
                h={8}
                color="white"
                bgColor="#313C4E"
                p="5px"
                borderRadius="100px"
              />
              <Heading title="EDUCATION" color="#313C4E" />
            </Box>
            <Education
              data={
                resumeData?.education?.items?.length
                  ? [...resumeData?.education?.items]
                  : [...sampleData?.data?.education?.items]
              }
              color={color}
              updater={updater}
            />
            <Box display="flex" alignItems="center" mt="5%">
              <Icon
                as={FaJediOrder}
                w={7}
                h={7}
                color="white"
                bgColor="#313C4E"
                p="5px"
                borderRadius="100px"
              />
              <Heading title="Work Experience" color="#313C4E" />
            </Box>
            <WorkExperience
              data={
                resumeData?.work?.items?.length
                  ? [...resumeData?.work?.items]
                  : [...sampleData?.data?.work?.items]
              }
              color={color}
              updater={updater}
            />
            <Box display="flex" alignItems="center" mt="5%">
              <Icon
                as={FaUbuntu}
                w={7}
                h={7}
                color="white"
                bgColor="#313C4E"
                p="5px"
                borderRadius="100px"
              />
              <Heading title="ORGANIZATIONS" color="#313C4E" />
            </Box>
            <Organization
              data={
                resumeData?.organization?.items?.length
                  ? [...resumeData?.organization?.items]
                  : [...sampleData?.data?.organization?.items]
              }
              color={color}
              updater={updater}
            />
            <Box display="flex" alignItems="center" mt="5%">
              <Icon
                as={FaAddressBook}
                w={7}
                h={7}
                color="white"
                bgColor="#313C4E"
                p="5px"
                borderRadius="100px"
              />
              <Heading title="certifications" color="#313C4E" />
            </Box>
            <Certifications
              data={
                resumeData?.certifications?.items?.length
                  ? [...resumeData?.certifications?.items]
                  : [...sampleData?.data?.certifications?.items]
              }
              color={color}
              updater={updater}
            />
            <Box display="flex" alignItems="center" mt="5%">
              <Icon
                as={FaBuffer}
                w={7}
                h={7}
                color="white"
                bgColor="#313C4E"
                p="5px"
                borderRadius="100px"
              />
              <Heading title="PERSONAL PROJECTS" color="#313C4E" />
            </Box>
            <Project
              data={
                resumeData?.projects?.items?.length
                  ? [...resumeData?.projects?.items]
                  : [...sampleData?.data?.projects?.items]
              }
              color={color}
              updater={updater}
            />
            <Box display="flex" alignItems="center" mt="5%">
              <Icon
                as={FaCampground}
                w={7}
                h={7}
                color="white"
                bgColor="#313C4E"
                p="5px"
                borderRadius="100px"
              />
              <Heading title="Achievement" color="#313C4E" />
            </Box>
            <Achievement
              data={
                resumeData?.achievements?.items?.length
                  ? [...resumeData?.achievements?.items]
                  : [...sampleData?.data?.achievements?.items]
              }
              color={color}
              updater={updater}
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
}
