import React from "react";
import { Box, Flex, HStack } from "@chakra-ui/react";
import { MdCastForEducation } from "react-icons/md";
import { BsFillLayersFill } from "react-icons/bs";
import { GiSkills, GiOrganigram } from "react-icons/gi";
import { IoLanguageOutline } from "react-icons/io5";
import { GoProject } from "react-icons/go";
import { TbCertificate } from "react-icons/tb";
import { FaHorseHead } from "react-icons/fa";
import Classes from "../../styles/templates/FunctionalFashionTemp.module.css";
import Name from "../../src/components/commonSection/Name";
import Profession from "../../src/components/commonSection/Profession";
import About from "../../src/components/commonSection/About";
import Contact from "../../src/components/commonSection/Contact";
import Heading from "../../src/components/commonSection/Heading";
import Education from "../../src/components/commonSection/Education";
import WorkExperience from "../../src/components/commonSection/WorkExperience";
import RowSkill from "../../src/components/commonSection/RowSkill";
import Project from "../../src/components/commonSection/Project";
import Organization from "../../src/components/commonSection/Organization";
import Certificate from "../../src/components/commonSection/Certificate";
import Language from "../../src/components/commonSection/Language";
import Interest from "../../src/components/commonSection/Interest";
import { useSelector } from "react-redux";
import useShow from "../../src/components/tempSectionSide/useShow";
import SectionSideMenu from "../../src/components/tempSectionSide/SectionSideMenu";
import {
  CERTIFICATE,
  EDUCATION,
  INTEREST,
  LANGUAGES,
  ORGANIZATION,
  PROJECT,
  SKILL,
  WORK,
} from "../../src/components/tempSectionSide/SectionSideConstant";
import ImageSelector from "../../src/components/imageSelector";
import PointsDescription from "../components/commonSection/PointsDescription";

const FunctionalFashionTemp = () => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const { backgroundColor, color, thirdColor } = useSelector(
    (store) => store.themeReducer.theme
  );
  const themeSecondaryColor = "#59BCAE";
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
        bg={backgroundColor ? backgroundColor : "white"}
        borderRadius={6}
        borderWidth="1px"
        borderColor={"#00000023"}
        pt={5}
      >
        <HStack alignItems="stretch">
          <Box minW={240} maxW={240} borderLeftRadius={6}>
            {/* Image Section  */}
            <Box display={"flex"} justifyContent="center">
              <ImageSelector
                minWidth={180}
                maxWidth={180}
                minHeight={180}
                maxHeight={180}
              />
            </Box>
            <Box pl={5}>
              <Contact
                phone={true}
                email={true}
                linkedinURL={true}
                website={true}
                circleIcon={true}
                circleSize="25px"
                iconColor={color ? color : themeSecondaryColor}
                margin={"10px 0px 0px 0px"}
                parentStyle={Classes.contactFont}
                maxWidth={"180px"}
                textColor={thirdColor ? thirdColor : "black"}
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
                      color={color ? color : themeSecondaryColor}
                      maxW={"full"}
                      minW={"full"}
                      margin={"10px 0px"}
                      onSideSectionShow={() =>
                        setShow({ ...show, skills: true })
                      }
                      headingContainerStyle={{
                        borderBottomWidth: 3,
                        borderBottomColor: color ? color : themeSecondaryColor,
                      }}
                    />
                    {/* Skill Row Components */}
                    <RowSkill
                      skillStyle={Classes.baseText}
                      bg={color ? color : themeSecondaryColor}
                      parentContainerStyle={Classes?.SkillsparentContainerStyle}
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
                      color={color ? color : themeSecondaryColor}
                      onSideSectionShow={() =>
                        setShow({ ...show, languages: true })
                      }
                      maxW={"full"}
                      minW={"full"}
                      headingContainerStyle={{
                        borderBottomWidth: 3,
                        borderBottomColor: color ? color : themeSecondaryColor,
                      }}
                    />
                    {/* Language Component */}
                    <Language maxWidth={"180px"} textColor={thirdColor ? thirdColor : 'black'} />
                  </div>
                </div>
              )}
            </Box>
          </Box>
          <Box minW={585} maxW={585} h="full">
            <Box bg={color ? color : themeSecondaryColor} p={3}>
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
                fontColor={"white"}
              />
              {/* About Section */}
              <About
                minW="full"
                aboutStyle={Classes.description}
                maxWidth={"full"}
                fontColor={"white"}
              />
            </Box>

            <Box py={2} p={3}>
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
                      color={color ? color : themeSecondaryColor}
                      fontFamily={"Ubuntu"}
                      minW={"full"}
                      maxW="full"
                      headingContainerStyle={{
                        borderBottomWidth: 3,
                        borderBottomColor: color ? color : themeSecondaryColor,
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
                      bgColor={backgroundColor ? backgroundColor : "white"}
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
                      textColor={color ? color : themeSecondaryColor}
                      positionContainerStyle={Classes.positionContainerStyle}
                      containerForSummaryAndAchievement={
                        Classes.containerForSummaryAndAchievement
                      }
                      companFontColor={thirdColor ? thirdColor : "black"}
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
                          textColor={thirdColor}
                          BulletContainerStyle={Classes.BulletContainerStyle}
                          maxWidth={"525px"}
                          BulletIcon={() => (
                            <Box
                              w={"100%"}
                              borderColor={color ? color : themeSecondaryColor}
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
                    color={color ? color : themeSecondaryColor}
                    margin={"0px 0px 10px 0px"}
                    onSideSectionShow={() =>
                      setShow({ ...show, education: true })
                    }
                    minW={"full"}
                    maxW="full"
                    headingContainerStyle={{
                      borderBottomWidth: 3,
                      borderBottomColor: color ? color : themeSecondaryColor,
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
                    textColor={color ? color : themeSecondaryColor}
                    companFontColor={thirdColor ? thirdColor : "black"}
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
                    color={color ? color : themeSecondaryColor}
                    margin={"15px 0px"}
                    onSideSectionShow={() =>
                      setShow({ ...show, organization: true })
                    }
                    minW={"full"}
                    maxW="full"
                    headingContainerStyle={{
                      borderBottomWidth: 3,
                      borderBottomColor: color ? color : themeSecondaryColor,
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
                    roleColor={color ? color : themeSecondaryColor}
                    dateColor={color ? color : themeSecondaryColor}
                    nameColor={color ? color : themeSecondaryColor}
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
