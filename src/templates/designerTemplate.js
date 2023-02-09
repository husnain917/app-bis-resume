import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Name from "../components/commonSection/Name";
import styles from "../../styles/designerTemplate.module.css";
import Classes from "../../styles/templates/flightAttendant.module.css";
import Profession from "../components/commonSection/Profession";
import Contact from "../components/commonSection/Contact";
import Heading from "../components/commonSection/Heading";
import Skill from "../components/commonSection/Skill";
import WorkExperience from "../components/commonSection/WorkExperience";
import Education from "../components/commonSection/Education";
import Interest from "../components/commonSection/Interest";
import Language from "../components/commonSection/Language";
import { useSelector } from "react-redux";
import useShow from "../components/tempSectionSide/useShow";
import SectionSideMenu from "../components/tempSectionSide/SectionSideMenu";
import About from "../components/commonSection/About";
import {
  EDUCATION,
  SKILL,
  WORK,
  INTEREST,
  LANGUAGES,
} from "../components/tempSectionSide/SectionSideConstant";
import ImageSelector from "../components/imageSelector";
import { FaUserAlt, FaBookOpen, FaSignLanguage } from "react-icons/fa";
import Underline from "../components/digitalTemplate/Underline";
import { MdCastForEducation } from "react-icons/md";
import { IoLanguageOutline } from "react-icons/io5";

export default function Designer_Template() {
  // redux Data
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const [show, setShow] = useShow();

  return (
    <>
      <Flex
        justifyContent={{ base: "none", lg: "center" }}
        flexDir={"column"}
        alignItems={{ sm: "none", lg: "center" }}
        bg={"#fff"}
      >
        <Box
          w="100%"
          minW="830px"
          maxW="830px"
          mb={"20px"}
          borderWidth="1px"
          borderColor={"#00000023"}
        >
          {/* profile container */}
          <Box backgroundColor={"#253439"} padding={"30px"} width={"100%"}>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              width={"100%"}
            >
              <Box width={"50%"}>
                <Name
                  FName={true}
                  SName={true}
                  direction="column"
                  FNameStyle={styles.nameStyle}
                  SNameStyle={styles.nameStyle}
                  maxWidth={"350px"}
                  minWidth={"300px"}
                  maxChr={38}
                />
              </Box>
              <Underline height="0.1em" width="50%" bgColor="#fff" />
            </Box>
            <Profession professionStyle={styles.profileSubTitle} />
          </Box>

          {/* avatar container */}
          <Box
            backgroundColor={"#423E3A"}
            display={"flex"}
            width={"100%"}
            marginTop={"2px"}
          >
            <Box width={"30%"} padding={"10px 0px 10px 20px"}>
              <ImageSelector
                minWidth="220px"
                maxWidth="220px"
                maxHeight="220px"
                minHeight="220px"
              />
            </Box>
            <Box
              width={"70%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Contact
                phone={true}
                email={true}
                linkedinURL={true}
                website={true}
                circleIcon={true}
                circleBg="#fff"
                circleSize="28px"
                iconColor="#423E3A"
                margin={"5px 0px 0px 0px"}
                style={styles.profileText}
                maxWidth={"180px"}
              />
            </Box>
          </Box>
          <Box
            width={"100%"}
            display={"flex"}
            justifyContent={"space-between"}
            marginTop={"10px"}
          >
            {/* left contaiiner */}
            <Box
              width={"50%"}
              backgroundColor={"#CEB99E"}
              padding={"20px 50px 0px 50px"}
              borderRadius={"15px 15px"}
            >
              {/* _____________ About me _____________ */}
              <Heading
                title={"ABOUT ME"}
                color="#253439"
                fontSize={"20px"}
                fontWeight={700}
                circleSize="48px"
                circleBg="#253439"
                circleIconHeading={true}
                icon={(props) => (
                  <FaUserAlt {...props} size={22} color={"#fff"} />
                )}
              />
              <About
                minW="100%"
                maxW="100%"
                aboutStyle={Classes.aboutText}
                fontColor="#000000"
                fontSize="16px"
                fontWeight={600}
                margin={"5px 10px 30px 10px"}
              />
              {/* _____________ Skill _____________ */}
              <Box margin={"0px 0px 0px 7px"}>
                {resumeData?.skills?.visible && (
                  <div className={Classes.sideMenu}>
                    <div className={Classes.sideMenuBox}>
                      {show.skills && (
                        <SectionSideMenu
                          onHide={() => setShow({ ...show, skills: false })}
                          bg="#006772"
                          iconColor={"#fff"}
                          onDelete={SKILL}
                        />
                      )}
                    </div>
                    <div>
                      <Heading
                        title={"SKILLS"}
                        onSideSectionShow={() =>
                          setShow({ ...show, skills: true })
                        }
                        color="#253439"
                        fontSize={"20px"}
                        fontWeight={700}
                        circleSize="48px"
                        circleBg="#253439"
                        circleIconHeading={true}
                        icon={(props) => (
                          <FaSignLanguage {...props} size={22} color={"#fff"} />
                        )}
                      />
                      <Skill
                        skillStyle={styles.skillText}
                        progressBar={true}
                        strokeWidth="2"
                        lineStyle={styles.line}
                        strokeColor="#000000"
                        trailColor="#fff"
                        percentageStyle={styles.percent}
                        parentContainerStyle={styles.rightContainerWork}
                      />
                    </div>
                  </div>
                )}
              </Box>
              {/* _____________ Interst _____________ */}
              <Box margin={"0px 0px 0px 7px"}>
                {resumeData?.hobbies?.visible && (
                  <div className={Classes.sideMenu}>
                    <div className={Classes.sideMenuBox}>
                      {show.interest && (
                        <SectionSideMenu
                          bg="#006772"
                          iconColor={"#fff"}
                          onHide={() => setShow({ ...show, interest: false })}
                          onDelete={INTEREST}
                        />
                      )}
                    </div>
                    <div>
                      <Heading
                        title="INTEREST"
                        color="#253439"
                        fontSize={"20px"}
                        fontWeight={700}
                        circleSize="48px"
                        circleBg="#253439"
                        circleIconHeading={true}
                        icon={(props) => (
                          <FaBookOpen {...props} size={22} color={"#fff"} />
                        )}
                        onSideSectionShow={() =>
                          setShow({ ...show, interest: true })
                        }
                      />
                      <Interest
                        interestStyle={styles.skillText}
                        parentContainerStyle={styles.rightContainerWork}
                        maxWidth={"300px"}
                      />
                    </div>
                  </div>
                )}
              </Box>
              {/* _____________ Languages _____________ */}
              <Box margin={"0px 0px 0px 7px"}>
                {resumeData?.languages?.visible && (
                  <div className={Classes.sideMenu}>
                    <div className={Classes.sideMenuBox}>
                      {show.languages && (
                        <SectionSideMenu
                          bg="#006772"
                          iconColor={"#fff"}
                          onHide={() => setShow({ ...show, languages: false })}
                          onDelete={LANGUAGES}
                        />
                      )}
                    </div>
                    <div>
                      <Heading
                        title="LANGUAGES"
                        color="#253439"
                        fontSize={"20px"}
                        fontWeight={700}
                        circleSize="48px"
                        circleBg="#253439"
                        circleIconHeading={true}
                        icon={(props) => (
                          <IoLanguageOutline
                            {...props}
                            size={22}
                            color={"#fff"}
                          />
                        )}
                        onSideSectionShow={() =>
                          setShow({ ...show, languages: true })
                        }
                      />
                      <Language
                        langStyle={styles.skillText}
                        langContainerStyle={styles.rightContainerWork}
                        maxWidth={"300px"}
                      />
                    </div>
                  </div>
                )}
              </Box>
            </Box>
            {/* right container */}
            <Box width={"45%"} padding={"20px 15px 0px 15px"}>
              {/* _____________ Work _____________ */}
              <Box>
                {resumeData?.work?.visible && (
                  <div className={Classes.sideMenu}>
                    <div className={Classes.sideMenuBox}>
                      {show.work && (
                        <SectionSideMenu
                          onHide={() => setShow({ ...show, work: false })}
                          bg="#006772"
                          iconColor={"#fff"}
                          onDelete={WORK}
                        />
                      )}
                    </div>
                    <div>
                      <Heading
                        title="WORK EXPERIENCE"
                        color="#253439"
                        fontSize={"20px"}
                        fontWeight={700}
                        circleSize="48px"
                        circleBg="#253439"
                        circleIconHeading={true}
                        icon={(props) => (
                          <MdCastForEducation
                            {...props}
                            size={22}
                            color={"#fff"}
                          />
                        )}
                        onSideSectionShow={() =>
                          setShow({ ...show, work: true })
                        }
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
                        parentContainerStyle={styles.rightContainerExp}
                        textColor="#000000"
                        maxWidth={"300px"}
                        maxChr={20}
                        datewidthmax={"140px"}
                      />
                    </div>
                  </div>
                )}
              </Box>
              {/* _____________ Education _____________ */}
              <Box>
                {resumeData?.education?.visible && (
                  <div className={Classes.sideMenu}>
                    <div className={Classes.sideMenuBox}>
                      {show.education && (
                        <SectionSideMenu
                          onHide={() => setShow({ ...show, education: false })}
                          bg="#006772"
                          iconColor={"#fff"}
                          onDelete={EDUCATION}
                        />
                      )}
                    </div>
                    <div>
                      <Heading
                        title="EDUCATION"
                        color="#253439"
                        fontSize={"20px"}
                        fontWeight={700}
                        circleSize="48px"
                        circleBg="#253439"
                        circleIconHeading={true}
                        icon={(props) => (
                          <MdCastForEducation
                            {...props}
                            size={22}
                            color={"#fff"}
                          />
                        )}
                        onSideSectionShow={() =>
                          setShow({ ...show, education: true })
                        }
                      />
                      <Education
                        degree={true}
                        institution={true}
                        date={true}
                        summary={true}
                        parentContainerStyle={styles.rightContainerExp}
                        institutionStyle={Classes.company}
                        degreeStyle={Classes.programText}
                        dateStyle={Classes.date}
                        summaryStyle={Classes.description}
                        degree_placeholder="Study Program"
                        textColor="#000000"
                        maxWidth={"300px"}
                        maxChr={20}
                        datewidthmax={"140px"}
                      />
                    </div>
                  </div>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  );
}
