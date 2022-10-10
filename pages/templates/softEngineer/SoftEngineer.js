import React from "react";
import { Input, Image, Box } from "@chakra-ui/react";
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
export default function SoftEngineer() {
  const [width] = useWindowSize();
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  let updater = useSelector((state) => state.editorReducer.updater);
  let color = useSelector((state) => state.editorReducer.color);
console.log(resumeData);
  return (
    <>
      <Box overflow="auto" maxW="2950px">
        <Box
          w="100%"
          display="flex"
          flexDir="row"
          justifyContent="space-between"
          pl="10%"
          pr="10%"
          bgColor="#FFFFF"
          minW="1300px"
        >
          {/* Left Section  */}
          <Box w="50%" mt="10%">
            <Text
              value={resumeData?.profile?.firstName}
              placeholder="RICHARD "
              // customclass={`${"fullName"} ${styles.fname}`}
              customclass={styles.fullName}
              fontSize="5.2rem"
              path={"profile.firstName"}
              lineHeight="60px"
            />
            &nbsp;
            <Text
              value={resumeData?.profile?.lastName}
              placeholder="SANCHEZ"
              // customclas={`${"fullName"} ${styles.fname}`}
              fontSize="5.2rem"
              customclass={styles.fullName}
              path={`"profile.lastName"`}
              lineHeight="60px"
            />
            <Box mt="8%">

           
            <Box bgColor="black" w="100%" h="2px"></Box>
            <Text
              value={resumeData?.objective?.body.heading}
              placeholder="SOFTWARE ENGINEER"
              customclass={
              `${styles.summary_heading} ${styles.contentEditableContainer}`
              }
              path={"objective.heading"}
              editable={true}
            />
            <Box bgColor="black" w="100%" h="2px"></Box>
            </Box>
            {/* <HeadingText
              heading=" SOFTWARE ENGINEER"
              marginTop="8%"
              textSize="2.1rem"
              wordSpacing="6px"
              editable={true}
            /> */}
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
              textSize="1.8rem"
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
              textSize="1.8rem"
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
            <Image src="/SeTemplate.jpg" w="90%" borderRadius="100%" ml="18%" />
            {/* <HeadingText
              heading="PROGRAMMING LANGUAGE"
              marginTop="7%"
              textSize="1.8rem"
              width="60%"
            /> */}
            <Box>
            <Box bgColor="black" w="60%" h="2px"></Box>
            <Text
              value={resumeData?.languages?.body?.heading}
              placeholder="SKILLS"
              customclass={
              `${styles.summary_heading} ${styles.contentEditableContainer}`
              }
              path={"objective.heading"}
              editable={true}
            />
            <Box bgColor="black" w="60%" h="2px"></Box>
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
              heading="EXPERIENCE"
              marginTop="8%"
              width="60%"
              textSize="1.8rem"
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
          <Image
            src="/SeBottom.png"
            w="100%"
            overflowX="auto"
            minW="1300px"
            maxW="2950px"
          />
        </Box>
      </Box>
    </>
  );
}
