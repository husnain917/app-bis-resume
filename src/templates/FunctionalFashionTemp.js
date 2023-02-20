import React from "react";
import { Box, Flex, HStack } from "@chakra-ui/react";
import Classes from "../../styles/templates/FunctionalFashionTemp.module.css";
import Name from "../../src/components/commonSection/Name";
import Profession from "../../src/components/commonSection/Profession";
import About from "../../src/components/commonSection/About";
import Contact from "../../src/components/commonSection/Contact";
import Heading from "../../src/components/commonSection/Heading";
import Education from "../../src/components/commonSection/Education";
import WorkExperience from "../../src/components/commonSection/WorkExperience";
import RowSkill from "../../src/components/commonSection/RowSkill";
import Organization from "../../src/components/commonSection/Organization";
import Language from "../../src/components/commonSection/Language";
import { useSelector } from "react-redux";
import useShow from "../../src/components/tempSectionSide/useShow";
import SectionSideMenu from "../../src/components/tempSectionSide/SectionSideMenu";
import {
  EDUCATION,
  LANGUAGES,
  ORGANIZATION,
  SKILL,
  WORK,
} from "../../src/components/tempSectionSide/SectionSideConstant";
import ImageSelector from "../../src/components/imageSelector";
import PointsDescription from "../components/commonSection/PointsDescription";

const FunctionalFashionTemp = () => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const { backgroundColor, color, thirdColor, fourthColor } = useSelector(
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
        minW={837}
        maxW={837}
        minHeight={1183}
        bg={"#fff"}
        borderRadius={6}
        borderWidth="1px"
        borderColor={"#00000023"}
        pt={5}
      >
        <HStack alignItems="stretch" transition="0.8s background">
          <Box minW={240} maxW={240} borderLeftRadius={6} transition="0.8s background">
            {/* Image Section  */}
            <Box display={"flex"} justifyContent="center" transition="0.8s background">
              <ImageSelector
                minWidth={180}
                maxWidth={180}
                minHeight={180}
                maxHeight={180}
                borderColor={backgroundColor ? backgroundColor : "#fff"}
              />
            </Box>
            <Box pl={5} transition="0.8s background">
              <Contact
                phone={true}
                email={true}
                linkedinURL={true}
                website={true}
                circleIcon={true}
                circleSize="25px"
                iconColor={backgroundColor ? backgroundColor : '#59BCAE'}
                margin={"10px 0px 0px 0px"}
                parentStyle={Classes.contactFont}
                maxWidth={"180px"}
                textColor={"#000"}
              />
              {/* skill Section  */}
              {resumeData?.skills?.visible && (
                <div>
                  <div className={Classes.width}>
                    {show.skills && (
                      <SectionSideMenu
                        bg="#006772"
                        iconColor={"#fff"}
                        onHide={() => setShow({ ...show, skills: false })}
                        onDelete={SKILL}
                      />
                    )}
                  </div>
                  <div>
                    {/* skill Heading */}
                    <Heading
                      title="SKILLS"
                      fontSize="23px"
                      fontWeight={"bold"}
                      color={backgroundColor ? backgroundColor : '#59BCAE'}
                      maxW={"full"}
                      minW={"full"}
                      margin={"10px 0px"}
                      onSideSectionShow={() =>
                        setShow({ ...show, skills: true })
                      }
                      headingContainerStyle={{
                        borderBottomWidth: 3,
                        borderBottomColor: color ? color : '#59BCAE',
                      }}
                    />
                    {/* Skill Row Components */}
                    <RowSkill
                      skillStyle={Classes.baseText}
                      bg={fourthColor ? fourthColor : '#59BCAE'}
                      parentContainerStyle={Classes?.SkillsparentContainerStyle}
                      textColor={color ? color : "#fff"}
                    />
                  </div>
                </div>
              )}
              {/* Language Section */}
              {resumeData?.languages?.visible && (
                <div>
                  <div className={Classes.width}>
                    {/* Section Side Menu */}
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
                    {/* languages Heading */}
                    <Heading
                      title="LANGUAGES"
                      fontSize="23px"
                      fontWeight={"bold"}
                      color={backgroundColor ? backgroundColor : '#59BCAE'}
                      onSideSectionShow={() =>
                        setShow({ ...show, languages: true })
                      }
                      maxW={"full"}
                      minW={"full"}
                      headingContainerStyle={{
                        borderBottomWidth: 3,
                        borderBottomColor: backgroundColor ? backgroundColor : '#59BCAE',
                      }}
                    />
                    {/* Language Component */}
                    <Language
                      maxWidth={"180px"}
                      textColor={'#000'} />
                  </div>
                </div>
              )}
            </Box>
          </Box>
          <Box minW={585} maxW={585} h="full" transition="0.8s background">
            <Box bg={backgroundColor ? backgroundColor : '#59BCAE'} p={3} transition="0.8s background">
              <Name
                FName={true}
                SName={true}
                maxChr={13}
                direction="row"
                FNameStyle={Classes.hybridName}
                SNameStyle={Classes.hybridName}
                fontColor={"white"}
                maxWidth={'250px'}
              />
              {/* Profession Section  */}
              <Profession
                professionStyle={Classes.baseTempProfession}
                maxWidth={"full"}
                fontColor={"#fff"}
              />
              {/* About Section */}
              <About
                minW="full"
                aboutStyle={Classes.description}
                maxWidth={"full"}
                fontColor={thirdColor ? thirdColor : "#fff"}
              />
            </Box>

            <Box py={2} p={3} transition="0.8s background">
              {resumeData?.work?.visible && (
                <div>
                  <div className={Classes.sideMenuBox}>
                    {/* Section Side Menu */}
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
                    {/* Work Experience Heading  */}
                    <Heading
                      title="WORK EXPERIENCE"
                      fontSize="28px"
                      fontWeight={"bold"}
                      color={backgroundColor ? backgroundColor : '#59BCAE'}
                      fontFamily={"Ubuntu"}
                      minW={"full"}
                      maxW="full"
                      headingContainerStyle={{
                        borderBottomWidth: 3,
                        borderBottomColor: backgroundColor ? backgroundColor : '#59BCAE',
                      }}
                      margin={"10px 0px"}
                      onSideSectionShow={() => setShow({ ...show, work: true })}
                    />
                    {/* Work Experience Components */}
                    <WorkExperience
                      maxChr={23}

                      date={true}
                      position={true}
                      company={true}
                      location={true}
                      achieement={true}
                      summary_placeholder="Company Description (optional,fill when the company is not well known"
                      location_placeholder="Country,City"
                      dateStyle={Classes.date}
                      positionStyle={Classes.programText}
                      companyStyle={Classes.institute}
                      locationStyle={Classes.date}
                      summaryStyle={Classes.summaryStyle}
                      datewidthmax={"120px"}
                      parentContainerStyle={Classes.WorkparentContainerStyle}
                      locationWithDate={true}
                      insideContainerStyle={Classes.insideContainerStyle}
                      textColor={backgroundColor ? backgroundColor : '#59BCAE'}
                      positionContainerStyle={Classes.positionContainerStyle}
                      containerForSummaryAndAchievement={
                        Classes.containerForSummaryAndAchievement
                      }
                      companFontColor={"#000"}
                      companFontWeight={"normal"}
                      minW={"full"}
                      maxW="full"
                      childContainerStyle={Classes.WorkchildContainerStyle}
                      summary={false}
                      ponintsDescription={true}
                      PointsComponent={({
                        items,
                        addPoint,
                        deletePoint,
                        index,
                      }) => (
                        <PointsDescription
                          PointsDescriptionStyle={Classes.pointsText}
                          childContainerStyle={Classes.pointsContainer}
                          PointsDescriptionPlaceholder={"Description"}
                          parentContainerStyle={
                            Classes.pointDescriptionparentContainerStyle
                          }
                          data={items}
                          addPoint={addPoint}
                          deletePoint={deletePoint}
                          parentIndex={index}
                          textColor={'#000'}
                          BulletContainerStyle={Classes.BulletContainerStyle}
                          maxWidth={"525px"}
                          BulletIcon={() => (
                            <Box
                              w={"100%"}
                              borderColor={backgroundColor ? backgroundColor : '#59BCAE'}
                              borderWidth={1}
                              h={"10px"}
                            />
                          )}
                        />
                      )}
                    />
                  </div>
                </div>
              )}
            </Box>
            {/* Education Section  */}
            {resumeData?.education?.visible && (
              <div className={Classes.sideMenu}>
                <div
                  className={Classes.sideMenuBox}
                  style={{ marginTop: "0px" }}
                >
                  {/* Section Side Menu */}
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
                  {/* Heading For Education Section  */}
                  <Heading
                    title="EDUCATION"
                    fontSize="23px"
                    fontWeight={"bold"}
                    color={backgroundColor ? backgroundColor : '#59BCAE'}
                    margin={"0px 0px 10px 0px"}
                    onSideSectionShow={() =>
                      setShow({ ...show, education: true })
                    }
                    minW={"full"}
                    maxW="full"
                    headingContainerStyle={{
                      borderBottomWidth: 3,
                      borderBottomColor: backgroundColor ? backgroundColor : '#59BCAE',
                    }}
                  />
                  {/* Education Components */}
                  <Education
                    institution={true}
                    degree={true}
                    degree_placeholder="Study Program"
                    date={true}
                    institutionStyle={Classes.institute}
                    degreeStyle={Classes.programText}
                    locationStyle={Classes.date}
                    datewidthmax={"180px"}
                    maxChr={20}
                    maxWidth={"420px"}
                    textColor={backgroundColor ? backgroundColor : '#59BCAE'}
                    companFontColor={"#000"}
                  />
                </div>
              </div>
            )}

            {/* Organization Section */}
            {resumeData?.organization?.visible && (
              <div className={Classes.sideMenu}>
                <div className={Classes.sideMenuBox}>
                  {/* Section Side Menu */}
                  {show.organization && (
                    <SectionSideMenu
                      bg="#006772"
                      iconColor={"#fff"}
                      onHide={() => setShow({ ...show, organization: false })}
                      onDelete={ORGANIZATION}
                    />
                  )}
                </div>
                <div>
                  {/* Organization Heading */}
                  <Heading
                    title="ORGANIZATION"
                    fontSize="23px"
                    fontWeight={"bold"}
                    color={backgroundColor ? backgroundColor : '#59BCAE'}
                    margin={"15px 0px"}
                    onSideSectionShow={() =>
                      setShow({ ...show, organization: true })
                    }
                    minW={"full"}
                    maxW="full"
                    headingContainerStyle={{
                      borderBottomWidth: 3,
                      borderBottomColor: backgroundColor ? backgroundColor : '#59BCAE',
                    }}
                  />
                  {/* Organization Component */}
                  <Organization
                    organization={true}
                    date={true}
                    role={true}
                    organizationStyle={Classes.projectTitleText}
                    dateStyle={Classes.description}
                    roleStyle={Classes.description}
                    rolePlaceholder="Role"
                    maxwidth={"420px"}
                    datewidthmax={"200px"}
                    roleColor={'#000'}
                    dateColor={backgroundColor ? backgroundColor : '#59BCAE'}
                    nameColor={backgroundColor ? backgroundColor : '#59BCAE'}
                  />
                </div>
              </div>
            )}
          </Box>
        </HStack>
      </Box>
    </Flex>
  );
};

export default FunctionalFashionTemp;
