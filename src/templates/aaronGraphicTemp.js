import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Name from "../components/commonSection/Name";
import styles from "../../styles/graphicTemplate.module.css";
import Classes from "../../styles/templates/flightAttendant.module.css";
import Profession from "../components/commonSection/Profession";
import Contact from "../components/commonSection/Contact";
import Heading from "../components/commonSection/Heading";
import Skill from "../components/commonSection/Skill";
import WorkExperience from "../components/commonSection/WorkExperience";
import Education from "../components/commonSection/Education";
import Organization from "../components/commonSection/Organization";
import Interest from "../components/commonSection/Interest";
import { useSelector } from "react-redux";
import useShow from "../components/tempSectionSide/useShow";
import SectionSideMenu from "../components/tempSectionSide/SectionSideMenu";
import About from "../components/commonSection/About";
import {
  EDUCATION,
  SKILL,
  WORK,
  INTEREST,
  ORGANIZATION,
} from "../components/tempSectionSide/SectionSideConstant";
import Underline from "../components/aaronGraphicTemp/Underline";

export default function Aaron_Graphic_Temp() {
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
          display="flex"
          flexDir="row"
          w="100%"
          minW="837px" minHeight={1183}
          maxW="830px"
          mb={"0px"}
        >
          {/* =============== First Section ============== */}
          <Box w="100%" bgColor="#000000" py={2} px={8}>
            {/* _____________ Profile _____________ */}
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              margin={"10px 0px 20px 0px"}
            >
              <Name
                FName={true}
                SName={true}
                maxWidth={"300px"}
                minWidth={"300px"}
                direction="row"
                FNameStyle={styles.nameStyle}
                SNameStyle={styles.nameStyle}
              />
              <Profession professionStyle={styles.profileSubTitle}  maxWidth={'650px'} />
            </Box>
            {/* _____________ Contact Us _____________ */}
            <Box>
              <Underline height="0.1em" width="100%" bgColor="#fff" />
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                padding={"10px 0px"}
              >
                <Contact
                  phone={true}
                  circleIcon={true}
                  circleBg="#fff"
                  circleSize="25px"
                  iconColor="#000000"
                  parentStyle={styles.contactFont}
                  maxWidth={'150px'}
                />
                <Contact
                  email={true}
                  circleIcon={true}
                  circleBg="#fff"
                  circleSize="25px"
                  iconColor="#000000"
                  parentStyle={styles.contactFont}
                  maxWidth={'150px'}
                />
                <Contact
                  linkedinURL={true}
                  circleIcon={true}
                  circleBg="#fff"
                  circleSize="25px"
                  iconColor="#000000"
                  parentStyle={styles.contactFont}
                  maxWidth={'150px'}
                />
                <Contact
                  website={true}
                  circleIcon={true}
                  circleBg="#fff"
                  circleSize="25px"
                  iconColor="#000000"
                  parentStyle={styles.contactFont}
                  maxWidth={'150px'}
                />
              </Box>
              <Underline height="0.1em" width="100%" bgColor="#fff" />
            </Box>
            {/* =============== Second Section ============== */}
            <Box
              width={"100%"}
              display={"flex"}
              justifyContent={"space-between"}
              margin={"30px 0px 10px 0px"}
              padding={"0px 20px"}
            >
              {/* left container */}
              <Box
                width={"55%"}
                paddingRight={"30px"}
                borderRight={"1px solid #fff"}
              >
                {/* _____________ Education _____________ */}
                <Box margin={"20px 0px 10px 0px"}>
                  {resumeData?.education?.visible && (
                    <div className={Classes.sideMenu}>
                      <div className={Classes.sideMenuBox}>
                        {show?.education && (
                          <SectionSideMenu
                            onHide={() =>
                              setShow({ ...show, education: false })
                            }
                            onDelete={EDUCATION}
                            bg="#006772"
                            iconColor={"#fff"}
                          />
                        )}
                      </div>
                      <div>
                        <Heading
                          color={"#fff"}
                          title="EDUCATION"
                          fontSize={"22px"}
                          fontWeight={700}
                          line={true}
                          lineW="100%"
                          lineH="0.15em"
                          lineBg="#fff"
                          onSideSectionShow={() =>
                            setShow({ ...show, education: true })
                          }
                          
                        />
                        <Education
                          degree={true}
                          institution={true}
                          date={true}
                          summary={true}
                          parentContainerStyle={styles.parentDiv}
                          institutionStyle={Classes.company}
                          degreeStyle={Classes.programText}
                          dateStyle={Classes.date}
                          summaryStyle={Classes.description}
                          degree_placeholder="Study Program"
                          textColor="#fff"
                          maxWidth={'350px'}
                        />
                      </div>
                    </div>
                  )}
                </Box>
                <Underline height="0.1em" width="100%" bgColor="#fff" />
                {/* _____________ Work _____________ */}
                <Box margin={"20px 0px 10px 0px"}>
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
                          color={"#fff"}
                          title="WORK EXPERIENCE"
                          fontSize={"22px"}
                          fontWeight={700}
                          line={true}
                          lineW="100%"
                          lineH="0.15em"
                          lineBg="#fff"
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
                          parentContainerStyle={styles.parentDiv}
                          textColor="#fff"
                          maxWidth={'350px'}
                        />
                      </div>
                    </div>
                  )}
                </Box>
              </Box>
              {/* right container */}
              <Box
                width={"43%"}
                paddingLeft={"40px"}
                borderLeft={"1px solid #fff"}
              >
                {/* profile section */}
                <Box mb={"15px"}>
                  <Heading
                    title={"PROFILE"}
                    color="#fff"
                    fontSize={"22px"}
                    fontWeight={700}
                    line={true}
                    lineW="100%"
                    lineH="0.15em"
                    lineBg="#fff"
                  />
                  <About
                    minW="100%"
                    maxW="100%"
                    aboutStyle={Classes.aboutText}
                    fontColor="#fff"
                    fontSize="16px"
                    fontWeight={600}
                  />
                </Box>
                <Underline height="0.1em" width="100%" bgColor="#fff" />
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
                          color="#fff"
                          fontSize={"22px"}
                          fontWeight={700}
                          line={true}
                          lineW="100%"
                          lineH="0.15em"
                          lineBg="#fff"
                          onSideSectionShow={() =>
                            setShow({ ...show, skills: true })
                          }
                        />
                        <Skill
                          skillStyle={styles.contactFont}
                          progressBar={true}
                          strokeWidth="2"
                          lineStyle={styles.line}
                          strokeColor="#03a9f4"
                          trailColor="#fff"
                          percentageStyle={styles.percent}
                          parentContainerStyle={styles.parentDiv}
                          maxwidth={'130px'}

                        />
                      </div>
                    </div>
                  )}
                </Box>
                <Underline height="0.1em" width="100%" bgColor="#fff" />
                {/* _____________ Interst _____________ */}
                <Box margin={"20px 0px 10px 7px"}>
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
                          color="#fff"
                          fontSize={"22px"}
                          fontWeight={700}
                          line={true}
                          lineW="100%"
                          lineH="0.15em"
                          lineBg="#fff"
                          onSideSectionShow={() =>
                            setShow({ ...show, interest: true })
                          }
                        />
                        <Interest
                          parentContainerStyle={`${styles.parentDiv} ${styles.contactFont}`}
                          maxwidth={'300px'}
                        />
                      </div>
                    </div>
                  )}
                </Box>
                <Underline height="0.1em" width="100%" bgColor="#fff" />
                {/* _____________ organization _____________ */}
                <Box margin={"20px 0px 10px 7px"}>
                  {resumeData?.organization?.visible && (
                    <div className={Classes.sideMenu}>
                      <div className={Classes.sideMenuBox}>
                        {show.organization && (
                          <SectionSideMenu
                            bg="#006772"
                            iconColor={"#fff"}
                            onHide={() =>
                              setShow({ ...show, organization: false })
                            }
                            onDelete={ORGANIZATION}
                          />
                        )}
                      </div>
                      <div>
                        <Heading
                          title="ORGANIZATION"
                          color="#fff"
                          fontSize={"22px"}
                          fontWeight={700}
                          line={true}
                          lineW="100%"
                          lineH="0.15em"
                          lineBg="#fff"
                          onSideSectionShow={() =>
                            setShow({ ...show, organization: true })
                          }
                        />
                        <Organization
                          organization={true}
                          role={true}
                          rolePlaceholder="Role"
                          parentContainerStyle={`${styles.parentDiv} ${styles.contactFont}`}
                          maxwidth={'300px'}

                        />
                      </div>
                    </div>
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  );
}
