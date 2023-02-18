import { Box, Flex, HStack } from "@chakra-ui/react";
import ImageSelector from "../components/imageSelector";
import Name from "../components/commonSection/Name";
import Profession from "../components/commonSection/Profession";
import Classes from "../../styles/templates/ahsantemplate1.module.css";
import Contact from "../components/commonSection/Contact";
import About from "../components/commonSection/About";
import SectionSideMenu from "../components/tempSectionSide/SectionSideMenu";
import Heading from "../components/commonSection/Heading";
import Education from "../components/commonSection/Education";
import WorkExperience from "../components/commonSection/WorkExperience";
import RowSkill from "../components/commonSection/RowSkill";
import PointsDescription from "../components/commonSection/PointsDescription";
import Organization from "../components/commonSection/Organization";
import useShow from "../components/tempSectionSide/useShow";
import { useSelector } from "react-redux";
import {
  EDUCATION,
  ORGANIZATION,
  SKILL,
  WORK,
} from "../components/tempSectionSide/SectionSideConstant";

const AhsanTemplate1 = () => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const { backgroundColor, color, thirdColor, fourthColor } = useSelector(
    (store) => store.themeReducer.theme
  );
  // custom Hook For Template
  const [show, setShow] = useShow();

  return (
    //  ~~~~~~~~~~~~~~ Executive Resume Template ~~~~~~~~~~~~~~  //
    <Flex
      justifyContent={{ base: "none", lg: "center" }}
      flexDir={"column"}
      alignItems={{ sm: "none", lg: "center" }}
      bg={"#fff"}
      mb={"0px"}
    >
      <Box
        minW="837px"
        minHeight={1150}
        maxW="850px"
        mb={"0px"}
        pb={2}
        bg={"#fff"}
        borderRadius={6}
        borderWidth="1px"
        borderColor={"#00000023"}
      >
        {/* =============== Profile Section =============== */}
        <Box px={7} transition="0.8s background">
          <HStack alignItems={"flex-start"} transition="0.8s background">
            <ImageSelector
              borderRadius={"10px"}
              borderColor={backgroundColor ? backgroundColor : "#fff"}
              maxHeight={"160px"}
              minHeight={"160px"}
              maxWidth={"150px"}
              minWidth={"60px"}
              marginTop={"15px"}
              marginBottom={"15px"}
            />
            <Box
              pt={"15px"}
              transition="0.8s background"
            >
              <Name
                FName={true}
                SName={true}
                direction="row"
                FNameStyle={Classes.Name}
                SNameStyle={Classes.Name}
                minWidth={"180px"}
                maxWidth={"315px"}
                maxChr={38}
                fontColor={"#000"}
              />
              {/* Profession Section  */}
              <Profession
                professionStyle={Classes.ProfessionHybrid}
                professionPlaceholder={"Profession"}
                maxWidth={"500px"}
                fontColor={"#666766"}
              />
              <HStack
                minH={"60px"}
                alignItems="flex-start"
                transition="0.8s background"
              >
                <About
                  aboutStyle={Classes.profile}
                  maxWidth={"700px"}
                  maxW={"600px"}
                  fontColor={thirdColor ? thirdColor : "#000"}
                  minHeight={"20px"}
                />
              </HStack>
            </Box>
          </HStack>
        </Box>
        <Box
          w={"full"}
          py={2}
          px={7}
          borderTopColor={"black"}
          borderTopWidth={2}
          borderBottomColor={"black"}
          borderBottomWidth={2}
          transition="0.8s background"
        >
          {/* Contact Section  */}
          <Contact
            parentStyle={Classes.ContactparentStyle}
            phone={true}
            email={true}
            location={true}
            circleIcon={true}
            website={true}
            linkedinURL={true}
            iconColor={backgroundColor ? backgroundColor : "#11ad64"}
            iconSize={"20px"}
            maxWidth={"220px"}
            cAlignItems={"flex-start"}
            cMaxWidth={"800px"}
            style={Classes.contactprofile}
            parentDirection={"grid"}
            textColor={"#000"}
          />
        </Box>
        <Box
          transition="0.8s background"
        >
          {resumeData?.skills?.visible && (
            <div className={Classes.sideMenu}>
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
                  title="Skills"
                  fontSize="28px"
                  fontWeight={"bold"}
                  color={backgroundColor ? backgroundColor : "#11ad64"}
                  fontFamily={"Ubuntu"}
                  minW={"full"}
                  maxW="full"
                  margin={"10px 0px"}
                  paddingHorizantal={1}
                  onSideSectionShow={() => setShow({ ...show, skills: true })}
                />
                {/* Skill Row Components */}
                <RowSkill
                  skillStyle={Classes.skillText}
                  bg={fourthColor ? fourthColor : "#11ad64"}
                  textColor={color ? color : "#fff"}
                  childContainerStyle={Classes.skillContainer}
                  skillPlaceholder={"Bussiness Process"}
                />
              </div>
            </div>
          )}
        </Box>
        <Box
          px={'30px'}
          py={2}
          transition="0.8s background"
        >
          {resumeData?.work?.visible && (
            <div className={Classes.sideMenu}>
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
                  color={backgroundColor ? backgroundColor : "#11ad64"}
                  fontFamily={"Ubuntu"}
                  minW={"full"}
                  maxW="full"
                  margin={"10px 0px"}
                  onSideSectionShow={() => setShow({ ...show, work: true })}
                />
                {/* Work Experience Components */}
                <WorkExperience
                  date={true}
                  position={true}
                  company={true}
                  location={true}
                  maxChr={20}
                  achieement={true}
                  summary_placeholder="Company Description (optional,fill when the company is not well known"
                  location_placeholder="Country,City"
                  dateStyle={Classes.date}
                  positionStyle={Classes.programText}
                  companyStyle={Classes.institute}
                  locationStyle={Classes.date}
                  summaryStyle={Classes.summaryStyle}
                  datewidthmax={"180px"}
                  maxWidth={"600px"}
                  textColor={"#000"}
                  max
                  parentContainerStyle={Classes.WorkparentContainerStyle}
                  locationWithDate={true}
                  insideContainerStyle={Classes.insideContainerStyle}
                  positionContainerStyle={Classes.positionContainerStyle}
                  containerForSummaryAndAchievement={
                    Classes.containerForSummaryAndAchievement
                  }
                  childContainerStyle={Classes.WorkchildContainerStyle}
                  summary={false}
                  locationWidth={"200px"}
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
                      data={items}
                      textColor={"#000"}
                      addPoint={addPoint}
                      deletePoint={deletePoint}
                      parentIndex={index}
                      maxWidth={"700px"}
                      BulletContainerStyle={Classes.BulletContainerStyle}
                      BulletIcon={() => (
                        <Box
                          w={"100%"}
                          bg={backgroundColor ? backgroundColor : "#11ad64"}
                          h={"5px"}
                        />
                      )}
                    />
                  )}
                />
              </div>
            </div>
          )}
        </Box>
        <Box
          px={'30px'}
          py={2}
          transition="0.8s background"
        >
          {resumeData?.education?.visible && (
            <div className={Classes.sideMenu}>
              <div className={Classes.sideMenuBox}>
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
                {/* Education Heading  */}
                <Heading
                  title="EDUCATION"
                  fontSize="28px"
                  fontWeight={"bold"}
                  color={backgroundColor ? backgroundColor : "#11ad64"}
                  fontFamily={"Ubuntu"}
                  minW={"full"}
                  maxW="full"
                  margin={"10px 0px"}
                  onSideSectionShow={() =>
                    setShow({ ...show, education: true })
                  }
                />
                {/* Education Components */}
                <Education
                  institution={true}
                  degree={true}
                  date={true}
                  position={true}
                  company={true}
                  location={true}
                  achieement={true}
                  maxWidth={"750px"}
                  maxChr={20}
                  dateStyle={Classes.date}
                  textColor={"#000"}
                  degreeStyle={Classes.programText}
                  institutionStyle={Classes.institute}
                  locationStyle={Classes.date}
                  summaryStyle={Classes.summaryStyle}
                  datewidthmax={"160px"}
                  parentContainerStyle={Classes.WorkparentContainerStyle}
                  locationWithDate={true}
                  insideContainerStyle={Classes.insideContainerStyle}
                  positionContainerStyle={Classes.positionContainerStyle}
                  containerForSummaryAndAchievement={
                    Classes.containerForSummaryAndAchievement
                  }
                  childContainerStyle={Classes.WorkchildContainerStyle}
                  summary={false}
                />
              </div>
            </div>
          )}
        </Box>
        <Box
          px={'30px'}
          py={2}
          transition="0.8s background"
        >
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
                {/* Organization Heading  */}
                <Heading
                  title="ORGANIZATION"
                  fontSize="28px"
                  fontWeight={"bold"}
                  color={backgroundColor ? backgroundColor : "#11ad64"}
                  fontFamily={"Ubuntu"}
                  minW={"full"}
                  maxW="full"
                  margin={"10px 0px"}
                  onSideSectionShow={() =>
                    setShow({ ...show, organization: true })
                  }
                />
                {/* Organization Components */}
                <Organization
                  organization={true}
                  role={true}
                  date={true}
                  dndDirection={"horizontal"}
                  dateStyle={Classes.date}
                  organizationStyle={Classes.programText}
                  roleStyle={Classes.programText}
                  locationStyle={Classes.date}
                  textColor={"#000"}
                  summaryStyle={Classes.summaryStyle}
                  datewidthmax={"120px"}
                  parentContainerStyle={Classes.WorkparentContainerStyle}
                  locationWithDate={true}
                  insideContainerStyle={Classes.insideContainerStyle}
                  positionContainerStyle={Classes.positionContainerStyle}
                  containerForSummaryAndAchievement={
                    Classes.containerForSummaryAndAchievement
                  }
                  childContainerStyle={Classes.OrganizationChildContainer}
                  summary={false}
                  maxWidth={'750px'}
                />
              </div>
            </div>
          )}
        </Box>
      </Box>
    </Flex>
  );
};

export default AhsanTemplate1;
