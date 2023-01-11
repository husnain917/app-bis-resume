import { Box, Flex, HStack } from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import style from "../../styles/templates/template1.module.scss";
import Classes from "../../styles/templates/hybridTemplate.module.css";
import Name from "../../src/components/commonSection/Name";
import About from "../../src/components/commonSection/About";
import Contact from "../../src/components/commonSection/Contact";
import Heading from "../../src/components/commonSection/Heading";
import Education from "../../src/components/commonSection/Education";
import WorkExperience from "../../src/components/commonSection/WorkExperience";
import TempLayout from "../../src/components/tempNav/TempLayout";
import { useSelector } from "react-redux";
import useShow from "../../src/components/tempSectionSide/useShow";
import SectionSideMenu from "../../src/components/tempSectionSide/SectionSideMenu";
import ImageSelector from "../../src/components/imageSelector";
import Class from "../../styles/templates/salesRepresentative.module.scss";
import Skill from "../../src/components/commonSection/Skill";
import Reference from "../../src/components/commonSection/Reference";
import {
  EDUCATION,
  SKILL,
  WORK,
  REFERENCE,
} from "../../src/components/tempSectionSide/SectionSideConstant";
import ChangeTempBtn from "../../src/components/changeTempbtn/ChangeTempBtn";
import PDFGenerater from "../../src/components/tempNav/PDFGenerater";

const SalesRepresentative = () => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const { backgroundColor, color } = useSelector(
    (store) => store.themeReducer.theme
  );  // custom Hook For Template
  const [show, setShow] = useShow();
  // PDF Download Hook
  const { downloadPDFHandler, pdfRef } = PDFGenerater();
  return (
    // ~~~~~~~~~~~~~~~~~~~~~~~~~ Hybrid Template ~~~~~~~~~~~~~~~~~~~~~~~~~//
    <Box style={{ overflow: "auto" }}>
      {/* //Template Layout for Template Navbar */}
      <TempLayout education={true} skills={true} work={true} references={true} downloadPDF={downloadPDFHandler}>
        <div className={style.main}>
          <ChangeTempBtn />

          <Flex
            justifyContent={{ base: "none", lg: "center" }}
            bg={"blackAlpha.100"}
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
                background={"whitesmoke"}
                borderRadius={6}
                ref={pdfRef}
              >
                <Box display="flex" flexDirection="row" background={"whitesmoke"}>
                  <Box w="20%" minH="25em" backgroundColor={backgroundColor}></Box>
                </Box>
                <HStack
                  display="flex"
                  alignItems={"center"}
                  justifyContent="center"
                  background={"whitesmoke"}
                >
                  <HStack
                    mt={5}
                    alignItems="stretch"
                    marginTop={"-35%"}
                    width={"92%"}
                  >
                    <Box
                      w="40%"
                      h="full"
                      borderWidth={1}
                      borderColor={"black"}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      bg={"whitesmoke"}
                    >
                      <Box pl={8}>
                        <ImageSelector
                          maxH={"16em"}
                          maxW={"16em"}
                          borderRadius="50%"
                          marginTop={"8"}
                        />
                        <Heading
                          title={"My Contact"}
                          color="black"
                          margin={"35px 0px 0px 0px"}
                          line={true}
                          lineW="45%"
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
                                  lineW="45%"
                                  lineH="0.30em"
                                  lineBg={backgroundColor}
                                  fontSize={"1.8em"}
                                  lineStyle={Class.lineStyle}
                                />
                                <Skill
                                  skillStyle={Classes.skillText}
                                  rating={true}
                                  strokeWidth="2"
                                  strokeColor="#1890ff"
                                  trailColor="#fff"
                                />
                              </div>
                            </div>
                          )}
                        </Box>
                        {/* Reference Section  */}
                        <Box margin={'20px 0px 10px 0px'}>
                          {resumeData?.references?.visible && (
                            <div className={Classes.sideMenu}>
                              <div className={Classes.sideMenuBox}>
                                {show.references && (
                                  <SectionSideMenu
                                    onHide={() =>
                                      setShow({ ...show, references: false })
                                    }
                                    bg="#006772"
                                    iconColor={"#fff"}
                                    onDelete={REFERENCE}
                                  />
                                )}
                              </div>
                              <div>
                                <Heading
                                  title={"REFERENCE"}
                                  margin={"5px 0px 0px 0px"}
                                  iconHeading={true}
                                  icon={(props) => (
                                    <MdEmail {...props} size={20} color={backgroundColor} />
                                  )}
                                  color={"black"}
                                  fontSize={20}
                                  fontWeight="600"
                                  textPadding={"0px 0px 1px 0px"}
                                  padding={"0px 0px 0px 5px"}
                                  letterSpacing={3}
                                  minW={250}
                                  maxW={400}
                                  onSideSectionShow={() =>
                                    setShow({ ...show, references: true })
                                  }
                                />
                                <Reference
                                  name={true}
                                  profession={true}
                                  email={true}
                                  phone={true}
                                  phoneStyle={Class.profileText}
                                  emailStyle={Class.profileText}
                                  professionStyle={Class.profileText}
                                  nameStyle={Class.profileText}
                                  DndDirection="horizontal"
                                  parentContainerStyle={Class.parentContainerStyle}
                                />
                              </div>
                            </div>
                          )}
                        </Box>
                      </Box>
                    </Box>
                    <Box>
                      <Box
                        minW={350}
                        maxW={500}
                        bg="whitesmoke"
                        borderRadius={6}
                        marginLeft={"2em"}
                      >
                        <Box mt={-5}>
                          <Name
                            FName={true}
                            SName={true}
                            direction="column"
                            FNameStyle={Class.fName}
                            SNameStyle={Class.sName}
                          />
                          {/* About Section  */}
                          <Box mt="4">
                            <About
                              aboutStyle={Class.profileText}
                              maxW={"660px"}
                              minW={"660px"}
                            />
                          </Box>
                        </Box>
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
                                  maxW={"400"}
                                  title="WORK EXPERIENCE"
                                  line={true}
                                  lineH="0.30em"
                                  lineBg={backgroundColor}
                                  lineStyle={Class.lineStyle}
                                  fontSize="23px"
                                  fontWeight={"bold"}
                                  color="#313B47"
                                  margin={"20px 0px 0px 0px"}
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
                        {/* Education Section  */}
                        <Box
                          margin={'30px 0px 10px 0px'}
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
                                  line={true}
                                  lineH="0.30em"
                                  lineBg={backgroundColor}
                                  lineStyle={Class.lineStyle}
                                  fontSize="23px"
                                  fontWeight={"bold"}
                                  color="#313B47"
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
                  </HStack>
                </HStack>
              </Box>
            </Box>
          </Flex>
        </div>
      </TempLayout>
    </Box>
  );
};

export default SalesRepresentative;
