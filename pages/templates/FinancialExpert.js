import { Box, Flex, HStack } from "@chakra-ui/react";
import style from "../../styles/templates/template1.module.scss";
import Classes from "../../styles/templates/hybridTemplate.module.css";
import Class from "../../styles/templates/financialExpert.module.scss";
import Name from "../../src/components/commonSection/Name";
import About from "../../src/components/commonSection/About";
import Contact from "../../src/components/commonSection/Contact";
import Heading from "../../src/components/commonSection/Heading";
import Education from "../../src/components/commonSection/Education";
import WorkExperience from "../../src/components/commonSection/WorkExperience";
import Skill from "../../src/components/commonSection/Skill";
import Project from "../../src/components/commonSection/Project";
import TempLayout from "../../src/components/tempNav/TempLayout";
import { useSelector } from "react-redux";
import useShow from "../../src/components/tempSectionSide/useShow";
import SectionSideMenu from "../../src/components/tempSectionSide/SectionSideMenu";
import ImageSelector from "../../src/components/imageSelector";
import ChangeTempBtn from "../../src/components/changeTempbtn/ChangeTempBtn";
import {
  EDUCATION,
  PROJECT,
  SKILL,
  WORK,
} from "../../src/components/tempSectionSide/SectionSideConstant";
import PDFGenerater from "../../src/components/tempNav/PDFGenerater";

const FinancialExpert = () => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const { backgroundColor, color } = useSelector(
    (store) => store.themeReducer.theme
  );
  // custom Hook For Template
  const [show, setShow] = useShow();
  // PDF Download Hook
  const { downloadPDFHandler, pdfRef } = PDFGenerater();

  return (
    // ~~~~~~~~~~~~~~~~~~~~~~~~~ Financial Template ~~~~~~~~~~~~~~~~~~~~~~~~~//
    <Box style={{ overflow: "auto" }}>
      {/* //Template Layout for Template Navbar */}
      <TempLayout education={true} skills={true} work={true} projects={true} downloadPDF={downloadPDFHandler}>
        <div className={style.main}>
          <ChangeTempBtn />

          <Flex
            justifyContent={{ base: "none", lg: "center" }}
            bg={"#fff"}
            overflow="auto"
            flexDir={"column"}
            alignItems={{ sm: "none", md: "center" }}
          >
            <Box
              margin={'100px 10px 20px 10px'}
            >
              <Box
                minW={910}
                padding={'40px 0px'}
                bg={"whitesmoke"}
                borderRadius={6}
                ref={pdfRef}
              >
                <Box display="flex" flexDirection="row">
                  <Box w="40%" backgroundColor={backgroundColor ? backgroundColor : '#a4133c'}></Box>
                  <Box
                    w="60%"
                    minH="18em"
                    display="flex"
                    justifyContent="center"
                    flexDirection="column"
                    backgroundColor={backgroundColor ? backgroundColor : '#a4133c'}
                  >
                    <Name
                      fontColor={color ? color : '#000000'}
                      FName={true}
                      SName={true}
                      FNameStyle={"fullName1"}
                      SNameStyle={"fullName2"}
                    />
                  </Box>
                </Box>
                <HStack mt={5} alignItems="stretch">
                  <Box minW={"40%"} maxW={"40%"} h="full">
                    <Box pl={8}>
                      {/* ImageSection */}
                      <ImageSelector marginTop="-150px" marginLeft="10px" />
                      <Heading
                        title={"My Contact"}
                        color="black"
                        margin={"35px 0px 0px 0px"}
                        line={true}
                        lineH="0.30em"
                        lineBg={backgroundColor}
                        fontSize={"1.8em"}
                        lineStyle={Class.lineStyle}
                      />
                      <Contact
                        parentDirection="column"
                        phone={true}
                        email={true}
                        location={true}
                        website={true}
                        circleIcon={true}
                        iconColor="black"
                        iconSize={"24px"}
                        margin={"2px 0px 2px 0px"}
                        parentStyle={Class.parentStyle}
                        style={Class.style}
                      />
                      {/* _____________ Skill _____________ */}
                      <Box margin={'20px 0px 10px 0px'}>
                        {resumeData?.skills?.visible && (
                          <div className={Classes.sideMenu}>
                            <div className={Classes.sideMenuBox}>
                              {show.skills && (
                                <SectionSideMenu
                                  onHide={() =>
                                    setShow({ ...show, skills: false })
                                  }
                                  bg="#006772"
                                  iconColor={"#fff"}
                                  onDelete={SKILL}
                                />
                              )}
                            </div>
                            <div>
                              <Heading
                                title={"Skills"}
                                color="black"
                                margin={"20px 0px 0px 0px"}
                                onSideSectionShow={() =>
                                  setShow({ ...show, skills: true })
                                }
                                line={true}
                                lineH="0.30em"
                                lineBg={backgroundColor}
                                fontSize={"1.8em"}
                                lineStyle={Class.lineStyle}
                              />
                              <Skill
                                skillStyle={Classes.skillText}
                                rating={true}
                                strokeWidth="2"
                                strokeColor={backgroundColor}
                                trailColor="#fff"
                              />
                            </div>
                          </div>
                        )}
                      </Box>
                      {/* Education Section  */}
                      <Box
                        margin={'20px 0px 0px 0px'}
                      >
                        {resumeData?.education?.visible && (
                          <div className={Classes.sideMenu}>
                            <div className={Classes.sideMenuBox}>
                              {show.education && (
                                <SectionSideMenu
                                  bg="#006772"
                                  iconColor={"#fff"}
                                  onHide={() =>
                                    setShow({ ...show, education: false })
                                  }
                                  onDelete={EDUCATION}
                                />
                              )}
                            </div>
                            <div>
                              <Heading
                                title="EDUCATION"
                                fontSize="23px"
                                fontWeight={"bold"}
                                line={true}
                                lineH="0.30em"
                                lineBg={backgroundColor}
                                lineStyle={Class.lineStyle}
                                margin={"20px 0px 0px 0px"}
                                onSideSectionShow={() =>
                                  setShow({ ...show, education: true })
                                }
                              />
                              <Education
                                institution={true}
                                degree={true}
                                degree_placeholder="Study Program"
                                date={true}
                                location={true}
                                institutionStyle={Classes.institute}
                                degreeStyle={Classes.programText}
                                dateStyle={Classes.date}
                                locationStyle={Classes.date}
                              />
                            </div>
                          </div>
                        )}
                      </Box>
                    </Box>
                  </Box>
                  <Box minW={"58%"} maxW={"58%"} p={4} borderRadius={6}>
                    <Heading
                      title={"About Me"}
                      color="black"
                      margin={"20px 0px 0px 0px"}
                      line={true}
                      lineH="0.30em"
                      lineBg={backgroundColor}
                      fontSize={"1.8em"}
                      lineStyle={Class.lineStyle}
                    />

                    <About
                      minW="100%"
                      maxW="100%"
                      aboutStyle={Classes.aboutText}
                      textColor="black"
                      fontWeight="600"
                      margin={"20px 0px 20px 0px"}
                    />
                    {/* Work Experience Section */}
                    <Box
                      margin={'20px 0px 10px 0px'}
                    >
                      {resumeData?.work?.visible && (
                        <div className={Classes.sideMenu}>
                          <div className={Classes.sideMenuBox}>
                            {show.work && (
                              <SectionSideMenu
                                bg="#006772"
                                iconColor={"#fff"}
                                onHide={() => setShow({ ...show, work: false })}
                                onDelete={WORK}
                              />
                            )}
                          </div>
                          <div>
                            <Heading
                              title="WORK EXPERIENCE"
                              line={true}
                              lineH="0.30em"
                              lineBg={backgroundColor}
                              lineStyle={Class.lineStyle}
                              fontSize="23px"
                              fontWeight={"bold"}
                              color="#313B47"
                              minW={"full"}
                              maxW="full"
                              margin={"20px 0px"}
                              onSideSectionShow={() =>
                                setShow({ ...show, work: true })
                              }
                            />
                            <WorkExperience
                              date={true}
                              position={true}
                              company={true}
                              location={true}
                              summary={true}
                              summary_placeholder="Company Description (optional,fill when the company is not well known"
                              location_placeholder="Country,City"
                              dateStyle={Classes.date}
                              positionStyle={Classes.programText}
                              companyStyle={Classes.institute}
                              locationStyle={Classes.date}
                              summaryStyle={Classes.date}
                            />
                          </div>
                        </div>
                      )}
                    </Box>
                    {/* Project Section  */}
                    <Box
                      margin={'20px 0px 10px 0px'}
                    >
                      {resumeData?.projects?.visible && (
                        <div className={Classes.sideMenu}>
                          <div className={Classes.sideMenuBox}>
                            {show.project && (
                              <SectionSideMenu
                                bg="#006772"
                                iconColor={"#fff"}
                                onHide={() => setShow({ ...show, project: false })}
                                onDelete={PROJECT}
                              />
                            )}
                          </div>
                          <div>
                            <Heading
                              title="PERSONAL PROJECTS"
                              line={true}
                              lineH="0.30em"
                              lineBg={backgroundColor}
                              lineStyle={Class.lineStyle}
                              fontSize="23px"
                              fontWeight={"bold"}
                              color="#313B47"
                              minW={350}
                              maxW={350}
                              margin={"20px 0px"}
                              onSideSectionShow={() =>
                                setShow({ ...show, project: true })
                              }
                            />
                            <Project
                              project={true}
                              duration={true}
                              summary={true}
                              projectStyle={Classes.projectTitleText}
                              summaryStyle={Classes.description}
                              durationStyle={Classes.description}
                              projectPlaceholder={"Project Name"}
                              durationPlaceholder="Project Duration"
                              summaryPlaceholder="Project Summary"
                            />
                          </div>
                        </div>
                      )}
                    </Box>
                  </Box>
                </HStack>
              </Box>
            </Box>
          </Flex>
        </div>
      </TempLayout>
    </Box>
  );
};

export default FinancialExpert;
