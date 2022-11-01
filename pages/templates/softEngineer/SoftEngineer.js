import React from "react";
import { Input, Image, Box, Tooltip } from "@chakra-ui/react";
import { sampleData } from "../../../constants/sampleData";
import { PhoneIcon, AddIcon, WarningIcon, EmailIcon } from "@chakra-ui/icons";
import HeadingText from "../../../src/components/softEngineer/HeadingText";
import { useSelector } from "react-redux";
import { Text } from "../../../src/components/template1";
import { useWindowSize } from "@react-hook/window-size";
import Education from "../../../src/components/softEngineer/Education";
import Experience from "../../../src/components/softEngineer/Experience";
import Languages from "../../../src/components/softEngineer/Languages";
import styles from "../../../styles/templates/SeTemplate.module.css";
import Link from "next/link";
export default function SoftEngineer() {
  const [width] = useWindowSize();
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  let updater = useSelector((state) => state.editorReducer.updater);
  let color = useSelector((state) => state.editorReducer.color);
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
        <Box w={[, , , , "71%"]} overflow="auto">
          <Box
            w="97%"
            display="flex"
            flexDir="row"
            justifyContent="space-between"
            bgColor="#FFFFF"
            pr="7%"
            pl="7%"
            maxW="950px"
            minW="950px"
            mt="6%"
          >
            {/* Left Section  */}
            <Box w="50%" mt="10%">
              <Text
                value={resumeData?.profile?.firstName}
                placeholder="RICHARD "
                customclass={styles.fullName}
                fontSize="3.5rem"
                path={"profile.firstName"}
                lineHeight="60px"
              />
              &nbsp;
              <Text
                value={resumeData?.profile?.lastName}
                placeholder="SANCHEZ"
                // customclas={`${"fullName"} ${styles.fname}`}
                fontSize="3.4rem"
                customclass={styles.fullName}
                path={`"profile.lastName"`}
                lineHeight="20px"
              />
              <Box mt="8%">
                <Box bgColor="black" w="100%" h="2px"></Box>
                <Text
                  value={resumeData?.objective?.body.heading}
                  placeholder="SOFTWARE ENGINEER"
                  customclass={`${styles.summary_heading} ${styles.contentEditableContainer}`}
                  path={"objective.heading"}
                  editable={true}
                />
                <Box bgColor="black" w="100%" h="2px"></Box>
              </Box>
              <Text
                value={resumeData?.objective?.body}
                placeholder="
              Problem solver and fast learner 
              with strong communication 
              skills. I am motivated to upgrade 
              and expand my skill set through 
              mentorship and challenging 
              projects. I enjoy working 
              collaboratively but can also run 
              with projects independently. I am 
              excited about the prospect of 
              joining a Ingoude company.
              "
                customclass={`${styles.summary} ${styles.contentEditableContainer}`}
                path={"objective.body"}
              />
              <HeadingText
                heading="CONTACT US"
                marginTop="10%"
                width="75%"
                textSize="1.5rem"
              />
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: "5%",
                }}
              >
                <PhoneIcon
                  w={8}
                  h={8}
                  bgColor="#B29E84"
                  p="7px"
                  color="white"
                  borderRadius="5px"
                />

                <Text
                  value={resumeData?.contact?.phone}
                  placeholder="+123-456-7890"
                  customclass={`${styles.contact_feild} ${styles.contentEditableContainer}`}
                  path={"contact.phone"}
                />
              </Box>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <EmailIcon
                  w={8}
                  h={8}
                  bgColor="#B29E84"
                  p="7px"
                  color="white"
                  borderRadius="5px"
                />

                <Text
                  value={resumeData?.contact?.email}
                  placeholder="hello@reallygreatsite.com 
                www.reallygreatsite.com"
                  customclass={`${styles.contact_feild} ${styles.contentEditableContainer}`}
                  path={"contact.email"}
                />
              </Box>
              <HeadingText
                heading="EDUCATIONS"
                width="75%"
                marginTop="8%"
                textSize="1.5rem"
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
            </Box>
            {/* Right Section  */}
            <Box w="50%">
              <Image
                src="/SeTemplate.jpg"
                w="90%"
                borderRadius="100%"
                ml="18%"
              />
              <Box>
                <Box bgColor="black" w="70%" h="2px"></Box>
                <Text
                  value={resumeData?.languages?.body?.heading}
                  placeholder="SKILLS"
                  customclass={`${styles.summary_heading} ${styles.contentEditableContainer}`}
                  path={"objective.heading"}
                  editable={true}
                />
                <Box bgColor="black" w="70%" h="2px"></Box>
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
              <HeadingText
              width="70%"
                heading="EXPERIENCE"
                marginTop="8%"
                textSize="1.5rem"
              />
              <Experience
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
          <Box>
            <Image src="/SeBottom.png" w="100%" />
          </Box>
        </Box>
      </div>
    </>
  );
}
