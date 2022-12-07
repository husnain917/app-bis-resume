import { Box, Flex, HStack, Link } from "@chakra-ui/react";
import { MdCastForEducation } from "react-icons/md";
import { BsFillLayersFill } from "react-icons/bs";
import { GoProject } from "react-icons/go";
import style from "../../styles/templates/template1.module.scss";
import Classes from "../../styles/templates/hybridTemplate.module.css";
import Class from "../../styles/templates/financialExpert.module.scss";
import { Tooltip } from "react-tippy";
import ImageSection from "../../src/components/commonSection/ImageSection";
import Name from "../../src/components/commonSection/Name";
import Profession from "../../src/components/commonSection/Profession";
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

import {
  EDUCATION,
  PROJECT,
  SKILL,
  WORK,
} from "../../src/components/tempSectionSide/SectionSideConstant";

const FinancialExpert = () => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  // custom Hook For Template
  const [show, setShow] = useShow();

  return (
    // ~~~~~~~~~~~~~~~~~~~~~~~~~ Hybrid Template ~~~~~~~~~~~~~~~~~~~~~~~~~//
    //Template Layout for Template Navbar
    <TempLayout education={true} skills={true} work={true} projects={true}>
      <div className={style.main}>
        <Link href={"/templates"}>
          <div
            style={{ position: "fixed", top: "70px", right: "30px" }}
            // marginTop={["10px", "10px", "0px", "0px", "0px", "0px"]}
          >
            <Tooltip title="Change Template" arrow distance={20}>
              <div className={style.swap}>
                <img src="/icons/swap.png" />
              </div>
            </Tooltip>
          </div>
        </Link>
        <Flex
          justifyContent={{ base: "none", lg: "center" }}
          bg={"blackAlpha.100"}
          overflow="auto"
          flexDir={"column"}
          alignItems={{ sm: "none", md: "center" }}
        >
          <Box minW={910} pb={2} bg={"white"} m={4} mt="100px" borderRadius={6}>
            <Box display="flex" flexDirection="row">
              <Box w="40%" backgroundColor={"#8d4b55"}></Box>
              <Box
                w="60%"
                minH="18em"
                display="flex"
                justifyContent="center"
                flexDirection="column"
                backgroundColor={"#8d4b55"}
              >
                <Name
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
                    lineBg="#8d4b55"
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
                              onHide={() => setShow({ ...show, skills: false })}
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
                          lineH="0.30em"
                          lineBg="#8d4b55"
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
                          // circleIconHeading={true}
                          icon={(props) => (
                            <MdCastForEducation
                              {...props}
                              size={18}
                              color={"white"}
                            />
                          )}
                          fontSize="23px"
                          fontWeight={"bold"}
                          line={true}
                          lineH="0.30em"
                          lineBg="#8d4b55"
                          lineStyle={Class.lineStyle}
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
              <Box minW={"58%"} maxW={"58%"} p={4} borderRadius={6}>
                <Heading
                  title={"About Me"}
                  color="black"
                  margin={"20px 0px 0px 0px"}
                  line={true}
                  lineH="0.30em"
                  lineBg="#8d4b55"
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

                {/* Project Section  */}
                {resumeData?.projects?.visible && (
                  <>
                    <HStack alignItems={"flex-start"}>
                      {/* Section Side Menu */}
                      {show.project && (
                        <SectionSideMenu
                          bg={"#313B47"}
                          onHide={() => setShow({ ...show, project: false })}
                          onDelete={PROJECT}
                        />
                      )}
                      {/* project Section Heading */}
                      <Heading
                        title="PERSONAL PROJECTS"
                        circleSize="38px"
                        circleBg="#313B47"
                        circleIconHeading={true}
                        icon={(props) => (
                          <GoProject {...props} size={18} color={"white"} />
                        )}
                        fontSize="23px"
                        fontWeight={"bold"}
                        color="#313B47"
                        minW={350}
                        maxW={350}
                        margin={"15px 0px"}
                        onSideSectionShow={() =>
                          setShow({ ...show, project: true })
                        }
                      />
                    </HStack>
                    {/* project Component */}
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
                  </>
                )}
              </Box>
            </HStack>
          </Box>
        </Flex>
      </div>
    </TempLayout>
  );
};

export default FinancialExpert;
