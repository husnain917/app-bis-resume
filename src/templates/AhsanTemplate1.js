import { Box, Flex, HStack } from "@chakra-ui/react";
import { MdCastForEducation } from "react-icons/md";
import { BsFillLayersFill } from "react-icons/bs";
import { GiSkills, GiOrganigram } from "react-icons/gi";
import { IoLanguageOutline } from "react-icons/io5";
import { GoProject } from "react-icons/go";
import { TbCertificate } from "react-icons/tb";
import { FaHorseHead } from "react-icons/fa";
import ImageSelector from "../components/imageSelector";
import Name from "../components/commonSection/Name";
import Profession from "../components/commonSection/Profession";
import Classes from "../../styles/templates/ahsanTemplate1.module.css";
import Contact from "../components/commonSection/Contact";
import About from "../components/commonSection/About";
import SectionSideMenu from "../components/tempSectionSide/SectionSideMenu";
import Heading from "../components/commonSection/Heading";
import Education from "../components/commonSection/Education";
import WorkExperience from "../components/commonSection/WorkExperience";
import RowSkill from "../components/commonSection/RowSkill";
import PointsDescription from "../components/commonSection/PointsDescription";
import Project from "../components/commonSection/Project";
import Organization from "../components/commonSection/Organization";
import Certificate from "../components/commonSection/Certificate";
import Language from "../components/commonSection/Language";
import Interest from "../components/commonSection/Interest";
import useShow from "../components/tempSectionSide/useShow";
import { useSelector } from "react-redux";
import {
  CERTIFICATE,
  EDUCATION,
  INTEREST,
  LANGUAGES,
  ORGANIZATION,
  PROJECT,
  SKILL,
  WORK,
} from "../components/tempSectionSide/SectionSideConstant";

const AhsanTemplate1 = () => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const { backgroundColor, color, thirdColor } = useSelector(
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
    >
      <Box
        minW={830}
        maxW={830}
        // pt={6}
        pb={2}
        bg={backgroundColor ? backgroundColor : "white"}
        borderRadius={6}
        borderWidth="1px"
        borderColor={"#00000023"}
      >
        {/* =============== Profile Section =============== */}
        <Box px={7}>
          <HStack alignItems={"flex-start"}>
            <ImageSelector
              borderRadius={"10px"}
              borderColor={"1px solid gray"}
              maxHeight={"160px"}
              minHeight={"160px"}
              maxWidth={"150px"}
              minWidth={"60px"}
              marginTop={"15px"}
            />
            <Box pt={"15px"}>
              <Name
                FName={true}
                SName={true}
                // fmargin={"30px 0px"}
                direction="row"
                FNameStyle={Classes.Name}
                SNameStyle={Classes.Name}
                minWidth={"180px"}
                maxWidth={"300px"}
                maxChr={38}
                fontColor={color ? color : ""}
              />
              {/* Profession Section  */}
              <Profession
                professionStyle={Classes.ProfessionHybrid}
                professionPlaceholder={"Profession"}
                maxWidth={"500px"}
                fontColor={thirdColor ? thirdColor : ""}
              />
              <HStack minH={"80px"} alignItems="flex-start">
                <About
                  maxW={"100%"}
                  minW={"100%"}
                  aboutStyle={Classes.profile}
                  maxWidth={"600px"}
                  fontColor={thirdColor ? thirdColor : ""}
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
        >
          {/* Contact Section  */}
          <Contact
            // parentStyle={Classes.ContactparentStyle}
            phone={true}
            email={true}
            location={true}
            circleIcon={true}
            website={true}
            linkedinURL={true}
            iconColor="#11ad64"
            iconSize={"20px"}
            maxWidth={"120px"}
            cAlignItems={"flex-start"}
            // minWidth={"auto"}
            // caxWidth={"full"}
            style={Classes.contactprofile}
            parentDirection={"row"}
            textColor={thirdColor ? thirdColor : ""}
          />
        </Box>
        <Box>
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
                  color={color ? color : "#11ad64"}
                  fontFamily={"Ubuntu"}
                  minW={"full"}
                  maxW="full"
                  margin={"10px 0px"}
                  onSideSectionShow={() => setShow({ ...show, skills: true })}
                />
                {/* Skill Row Components */}
                <RowSkill
                  skillStyle={Classes.skillText}
                  childContainerStyle={Classes.skillContainer}
                  skillPlaceholder={"Bussiness Process"}
                />
              </div>
            </div>
          )}
        </Box>
        <Box px={7} py={2}>
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
                  color={color ? color : "#11ad64"}
                  fontFamily={"Ubuntu"}
                  minW={"full"}
                  maxW="full"
                  margin={"10px 0px"}
                  onSideSectionShow={() => setShow({ ...show, work: true })}
                  paddingHorizantal={7}
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
                  bgColor={backgroundColor ? backgroundColor : "white"}
                  maxWidth={"600px"}
                  textColor={thirdColor ? thirdColor : ""}
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
                      textColor={thirdColor ? thirdColor : ""}
                      addPoint={addPoint}
                      deletePoint={deletePoint}
                      parentIndex={index}
                      maxWidth={"600px"}
                      BulletContainerStyle={Classes.BulletContainerStyle}
                      BulletIcon={() => (
                        <Box
                          w={"100%"}
                          bg={thirdColor ? thirdColor : "#11ad64"}
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
        <Box px={7} py={2}>
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
                  color={color ? color : "#11ad64"}
                  fontFamily={"Ubuntu"}
                  minW={"full"}
                  maxW="full"
                  margin={"10px 0px"}
                  onSideSectionShow={() =>
                    setShow({ ...show, education: true })
                  }
                  paddingHorizantal={7}
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
                  bgColor={backgroundColor ? backgroundColor : "white"}
                  textColor={thirdColor ? thirdColor : ""}
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
        <Box px={7} py={2}>
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
                  color={color ? color : "#11ad64"}
                  fontFamily={"Ubuntu"}
                  minW={"full"}
                  maxW="full"
                  margin={"10px 0px"}
                  onSideSectionShow={() =>
                    setShow({ ...show, organization: true })
                  }
                  paddingHorizantal={7}
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
                  bgColor={backgroundColor ? backgroundColor : ""}
                  textColor={thirdColor ? thirdColor : ""}
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
