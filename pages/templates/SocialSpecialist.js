import React from "react";
import { Box, Tooltip, Image } from "@chakra-ui/react";
import styles from "../../styles/templates/Social.module.css";
import Link from "next/link";
import { useSelector } from "react-redux";
import Text from "../../src/components/SocialSpecialist/Text";
import Contact from "../../src/components/SocialSpecialist/Contact";
import Heading from "../../src/components/SocialSpecialist/Heading";
import Education from "../../src/components/SocialSpecialist/Education";
import Skills from "../../src/components/SocialSpecialist/Skills";
import WorkExperience from "../../src/components/SocialSpecialist/WorkExperience";

export default function SocialSpecialist() {
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
        w={["100%", "100%", "100%", "90%", "70%"]}
        h="auto"
        bgColor="#F4F3F2"
        mt="5%"
        overflow="auto"
        pb="100px"
        ml={["", , , "5%", "15%"]}
        mr="0%"
>
        <Box
          display="flex"
          flexDir="row"
          w="100%"
          mt="10%"
          maxW="900px"
          minW="900px"
        >
          <Box w="50%" ml="5%" mt="5%">
            <Box bgColor="black" w="100%" h="2px"></Box>
            <Text
              value={resumeData?.profile?.firstName}
              placeholder="CLAUDIA"
              path={"profile.firstName"}
              fontSize="3.8rem"
              fontWeight="bold"
              color="#E07559"
              textAlign="left"
              letterSpacing="15px"
              textTransform="uppercase"
            />

            <Text
              value={resumeData?.profile?.lastName}
              placeholder="ALVES"
              path={"profile.lastName"}
              fontSize="3.8rem"
              fontWeight="bold"
              color="#E07559"
              textAlign="left"
              lineHeight="30px"
              letterSpacing="16px"
            />
            <Box bgColor="black" w="100%" h="2px" mt="8%"></Box>
            <Text
              value={resumeData?.objective?.body.heading}
              placeholder="SOCIAL MEDIA SPECIALIST"
              path={"objective.heading"}
              editable={true}
              fontSize="1.5rem"
              letterSpacing="3px"
              textTransform="uppercase"
              marginTop="2%"
            />
            <Box bgColor="black" w="100%" h="2px" mt="2%"></Box>
            <Box w="90%">
              <Text
                value={resumeData?.objective?.body}
                placeholder="Experienced social media
              specialist, analyst, and content
              media creator with 10 years of
              experience in online marketing,
              Search Engine Optimization,
              and research in industry
              developments. Managed and
              developed the main social
              media marketing campaigns
              and company website"
                path={"profile.objective.body"}
                fontSize="1.3rem"
                marginTop="5%"
                width="78%"
              />
              <Heading title="CONTACT" />
              <Contact />
              <Heading title="EDUCATION" />
              <Education
                data={
                  resumeData?.education?.items?.length
                    ? [...resumeData?.education?.items]
                    : [...sampleData?.data?.education?.items]
                }
                color={color}
                updater={updater}
              />
            </Box>
          </Box>

          <Box w="50%">
            <Image src="/socialGirl.png" w="80%" ml="20%" />
            <Box mt="7%" position="relative" right="40px">
              <Box bgColor="black" w="70%" h="2px"></Box>
              <Text
                value={resumeData?.skills?.heading}
                placeholder="Expertise"
                path={"skills.heading"}
                editable={true}
                fontSize="1.5rem"
                letterSpacing="2px"
                textTransform="uppercase"
                marginTop="2%"
                fontWeight="bold"
                color="#E07559"
              />
              <Box bgColor="black" w="70%" h="2px" mt="2%"></Box>
              <Skills
                data={
                  resumeData?.skills?.items?.length
                    ? [...resumeData?.skills?.items]
                    : [...sampleData?.data?.skills?.items]
                }
                color={color}
                updater={updater}
              />
              <Box mt="5%">
                <Heading title="EXPERIENCE" />
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
      </Box>
    </div>
  );
}
