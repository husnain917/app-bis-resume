import { Box, Flex, HStack, Link } from "@chakra-ui/react";
import { MdCastForEducation } from "react-icons/md";
import { BsFillLayersFill } from "react-icons/bs";
import style from "../../styles/templates/template1.module.scss";
import Classes from "../../styles/templates/hybridTemplate.module.css";
import Class from "../../styles/templates/fashion2.module.scss";
import Name from "../../src/components/commonSection/Name";
import About from "../../src/components/commonSection/About";
import Contact from "../../src/components/commonSection/Contact";
import Heading from "../../src/components/commonSection/Heading";
import Education from "../../src/components/commonSection/Education";
import WorkExperience from "../../src/components/commonSection/WorkExperience";
import Skill from "../../src/components/commonSection/Skill";
import TempLayout from "../../src/components/tempNav/TempLayout";
import { useSelector } from "react-redux";
import useShow from "../../src/components/tempSectionSide/useShow";
import SectionSideMenu from "../../src/components/tempSectionSide/SectionSideMenu";
import ImageSelector from "../../src/components/imageSelector";
import {
  EDUCATION,
  SKILL,
  WORK,
} from "../../src/components/tempSectionSide/SectionSideConstant";
import ChangeTempBtn from "../../src/components/changeTempbtn/ChangeTempBtn";

const FashionDesigner2 = () => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  // custom Hook For Template
  const [show, setShow] = useShow();

  return (
    // ~~~~~~~~~~~~~~~~~~~~~~~~~ Fashion Designer Templat ~~~~~~~~~~~~~~~~~~~~~~~~~//
    <Box style={{ overflow: "auto" }}>
      {/* //Template Layout for Template Navbar */}
      <TempLayout education={true} skills={true} work={true}>
        <ChangeTempBtn />

        <div className={style.main}>
          <Flex
            justifyContent={{ base: "none", lg: "center" }}
            bg={"blackAlpha.100"}
            overflow="auto"
            flexDir={"column"}
            alignItems={{ sm: "none", md: "center" }}
          >
            <Box
              minW={910}
              pt={12}
              pb={2}
              // px={2}
              bg={"white"}
              m={4}
              mt="100px"
              borderRadius={6}
            >
              <Box
                w="100%"
                minH="10em"
                display="flex"
                justifyContent="center"
                flexDirection="column"
                backgroundColor="#077BBD"
              ></Box>
              <HStack
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                flexDir={"column"}
              >
                {/* Image Section  */}
                <ImageSelector
                  maxHeight={"12em"}
                  maxWidth={"12em"}
                  minHeight={"12em"}
                  minWidth={"12em"}
                  marginLeft={"10px"}
                  marginTop={"-70%"}
                />
                <Box>
                  <Name
                    parentContainerStyle="fD2textContainer"
                    FNameStyle="fDesigner2"
                    SNameStyle="fDesigner2a"
                    FName={true}
                    SName={true}
                  />
                  {/* Profession Section  */}
                  {/* <Profession professionStyle={Classes.ProfessionHybrid} /> */}
                </Box>
              </HStack>
              <HStack
                mt={5}
                alignItems="stretch"
                justifyContent={"space-evenly"}
              >
                <Box minW={280} maxW={380} h="full">
                  <Box pl={8}>
                    <Heading
                      title={"Profile"}
                      color="black"
                      margin={"20px 0px 0px 0px"}
                      line={true}
                      lineW="45%"
                      lineH="0.30em"
                      lineBg="#077BBD"
                      fontSize={"1.8em"}
                      lineStyle={Class.lineStyle}
                    />

                    <About
                      minW="100%"
                      maxW="100%"
                      aboutStyle={Classes.aboutText}
                      textColor="black"
                      fontWeight="600"
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
                      margin={"0px 4px 0px 4px"}
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
                  </Box>
                </Box>
                <Box minW={302} maxW={302} p={4} borderRadius={6}>
                  {/* Education Section  */}
                  {resumeData?.education?.visible && (
                    <>
                      <HStack alignItems={"flex-start"}>
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
                  {/* Work Experience Section */}
                  {resumeData?.work?.visible && (
                    <>
                      <HStack alignItems={"flex-start"}>
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
                          minW={"full"}
                          maxW="full"
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
                </Box>
              </HStack>
            </Box>
          </Flex>
        </div>
      </TempLayout>
    </Box>
  );
};

export default FashionDesigner2;
