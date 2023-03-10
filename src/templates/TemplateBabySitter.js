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
import styles from "../../styles/templates/templatebabysitter.module.css";

export default function TemplateBabySitter() {
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
        minW="837px" minHeight={1183}
        maxW="830px"
        mb={"0px"}
      >
        {/* =============== First Section ============== */}
        <Box
          w="40%"
          pb="10%"
          minW={"380px"}
          bgColor={color ? color : "#F8F2EA"}
          borderLeftRadius={6}
          pr={3}
          pl={8}
          py={8}
          transition="0.5s background"
        >
          <Box
            py={8}
            px={10}
            bgColor={backgroundColor ? backgroundColor : "#DDCAB4"}
            transition="0.5s background"
            borderRadius={"50px 50px"}
          >
            {/* _____________ Profile _____________ */}
            <ImageSelector
              minWidth="240px"
              maxWidth="240px"
              maxHeight="240px"
              minHeight="240px"
              marginTop="10px"
              marginLeft="8px"
              borderColor={color ? color : ""}
            />
            <Heading
              title={"CONTACT PERSON"}
              color={color ? color : "#000000"}
              margin={"30px 0px 0px 0px"}
              fontWeight={700}
            />
            <Contact
              phone={true}
              email={true}
              linkedinURL={true}
              website={true}
              circleIcon={true}
              circleBg="#000000"
              circleSize="25px"
              iconColor={color ? color : "#fff"}
              margin={"10px 0px 0px 0px"}
              parentStyle={styles.contactFont}
              maxWidth={"230px"}
            />

            {/* _____________ About me _____________ */}
            <Heading
              title={"ABOUT ME"}
              color={color ? color : "#000000"}
              margin={"20px 0px 0px 0px"}
              fontWeight={700}
            />
            <About
              minW="100%"
              maxW="100%"
              aboutStyle={Classes.aboutText}
              fontColor="#000000"
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
                      color={color ? color : "#000000"}
                      onSideSectionShow={() =>
                        setShow({ ...show, skills: true })
                      }
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
        </Box>
        {/* =============== Second Section ============== */}
        <Box
          w="60%"
          bg={color ? color : "#F8F2EA"}
          h="auto"
          minW="450"
          borderRightRadius={6}
          paddingBottom={"40px"}
          transition="0.5s background"
        >
          <Name
            FName={true}
            SName={true}
            direction="row"
            FNameStyle={styles.nameStyle}
            SNameStyle={styles.nameStyle}
            margin={"15% 0% 0% 4%"}
            fontColor={backgroundColor ? backgroundColor : "#000000"}
            maxWidth={"200px"}
            minWidth={"200px"}
          />
          <Profession
            professionStyle={styles.profileSubTitle}
            margin={"0% 0% 0% 4%"}
            fontColor={backgroundColor ? backgroundColor : "#000000"}
            maxWidth={'95%'}
          />
          {/* Work */}
          <Box padding={"0px 0px 0px 30px"} margin={"30px 0px 10px 0px"}>
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
                    summary={true}
                    companyStyle={Classes.company}
                    positionStyle={Classes.programText}
                    dateStyle={Classes.date}
                    summaryStyle={Classes.description}
                    parentContainerStyle={styles.rightContainerWork}
                    textColor="#000000"
                    maxWidth={"390px"}
                    datewidthmax={"180px"}
                    maxChr={20}
                  />
                </div>
              </div>
            )}
          </Box>
          {/* _____________ Education _____________ */}
          <Box padding={"0px 0px 0px 30px"} margin={"30px 0px 10px 0px"}>
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
                    maxWidth={"390px"}
                    datewidthmax={"180px"}
                    maxChr={20}
                  />
                </div>
              </div>
            )}
          </Box>
          {/* _____________ Language _____________ */}
          <Box padding={"0px 0px 0px 30px"} margin={"37px 0px 0px 0px"}>
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
                    onSideSectionShow={() =>
                      setShow({ ...show, languages: true })
                    }
                  />
                  <Language langStyle={styles.langFont} maxWidth={"380px"} />
                </div>
              </div>
            )}
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
