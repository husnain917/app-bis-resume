import { Box, Flex, HStack } from "@chakra-ui/react";
import Classes from "../../styles/templates/hybridTemplate.module.css";
import Class from "../../styles/templates/fashion2.module.scss";
import Name from "../components/commonSection/Name";
import About from "../components/commonSection/About";
import Contact from "../components/commonSection/Contact";
import Heading from "../components/commonSection/Heading";
import Education from "../components/commonSection/Education";
import WorkExperience from "../components/commonSection/WorkExperience";
import Skill from "../components/commonSection/Skill";
import { useSelector } from "react-redux";
import useShow from "../components/tempSectionSide/useShow";
import SectionSideMenu from "../components/tempSectionSide/SectionSideMenu";
import ImageSelector from "../components/imageSelector";
import {
  EDUCATION,
  SKILL,
  WORK,
} from "../components/tempSectionSide/SectionSideConstant";

const FashionDesigner2 = () => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const { backgroundColor, color } = useSelector(
    (store) => store.themeReducer.theme
  );
  // custom Hook For Template
  const [show, setShow] = useShow();

  return (
    // ~~~~~~~~~~~~~~~~~~~~~~~~~ Fashion Designer Templat ~~~~~~~~~~~~~~~~~~~~~~~~~//
    <Flex
      justifyContent={{ base: "none", lg: "center" }}
      flexDir={"column"}
      alignItems={{ sm: "none", lg: "center" }}
      bg={"#fff"}
    >
      <Box
        minW="830px"
        maxW="830px"
        mb={"20px"}
        bg={"whitesmoke"}
        padding={"40px 0px"}
        borderRadius={6}
      >
        <Box
          w="100%"
          minH="10em"
          display="flex"
          justifyContent="center"
          flexDirection="column"
          backgroundColor={backgroundColor ? backgroundColor : "#00b4d8"}
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
          <Box maxWidth={"800px"}>
            <Name
              parentContainerStyle="fD2textContainer"
              maxWidth={"260px"}
              FNameStyle="fDesigner2"
              SNameStyle="fDesigner2a"
              FName={true}
              SName={true}
              maxChr={38}
              lineHeight={1}
              textAlign={"center"}
            />
            {/* Profession Section  */}
          </Box>
        </HStack>
        <HStack mt={5} alignItems="stretch" justifyContent={"space-evenly"}>
          <Box minW={280} maxW={380} h="full">
            <Box pl={8}>
              <Heading
                title={"Profile"}
                color="black"
                margin={"20px 0px 0px 0px"}
                line={true}
                lineW="45%"
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
                margin={"0px 4px 0px 4px"}
                parentStyle={Class.parentStyle}
                style={Class.style}
                maxWidth={"300px"}
              />
              {/* _____________ Skill _____________ */}
              <Box margin={"20px 0px 10px 0px"}>
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
            </Box>
          </Box>
          <Box minW={302} maxW={302} p={4} borderRadius={6}>
            {/* Education Section  */}
            <Box margin={"20px 0px 0px 0px"}>
              {resumeData?.education?.visible && (
                <div className={Classes.sideMenu}>
                  <div className={Classes.sideMenuBox}>
                    {show.education && (
                      <SectionSideMenu
                        bg="#006772"
                        iconColor={"#fff"}
                        onHide={() => setShow({ ...show, education: false })}
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
                      maxWidth={"340px"}
                      datewidthmax={"140px"}
                      maxChr={20}
                    />
                  </div>
                </div>
              )}
            </Box>
            {/* Work Experience Section */}
            <Box margin={"20px 0px 0px 0px"}>
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
                      margin={"20px 0px 0px 0px"}
                      onSideSectionShow={() => setShow({ ...show, work: true })}
                    />
                    <WorkExperience
                      date={true}
                      position={true}
                      company={true}
                      location={true}
                      location_placeholder="Country,City"
                      dateStyle={Classes.date}
                      positionStyle={Classes.programText}
                      companyStyle={Classes.institute}
                      locationStyle={Classes.date}
                      summaryStyle={Classes.date}
                      maxWidth={"340px"}
                      datewidthmax={"140px"}
                      maxChr={20}
                    />
                  </div>
                </div>
              )}
            </Box>
          </Box>
        </HStack>
      </Box>
    </Flex>
  );
};

export default FashionDesigner2;
