import { Box, Flex, HStack, Link } from "@chakra-ui/react";
import { BsFillLayersFill } from "react-icons/bs";
import { MdCastForEducation, MdEmail } from "react-icons/md";
import style from "../../styles/templates/template1.module.scss";
import Classes from "../../styles/templates/hybridTemplate.module.css";
import { Tooltip } from "react-tippy";
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
import { Center, Image } from "@chakra-ui/react";
import PDFGenerater from "../../src/components/tempNav/PDFGenerater";

const SalesRepresentative = () => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  // custom Hook For Template
  const [show, setShow] = useShow();
  // PDF Download Hook
  const { downloadPDFHandler, pdfRef } = PDFGenerater();
  return (
    // ~~~~~~~~~~~~~~~~~~~~~~~~~ Hybrid Template ~~~~~~~~~~~~~~~~~~~~~~~~~//
    <Box style={{ overflow: "auto" }}>
      {/* //Template Layout for Template Navbar */}
      <TempLayout education={true} skills={true} work={true} reference={true} downloadPDF={downloadPDFHandler}>
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
                  <Box w="20%" minH="25em" backgroundColor="#DBCABA"></Box>
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
                    // borderWidth={1}
                    // borderColor={"black"}
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
                          lineBg="#077BBD"
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
                          // style={"manager-f-name"}
                          margin={"2px 0px 2px 0px"}
                          parentStyle={Class.parentStyle}
                          style={Class.style}
                        />
                        {/* _____________ Skill _____________ */}
                        {resumeData?.skills?.visible && (
                          <>
                            <HStack alignItems={"flex-start"} mt={10}>
                              <Box w="20px" ml={"-27px"}>
                                {show.skills && (
                                  <SectionSideMenu
                                    onHide={() =>
                                      setShow({ ...show, skills: false })
                                    }
                                    bg="#E0EFFA"
                                    iconColor={"#2A78AB"}
                                    onDelete={SKILL}
                                  />
                                )}
                              </Box>

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
                                lineBg="#077BBD"
                                fontSize={"1.8em"}
                                lineStyle={Class.lineStyle}
                              />
                            </HStack>
                            <Skill
                              skillStyle={Classes.skillText}
                              rating={true}
                              strokeWidth="2"
                              // lineStyle={styles.line}
                              strokeColor="#1890ff"
                              trailColor="#fff"
                            // percentageStyle={styles.percent}
                            // parentContainerStyle={Classes.ml}
                            />
                          </>
                        )}
                        {/* Reference Section  */}
                        {resumeData?.references?.visible && (
                          <>
                            <HStack alignItems={"flex-start"}>
                              {/* Reference Section Heading */}
                              <Heading
                                title={"REFERENCE"}
                                // headBg={"#3498DB"}
                                margin={"10px 0px 0px 0px"}
                                iconHeading={true}
                                icon={(props) => (
                                  <MdEmail {...props} size={20} color={"blue"} />
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
                              {/* Section Side Menu */}
                              {show.references && (
                                <SectionSideMenu
                                  onHide={() =>
                                    setShow({ ...show, references: false })
                                  }
                                  onDelete={REFERENCE}
                                />
                              )}
                            </HStack>
                            {/* &nbsp; */}
                            {/* Reference Component */}
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
                          </>
                        )}
                      </Box>
                    </Box>
                    <Box>
                      <Box
                        minW={350}
                        maxW={500}
                        bg="whitesmoke"
                        //   p={4}
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
                          {/* <Profession professionStyle={Classes.ProfessionHybrid} /> */}
                          <Box mt="4">
                            <About
                              aboutStyle={Class.profileText}
                              maxW={"660px"}
                              minW={"660px"}
                            />
                          </Box>
                        </Box>
                        {/* Work Experience Section */}
                        {resumeData?.work?.visible && (
                          <>
                            <HStack alignItems={"flex-start"} mt={4}>
                              {/* Section Side Menu */}
                              {show.work && (
                                <SectionSideMenu
                                  bg={"#313B47"}
                                  onHide={() => setShow({ ...show, work: false })}
                                  onDelete={WORK}
                                />
                              )}
                              {/* Work Experience Heading  */}
                              <Heading
                                maxW={"400"}
                                title="WORK EXPERIENCE"
                                circleSize="38px"
                                circleBg="#313B47"
                                circleIconHeading={true}
                                icon={(props) => (
                                  <BsFillLayersFill
                                    {...props}
                                    size={18}
                                    color={"white"}
                                  />
                                )}
                                fontSize="23px"
                                fontWeight={"bold"}
                                color="#313B47"
                                // minW={"full"}
                                // maxW="full"
                                margin={"10px 0px"}
                                onSideSectionShow={() =>
                                  setShow({ ...show, work: true })
                                }
                              />
                            </HStack>
                            {/* Work Experience Components */}
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
                          </>
                        )}
                        {/* Education Section  */}
                        {resumeData?.education?.visible && (
                          <>
                            <HStack alignItems={"flex-start"} mt={4}>
                              {/* Section Side Menu */}
                              {show.education && (
                                <SectionSideMenu
                                  bg={"#313B47"}
                                  onHide={() =>
                                    setShow({ ...show, education: false })
                                  }
                                  onDelete={EDUCATION}
                                />
                              )}
                              {/* Heading For Education Section  */}
                              <Heading
                                title="EDUCATION"
                                circleSize="38px"
                                circleBg="#313B47"
                                circleIconHeading={true}
                                icon={(props) => (
                                  <MdCastForEducation
                                    {...props}
                                    size={18}
                                    color={"white"}
                                  />
                                )}
                                fontSize="23px"
                                fontWeight={"bold"}
                                color="#313B47"
                                margin={"0px 0px 10px 0px"}
                                onSideSectionShow={() =>
                                  setShow({ ...show, education: true })
                                }
                              />
                            </HStack>
                            {/* Education Components */}
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
                          </>
                        )}
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
