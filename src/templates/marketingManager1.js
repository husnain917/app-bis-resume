import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Name from "../components/commonSection/Name";
import Classes from "../../styles/templates/marketingManager1.module.css";
import ImageSelector from "../components/imageSelector";
import Profession from "../components/commonSection/Profession";
import Heading from "../components/commonSection/Heading";
import WorkExperience from "../components/commonSection/WorkExperience";
import Contact from "../components/commonSection/Contact";
import Education from "../components/commonSection/Education";
import Skill from "../components/commonSection/Skill";
import { useSelector } from "react-redux";
import useShow from "../components/tempSectionSide/useShow";
import SectionSideMenu from "../components/tempSectionSide/SectionSideMenu";
import {
  EDUCATION,
  SKILL,
  WORK,
} from "../components/tempSectionSide/SectionSideConstant";

const MarketingManager1 = () => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  // custom Hook For Template
  const [show, setShow] = useShow();
  const { backgroundColor, color } = useSelector(
    (store) => store.themeReducer.theme
  );
  const MainHeading = ({
    title,
    weight,
    line1bBg,
    line2Bg,
    txtColor,
    onCl,
    w,
  }) => (
    <>
      <Heading
        fontSize={23}
        title={title}
        letterSpacing={1}
        fontWeight={weight}
        color={txtColor}
        onSideSectionShow={onCl}
        minW={w}
      />
      <div
        style={{
          height: "3px",
          width: "full",
          display: "flex",
          alignItems: "center",
          backgroundColor: line1bBg,
          marginBottom: "10px",
        }}
      >
        <div
          style={{
            height: "5px",
            width: "40%",

            backgroundColor: line2Bg,
          }}
        ></div>
      </div>
    </>
  );
  return (
    // ==========Marketing Manager Template 1 ===========
    <Flex
      justifyContent={{ base: "none", lg: "center" }}
      flexDir={"column"}
      alignItems={{ sm: "none", lg: "center" }}
      bg={"#fff"}
    >
      <Box
        minW={830}
        maxW={830}
        borderRadius={6}
        bg={backgroundColor ? backgroundColor : "#1c2125"}
        pr={"30px"}
        borderWidth="1px"
        borderColor={"black"}
        mb={"0px"} minHeight={1183}
      >
        {/* ============== Profile Section ============== */}
        <div style={{ display: "flex", marginLeft: "3pc" }}>
          <Box
            h={260}
            w={"205px"}
            bg={"white"}
            borderBottomRadius={"8%"}
            display="flex"
            alignItems={"flex-end"}
            justifyContent="center"
            pb={2}
            mr={5}
            px="10px"
          >
            <ImageSelector
              minWidth={"180px"}
              maxWidth="180px"
              minHeight={"180px"}
              maxHeight="180px"
              borderRadius={"18%"}
            />
          </Box>
          <Box display={"flex"} justifyContent="center" w="full" mt={20}>
            <Box display={"flex"} flexDir="column" alignItems={"center"}>
              <Name
                FName={true}
                SName={true}
                direction="row"
                FNameStyle={Classes.name}
                SNameStyle={Classes.name}
                maxWidth={"220px"}
                minWidth={"200px"}
                maxChr={38}
              />
              <Box h={"2px"} bg={color ? color : "#fff"} width={"full"}></Box>
              <Profession
                professionStyle={Classes.profession}
                maxWidth={"400px"}
              />
            </Box>
          </Box>
        </div>
        <Box display={"flex"} alignItems={"stretch"} mt={10}>
          {/* ============== Work Experience Section ============== */}

          <Box
            minW={"460"}
            maxW="460"
            bg={"white"}
            py={"40px"}
            pr={"30px"}
            borderBottomLeftRadius={5}
            borderTopRightRadius={"50px"}
          >
            {resumeData?.work?.visible && (
              <div className={Classes.sideMenu}>
                <div className={Classes.sideMenuBox}>
                  {show.work && (
                    <SectionSideMenu
                      onHide={() => setShow({ ...show, work: false })}
                      onDelete={WORK}
                      bg="#006772"
                      iconColor={"#fff"}
                    />
                  )}
                </div>
                <div>
                  <MainHeading
                    line1bBg={"#CCC"}
                    line2Bg={backgroundColor ? backgroundColor : "#000000"}
                    title="EXPERIENCE"
                    weight={700}
                    txtColor={backgroundColor ? backgroundColor : "#000000"}
                    onCl={() => setShow({ ...show, work: true })}
                    w="400px"
                  />
                  <WorkExperience
                    company={true}
                    position={true}
                    summary={true}
                    companyStyle={Classes.company}
                    positionStyle={Classes.position}
                    summaryStyle={Classes.description}
                    margin={"5px 0px"}
                    maxWidth={"400px"}
                    maxChr={20}
                    datewidthmax={"180px"}
                  />
                </div>
              </div>
            )}
          </Box>
          <Box minW={"300px"} maxW="300px" pr="20px" py={"20px"}>
            {/* ============== Contact Section ============== */}
            <div style={{ marginLeft: "28px" }}>
              <MainHeading
                line1bBg={color ? color : "#fff"}
                line2Bg="#273746"
                title="CONTACT"
                weight={600}
                txtColor={color ? color : "#fff"}
              />
              <Contact
                email={true}
                phone={true}
                website={true}
                circleIcon={true}
                circleBg={color ? color : "#fff"}
                iconColor={backgroundColor ? backgroundColor : "#000000"}
                circleSize="25px"
                style={Classes.profileText}
                margin={"7px 0px"}
                maxWidth={"200px"}
              />
            </div>
            {/* ============== Education Section ============== */}
            {resumeData?.education?.visible && (
              <div className={Classes.sideMenu}>
                <div className={Classes.sideMenuBox}>
                  {show.education && (
                    <SectionSideMenu
                      onHide={() => setShow({ ...show, education: false })}
                      onDelete={EDUCATION}
                      bg="#006772"
                      iconColor={"#fff"}
                    />
                  )}
                </div>
                <div>
                  <MainHeading
                    line1bBg={color ? color : "#fff"}
                    line2Bg="#273746"
                    title="EDUCATION"
                    weight={600}
                    txtColor={color ? color : "#fff"}
                    onCl={() => setShow({ ...show, education: true })}
                  />
                  <Education
                    degree={true}
                    institution={true}
                    date={true}
                    degreeStyle={Classes.institute}
                    institutionStyle={Classes.institute}
                    dateStyle={Classes.date}
                    degree_placeholder="Study Program"
                    margin="5px 0px"
                    maxWidth={"240px"}
                    maxChr={20}
                    datewidthmax={"100px"}
                  />
                </div>
              </div>
            )}

            {/* ============== Expertise or Skill Section ============== */}
            {resumeData?.skills?.visible && (
              <div className={Classes.sideMenu}>
                <div className={Classes.sideMenuBox}>
                  {show.skills && (
                    <SectionSideMenu
                      onHide={() => setShow({ ...show, skills: false })}
                      onDelete={SKILL}
                      bg="#006772"
                      iconColor={"#fff"}
                    />
                  )}
                </div>
                <div>
                  <MainHeading
                    line1bBg={color ? color : "#fff"}
                    line2Bg={"#273746"}
                    title="EXPERTISE"
                    weight={600}
                    txtColor={color ? color : "#fff"}
                    onCl={() => setShow({ ...show, skills: true })}
                  />
                  <Skill
                    skillStyle={Classes.date}
                    margin="5px 0px"
                    maxWidth={"240px"}
                  />
                </div>
              </div>
            )}
          </Box>
          {/* ============== Right Border Section ============== */}
          <Box
            minW={"58px"}
            maxW="58px"
            bg={"white"}
            ml={"10px"}
            borderTopLeftRadius="50px"
            borderBottomRightRadius={5}
          ></Box>
        </Box>
      </Box>
    </Flex>
  );
};
export default MarketingManager1;
