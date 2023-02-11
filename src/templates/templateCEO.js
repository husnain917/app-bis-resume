import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Name from "../components/commonSection/Name";
import Classes from "../../styles/templates/flightAttendant.module.css";
import Profession from "../components/commonSection/Profession";
import Contact from "../components/commonSection/Contact";
import Heading from "../components/commonSection/Heading";
import Skill from "../components/commonSection/Skill";
import WorkExperience from "../components/commonSection/WorkExperience";
import Education from "../components/commonSection/Education";
import Language from "../components/commonSection/Language";
import { useSelector } from "react-redux";
import useShow from "../components/tempSectionSide/useShow";
import SectionSideMenu from "../components/tempSectionSide/SectionSideMenu";
import About from "../components/commonSection/About";
import {
  EDUCATION,
  SKILL,
  WORK,
  LANGUAGES,
} from "../components/tempSectionSide/SectionSideConstant";
import ImageSelector from "../components/imageSelector";
import styles from "../../styles/templates/templateceo.module.css";

export default function TemplateCEO() {
  // redux data
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const { backgroundColor, color } = useSelector(
    (store) => store.themeReducer.theme
  );
  // custom Hook For Template
  const [show, setShow] = useShow();

  return (
    <Flex
      justifyContent={{ base: "none", lg: "center" }}
      flexDir={"column"}
      alignItems={{ sm: "none", lg: "center" }}
      bg={"#fff"}
    >
      <Box
        display="flex"
        flexDir="row"
        w="100%"
        minW="837px"
        maxW="837px"
        minHeight={1183}
        mb={"0px"}
      >
        {/* =============== First Section ============== */}
        <Box
          w="40%"
          pb="10%"
          minW={"340px"}
          bgColor={backgroundColor ? backgroundColor : "#1c2125"}
          borderLeftRadius={6}
          pr={3}
          pl={12}
          py={8}
          transition="0.5s background"
        >
          {/* _____________ Profile _____________ */}
          <ImageSelector
            minWidth="240px"
            maxWidth="240px"
            maxHeight="240px"
            minHeight="240px"
            marginTop="30px"
            borderColor={color ? color : ""}
          />
          <Heading
            title={"CONTACT PERSON"}
            color={color ? color : "#fff"}
            margin={"20px 0px 0px 0px"}
            line={true}
            lineW="270px"
            lineH="0.15em"
            lineBg={color ? color : "#fff"}
            fontWeight={700}
          />
          <Contact
            phone={true}
            email={true}
            linkedinURL={true}
            website={true}
            circleIcon={true}
            circleBg="#f8f9fa"
            circleSize="25px"
            iconColor={color ? color : "#000000"}
            margin={"10px 0px 0px 0px"}
            parentStyle={styles.contactFont}
            maxWidth={"260px"}
          />

          {/* _____________ About me _____________ */}
          <Heading
            title={"ABOUT ME"}
            color={color ? color : "#fff"}
            margin={"20px 0px 0px 0px"}
            line={true}
            lineW="270px"
            lineH="0.13em"
            lineBg={color ? color : "#fff"}
            fontWeight={700}
          />
          <About
            minW="100%"
            maxW="100%"
            aboutStyle={Classes.aboutText}
            fontColor="#fff"
            fontWeight={"600"}
          />

          {/* _____________ Skill _____________ */}
          <Box margin={"20px 0px 10px 7px"}>
            {resumeData?.skills?.visible && (
              <div className={Classes.sideMenu}>
                <div className={Classes.sideMenuBox}>
                  {show?.skills && (
                    <SectionSideMenu
                      onDelete={SKILL}
                      onHide={() => setShow({ ...show, skills: false })}
                      bg="#006772"
                      iconColor={"#fff"}
                    />
                  )}
                </div>
                <div>
                  <Heading
                    title={"SKILLS"}
                    fontSize="20px"
                    fontWeight={700}
                    color={color ? color : "#fff"}
                    line={true}
                    lineW="270px"
                    lineH="0.15em"
                    lineBg={color ? color : "#fff"}
                    onSideSectionShow={() => setShow({ ...show, skills: true })}
                  />
                  <Skill
                    skillStyle={styles.contactFont}
                    progressBar={true}
                    strokeWidth="2"
                    lineStyle={styles.line}
                    strokeColor={color ? color : "#2A78AB"}
                    trailColor="#fff"
                    percentageStyle={styles.percent}
                    parentContainerStyle={Classes.ml}
                  />
                </div>
              </div>
            )}
          </Box>
        </Box>
        {/* =============== Second Section ============== */}
        <Box
          w="60%"
          bg={color ? color : "#fff"}
          h="auto"
          minW="490px"
          borderRightRadius={6}
          paddingBottom={"40px"}
          transition="0.5s background"
        >
          <Name
            maxWidth={"220px"}
            minWidth={"210px"}
            maxChr={38}
            FName={true}
            SName={true}
            direction="row"
            FNameStyle={styles.nameStyle}
            SNameStyle={styles.nameStyle}
            margin={"15% 0% 0% 10%"}
            fontColor={backgroundColor ? backgroundColor : "#000000"}
          />
          <Profession
            professionStyle={styles.profileSubTitle}
            maxWidth={"400px"}
            margin={"0% 0% 0% 10%"}
            fontColor={backgroundColor ? backgroundColor : "#000000"}
          />
          {/* Work */}
          <Box padding={"0px 0px 0px 57px"} margin={"30px 0px 10px 0px"}>
            {resumeData?.work?.visible && (
              <div className={Classes.sideMenu}>
                <div className={Classes.sideMenuBox}>
                  {show?.work && (
                    <SectionSideMenu
                      onHide={() => setShow({ ...show, work: false })}
                      onDelete={WORK}
                      bg="#006772"
                      iconColor={"#fff"}
                    />
                  )}
                </div>
                <div>
                  <Heading
                    color={backgroundColor ? backgroundColor : "#000000"}
                    title="WORK EXPERIENCE"
                    line={true}
                    lineW="410px"
                    lineH="0.15em"
                    lineBg={backgroundColor ? backgroundColor : "#000000"}
                    fontSize={"22px"}
                    fontWeight={700}
                    minW="300px"
                    onSideSectionShow={() => setShow({ ...show, work: true })}
                    maxW={"fit-content"}
                  />
                  <WorkExperience
                    company={true}
                    position={true}
                    date={true}
                    datewidthmax={"180px"}
                    maxChr={20}
                    summary={true}
                    companyStyle={Classes.company}
                    positionStyle={Classes.programText}
                    dateStyle={Classes.date}
                    summaryStyle={Classes.description}
                    parentContainerStyle={styles.rightContainerWork}
                    textColor="#000000"
                    maxWidth={"400px"}
                  />
                </div>
              </div>
            )}
          </Box>
          {/* _____________ Education _____________ */}
          <Box padding={"0px 0px 0px 57px"} margin={"30px 0px 10px 0px"}>
            {resumeData?.education?.visible && (
              <div className={Classes.sideMenu}>
                <div className={Classes.sideMenuBox}>
                  {show?.education && (
                    <SectionSideMenu
                      onHide={() => setShow({ ...show, education: false })}
                      onDelete={EDUCATION}
                      bg="#006772"
                      iconColor={"#fff"}
                    />
                  )}
                </div>
                <div>
                  <Heading
                    title={"EDUCATION"}
                    color={backgroundColor ? backgroundColor : "#000000"}
                    line={true}
                    lineW="410px"
                    lineH="0.15em"
                    lineBg={backgroundColor ? backgroundColor : "#000000"}
                    fontSize={"22px"}
                    fontWeight={700}
                    onSideSectionShow={() =>
                      setShow({ ...show, education: true })
                    }
                  />
                  <Education
                    degree={true}
                    institution={true}
                    date={true}
                    summary={true}
                    parentContainerStyle={styles.rightContainerWork}
                    institutionStyle={Classes.company}
                    degreeStyle={Classes.programText}
                    dateStyle={Classes.date}
                    summaryStyle={Classes.description}
                    degree_placeholder="Study Program"
                    textColor="#000000"
                    maxWidth={"400px"}
                    datewidthmax={"180px"}
                    maxChr={20}
                  />
                </div>
              </div>
            )}
          </Box>
          {/* _____________ Language _____________ */}
          <Box padding={"0px 0px 0px 57px"} margin={"37px 0px 0px 0px"}>
            {resumeData?.languages?.visible && (
              <div className={Classes.sideMenu}>
                <div className={Classes.sideMenuBox}>
                  {show?.languages && (
                    <SectionSideMenu
                      onDelete={LANGUAGES}
                      onHide={() => setShow({ ...show, languages: false })}
                      bg="#006772"
                      iconColor={"#fff"}
                    />
                  )}
                </div>
                <div>
                  <Heading
                    title={"LANGUAGES"}
                    fontSize="20px"
                    fontWeight={700}
                    color={backgroundColor ? backgroundColor : "#000000"}
                    line={true}
                    lineW="410px"
                    lineH="0.15em"
                    lineBg={backgroundColor ? backgroundColor : "#000000"}
                    onSideSectionShow={() =>
                      setShow({ ...show, languages: true })
                    }
                  />
                  <Language langStyle={styles.langFont} maxWidth={"400px"} />
                </div>
              </div>
            )}
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
